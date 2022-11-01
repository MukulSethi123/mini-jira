import React, { useEffect, useState } from "react";
import "./_kanbanBoard.css";
import Ticket from "../Ticket/Ticket";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./../../types/reduxStateTypes";
import {
  moveToLeft,
  moveToRight,
  addTicket,
} from "./../Redux/actions/ticketActions";
interface KanbanBoardProps {
  title: string;
  boardId: number;
  ticketList: number[];
}

function KanbanBoard({ title, ticketList, boardId }: KanbanBoardProps) {
  const allTickets = useSelector((state: RootState) => state.tickets);
  const dispatch = useDispatch();

  const moveticketLeft = (id: number) => {
    dispatch(moveToLeft(id));
  };

  const moveTicketRight = (id: number) => {
    dispatch(moveToRight(id));
  };

  useEffect(() => {}, [allTickets]);
  return (
    <div className="board">
      <div className="board__title">
        <h2>{title}</h2>
      </div>
      <div className="body">
        {allTickets
          .filter((tickets) => tickets.boardId === boardId)
          .map((ticket) => (
            <Ticket
              key={ticket.Id}
              Id={ticket.Id}
              details={ticket.details}
              boardId={boardId}
              title={ticket.title}
              moveTicketRight={moveTicketRight}
              moveticketLeft={moveticketLeft}
            />
          ))}
      </div>
    </div>
  );
}

export default KanbanBoard;
