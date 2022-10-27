const state = {
  boardList: [
    {
      title: "TO-DO",
      Id: 1,
      ticketList: [1, 2, 4],
    },
    {
      title: "In-Dev",
      Id: 2,
      ticketList: [3],
    },
    {
      title: "Accepted",
      Id: 3,
      ticketList: [5],
    },
  ],
  allTickets: [
    {
      Id: 1,
      boardId: 1,
      title: "write task 1",
      details: "do this and that",
    },
    {
      Id: 2,
      boardId: 1,
      title: "write task 2",
      details: "do this and that",
    },
    {
      Id: 3,
      boardId: 1,
      title: "write task 3",
      details: "do this and that",
    },
    {
      Id: 4,
      boardId: 2,
      title: "write task 4",
      details: "do this and that",
    },
    {
      Id: 5,
      boardId: 2,
      title: "write task 5",
      details: "do this and that",
    },
    {
      Id: 6,
      boardId: 3,
      title: "write task 6",
      details: "do this and that",
    },
  ],
};

export default state;
