import React, { ChangeEvent, useState } from "react";

import { TextField } from "@material-ui/core";

export type EditablePropsType = {
  title: string;
  setTitle: (title: string) => void;
};
export const EditableSpan = ({ title, setTitle }: EditablePropsType) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>(title);
  const OnEditMode = () => {
    setEditMode(true);
  };
  const offEditMode = () => {
    setEditMode(false);
    setTitle(newTitle);
  };
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.currentTarget.value);
  };
  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      offEditMode();
    }
  };
  return editMode ? (
    <TextField
      className="editableSpan"
      value={title}
      onKeyDown={onKeyPressHandler}
      autoFocus
      onBlur={offEditMode}
      onChange={onChangeHandler}
    />
  ) : (
    <span className="EditableSpanWrapper">
      <span onDoubleClick={OnEditMode}>{title}</span>
    </span>
  );
};
