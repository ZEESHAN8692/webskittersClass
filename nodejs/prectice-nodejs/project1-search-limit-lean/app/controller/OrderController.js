import Order from "../models/orderModel.js";

class OrderController {
  async createOrder(req, res) {
    try {
      const orders = req.body;
      const result = await Order.insertMany(orders);

      res.status(201).json({
        status: true,
        message: "Orders created successfully",
        data: result,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: false,
        message: "Something went wrong",
      });
    }
  }

  async getOrder(req, res) {
    try {
        const data = await Order.aggregate([
            // {
            //     $match:{status:"pending"}
            // }

            // {
            //     $group:{
            //         _id:"$customer",
            //         totalSpent:{$sum:"$price"}
            //     }
            // },
            // {
            //     $sort:{totalSpent:1}
            // },

            // {
            //     $skip:8
            // }

            // {
            //     $project:{
            //         customer:1,
            //         product:1,
            //         totalPrice:{
            //             $multiply:["$price","$quantity"]
            //         }

            //     }
            // }

            
            
        ])
        res.status(200).json({status:true, message:"Data fetch sucess", data})
    } catch (error) {
        console.log(error.message)
      res.status(500).json({
        status: false,
        message: "Something went wrong" ,
      });
    }
  }
}

export default new OrderController();
