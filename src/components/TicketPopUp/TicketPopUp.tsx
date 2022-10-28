import React from "react";
import "./_ticketPopUp.css";
import CloseIcon from "@mui/icons-material/Close";
interface TicketPopUpProps {
  title: string;
  details: string;
  ticketPopUpController(): void;
}
function TicketPopUp({
  title,
  details,
  ticketPopUpController,
}: TicketPopUpProps) {
  return (
    <div className="ticketPopUp" onBlur={ticketPopUpController}>
      <div className="ticketPopUp__closeButton">
        <CloseIcon onClick={ticketPopUpController} />
      </div>
      <div className="ticketPopUp__body">
        <div className="ticketPopUp__header">
          <h1>{title}</h1>
        </div>
        <div className="ticketPopUp__details">
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
}

export default TicketPopUp;
