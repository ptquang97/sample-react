import { getCities } from "@/api/apiCity"
import { selector } from "recoil"

export const citiesSelector = selector({
  key: "citiesSelector",
  get: async () => {
    const data: any = await getCities()
    return data?.content || []
  },
})
