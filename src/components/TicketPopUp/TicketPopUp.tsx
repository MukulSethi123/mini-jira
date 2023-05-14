import React, { useRef, useState } from "react";
import "./_ticketPopUp.sscss";
import { editTicket, deleteTicket } from "../Redux/actions/ticketActions";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
interface TicketPopUpProps {
  id: number;
  boardId: number;
  title: string;
  details: string;
  ticketPopUpController(): void;
}
function TicketPopUp({
  id,
  boardId,
  title,
  details,
  ticketPopUpController,
}: TicketPopUpProps) {
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDetails, setEditedDetails] = useState(details);
  const editTitleRef = useRef(null);
  const dispatch = useDispatch();
  const onDeleteClick = () => {
    dispatch(deleteTicket(id));
    ticketPopUpController();
  };
  const titleOnChange = (e: any) => {
    setEditedTitle(e.target.value);
    if (editedTitle.length > 25) {
      console.log("max length 15");
    }
  };

  const detailsOnChange = (e: any) => {
    setEditedDetails(e.target.value);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      dispatch(
        editTicket({
          Id: id,
          title: editedTitle,
          details: editedDetails,
        })
      );
      setEditMode(false);
    }
  };

  return (
    <nav className="ticketPopUp">
      <div className="ticketPopUp__closeButton clickable">
        <CloseIcon fontSize="large" onClick={ticketPopUpController} />
      </div>
      <div className="ticketPopUp__body" onKeyDown={handleKeyPress}>
        <div
          className="ticketPopUp__header"
          onClick={(e) => {
            if (e.detail === 2) setEditMode(!editMode);
          }}
        >
          {!editMode ? (
            <h1>{title}</h1>
          ) : (
            <input
              ref={editTitleRef}
              value={editedTitle}
              name="editTitle"
              onChange={titleOnChange}
            />
          )}
          <h1>
            <DeleteIcon
              fontSize="large"
              onClick={onDeleteClick}
              color="error"
              className="clickable"
            />
          </h1>
        </div>
        <div className="ticketPopUp__details">
          {!editMode ? (
            <p>{details}</p>
          ) : (
            <textarea onChange={detailsOnChange}>{details}</textarea>
          )}
        </div>
      </div>
    </nav>
  );
}

export default TicketPopUp;
