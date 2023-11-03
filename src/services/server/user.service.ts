import { child, get, getDatabase, onValue, ref, set } from "firebase/database";
import { User } from "../utils/types";
import firebase_app from "../../firebase/firebase-config";

const db = getDatabase(firebase_app);

class UserService {
  async getAll() {
    const allUsers = await get(child(ref(db), "/users"));
    return allUsers;
  }

  async create(user: User) {
    return set(ref(db, "users/" + user.username), {
      name: user.name,
      password: user.password,
    });
  }
}

export default new UserService();
