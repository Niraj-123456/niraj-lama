import axios from "axios";
import { config } from "../lib/config";

export async function getAllSpells() {
  return axios.get(`${config.baseUrl}/spells`);
}

export async function getSpellByIndex(index: string) {
  return axios.get(`${config.baseUrl}/spells/${index}`);
}
