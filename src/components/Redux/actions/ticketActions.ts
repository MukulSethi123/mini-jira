import { TicketActionConstants } from "./actionConstants";
const getTicketsSuccess = (allTickets: any) => {
  console.log("eheh");
  return {
    type: TicketActionConstants.GET_ALL_TICKETS,
    initialState: allTickets,
  };
};
export const getAllTickets = () => async (dispatch: any) => {
  const res = await fetch("http://localhost:3080").then((res) => res.json());
  dispatch(getTicketsSuccess(res));
};
export const moveToLeft = (id: number) => {
  return { type: TicketActionConstants.MOVE_TO_LEFT, Id: id };
};
export const moveToRight = (id: number) => {
  return { type: TicketActionConstants.MOVE_TO_RIGHT, Id: id };
};

export const addTicket = (obj: object): any => {
  return { type: TicketActionConstants.ADD_TICKET, newTicket: obj };
};

export const editTicket = (obj: object) => {
  return { type: TicketActionConstants.EDIT_TICKET, updateTicket: obj };
};

export const deleteTicket = (id: number) => {
  return { type: TicketActionConstants.DELETE_TICKET, Id: id };
};
