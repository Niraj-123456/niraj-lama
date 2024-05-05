import axios from "axios";
import { config } from "../utils/config";

export async function getAllSpells() {
  return axios.get(`${config.baseUrl}/spells`);
}
