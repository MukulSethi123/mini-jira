import { TicketActionConstants } from "./actionConstants";
export const moveToLeft = (id: number) => {
  return { type: TicketActionConstants.MOVE_TO_LEFT, Id: id };
};
export const moveToRight = (id: number) => {
  return { type: TicketActionConstants.MOVE_TO_RIGHT, Id: id };
};
