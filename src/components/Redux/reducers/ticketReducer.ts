import state from "../State";
import { TicketActionConstants } from "../actions/actionConstants";

const ticketReducer = (initialState = state.allTickets, action: any) => {
  switch (action.type) {
    //updates the state with all the ticets fetched from backend
    case TicketActionConstants.GET_ALL_TICKETS:
      return action.initialState;
    case TicketActionConstants.ADD_TICKET:
      return [...initialState, action.newTicket];
    case TicketActionConstants.DELETE_TICKET: {
      const newState = initialState.filter(
        (tickets) => tickets.Id !== action.Id
      );
      return newState;
    }
    case TicketActionConstants.EDIT_TICKET:
      const newState = initialState.map((ticket) =>
        ticket.Id === action.updateTicket.Id
          ? {
              ...ticket,
              title: action.updateTicket.title,
              details: action.updateTicket.details,
            }
          : ticket
      );
      return newState;
    case TicketActionConstants.MOVE_TO_RIGHT: {
      const newState = initialState.map((ticket) =>
        ticket.Id === action.Id
          ? { ...ticket, boardId: ticket.boardId + 1 }
          : ticket
      );
      return newState;
    }
    case TicketActionConstants.MOVE_TO_LEFT: {
      const newState = initialState.map((ticket) =>
        ticket.Id === action.Id
          ? { ...ticket, boardId: ticket.boardId - 1 }
          : ticket
      );
      return newState;
    }
    default:
      return initialState;
  }
};
export default ticketReducer;
