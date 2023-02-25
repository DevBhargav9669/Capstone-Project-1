import { Button, CardContent,Grid,TextField, useScrollTrigger } from "@mui/material";
// import { useState } from "react";

// function Learning(){

// const [category,setCategory]=useState("")
// const [description,setDescription]=useState("")

// const addQuiz =()=>{

// }
//     return(
//         <>
   
//     <CardContent>
//     <Grid container spacing={1}>
    
//     <Grid  item>
//         <TextField
//          label="Quiz Category"
//          placeholder="Enter the Quiz Category"
//          variant="outlined"
//         id="category"
//         value={category} 
//         onChange ={
//             event=>{
//                 setCategory(event.target.value)
//             }
//         }
//          fullWidth required/>

      
//     </Grid>
//     <Grid item>
//         <TextField
//         multiline rows={4}
//          label="Description"
//          placeholder="Enter the Descripton of the Quiz Category"
//          variant="outlined"
//          id="description"
//          value={description}
//          onChange ={
//             event=>{
//                 setDescription(event.target.value)
//             }
//         }
//          fullWidth required/>

      
//     </Grid>
   
//     </Grid>    
         
// </CardContent>
// <Button type="submit" 
//     variant="contained"
//      color="primary"
//      onClick={addQuiz}>
//         Save to Local Storage
//       </Button>
 
// </>
// )}

// export default Learning;

import React, { useState, useEffect } from 'react';

const Learning = () => {
  const [inputFields, setInputFields] = useState([{ value: '' }]);
  
  useEffect(() => {
    // load input fields from local storage on mount
    const storedInputFields = JSON.parse(localStorage.getItem('inputFields'));
    if (storedInputFields) setInputFields(storedInputFields);
  }, []);

  useEffect(() => {
    // save input fields to local storage whenever they change
    localStorage.setItem('inputFields', JSON.stringify(inputFields));
  }, [inputFields]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ value: '' });
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleChange = (index, event) => {
    const values = [...inputFields];
    values[index].value = event.target.value;
    setInputFields(values);
  };

  return (
    <div>
          <CardContent>
        <Grid container spacing={1}>
      {inputFields.map((inputField, index) => (
        <div key={index}>
          {/* <input
            type="text"
            value={inputField.value}
            onChange={(event) => handleChange(index, event)}
          />
            <input
            type="text"
            value={inputField.value}
            onChange={(event) => handleChange(index, event)}
          /> */}
                         
                         <Grid xs={12} sm={6} item>
                        <TextField
                         label="Question one"
                         placeholder="Enter the first question"
                         variant="outlined"
                        id="category"
                         value={inputField.value}
                          onChange={(event) => handleChange(index, event)}/>
                        </Grid>
                        <Grid xs={12} sm={6} item>
                        <TextField
                         label="Answer one"
                         placeholder="Enter the first Answer"
                         variant="outlined"
                         id="answerOne"
                         value={inputField.value}
                         onChange={(event) => handleChange(index, event)}
                         fullWidth required
                        />
                    </Grid>
                         <Grid xs={12} sm={6} item>
                        <TextField
                         label="Answer Two"
                         placeholder="Enter the second Answer"
                         variant="outlined"
                         id="answerTwo"
                         value={inputField.value}
                         onChange={(event) => handleChange(index, event)}
                         fullWidth required
                        /> 
                    </Grid>
                         <Grid xs={12} sm={6} item>
                        <TextField
                         label="Answer Three"
                         placeholder="Enter the Third Answer "
                         variant="outlined"
                         id="answerThree"
                         value={inputField.value}
                         onChange={(event) => handleChange(index, event)}
                        fullWidth
                    
                        />
                      </Grid>   
                         <Grid xs={12} sm={6} item>
                        <TextField
                         label="Answer Four"
                         placeholder="Enter the Fourth Answer"
                         variant="outlined"
                         id="answerFour"
                         value={inputField.value}
                         onChange={(event) => handleChange(index, event)}
                         fullWidth   
                    
                        /> 
                        </Grid>
          <button onClick={() => handleRemoveFields(index)}>Remove</button>
          <button onClick={() => handleAddFields()}>Add more</button>
        </div>
      ))}
      </Grid>
      </CardContent>
      <button>SUBMIT</button>
    </div>
 
  );
};

export default Learning;
