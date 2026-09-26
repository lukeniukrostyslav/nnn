import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext();
const page = await context.newPage();

const consoleErrors = [];
const pageErrors = [];
const failedRequests = [];
page.on("console", msg => {
  if (msg.type() === "error") consoleErrors.push(msg.text());
});
page.on("pageerror", error => pageErrors.push(error.message));
page.on("requestfailed", request => {
  failedRequests.push({ url: request.url(), failure: request.failure()?.errorText || "unknown" });
});

try {
  await page.goto("http://127.0.0.1:4173/", { waitUntil: "networkidle" });

  const bodyText = await page.locator("body").innerText();
  if (!bodyText.includes("Life Commander")) throw new Error("Life Commander shell is not visible");

  const main = page.locator("#main-content");
  if (!(await main.isVisible())) throw new Error("#main-content is not visible");

  const snapshot = await page.evaluate(() => {
    const raw = localStorage.getItem("life-commander:v2");
    const parsed = raw ? JSON.parse(raw) : null;
    const collections = ["tasks","goals","projects","notes","habits","transactions","journal","routines","events"];
    return {
      hasStore: Boolean(raw),
      collections: Object.fromEntries(collections.map(key => [
        key,
        Array.isArray(parsed?.[key]) ? parsed[key].length : 0
      ])),
      visibleDemoStrings: ["Portfolio website","Business launch","Ремонт квартиры","Brand identity","Позвонить Марко"]
        .filter(value => document.body.innerText.includes(value))
    };
  });

  const nonEmpty = Object.entries(snapshot.collections).filter(([, count]) => count !== 0);
  if (nonEmpty.length) throw new Error("Fresh store is not empty: " + JSON.stringify(nonEmpty));
  if (snapshot.visibleDemoStrings.length) {
    throw new Error("Demo strings are visible: " + snapshot.visibleDemoStrings.join(", "));
  }

  if (consoleErrors.length || pageErrors.length || failedRequests.length) {
    throw new Error(JSON.stringify({ consoleErrors, pageErrors, failedRequests }));
  }

  console.log(JSON.stringify({ ok: true, snapshot }));
} finally {
  await browser.close();
}
