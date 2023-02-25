import React from "react";

function AddQuiz(){
    return(
        <>
            <h1>Question 1</h1>
            <input type="text" name="fullname" size="150"  maxlength="100" placeholder="Enter the Question"  />
            <span>
            <input type="text" name="optionone" placeholder="Option 1"/>
            <input type="text" name="optiontwo" placeholder="Option 2"/>
            </span>
            </>
    )
}

export default AddQuiz;