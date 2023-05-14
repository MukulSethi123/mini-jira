import React, { useState } from "react";
import "./_popUpForm.scss";
interface PopUpFormProps {
  openForm: boolean;
  //how do i make setInput val function
  onClickBtn: (event: any, inputVal: any, setInputVal: any) => void;
}
function PopUpForm({ openForm, onClickBtn }: PopUpFormProps) {
  const [inputVal, setInputVal] = useState("");
  const onChange = (event: any) => {
    setInputVal(event.target.value);
  };
  return (
    <form
      className="openForm clickable"
      style={
        openForm
          ? {
              visibility: "visible",
              transition:
                "height .5s,visiblity .5s, width .5s,opacity .2s, transform .5s",
            }
          : {
              height: "0",
              width: "0",
              visibility: "visible",
              opacity: "0",
              zIndex: "-100",
              transition:
                "height .5s,visiblity .5s, width .5s,opacity .2s, transform .5s",
            }
      }
    >
      <input placeholder="title" value={inputVal} onChange={onChange} />
      <button
        className="clickable"
        onClick={(event) => onClickBtn(event, inputVal, setInputVal)}
      >
        addTicket
      </button>
    </form>
  );
}

export default PopUpForm;
