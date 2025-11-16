const cloudinary = require('cloudinary').v2;
const fs = require('node:fs');

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
	try {
		if (!localFilePath) {
			throw new Error('Local file path not found');
		}

		const uploadResponse = await cloudinary.uploader.upload(localFilePath, {
			resource_type: 'image',
			folder: 'Nodejs',
		});

		if (!uploadResponse) {
			throw new Error('Image uploading failed on cloudinary');
		}

		// console.log(`uploadResponse`, uploadResponse);
		return uploadResponse;
	} catch (error) {
		console.error(error);
		return null;
	} finally {
		fs.unlinkSync(localFilePath);
	}
};

const deleteResourceFromCloudinary = async (public_id) => {
	try {
		if (!public_id) {
			throw new Error('Public id is undefined');
		}
		console.log(`PUBLIC_ID`, public_id);
		const deletedResponse = await cloudinary.uploader.destroy(public_id);

		if (deletedResponse.result !== 'ok') {
			throw new Error('Resource not deleted');
		}

		console.log('iMAGE DELETED SUCCESSFULLY', deletedResponse);
		return true;
	} catch (error) {
		console.error(error.message);
		return false;
	}
};

module.exports = { uploadOnCloudinary, deleteResourceFromCloudinary };
