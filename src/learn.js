import React, { useState } from 'react';

import {TextField} from "@mui/material";
import {Button} from "@mui/material";

const QuizForm = () => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('quizCategory', category);
    localStorage.setItem('quizDescription', description);
    alert('Quiz saved to local storage!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Quiz Category"
        placeholder="Enter the Quiz Category"
        variant="outlined"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        fullWidth
        required
      />

      <TextField
        multiline
        rows={4}
        label="Description"
        placeholder="Enter the Descripton of the Quiz Category"
        variant="outlined"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        fullWidth
        required
      />

      <Button type="submit" variant="contained" color="primary">
        Save to Local Storage
      </Button>
    </form>
  );
};

export default QuizForm;
