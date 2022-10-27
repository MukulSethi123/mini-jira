import { BoardActionsConstants } from "./actionConstants";

export const addBoard = () => {
  return { type: BoardActionsConstants.ADD_BOARD };
};

export const deleteBoard = () => {
  return { type: BoardActionsConstants.DELETE_BOARD };
};
