import { useEffect, useState } from "react";

type ImagePreviewerProps = {
  imageFile: File | null;
};

const ImagePreviewer = ({ imageFile }: ImagePreviewerProps) => {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    if (!imageFile) {
      return;
    }

    const url = URL.createObjectURL(imageFile);
    setImageURL(url);

    return () => {
      if (url) {
        URL.revokeObjectURL(url);
      }
    };
  }, [imageFile]);

  return imageFile ? (
    <>
      <div className="image-wrapper">
        <img src={imageURL} alt="" />
      </div>

      <p>{`${(imageFile.size / 1024).toFixed(2)} kB`}</p>
    </>
  ) : null;
};

export { ImagePreviewer };
