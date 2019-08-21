import { launch } from "puppeteer";
import { join } from "path";
import { writeFileSync, readFileSync } from "fs";
import globby from "globby";

export const generate = async () => {
  const browser = await launch({
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

  const styles = await globby([
    join(root, "dist/_nuxt/*.css"),
    join(root, "assets/styles/resume.css")
  ]);

  for (const style of styles) {
    console.log(style);
    const content = readFileSync(style, "utf8");
    await page.addStyleTag({ content });
  }

  const pdf = await page.pdf({
    format: "A4",
    margin: {
      top: "50px",
      right: "50px",
      bottom: "50px",
      left: "50px"
    }
  });

  await browser.close();
  const destination = join(root, "dist/resume.pdf");
  writeFileSync(destination, pdf, "binary");
  return pdf;
};

generate();
