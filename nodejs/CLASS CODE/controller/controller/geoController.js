const Geo = require('../model/geo');
const georepo = require('../reposistory/georepo');
const geoRepo = require('../reposistory/georepo');


class geoController {

    createGeo = async (req, res) => {
        try {
            //console.log(req.body);
            
            // const { error, value } = createGeoSchema.validate(req.body);
            // if (error) throw error;

            // const existingGeo = await georepo.getByUsername(value.username);
            // if (existingGeo)
            //     throw new AppError("Username already exists", "CONFLICT");

            const geo = await geoRepo.create(req.body);
            return res.status(200).json({
                status: "success",
                data: geo,
            }); 
        } catch (err) {
            return res.status(400).json({
                status: "failed",
                message: err.message,
            });
        }
    };



    async getGeo(req, res) {
        try {
            //const { value } = req.body;
            const geo = await geoRepo.get({
                maxDistance: req.body.maxDistance,
                coordinates: [
                    req.body.coordinates.longitude,
                    req.body.coordinates.latitude,
                ],
            });
            return res.status(200).json({
                status: "success",
                data: geo,
            });
        } catch (err) {
            return res.status(400).json({
                status: "failed",
                message: err.message,
            });
        }
    }   

 }


 module.exports = new geoController();