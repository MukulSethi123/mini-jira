import { TicketActionConstants } from "./actionConstants";
import axios from "axios";
const getTicketsSuccess = (allTickets: any) => {
  return {
    type: TicketActionConstants.GET_ALL_TICKETS,
    initialState: allTickets,
  };
};
export const getAllTickets = () => async (dispatch: any) => {
  const res = await fetch("http://localhost:3080").then((res) => res.json());
  dispatch(getTicketsSuccess(res));
};
const moveToLeftSuccess = (id: number) => {
  return { type: TicketActionConstants.MOVE_TO_LEFT, Id: id };
};
export const moveToLeft =
  (id: number, boardId: number): any =>
  (dispatch: any) => {
    //optimistic
    axios({
      method: "post",
      url: "http://localhost:3080/update/",
      data: { id: id, boardId: boardId - 1 },
    });
    dispatch(moveToLeftSuccess(id));
  };
const moveToRightSuccess = (id: number) => {
  return {
    type: TicketActionConstants.MOVE_TO_RIGHT,
    Id: id,
  };
};

export const moveToRight =
  (id: number, boardId: number): any =>
  (dispatch: any) => {
    // optimistic
    axios({
      method: "post",
      url: "http://localhost:3080/update/",
      data: { id: id, boardId: boardId + 1 },
    });
    dispatch(moveToRightSuccess(id));
  };

const addTicketSuccess = (obj: object): any => {
  return { type: TicketActionConstants.ADD_TICKET, newTicket: obj };
};

export const addTicket =
  (obj: object): any =>
  (dispatch: any) => {
    //not optimistic
    axios({
      method: "post",
      url: "http://localhost:3080/",
      data: obj,
    }).then(() => {
      dispatch(addTicketSuccess(obj));
    });
  };

export const editTicket = (obj: object) => {
  return { type: TicketActionConstants.EDIT_TICKET, updateTicket: obj };
};

const deleteTicketSuccess = (id: number) => {
  return { type: TicketActionConstants.DELETE_TICKET, Id: id };
};

export const deleteTicket =
  (id: number): any =>
  (dispatch: any) => {
    axios({
      method: "post",
      url: `http://localhost:3080/delete/${id}`,
    }).then(() => {
      dispatch(deleteTicketSuccess(id));
    });
  };
