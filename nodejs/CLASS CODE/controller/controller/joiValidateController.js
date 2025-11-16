
const {joiUser}=require('../model/joiModel')


class JoiValidateController{
    //******joi validation */
    createData = async (req, res) => {
        try {
            const { name,email,mobile,birthyear,skillSet,is_active } = req.body;
            let joidata = new joiUser({
                name,email,mobile,birthyear,skillSet,is_active
            })
            const prodata = await joidata.save();
            if (!prodata) {
                return res.status(500).send(
                    {
                        message: "data can not be create"
                    }
                )
            } else {
                return res.status(200).send({
                    data: prodata,
                    message: "data added successfully"
                })
            }

        } catch (error) {
            console.log(error);
        }
    }

}


module.exports= new JoiValidateController()