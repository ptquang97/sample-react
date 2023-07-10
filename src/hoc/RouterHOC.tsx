import { authAtom } from "@/recoil/atoms/auth"
import { memo } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useRecoilValue } from "recoil"

const RouterHOC = () => {
  const auth = useRecoilValue(authAtom)

  if (auth) return <Outlet />
  return <Navigate to="/signin" replace={true} />
}

export default memo(RouterHOC)
