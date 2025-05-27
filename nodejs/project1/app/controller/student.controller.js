class StudentController {
  async studentPage(req, res) {
    res.send("Service Page ");
  }
}

module.exports = new StudentController();
