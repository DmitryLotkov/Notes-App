import React, { ChangeEvent, useState } from "react";

import { IconButton, TextField } from "@material-ui/core";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import style from "./AddItemForm.module.scss";

type AddItemFormType = {
  addItem: (title: string) => void;
  disabled?: boolean;
};

export const AddItemForm = React.memo(({ addItem, disabled }: AddItemFormType) => {
  const [inputData, setInputData] = useState("");
  const [error, setError] = useState<string | null>(null);

  const addLetter = () => {
    if (inputData.trim() !== "") {
      addItem(inputData);
    } else {
      setError("Title is required!");
    }
    setInputData("");
  };

  const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData(e.currentTarget.value);
  };
  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLElement>) => {
    if (error) {
      setError(null);
    }

    if (e.key === "Enter") {
      addLetter();
    }
  };

  return (
    <div className={style.addItemFormWrapper}>
      <TextField
        label="Enter a title..."
        autoFocus
        error={!!error}
        onKeyDown={onKeyPressHandler}
        value={inputData}
        onChange={onchangeHandler}
        variant="outlined"
        helperText={error && "Title is required!"}
      />
      <div className={style.addItemButton}>
        <IconButton onClick={addLetter} disabled={disabled}>
          <AddCircleOutlineIcon color={disabled ? "disabled" : "primary"} />
        </IconButton>
      </div>
    </div>
  );
});
