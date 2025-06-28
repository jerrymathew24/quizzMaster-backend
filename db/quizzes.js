import { v4 as uuid } from "uuid";
export const quizzes = {
  data: [
    {
      id: uuid(),
      category: "General Knowledge",
      image:
        "https://images.unsplash.com/photo-1629635604005-ac3b76405996?q=80&w=868&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "General Knowledge Quiz",
      description:
        "A quiz to test your general knowledge across various topics.",
      quizz: [
        {
          id: uuid(),
          question: "What is the capital of France?",
          options: [
            { id: uuid(), option: "Paris", isCorrect: true },
            { id: uuid(), option: "London", isCorrect: false },
            { id: uuid(), option: "Berlin", isCorrect: false },
            { id: uuid(), option: "Madrid", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "Who wrote 'To Kill a Mockingbird'?",

          options: [
            { id: uuid(), option: "Harper Lee", isCorrect: true },
            { id: uuid(), option: "Mark Twain", isCorrect: false },
            { id: uuid(), option: "Ernest Hemingway", isCorrect: false },
            { id: uuid(), option: "F. Scott Fitzgerald", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "What is the largest planet in our solar system?",
          options: [
            { id: uuid(), option: "Jupiter", isCorrect: true },
            { id: uuid(), option: "Saturn", isCorrect: false },

            { id: uuid(), option: "Earth", isCorrect: false },
            { id: uuid(), option: "Mars", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "What is the chemical symbol for gold?",
          options: [
            { id: uuid(), option: "Au", isCorrect: true },
            { id: uuid(), option: "Ag", isCorrect: false },
            { id: uuid(), option: "Pb", isCorrect: false },
            { id: uuid(), option: "Fe", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "Who painted the Mona Lisa?",
          options: [
            { id: uuid(), option: "Leonardo da Vinci", isCorrect: true },
            { id: uuid(), option: "Vincent van Gogh", isCorrect: false },
            { id: uuid(), option: "Pablo Picasso", isCorrect: false },
            { id: uuid(), option: "Claude Monet", isCorrect: false },
          ],
        },
      ],
    },
    {
      id: uuid(),
      category: "Science",
      image:
        "https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Science Quiz",
      description:
        "A quiz to test your knowledge in various scientific fields.",
      quizz: [
        {
          id: uuid(),
          question: "What is the powerhouse of the cell?",
          options: [
            { id: uuid(), option: "Mitochondria", isCorrect: true },
            { id: uuid(), option: "Nucleus", isCorrect: false },
            { id: uuid(), option: "Ribosome", isCorrect: false },
            { id: uuid(), option: "Endoplasmic Reticulum", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "What is the chemical formula for water?",
          options: [
            { id: uuid(), option: "H2O", isCorrect: true },
            { id: uuid(), option: "CO2", isCorrect: false },
            { id: uuid(), option: "O2", isCorrect: false },
            { id: uuid(), option: "NaCl", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "What is the speed of light in a vacuum?",
          options: [
            { id: uuid(), option: "299,792,458 m/s", isCorrect: true },
            { id: uuid(), option: "150,000,000 m/s", isCorrect: false },
            { id: uuid(), option: "3,000,000 m/s", isCorrect: false },
            { id: uuid(), option: "1,080,000,000 m/s", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "What is the most abundant gas in the Earth's atmosphere?",
          options: [
            { id: uuid(), option: "Nitrogen", isCorrect: true },
            { id: uuid(), option: "Oxygen", isCorrect: false },
            { id: uuid(), option: "Carbon Dioxide", isCorrect: false },
            { id: uuid(), option: "Argon", isCorrect: false },
          ],
        },
      ],
    },
    {
      id: uuid(),
      category: "History",
      image:
        "https://images.unsplash.com/photo-1607857531075-d81f84c465d3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "History Quiz",
      description:
        "A quiz to test your knowledge of historical events and figures.",
      quizz: [
        {
          id: uuid(),
          question: "Who was the first President of the United States?",
          options: [
            { id: uuid(), option: "George Washington", isCorrect: true },
            { id: uuid(), option: "Thomas Jefferson", isCorrect: false },
            { id: uuid(), option: "Abraham Lincoln", isCorrect: false },
            { id: uuid(), option: "John Adams", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "What year did World War II end?",
          options: [
            { id: uuid(), option: "1945", isCorrect: true },
            { id: uuid(), option: "1944", isCorrect: false },
            { id: uuid(), option: "1946", isCorrect: false },
            { id: uuid(), option: "1947", isCorrect: false },
          ],
        },
        {
          id: uuid(),
          question: "Who discovered penicillin?",
          options: [
            { id: uuid(), option: "Alexander Fleming", isCorrect: true },
            { id: uuid(), option: "Louis Pasteur", isCorrect: false },
            { id: uuid(), option: "Joseph Lister", isCorrect: false },
            { id: uuid(), option: "Robert Koch", isCorrect: false },
          ],
        },
      ],
    },
  ],
};
