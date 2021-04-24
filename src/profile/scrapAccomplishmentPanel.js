const scrapSection = require('../scrapSection');
const template = require('./profileScraperTemplate');

const scrapAccomplishmentPanel = async (page, section) => {
  const queryString = `.pv-accomplishments-block.${section} button`;

  const openingButton = await page.$(queryString);

  if (openingButton) {
    const isClosed = await page.$(`.pv-accomplishments-block.${section} .pv-accomplishments-block__summary-list-item`);

    if (isClosed) {
      await page.evaluate((q) => {
        document.querySelector(q).click();
      }, queryString);
    }

    return scrapSection(page, template[section]);
  }
};

module.exports = scrapAccomplishmentPanel;
