
const db = require('../model/geo');

class GeoRepo {
    get = async ({
        maxDistance,
        coordinates,
    }) => {
        return await db.find({
                location: {
                    $near: {
                        $maxDistance: maxDistance,
                        $geometry: {
                            type: "Point",
                            coordinates,
                        },
                    },
                },
            })
            .find();
    };

    getByUsername = async (username) => {
        return await db.findOne({ username });
    };

    create = async (data) => {
        return await db.create({
            username: data.username,
            location: {
                type: "Point",
                coordinates: [
                    data.coordinates.longitude,
                    data.coordinates.latitude,
                ],
            },
        });
    };
}

module.exports = new GeoRepo();