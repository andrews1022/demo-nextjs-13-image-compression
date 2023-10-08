"use client";

import { useState } from "react";

import { FileInput } from "@/components/file-input";
import { ImagePreviewer } from "@/components/image-previewer";

import { compressFile, download } from "@/lib/utils";

import type { ChangeEvent } from "react";

const Compressor = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [compressedImage, setCompressedImage] = useState<File | null>(null);
  const [isCompressing, setIsCompressing] = useState(false);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setSelectedImage(file);
    }
  };

  const handleDownload = () => {
    if (!compressedImage) {
      return;
    }

    download(compressedImage);
  };

  const handleCompressFile = async () => {
    if (selectedImage) {
      try {
        const compressedImageFile = await compressFile(selectedImage);
        setCompressedImage(compressedImageFile);
      } catch (error) {
        console.log({ error });
      }
    }
  };

  return (
    <section className="container">
      <FileInput handleOnChange={handleOnChange} />

      <article className="previewer">
        <aside>
          <ImagePreviewer imageFile={selectedImage} />

          <div className="button-wrapper">
            {selectedImage ? (
              <button
                disabled={isCompressing}
                onClick={handleCompressFile}
                className="button"
                type="button"
              >
                {isCompressing ? "Compressing..." : "Compress Image"}
              </button>
            ) : null}
          </div>
        </aside>

        <aside>
          <ImagePreviewer imageFile={compressedImage} />

          <div className="button-wrapper">
            {compressedImage ? (
              <button onClick={handleDownload} className="downloadBtn">
                Download
              </button>
            ) : null}
          </div>
        </aside>
      </article>
    </section>
  );
};

export { Compressor };
