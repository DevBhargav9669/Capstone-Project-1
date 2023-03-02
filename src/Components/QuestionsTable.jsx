import React from "react";
import "./QuestionsTable.css";
import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";

// function App() {
//   const [show,setShow]=useState(true)
//     return (
//         <div className="App">
//          {
//              show?<h1>Geography</h1>:null
//            }
//            <button onClick={()=>setShow(true)} >Show</button>
//            {/* <button onClick={()=>setShow(false)} >Hide</button> */}
//           </div>
//         );
//       }

export default function QuestionsTable() {
  const [data, setData] = React.useState([1, 2, 3]);

  const handleClickTitle = (index) => {
    console.log(index);
  };

  const handleDelete = (index) => {
    let arr = data;
    arr = arr.filter((ele, i) => index !== i);

    console.log(arr);
    setData(arr);
  };
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const switchStyle = {
    display: "inline-block",
    position: "relative",
    width: "50px",
    height: "24px",
    borderRadius: "12px",
    background: isToggled ? "green" : "gray",
  };

  const sliderStyle = {
    position: "absolute",
    top: "2px",
    left: isToggled ? "26px" : "2px",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    background: "white",
    transition: "0.2s",
  };
  return (
    <>
      <div className="quizHeader">
        <h1>My Quizes</h1>
        <button>Create New Quiz</button>
      </div>
      <div className="questionsContainer">
        <div className="questionsHeader">
          <div className="questionsQuiz">Quiz No.</div>
          <div>Title</div>
          <div>Status</div>
          <div>Created Date</div>
          <div>Actions</div>
        </div>
        {data.map((ele, index) => (
          <div className="questionsEle" key={ele}>
            <div>{ele}</div>
            <div onClick={() => handleClickTitle(index)}>Geography</div>
            <div>
              {/* <span>Active</span> */}
              <div style={switchStyle} className="questionsEleTooglePar" onClick={handleToggle}>
                <div style={sliderStyle} className="questionsEleToogleChild"></div>
              </div>
            </div>
            <div>01 Mar, 4:17PM</div>

            <div onClick={() => handleDelete(index)}>
              <FiTrash2 />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
