import SearchAndLimitModel from "../models/searchAndLimit.model.js";

class SearchAndLimitController {
  async CraeteSearchAndLimit(req, res) {
    try {
      const { name, email, phone, category } = req.body;

      const data = new SearchAndLimitModel({ name, email, phone, category });
      data.save();
      res
        .status(201)
        .json({ status: true, message: "Data Craete Successfully ", data });
    } catch (error) {
      res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }

  async getFullData(req, res) {
    try {
      const data = SearchAndLimitModel.find({});
      res
        .status(200)
        .json({ status: true, message: "Full Data Fetch Success", data });
    } catch (error) {
      res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }

  //   async getFullDataWithLimit(req, res) {
  //     try {
  //       const { limit } = req.query;
  //       const parsedLimit = parseInt(limit);

  //       if (isNaN(parsedLimit)) {
  //         return res
  //           .status(400)
  //           .json({ status: false, message: "Invalid limit" });
  //       }

  //       const data = await SearchAndLimitModel.find({}).limit(parsedLimit);

  //       res.status(200).json({
  //         status: true,
  //         message: "Full Data Fetch Success",
  //         data,
  //       });
  //     } catch (error) {
  //       console.error(error);
  //       res.status(500).json({ status: false, message: "Something went wrong" });
  //     }
  //   }

  async getUsers(req, res) {
    try {
      let { page = 1, search = "", limit = 10, category } = req.query;

      page = parseInt(page);
      limit = parseInt(limit); 

      if (isNaN(page) || page < 1) page = 1;
      if (isNaN(limit) || limit < 1) limit = 10;

      let query = {};

      if (search) {
        query.$or = [
          { name: { $regex: search, $options: "i" } },
          { email: { $regex: search, $options: "i" } },
        ];
      }

      if (category) {
        query.category = category;
      }

      const skip = (page - 1) * limit;

      const data = await SearchAndLimitModel.find(query)
        .skip(skip)
        .limit(limit).lean() ;

      const total = await SearchAndLimitModel.countDocuments(query);

      res.status(200).json({
        status: true,
        page,
        totalPages: Math.ceil(total / limit),
        totalRecords: total,
        data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }
}

export default new SearchAndLimitController();
