


class BlogController {
    async blogList(req, res) {
        try {
            res.send("Blog List for api")

        } catch (error) {
            console.log(error.message);

        }
    }
}


module.exports = new BlogController();