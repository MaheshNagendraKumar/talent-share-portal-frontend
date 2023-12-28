import { BASE_URL } from './baseUrl';
import {User} from '../models/User';
import axios from 'axios';

const userApi = {
  url: BASE_URL + "users/",

  registerUser: (user:User) => {
    console.log("user", user);
     return axios.post(userApi.url, user)
  },

  loginUser:(loginData:any)=>{
    console.log("loginData", loginData);
    
    return axios.post(userApi.url, loginData)
  }



}

export default userApi