/**
 * Recapture the live NaviSavi sites into public/images/work/.
 *
 *   node tools/screenshots.mjs
 *
 * Drives the Chrome already installed on this Mac through puppeteer-core, so
 * there is no second browser to download. Cookie banners are declined (never
 * accepted) and promo overlays are dismissed, so the captures show the product
 * rather than whatever campaign is running that week.
 *
 * macOS only: the resize/compress step shells out to `sips`.
 */

import { execFileSync } from "node:child_process";
import { mkdirSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import puppeteer from "puppeteer-core";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "public/images/work");
const RAW = path.join(ROOT, ".screenshots-raw");

const TARGETS = [
  { name: "b2b-home", url: "https://navisavitravel.com/", w: 1440, h: 900 },
];

// Not captured here, because they are hand-trimmed:
//   app-home.png     a real React Native screenshot, background knocked out
//   b2b-ai-search.jpg  the AI Search tab, whitespace edited down
//   b2c-detail.jpg   a video place page, whitespace edited down
//   eco-overview.jpg   the ecosystem site, whitespace edited down

async function clearOverlays(page) {
  await page.evaluate(() => {
    const click = (el) => el && typeof el.click === "function" && el.click();

    // Cookie banners: always take the declining option.
    click(
      [...document.querySelectorAll("button, a")].find((b) =>
        /^(reject all|reject|decline|necessary only)/i.test((b.textContent || "").trim()),
      ),
    );

    document
      .querySelectorAll(
        '[aria-label*="close" i], [aria-label*="dismiss" i], button.close, [data-testid*="close" i]',
      )
      .forEach(click);
  });

  await new Promise((r) => setTimeout(r, 900));

  // Anything still pinned over the page and covering a large area gets hidden —
  // but the site's own sticky header is kept.
  await page.evaluate(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    for (const el of document.querySelectorAll("body *")) {
      const cs = getComputedStyle(el);
      if (cs.position !== "fixed" && cs.position !== "sticky") continue;
      if (cs.display === "none" || cs.visibility === "hidden") continue;

      const r = el.getBoundingClientRect();
      const isHeader = r.top <= 4 && r.height < vh * 0.16;
      if (isHeader) continue;

      // Cookie-consent widgets leave a floating badge behind after the banner
      // is dismissed; it has no place in a portfolio shot.
      const id = `${el.id} ${el.className}`.toLowerCase();
      if (/cookie|consent|cky/.test(id)) {
        el.style.setProperty("display", "none", "important");
        continue;
      }

      if (r.width > vw * 0.55 && r.height > vh * 0.18) {
        el.style.setProperty("display", "none", "important");
      }
      if (Number(cs.zIndex) > 1000 && r.width > vw * 0.4) {
        el.style.setProperty("display", "none", "important");
      }
    }

    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
  });

  await new Promise((r) => setTimeout(r, 400));
}

mkdirSync(RAW, { recursive: true });
mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--hide-scrollbars", "--disable-gpu", "--no-first-run"],
});

for (const t of TARGETS) {
  const page = await browser.newPage();

  try {
    await page.setViewport({
      width: t.w,
      height: t.h,
      deviceScaleFactor: 2,
      isMobile: !!t.mobile,
      hasTouch: !!t.mobile,
    });

    if (t.mobile) {
      await page.setUserAgent(
        "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
      );
    }

    await page.goto(t.url, { waitUntil: "networkidle2", timeout: 45000 });
    await new Promise((r) => setTimeout(r, 2500));
    await clearOverlays(page);

    if (t.click) {
      await page.evaluate((label) => {
        const el = [...document.querySelectorAll("button, a, [role='tab'], div")].find(
          (n) => n.textContent?.trim() === label && n.offsetParent !== null,
        );
        el?.click();
      }, t.click);
      await new Promise((r) => setTimeout(r, 1200));
    }

    // Nudge lazy-loaded media into view, then return to the top.
    await page.evaluate(async () => {
      window.scrollTo(0, window.innerHeight);
      await new Promise((r) => setTimeout(r, 900));
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 700));
    });

    const raw = path.join(RAW, `${t.name}.png`);
    await page.screenshot({ path: raw });

    const maxEdge = t.mobile ? "900" : "1800";
    const quality = t.mobile ? "78" : "72";
    execFileSync("sips", [
      "-Z", maxEdge,
      "-s", "format", "jpeg",
      "-s", "formatOptions", quality,
      raw,
      "--out", path.join(OUT, `${t.name}.jpg`),
    ]);

    console.log(`${t.name} -> public/images/work/${t.name}.jpg`);
  } catch (e) {
    console.log(`${t.name} FAILED: ${e.message}`);
  } finally {
    await page.close();
  }
}

await browser.close();
rmSync(RAW, { recursive: true, force: true });
