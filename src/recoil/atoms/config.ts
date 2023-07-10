import { atom } from "recoil"

export const atomContainerScroll = atom({
  key: "atomContainerScroll",
  default: null as HTMLDivElement | null,
})
