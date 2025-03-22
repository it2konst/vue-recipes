import axios from "axios";
import { URL_RECIPES_BY_LETTER, URL_RECIPE_BY_ID } from "@/constants";

export const getRecipesByLetter = async (letter) => {
  const response = await axios.get(URL_RECIPES_BY_LETTER);
  return response.data?.meals;
};

export const getRecipeById = async (id) => {
  // const response = await axios.get(URL_RECIPE_BY_ID + id);
  const response = await axios.get(`${URL_RECIPE_BY_ID}${id}`);
  return response.data?.meals[0];
};
