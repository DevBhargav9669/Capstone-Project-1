import { Button, CardContent,Grid,TextField, useScrollTrigger } from "@mui/material";
import { hover } from "@testing-library/user-event/dist/hover";
import React, { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
function AddQuizMui(){

const [addQuestion,setAddQuestion]=useState([])    

const [count,setCount]=useState(1)
const [question,setQuestion]=useState('')
const [answerOne,setAnswerOne]=useState('')
const [answerTwo,setAnswerTwo]=useState('')
const [answerThree,setAnswerThree]=useState('')
const [answerFour,setAnswerFour]=useState('')

const countIncrease=()=>{
        if(count<10){
            setCount(count+1)
        }
        else
        {
            alert("please create the another form")
        }
}

const handleSubmit = (event) => {
    event.preventDefault();
    // localStorage.setItem('question',question);
    // localStorage.setItem('answerone', answerOne);
    // localStorage.setItem('answerTwo',answerTwo)
    // localStorage.setItem('answerThree',answerThree)
    // localStorage.setItem('answerfour',answerFour)
    // alert('Quiz saved to local storage!');
    let quest={
        question,
        answerOne,
        answerTwo,
        answerThree,
        answerFour
    }
    setAddQuestion([...addQuestion,quest])
    setQuestion('')
    setAnswerOne('')
    setAnswerTwo('')
    setAnswerThree('')
    setAnswerFour('')
  }
    useEffect(()=>{
        localStorage.setItem('addQuestion',JSON.stringify(addQuestion));
    },[addQuestion])
    return(
        <>
        <form autoComplete="off" onSubmit={handleSubmit}>
        <h1>Question {count} </h1>
        <CardContent>
        <Grid container spacing={1}>
                         <Grid xs={12} item>
                        <TextField
                         label="Enter the Question"
                         placeholder="Enter the Question"
                         variant="outlined"
                         id="question"
                         value={question}
                         onChange={(event) => setQuestion(event.target.value)}
                         fullWidth required
                        
                        /> 
                        </Grid>
                    
                    <Grid xs={12} sm={6} item>
                        <TextField
                         label="Answer one"
                         placeholder="Enter the first Answer"
                         variant="outlined"
                         id="answerOne"
                         value={answerOne}
                         onChange={(event) => setAnswerOne(event.target.value)}
                         fullWidth required
                        />  
                    </Grid>
                         <Grid xs={12} sm={6} item>
                        <TextField
                         label="Answer Two"
                         placeholder="Enter the second Answer"
                         variant="outlined"
                         id="answerTwo"
                         value={answerTwo}
                         onChange={(event) => setAnswerTwo(event.target.value)}
                         fullWidth required
                        /> 
                    </Grid>
                         <Grid xs={12} sm={6} item>
                        <TextField
                         label="Answer Three"
                         placeholder="Enter the Third Answer "
                         variant="outlined"
                         id="answerThree"
                         onChange={(event) => setAnswerThree(event.target.value)}
                         value={answerThree}
                        fullWidth
                    
                        />
                      </Grid>   
                         <Grid xs={12} sm={6} item>
                        <TextField
                         label="Answer Four"
                         placeholder="Enter the Fourth Answer"
                         variant="outlined"
                         id="answerFour"
                         value={answerFour}
                         onChange={(event) => setAnswerFour(event.target.value)}
                         fullWidth   
                    
                        /> 
                        </Grid>
                
                         
                    </Grid>
                    <br/>
                    <br/>
                     
                    <br/>
                    <br/> 
                <Button variant="contained" color="primary" onClick={countIncrease}><AddCircleOutlineOutlinedIcon/>   Add Question</Button>
                <br/>
                <br/>
                <Button variant="contained" type="submit" color="primary" size="large" sx={{marginLeft:'180vh'}} >Save</Button>
        </CardContent>
        </form>
        </>
    )
}

export default AddQuizMui;