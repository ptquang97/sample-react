import { Layout } from "antd"
import { memo } from "react"
import Content from "./Content"
import Footer from "./Footer"
import Sider from "./Sider"

const LayoutComponent = () => {
  return (
    <Layout className="h-screen bg-white">
      <Sider />
      <Layout>
        <Content />
        <Footer />
      </Layout>
    </Layout>
  )
}

export default memo(LayoutComponent)
