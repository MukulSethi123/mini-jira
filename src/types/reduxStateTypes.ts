interface BoardListState {
  title: string;
  Id: number;
  ticketList: number[];
}
interface allTicketsState {
  Id: number;
  boardId: number;
  title: string;
  details: string;
}
export interface RootState {
  board: BoardListState[];
  tickets: allTicketsState[];
}
