import store from "@/store";
import { SET_LOADING } from "@/store/mutation-types";
import axios from "axios";
import notification from "../utils/notification";

function catchError(err: any) {
  if (!err.response)
    return notification({
      type: "error",
      title: "Network error, please try again later.",
    });
  notification({
    type: "error",
    text:
      err.response.data.message ||
      err.response.data.error.message ||
      "Unknown error.",
  });
}

export default function setup() {
  axios.interceptors.request.use(
    (config) => {
      store.commit(SET_LOADING, true, { root: true });
      return config;
    },
    (err) => Promise.reject(err)
  );
  axios.interceptors.response.use(
    (response) => {
      store.commit(SET_LOADING, false, { root: true });
      return response;
    },
    (err) => {
      store.commit(SET_LOADING, false, { root: true });
      catchError(err);
      return Promise.reject(err);
    }
  );
}
