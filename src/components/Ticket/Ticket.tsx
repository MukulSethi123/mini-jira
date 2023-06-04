import React, { useState } from "react";
import TicketPopUp from "../TicketPopUp/TicketPopUp";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import "./_ticket.scss";
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
    setShowTicket(!showTicket);
  };
  const [showTicket, setShowTicket] = useState(false);
  return (
    <div className="ticket">
      <div className="ticket__top">
        <h3 className="ticket__title clickable" onClick={ticketPopUpController}>
          {title}
        </h3>

        <p className="ticket__details">{details}</p>
      </div>
      <div className="ticket__actions clickable">
        {boardId !== 1 && (
          <ArrowLeftRoundedIcon fontSize="large" onClick={onClickLeftButton} />
        )}
        {boardId < 3 && (
          <ArrowRightRoundedIcon
            fontSize="large"
            onClick={onClickRightButton}
          />
        )}
      </div>
      {showTicket && (
        <TicketPopUp
          id={Id}
          boardId={boardId}
          title={title}
          details={details}
          ticketPopUpController={ticketPopUpController}
        />
      )}
    </div>
  );
}

export default Ticket;
