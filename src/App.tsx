import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { useSelector } from "react-redux";
import KanbanBoard from "./components/KanbanBoard/KanbanBoard";
import { RootState } from "./types/reduxStateTypes";
import NavBar from "./components/Common/NavBar/NavBar";

function App() {
  const [minimize, setMinimize] = useState(false);
  const boardList = useSelector((state: RootState) => state.board);
  const closeNavBar = () => {
    setMinimize(!minimize);
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
    </div>
  );
}

export default App;
