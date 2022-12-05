import React, { FC, useEffect, useState } from "react";

import { v1 } from "uuid";

import { AddItemForm } from "./components/AddItemForm/AddItemForm";
import { NotesPlanner } from "./components/notesPlanner/NotesPlanner";

export type NoteType = {
  id: string;
  content: string;
};

export const App: FC = () => {
  const [data, setData] = useState<Array<NoteType>>(() => JSON.parse(localStorage.getItem("notes") as string) || []);

  const changeNotesPlannerTitle = (title: string) => {
    if (data) {
      setData(data.concat({ id: v1(), content: title }).reverse());
    }
  };
  const deleteNote = (id: string) => {
    if (data) {
      setData(data.filter((item) => item.id !== id));
    }
  };
  useEffect(() => {
    const notes = localStorage.getItem("notes");
    if (notes) {
      const newValue = JSON.parse(notes);
      setData(newValue);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(data));
  }, [data]);
  return (
    <>
      <AddItemForm addItem={changeNotesPlannerTitle} />
      <NotesPlanner notes={data} deleteNote={deleteNote} />
    </>
  );
};
