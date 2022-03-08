import { Container } from "@mui/material";
import { useState } from "react";
import NoteCard from "../components/NoteCard";
import Masonry from "@mui/lab/Masonry";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  // get all notes
  useState(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  // delete note
  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE",
    });

    // update local notes
    const newNote = notes.filter((note) => note.id !== id);
    setNotes(newNote);
  };

  return (
    <Container>
      {/* <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid item xs={12} md={6} lg={4} key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid> */}

      <Masonry columns={{ lg: 3, md: 2, sm: 1 }} spacing={2}>
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} handleDelete={handleDelete} />
        ))}
      </Masonry>
    </Container>
  );
};

export default Notes;
