import axios, { AxiosResponse } from "axios";
import { IUser } from "../interfaces";
import { API_URL } from "../constants";

const userService = {
  async fetchUsers(): Promise<AxiosResponse<IUser[]> | []> {
    try {
      return await axios.get<IUser[]>(API_URL);
    } catch (e) {
      console.log(e);
    }
    return [];
  }
}

export { userService }