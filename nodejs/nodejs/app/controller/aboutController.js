
class Controller{
    async about(req, res){
        res.send("<h1>About Page</h1>")
    }

}

module.exports = new Controller();