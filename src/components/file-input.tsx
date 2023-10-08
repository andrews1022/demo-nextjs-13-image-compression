import type { ChangeEvent } from "react";

type FileInputProps = {
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const FileInput = ({ handleOnChange }: FileInputProps) => {
  return (
    <div className="input-group">
      <label htmlFor="input-file">Select Image</label>
      <input
        type="file"
        id="input-file"
        accept="image/*"
        onChange={handleOnChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

export { FileInput };
