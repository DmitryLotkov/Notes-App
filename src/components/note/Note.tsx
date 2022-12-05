import React from "react";

import { Grid, IconButton, Paper } from "@material-ui/core";
import { Delete } from "@mui/icons-material";

import s from "../notesPlanner/notesPlanner.module.scss";

export type NotePropsType = {
  id: string;
  noteBody: string;
  deleteNote: (id: string) => void;
};
const Note = ({ noteBody, deleteNote, id }: NotePropsType) => (
  <Grid className={s.notesPlannerBlock}>
    <Paper elevation={1} style={{ padding: "1rem" }}>
      <div className={s.titleBlock}>
        <div>{noteBody}</div>
        <IconButton onClick={() => deleteNote(id)}>
          <Delete />
        </IconButton>
      </div>
    </Paper>
  </Grid>
);

export default Note;
