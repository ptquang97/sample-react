import { Divider, Layout, Menu, MenuProps } from "antd"
import { MacScrollbar } from "mac-scrollbar"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import MenuItems from "./MenuItems"
import UserAction from "./UserAction"

const Sider = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [collapsed, setCollapsed] = useState(false)
  const [selectedKeys, setSelectedKeys] = useState<string[]>([
    location.pathname,
  ])

  const handleCollapse = () => setCollapsed(!collapsed)

  const handleSelectMenu: MenuProps["onSelect"] = ({ selectedKeys }) => {
    setSelectedKeys(selectedKeys)
    navigate(selectedKeys[0])
  }

  useEffect(() => {
    if (location.pathname !== selectedKeys[0])
      setSelectedKeys([location.pathname])
  }, [location])

  return (
    <Layout.Sider
      collapsible
      collapsed={collapsed}
      onCollapse={handleCollapse}
      theme="dark"
      width={250}
    >
      <UserAction collapsed={collapsed} />
      <Divider className="mt-0 mb-2 border-gray-500" />
      <MacScrollbar
        className="h-[calc(100vh-64px)] overflow-x-hidden"
        trackStyle={() => ({
          background: "transparent",
          borderLeft: "none",
        })}
      >
        <Menu
          theme="dark"
          mode="inline"
          items={MenuItems}
          selectedKeys={selectedKeys}
          onSelect={handleSelectMenu}
        />
      </MacScrollbar>
    </Layout.Sider>
  )
}

export default Sider
