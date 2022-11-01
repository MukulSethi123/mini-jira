import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { allTicketsState } from "./types/reduxStateTypes";
import { useDispatch, useSelector } from "react-redux";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import KanbanBoard from "./components/KanbanBoard/KanbanBoard";
import { RootState } from "./types/reduxStateTypes";
import NavBar from "./components/Common/NavBar/NavBar";
import { addTicket } from "./components/Redux/actions/ticketActions";
import PopUpForm from "./components/Common/PopUpForm/PopUpForm";
import { Root } from "react-dom/client";

function App() {
  const [minimize, setMinimize] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const dispatch = useDispatch();
  const boardList = useSelector((state: RootState) => state.board);
  const allTickets = useSelector((state: RootState) => state.tickets);
  const closeNavBar = () => {
    setMinimize(!minimize);
  };
  const onClickFloatingBtn = () => {
    setOpenForm(!openForm);
  };
  const onAddTicketBtn = (event: any, inputVal: string, setInputVal: any) => {
    event.preventDefault();
    //any way to only get the id of the last ticket?

    const newTicket: allTicketsState = {
      Id: allTickets.slice(-1)[0].Id,
      boardId: 1,
      title: inputVal,
      details: "something something",
    };
    dispatch(addTicket(newTicket));
    setInputVal("");
  };
  return (
    <div className="App">
      <NavBar closeNavBar={closeNavBar} minimize={minimize} />
      <div
        className="app__board"
        style={minimize ? { marginLeft: "3rem" } : { marginLeft: "10rem" }}
      >
        <h1>Kanban</h1>
        <div>
          {boardList.map((board) => (
            <KanbanBoard
              key={board.Id}
              title={board.title}
              ticketList={board.ticketList}
              boardId={board.Id}
            />
          ))}
        </div>
      </div>

      <PopUpForm openForm={openForm} onClickBtn={onAddTicketBtn} />
      <div className="app__board__addIcon" onClick={onClickFloatingBtn}>
        {openForm ? (
          <KeyboardArrowDownIcon fontSize="large" />
        ) : (
          <AddIcon fontSize="large" />
        )}
      </div>
    </div>
  );
}

export default App;
