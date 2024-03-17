import axios from "axios";
import { BASE_URL } from "./config";

export class RestaurantAPI {
  static async buyRepas() {
    try {
      return (await axios.post(BASE_URL)).data;
    } catch (error) {
      throw error;
    }
  }

  static async fetchAll() {
    return (await axios.get(BASE_URL)).data;
  }
}
