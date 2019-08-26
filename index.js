const puppeteer = require("puppeteer-core");

(async () => {
  const browser = await puppeteer.connect({
    browserURL: "http://localhost:9222"
  });
  const tia_normal = await browser.newPage();
  const tia = require("./helper")(tia_normal);

})();
