import axios, { AxiosResponse } from "axios"

const Api = axios.create({
  baseURL: import.meta.env.VITE_API,
  timeout: 5000,
})

Api.interceptors.response.use(
  (res: AxiosResponse) => {
    return res.data?.result || res.data
  },
  (error) => {
    console.error(error?.message || error)
  }
)

export default Api
