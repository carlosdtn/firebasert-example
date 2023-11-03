import { clientRequest } from "../utils";
import { User } from "../utils/types";

export class UserService {
  async getAll() {
    return clientRequest("/api/users", {
      method: "GET",
    });
  }
  async create(user: User) {
    return clientRequest("/api/users", {
      method: "POST",
      body: JSON.stringify(user),
    });
  }
}

export default new UserService();
