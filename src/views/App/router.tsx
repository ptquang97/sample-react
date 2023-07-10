import RouterHOC from "@/hoc/RouterHOC"
import Layout from "@/views/Layout"
import { lazy } from "react"
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom"

const Signin = lazy(() => import("@/views/Auth/Signin"))
const Welcome = lazy(() => import("@/views/Welcome"))
const City = lazy(() => import("@/views/City"))

const privateRoute: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: "city",
        element: <City />,
      },
    ],
  },
]

const rootRoute: RouteObject[] = [
  {
    path: "/",
    element: <RouterHOC />,
    children: privateRoute,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
]

const router = createBrowserRouter(rootRoute)

const Router = () => {
  return <RouterProvider router={router} />
}

export default Router
