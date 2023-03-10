import { Card, CardContent, Grid, TextField, Typography,Button,Box } from "@mui/material";
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
         <fieldset style={{marginTop:'10vh',backgroundColor:'lightgray'}}>
         <legend style={{marginLeft:'30px',marginRight:'30px'}}>Create Quiz</legend>

            <Box  sx={{
                                            width: 800,
                                            height: 200,
                                            marginLeft:'36vh',
                                            marginRight:'33vh',
                                            border:'solid black',
                                            paddingTop:'8px',
                                            paddingLeft:'4px',
                                            paddingRight:'4px',
                                            backgroundColor: "#fafafa",
                                            '&:hover': {
                                            backgroundColor: '#eeeeee',
                                            opacity: [0.9, 0.9, 1],
                                            },
                                
                                        
                                        }}>
          
          <Grid container spacing={1}>                 
                    <Grid xs={12} item>
                        <TextField
                         label="Quiz Name"
                         placeholder="Enter the Quiz Name"
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
              </Grid>
                    
                           
                    {/* </fieldset> */}
                    </Box>
                 <Final/>
                 </fieldset>
        </>
    )
}

export default QuizFormMui;

