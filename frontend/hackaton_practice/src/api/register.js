import axios from "axios"
import { baseUrl } from "../config/config"

export const handleSubmitForm = async (data) => {
  console.log(data, "the data")
  const response = await axios({
    url: `${baseUrl}/register`,
    method: "POST",
    data: data,
    withCredentials: true,

    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
  return response

}