import React from 'react';

function DeletePopup(props) {
  return (
    <div>
      <p>Are you sure you want to delete this item?</p>
      <button onClick={props.onConfirm}>Yes</button>
      <button onClick={props.onCancel}>No</button>
    </div>
  );
}

export default DeletePopup;
