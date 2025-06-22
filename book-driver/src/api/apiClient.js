import axios from "axios";

const axiosCLient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    // header là cách giao tiếp giữa client và server thông qua url này
    // có thể là "Authorization": "Bearer abc.def.ghi"
    "Content-Type": "application/json",
  },
});

export default axiosCLient;
