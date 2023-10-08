"use client";

import { useState } from "react";

import { FileInput } from "@/components/file-input";

import { compressFile } from "@/lib/utils";

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
      </article>
    </section>
  );
};

export { Compressor };
