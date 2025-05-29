class HomeController {
  async homePage(req, res) {
    const respose = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await respose.json();
    console.log(data);
    res.render("home", { title: "Home Page", apiData: data });
  }
}

module.exports = new HomeController();
