import { Button, CardContent, Grid, TextField, useScrollTrigger } from "@mui/material";
import { hover } from "@testing-library/user-event/dist/hover";
import React, { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Final() {

    const [count, setCount] = useState(1)
    const [formfields, setFormFields] = useState([
        {
            question: "",
            answerone: "",
            answertwo: "",
            answerthree: "",
            answerfour: ""
        },

    ])
    const handleFormChange = (index, event) => {
        let data = [...formfields]
        data[index][event.target.name] = event.target.value;
        setFormFields(data);
    }
    const addFields = () => {
        let newField = {
            question: "",
            answerone: "",
            answertwo: "",
            answerthree: "",
            answerfour: ""
        }
        setFormFields([...formfields, newField])

    }
    const submit = (e) => {
        e.preventDefault();
        console.log(formfields)
        localStorage.setItem("formfields", JSON.stringify(formfields));
        alert("submitted successfully");
    }
    const removeFields = (index) => {
        let data = [...formfields]
        data.splice(index, 1)
        setFormFields(data)
    }
    return (
        <>
            <form autoComplete="off" onSubmit={submit}>
                {formfields.map((input, index) => {
                    return (

                        <div key={index}>
                            <h1>Question</h1>
                            <CardContent>
                                <Grid container spacing={1}>
                                    <Grid xs={12} item>
                                        <TextField
                                            label="Enter the Question"
                                            placeholder="Enter the Question"
                                            variant="outlined"
                                            name="question"
                                            value={input.question}
                                            fullWidth required
                                            onChange={event => handleFormChange(index, event)}
                                        />
                                    </Grid>

                                    <Grid xs={12} sm={6} item>
                                        <TextField
                                            label="Answer one"
                                            placeholder="Enter the first Answer"
                                            variant="outlined"
                                            name="answerone"
                                            value={input.answerone}
                                            fullWidth required
                                            onChange={event => handleFormChange(index, event)}
                                        />
                                    </Grid>
                                    <Grid xs={12} sm={6} item>
                                        <TextField
                                            label="Answer Two"
                                            placeholder="Enter the second Answer"
                                            variant="outlined"
                                            name="answertwo"
                                            value={input.answertwo}
                                            fullWidth required
                                            onChange={event => handleFormChange(index, event)}
                                        />
                                    </Grid>
                                    <Grid xs={12} sm={6} item>
                                        <TextField
                                            label="Answer Three"
                                            placeholder="Enter the Third Answer "
                                            variant="outlined"
                                            name="answerthree"
                                            value={input.answerthree}
                                            onChange={event => handleFormChange(index, event)}
                                            fullWidth

                                        />
                                    </Grid>
                                    <Grid xs={12} sm={6} item>
                                        <TextField
                                            label="Answer Four"
                                            placeholder="Enter the Fourth Answer"
                                            variant="outlined"
                                            name="answerfour"
                                            value={input.answerfour}
                                            onChange={event => handleFormChange(index, event)}
                                            fullWidth

                                        />
                                    </Grid>


                                </Grid>
                                <br />
                                <br />


                                <Button variant="contained" color="primary" onClick={addFields}>Add Question</Button>
                                <br />
                                <br />
                                <Button variant="contained" color="primary" onClick={removeFields}><DeleteIcon />  Delete Question</Button>
                                <br />

                            </CardContent>
                        </div>
                    )
                })}
                <Button variant="contained" type="submit" color="primary" size="large" onClick={submit}>Submit</Button>
            </form>
        </>
    )
}

export default Final;