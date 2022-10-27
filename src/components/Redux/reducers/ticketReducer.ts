import state from "./../State";
import { TicketActionConstants } from "../actions/actionConstants";
const ticketReducer = (initialState = state.allTickets, action: any) => {
  switch (action.type) {
    case TicketActionConstants.ADD_TICKET:
      return initialState;
    case TicketActionConstants.DELETE_TICKET:
      return initialState;
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
