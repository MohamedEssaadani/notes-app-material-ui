import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateNote = () => {
  // title & details for the form
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("");

  // to navigate
  const navigate = useNavigate();

  // for title & details errors
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // reset errors
    setTitleError(true);
    setTitleError(true);

    // if title is empty, set title error to true
    if (title === "") {
      setTitleError(true);
    }

    // if details is empty, set details error to true
    if (details === "") {
      setDetailsError(true);
    }

    //check for title & details and then add the note
    if (title && details) {
      console.log(title, details, category);
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => navigate("/"));
    }
  };

  return (
    <Container
      size="sm"
      style={{
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="false" onSubmit={handleSubmit}>
        <TextField
          label="Note Title"
          variant="outlined"
          color="secondary"
          sx={{ display: "block", marginTop: 5, marginBottom: 5 }}
          fullWidth
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          error={titleError}
        />

        <TextField
          label="Détails"
          variant="outlined"
          color="secondary"
          sx={{ display: "block", marginTop: 5, marginBottom: 5 }}
          multiline
          rows={4}
          fullWidth
          required
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          error={detailsError}
        />

        <FormControl>
          <FormLabel>Notes Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            row
          >
            <FormControlLabel
              value="money"
              label={"Money"}
              control={<Radio />}
            />
            <FormControlLabel
              value="todos"
              label={"Todos"}
              control={<Radio />}
            />
            <FormControlLabel
              value="reminders"
              label={"Reminders"}
              control={<Radio />}
            />
            <FormControlLabel value="work" label={"Work"} control={<Radio />} />
          </RadioGroup>
        </FormControl>
        <br />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          endIcon={<ArrowForwardIosIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default CreateNote;
