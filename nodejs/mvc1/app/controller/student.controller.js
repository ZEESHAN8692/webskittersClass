class StudentController {
  async studentPage(req, res) {
    res.render("student", { title: "Student Page" });
  }
}

module.exports = new StudentController();
