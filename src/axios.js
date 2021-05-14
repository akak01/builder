import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://builder-883f2-default-rtdb.firebaseio.com";

export default instance;