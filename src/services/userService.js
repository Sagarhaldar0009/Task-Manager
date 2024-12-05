import { httpAxios } from "@/helper/httpHelper";

export async function signUp(user) {
    // Calling the API for post the User Details
  const result = await httpAxios
    .post("/api/users", user)
    .then((response) => response.data);

  return result;
}

// Login API Call
export async function login(loginData) {
  const result = await httpAxios
    .post("/api/login", loginData)
    .then((response) => response.data);
  return result;
}

// export async function currentUser() {
//   const result = await httpAxios
//     .get("/api/current")
//     .then((response) => response.data);
//   return result;
// }

// export async function logout() {
//   const result = await httpAxios
//     .post("/api/logout")
//     .then((response) => response.data);
//   return result;
// }