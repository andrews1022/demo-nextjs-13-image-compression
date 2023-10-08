import imageCompression from "browser-image-compression";
import type { Options } from "browser-image-compression";

const defaultOptions: Options = {
  maxSizeMB: 1
};

const compressFile = (imageFile: File, options = defaultOptions) => {
  return imageCompression(imageFile, options);
};

export { compressFile };
