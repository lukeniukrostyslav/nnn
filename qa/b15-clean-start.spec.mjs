import { test, expect } from "@playwright/test";

test.use({
  baseURL: "http://127.0.0.1:4173",
});

test("B15.1: fresh browser starts with clean local data", async ({ page }) => {
  const consoleErrors = [];
  page.on("console", msg => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });
  page.on("pageerror", error => consoleErrors.push(error.message));

  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.locator("body")).toContainText("Life Commander");
  await expect(page.locator("#main-content")).toBeVisible();

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

  expect(Object.values(snapshot.collections).every(count => count === 0)).toBeTruthy();
  expect(snapshot.visibleDemoStrings).toEqual([]);
  expect(consoleErrors).toEqual([]);
});
