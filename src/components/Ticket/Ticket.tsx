import React, { useState } from "react";
import TicketPopUp from "../TicketPopUp/TicketPopUp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./_ticket.css";
interface TicketProps {
  title: string;
  details: string;
  Id: number;
  boardId: number;
  moveTicketRight(Id: number): void;
  moveticketLeft(Id: number): void;
}

function Ticket({
  title,
  details,
  Id,
  boardId,
  moveTicketRight,
  moveticketLeft,
}: TicketProps) {
  const onClickLeftButton = () => {
    moveticketLeft(Id);
  };
  const onClickRightButton = () => {
    moveTicketRight(Id);
  };
  const ticketPopUpController = () => {
    console.log("clicked");
    setShowTicket(!showTicket);
  };
  const [showTicket, setShowTicket] = useState(false);
  return (
    <div className="ticket">
      <h5 className="ticket__title" onClick={ticketPopUpController}>
        {title}
      </h5>
      <p className="ticket__body"></p>
      <div className="ticket__actions">
        {boardId !== 1 && (
          <ArrowBackIcon fontSize="large" onClick={onClickLeftButton} />
        )}
        {boardId < 3 && (
          <ArrowForwardIcon fontSize="large" onClick={onClickRightButton} />
        )}
      </div>
      {showTicket && (
        <TicketPopUp
          title={title}
          details={details}
          ticketPopUpController={ticketPopUpController}
        />
      )}
    </div>
  );
}

export default Ticket;
