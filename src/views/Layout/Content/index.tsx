import { LoadingFallback } from "@/components/Loading"
import { atomContainerScroll } from "@/recoil/atoms/config"
import { Layout } from "antd"
import { MacScrollbar } from "mac-scrollbar"
import { Ref, Suspense } from "react"
import { Outlet } from "react-router-dom"
import { useSetRecoilState } from "recoil"

const Content = () => {
  const setContainerScroll = useSetRecoilState(atomContainerScroll)

  return (
    <MacScrollbar
      className="h-screen overflow-x-hidden relative bg-white"
      trackStyle={() => ({
        background: "transparent",
        borderLeft: "none",
      })}
      ref={setContainerScroll as Ref<HTMLElement> | undefined}
    >
      <Layout.Content className="px-5 pt-5">
        <Suspense fallback={<LoadingFallback />}>
          <Outlet />
        </Suspense>
      </Layout.Content>
    </MacScrollbar>
  )
}

export default Content
