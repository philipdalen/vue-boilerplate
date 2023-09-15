import VideoPlayer from "@/pages/VideoPlayer.vue"
import { RouteRecordRaw } from "vue-router"

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: VideoPlayer,
  },
]
