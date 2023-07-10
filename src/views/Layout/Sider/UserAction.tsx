import { Avatar, Button, Dropdown, MenuProps, Typography } from "antd"
import { memo } from "react"
import { AiOutlineUser } from "react-icons/ai"
import { RxCaretRight } from "react-icons/rx"

const items: MenuProps["items"] = [
  {
    label: "1st menu item",
    key: "1",
    icon: <AiOutlineUser size={16} />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <AiOutlineUser size={16} />,
  },
  {
    label: "3rd menu item",
    key: "3",
    icon: <AiOutlineUser size={16} />,
  },
]

const handleMenuClick: MenuProps["onClick"] = (e) => {
  console.log("click", e)
}

const menuProps = {
  items,
  onClick: handleMenuClick,
}

interface Props {
  collapsed: boolean
}

const UserAction = ({ collapsed }: Props) => {
  return (
    <Dropdown
      menu={menuProps}
      overlayClassName={`
        ${!collapsed ? "left-[255px]" : "left-[85px]"} top-[5px] 
      `}
      trigger={["click"]}
    >
      <Button
        type="link"
        className={`
          w-full h-fit flex items-center gap-3 my-2 ${
            !collapsed ? "justify-start" : "justify-center"
          }
        `}
      >
        <Avatar
          icon={<AiOutlineUser />}
          size={"large"}
          className={`flex items-center justify-center bg-gray-500`}
        />
        {!collapsed && (
          <div className="flex-1 flex items-center">
            <Typography.Text className="overflow-hidden flex-1 text-left text-gray-200">
              User name
            </Typography.Text>
            <RxCaretRight size={20} className="text-gray-200" />
          </div>
        )}
      </Button>
    </Dropdown>
  )
}

export default memo(UserAction)
