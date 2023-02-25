
import React from "react";
import AddQuiz from "./AddQuiz";
import Final from "./Final";
function QuizForm(){
   return(
    <div className="body">
    <form>
    <fieldset id="fieldone">
    <legend id="one">Create Quiz</legend>
    <fieldset>
    
        <input type="text" name="fullname" size="150"  maxlength="100" placeholder="quiz name"  />
        </fieldset>
    <br/>
    <fieldset>
    <textarea rows="5" cols="140" id="comments" placeholder="desciption" size='70'></textarea>
    </fieldset>
    <br/>
    <br/>
    <br/>
    <Final/>
    </fieldset>
    </form>
    </div>
    )
  }
export default QuizForm;