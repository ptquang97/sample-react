import { App, ConfigProvider } from "antd"
import { RecoilRoot } from "recoil"
import Router from "./router"

const AppComponent = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#47A6F1",
        },
      }}
    >
      <App>
        <RecoilRoot>
          <Router />
        </RecoilRoot>
      </App>
    </ConfigProvider>
  )
}

export default AppComponent
