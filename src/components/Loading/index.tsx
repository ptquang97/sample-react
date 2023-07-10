import { Spin } from "antd"

export const LoadingFallback = () => {
  return (
    <div className="absolute top-[50%] left-[50%] z-10 flex items-center justify-center">
      <Spin size="large" />
    </div>
  )
}
