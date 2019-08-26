module.exports = page => {
  page.clearInput = id =>
    page.evaluate(id => (document.querySelector(id).value = ""), id);

  return page;
};
