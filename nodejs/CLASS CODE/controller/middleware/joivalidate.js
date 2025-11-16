

userValidate = (validator) => {
    return (req, res, next) => {
      const { error } = validator(req.body)
      //console.log('error: ', error)
      if (error) {
        return res.status(400).send({
            message:error.message
        })
      }
      next()
    }
  }

  module.exports={
    userValidate
  }