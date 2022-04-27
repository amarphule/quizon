import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const quizzes = [
  {
    _id: uuid(),
    title: "Friends",
    totalScore: 10,
    mcqs: [
      {
        _id: uuid(),
        question: "Monica is Ross's .....",
        options: ["Fiancee", "Sister", "Wife", "Mother"],
        answer: "Sister",
      },
      {
        _id: uuid(),
        question: "How many pages long was Rachel's letter to Ross?",
        options: ["8", "15", "16", "18"],
        answer: "18",
      },
      {
        _id: uuid(),
        question: "What did Monica and Chandler name their twins?",
        options: [
          "Jack and Erica",
          "Chandler and Judy",
          "Chandler and Eric",
          "Jack and Judy",
        ],
        answer: "Jack and Erica",
      },
      {
        _id: uuid(),
        question:
          "Who was the last friend to find out about Monica and Chandler?",
        options: ["Joey", "Ross", "Rachel", "Phoebe"],
        answer: "Ross",
      },
      {
        _id: uuid(),
        question:
          "If you want to be friends with Joey, you'd better be able to finish this quote:'Joey doesn't share ...'",
        options: ["Drinks", "Food", "Girls", "Hair gel"],
        answer: "Food",
      },
    ],
    catergoryName: "TV Show",
  },
  {
    _id: uuid(),
    title: "Big Bang Theory",
    totalScore: 10,
    mcqs: [
      {
        _id: uuid(),
        question: "What season did Leonard & Penny get married?",
        options: ["1", "7", "5", "9"],
        answer: "9",
      },
      {
        _id: uuid(),
        question: "What job has Penny not had?",
        options: [
          "Waitress",
          "Actress",
          "Taxi driver",
          "Pharmaceutical Sales Rep",
        ],
        answer: "Taxi driver",
      },
      {
        _id: uuid(),
        question: "What is Amy's Ph.D. in?",
        options: [
          "Microbiology",
          "Neurobiology",
          "Astro Physics",
          "Psychology",
        ],
        answer: "Neurobiology",
      },
      {
        _id: uuid(),
        question: "What is the name of Sheldon's sister?",
        options: ["Missy", "Janie", "Lori", "Carrie"],
        answer: "Missy",
      },
      {
        _id: uuid(),
        question: "What did Howard and Bernadette name their daughter?",
        options: ["Cassandra", "Halley", "Marie", "Penny"],
        answer: "Halley",
      },
    ],
    catergoryName: "TV Show",
  },
  {
    _id: uuid(),
    title: "Money Heist",
    totalScore: 10,
    mcqs: [
      {
        _id: uuid(),
        question:
          "How many people did The Professor recruit to carry out the plan to occupy the Royal Mint of Spain?",
        options: ["8", "9", "10", "11"],
        answer: "8",
      },
      {
        _id: uuid(),
        question:
          "Inspector Raquel's mother suffers from what medical condition?",
        options: [
          "Alzheimer's Disease",
          "Paranoid Schizophrenia",
          "Post-Traumatic Stress Disorder",
          "Cancer",
        ],
        answer: "Alzheimer's Disease",
      },
      {
        _id: uuid(),
        question: "How much currency does the gang print at the Royal Mint?",
        options: [
          "879 million euros",
          "926 million euros",
          "984 million euros",
          "777 million euros",
        ],
        answer: "984 million euros",
      },
      {
        _id: uuid(),
        question:
          "The Professor's first name is eventually revealed. What is it?",
        options: ["Andrés", "Aníbal", "Sergio", "Racquel"],
        answer: "Sergio",
      },
      {
        _id: uuid(),
        question:
          "The show is actually called La Casa de Papel, which literally translates to what?",
        options: [
          "The House ",
          "The Outcasts",
          "The House of Outcasts",
          "The Paper House",
        ],
        answer: "The Paper House",
      },
    ],
    catergoryName: "TV Show",
  },
];
