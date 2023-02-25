import { Card, CardContent, Grid, TextField, Typography,Button } from "@mui/material";
import { spacing } from "@mui/system";
import React, { useState } from "react";
import AddQuizMui from "./AddQuizMui";
import Final from "./Final";
function QuizFormMui(){
  const [category,setCategory]=useState('')
  const [description,setDescription]=useState('')
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('quizCategory', category);
    localStorage.setItem('quizDescription', description);
    alert('Quiz saved to local storage!');
  }
    return(
        <>
        <fieldset style={{marginTop:'15vh'}}>
            <legend style={{marginLeft:'30px',marginRight:'30px'}}>Create Quiz</legend>

                <CardContent>
                    <Grid container spacing={1}>
                    
                    <Grid xs={12} item>
                        <TextField
                         label="Quiz Category"
                         placeholder="Enter the Quiz Category"
                         variant="outlined"
                        id="category"
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
            
                         fullWidth required/>

                      
                    </Grid>
                    <Grid xs={12} item>
                        <TextField
                        multiline rows={4}
                         label="Description"
                         placeholder="Enter the Descripton of the Quiz Category"
                         variant="outlined"
                        id="description"
                        value={description}
                        onChange={(event)=>setDescription(event.target.value)}
                         fullWidth required/>    
                    </Grid>
              
                    <Final/>
                    </Grid>           
                </CardContent>

        </fieldset>
        </>
    )
}

export default QuizFormMui;

