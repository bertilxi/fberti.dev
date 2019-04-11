import puppeteer from "puppeteer";
import { join } from "path";
import { writeFileSync, readFileSync } from "fs";

export const generate = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage"]
  });

  const page = await browser.newPage();
  const root = process.cwd();
  const source = join(root, "dist/resume/index.html");

  await page.goto(`file://${source}`, {
    waitUntil: "networkidle0"
  });
  const html = await page.$eval("#resume", e => e.innerHTML);
  await page.setContent(html, {
    waitUntil: "networkidle0"
  });

  const styles = join(root, "assets/styles/resume.css");
  const content = readFileSync(styles, "utf8");
  await page.addStyleTag({ content });
  const pdf = await page.pdf({ format: "A4" });

  await browser.close();
  const destination = join(root, "dist/resume.pdf");
  writeFileSync(destination, pdf, "binary");
  return pdf;
};

generate();
