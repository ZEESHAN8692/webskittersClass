class TablesController {
  async tablesPage(req, res) {
    try {
      res.render("tables");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new TablesController();
