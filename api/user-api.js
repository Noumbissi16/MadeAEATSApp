import { BASE_URL, authAxiosInstance } from "./config";

export class UserApi {
  static async signUpUser(user) {
    const userResponse = await authAxiosInstance.post("/signup", {
      name: user.name,
      email: user.email,
      password: user.motDePasse,
    });
    return userResponse.data;
  }

  static async signInUser(user) {
    const userResponse = await authAxiosInstance.post("/signin", {
      email: user.email,
      password: user.motDePasse,
    });
    return userResponse.data;
  }

  static async updateProfile() {}
}
