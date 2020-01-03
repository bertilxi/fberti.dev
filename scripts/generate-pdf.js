const puppeteer = require("puppeteer");
const path = require("path");
const { exec } = require("child_process");

const timeout = time => new Promise(resolve => setTimeout(resolve, time));

const root = path.resolve(process.cwd());

async function generatePdf() {
  const child = exec("npx serve out");
  await timeout(500);

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("http://localhost:5000/resume", {
    waitUntil: "networkidle2"
  });

  const pdfPath = path.resolve(root, "./out/resume.pdf");
  await page.pdf({
    path: pdfPath,
    format: "A4",
    printBackground: true,
    margin: {
      left: "0px",
      top: "0px",
      right: "0px",
      bottom: "0px"
    }
  });

  child.kill();
  await browser.close();
  process.exit(0);
}

generatePdf();
