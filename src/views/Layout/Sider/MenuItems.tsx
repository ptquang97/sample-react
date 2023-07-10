import { MenuProps } from "antd"
import { FaCity } from "react-icons/fa"

const MenuItems: MenuProps["items"] = [
  {
    key: "/city",
    label: "City",
    icon: <FaCity />,
  },
]

export default MenuItems
