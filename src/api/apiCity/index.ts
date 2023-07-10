import Api from "@/api"

export const getCities = async () => {
  const res = await Api.get(
    "/mdata/search-don-vi-hanh-chinh?code&name&parentId&status&page&size&sort"
  )
  return res
}
