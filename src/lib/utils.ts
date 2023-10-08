import imageCompression from "browser-image-compression";
import type { Options } from "browser-image-compression";

const defaultOptions: Options = {
  maxSizeMB: 1
};

const compressFile = (imageFile: File, options = defaultOptions) => {
  return imageCompression(imageFile, options);
};

const download = (file: Blob | File | MediaSource) => {
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "");
  link.click();
  URL.revokeObjectURL(url);
};

export { compressFile, download };
