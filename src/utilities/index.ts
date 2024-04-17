import sharp from 'sharp';

const resizeImage = async (payload: {
  imagePath: string;
  width: number;
  height: number;
  imagePathResize: string;
}): Promise<void> => {
  const { imagePath, width, height, imagePathResize } = payload;

  await sharp(imagePath).resize(width, height).toFile(imagePathResize);
};

export default resizeImage;
