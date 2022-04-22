import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "TV Show",
    name: "Friends",
    image: "Assets/friends.jpg",
    description: "Quizes based on TV shows",
  },
  {
    _id: uuid(),
    categoryName: "TV Show",
    name: "Big Bang Theory",
    image: "Assets/bigBangTheory.jpg",
    description: "Quizes based on TV shows",
  },
  {
    _id: uuid(),
    categoryName: "TV Show",
    name: "Money Heist",
    image: "Assets/moneyheist.png",
    description: "Quizes based on TV shows",
  },
];
