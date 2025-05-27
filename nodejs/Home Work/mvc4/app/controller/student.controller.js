class StudentController {
  async studentPage(req, res) {
    res.send("<h1>Student Page </h1>");
  }
}

module.exports = new StudentController();
