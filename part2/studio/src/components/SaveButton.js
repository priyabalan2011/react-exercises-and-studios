import "./styling.css";

function SaveButton() {
  //alert("savebutton");
  function handleClick() {
    alert("You are saving this pin!");
  }
  return (
    <button id="saveButton" onClick={handleClick} >
      Save
    </button>
  );
}

export default SaveButton;
