import React from "react";

import { NoteType } from "../../App";
import Note from "../note/Note";

export type NotesPropsType = {
  notes: Array<NoteType>;
  deleteNote: (id: string) => void;
};
export const NotesPlanner = ({ notes, deleteNote }: NotesPropsType) => (
  <>
    {notes.map((item) => (
      <Note key={item.id} id={item.id} noteBody={item.content} deleteNote={deleteNote} />
    ))}
  </>
);
