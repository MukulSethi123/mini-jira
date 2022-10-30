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
    <nav className="ticketPopUp">
      <div className="ticketPopUp__closeButton">
        <CloseIcon fontSize="large" onClick={ticketPopUpController} />
      </div>
      <div className="ticketPopUp__body">
        <div className="ticketPopUp__header">
          <h1>{title}</h1>
        </div>
        <div className="ticketPopUp__details">
          <p>{details}</p>
        </div>
      </div>
    </nav>
  );
}

export default TicketPopUp;
