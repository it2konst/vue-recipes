import axios from "axios";
import { URL_RECIPES_BY_LETTER } from "@/constants";

export const getRecipesByLetter = async (letter) => {
  const response = await axios.get(URL_RECIPES_BY_LETTER);
  return response.data;
};

// export { getRecipesByLetter };
