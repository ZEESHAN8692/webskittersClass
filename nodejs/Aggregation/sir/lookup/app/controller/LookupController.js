const Category = require('../model/category')
const SubCategory = require('../model/subcategory');


class LookupController {
    async createCategory(req, res) {
        try {
            const { categoryName } = req.body
            const category = await Category.create({ categoryName })
            res.status(201).json({
                success: true,
                category
            })


        } catch (err) {
            console.log(err)

        }
    }

    async getallCategory(req, res) {
        try {
            const data = await Category.find()
            return res.status(200).json({
                success: true,
                data
            })
        } catch (err) {

            console.log(err)
        }

    }



    //subcategory

    async createSubCategory(req, res) {
        try {
            const { subCategoryName, categoryId } = req.body
            const subCategory = await new SubCategory({ subCategoryName, categoryId }).save()
            return res.status(201).json({
                success: true,
                subCategory
            })

        } catch (err) {
            console.log(err);

        }
    }



    async getSubCategory(req, res) {
        try {
            const data = await SubCategory.aggregate([
                {
                    $lookup: {
                        from: "categories",
                        localField: "categoryId",
                        foreignField: "_id",
                        as:"category_details"
                    }
                },
                {
                    $project: {
                        _id: 1,
                        subCategoryName: 1,
                        categoryId: 1,
                        category_details: 1
                    }
                }
            ])
            return res.status(200).json({
                success: true,
                data
            })

        } catch (error) {
            console.log(error);

        }
    }

}



module.exports = new LookupController();