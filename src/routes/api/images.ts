import express from 'express';
import resizeImage from '../../utilities';
import path from 'path';
const images = express.Router();

images.get('/', async (req, res) => {
  const queryParam = req.query;
  const filename = req.query.filename;
  const width = req.query.width;
  const height = req.query.height;

  if (!filename || !width || !height) {
    res.status(400).json({
      status: 400,
      message: 'filename, width and height not empty!',
    });
  }
  try {
    const imagePath = path.resolve(`assets/images/${filename}.jpg`);
    const imagePathResize = path.resolve(
      `assets/thumb/${filename}_thumb_${width}_${height}.jpg`,
    );
    await resizeImage({
      imagePath: String(imagePath),
      width: Number(queryParam.width),
      height: Number(queryParam.height),
      imagePathResize,
    });
    res.status(200).sendFile(imagePathResize);
  } catch (error) {
    res.status(404).json({
      status: 404,
      message: 'Not found!',
    });
  }
});

export default images;
