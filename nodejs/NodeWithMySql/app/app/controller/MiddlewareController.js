

class MiddlewareController {
    async index(req,res) {
        res.send("Middleware Index");
    }
}

module.exports = new MiddlewareController();