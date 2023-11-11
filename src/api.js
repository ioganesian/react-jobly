import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 *
 */

class JoblyApi {
  // Backend needs to be authorized with a token
  // Token for interacting with the API:
  static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get user data by username.
   *
   * returns res.user: { username, firstName, lastName, isAdmin, jobs }
  */
  static async getUserData(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /** Login with username & password.
   *
   * loginData = {username, password}
   *
   * returns token
  */

  static async login(loginData) {
    let res = await this.request(`auth/token`, loginData, "post");
    return res.token;
  }

  /** Register new user.
   *
   * signUpData = {
   *"username": "user",
   *"password": "password",
   *"firstName": "first",
   *"lastName": "last",
   *"email": "email@email.com",
   *"isAdmin": true
   * }
   */

  static async signUp(signUpData) {
    let res = await this.request(`auth/register`, signUpData, "post");
    return res.token;
  }

  /** Edit user profile with form data.
   *
   * data : {username, firstName, lastName, email}
   *
   */

  // static async editProfile(username, data) {
  //   let res = await this.request(`users/${username}`, data, "patch");
  //   return res.user;
  // }

  /** Get details on a company by handle.
   *
   * res.company is { handle, name, description, numEmployees, logoUrl, jobs }
   *   where jobs is [{ id, title, salary, equity }, ...]
  */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    // console.log()
    return res.company;
  }

  /** Get array of jobs by title
   *
   * res.jobs= {jobs:
   * [{ id, title, salary, equity, companyHandle, companyName }]}
   */

  static async getJobs(title) {
    let res = await this.request(`jobs`, { title });
    return res.jobs;
  }

  /** Apply to a job */

  // static async applyToJob(username, id) {
  //   await this.request(`users/${username}/jobs/${id}`, {}, "post");
  // }

  /** Get array of companies with optional nameLike filter
   *
   * res.companies= { companies:
   * [ { handle, name, description, numEmployees, logoUrl }, ...] }
   */

  static async getCompanies(nameLike) {
    let res = await this.request(`companies`, { nameLike });
    return res.companies;
  }

  /** Save user profile page. */

  // static async saveProfile(username, data) {
  //   let res = await this.request(`users/${username}`, data, "patch");
  //   return res.user;
  // }

}

export default JoblyApi;