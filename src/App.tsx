import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { useSelector } from "react-redux";
import KanbanBoard from "./components/KanbanBoard/KanbanBoard";
import { RootState } from "./types/reduxStateTypes";
import NavBar from "./components/Common/NavBar/NavBar";

function App() {
  const boardList = useSelector((state: RootState) => state.board);
  return (
    <div className="App">
      <NavBar />

      <div className="app__board">
        <h1>Kanban</h1>
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
  );
}

export default App;
