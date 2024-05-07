import axios from "axios";
import { config } from "../lib/config";

export async function getAllSpells(query: string) {
  return axios.get(`${config.baseUrl}/spells/?name=${query ? query : ""}`);
}

export async function getSpellByIndex(index: string) {
  return axios.get(`${config.baseUrl}/spells/${index}`);
}
