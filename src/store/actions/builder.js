import axios from "../../axios";
import { ADD_MACAROON, REMOVE_MACAROON, SET_MACAROONS } from "./types";

export const add = (macaroon) => ({
  type: ADD_MACAROON,
  macaroon: macaroon
});

export const remove = (macaroon) => ({
  type: REMOVE_MACAROON,
  macaroon: macaroon
});

export const set = (data) => ({
  type: SET_MACAROONS,
  data: data
});

export const load = () => {
  return (dispatch) => axios
    .get('/default.json')
    .then(response => dispatch(set(response.data)));
}