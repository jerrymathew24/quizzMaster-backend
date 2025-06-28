import { v4 as uuid } from "uuid";

export const userData = {
  users: [
    {
      id: uuid(),
      userName: "John",
      password: "password123",
      email: "john@mail.com",
    },
    {
      id: uuid(),
      userName: "Jane",
      password: "mypassword",
      email: "jane@mail.com",
    },
    {
      id: uuid(),
      userName: "Alice Johnson",
      password: "alicepass",
      email: "alice@mail.com",
    },
    {
      id: uuid(),
      userName: "Bob Brown",
      password: "bobpass",
      email: "bob@mail.com",
    },
    {
      id: uuid(),
      userName: "Charlie White",
      password: "charliepass",
      email: "charlie@mail.com",
    },
  ],
};
