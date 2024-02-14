import type { Controller } from "./controller"
import { isMobile } from "./util"

const keyboardController = document.getElementsByClassName("keyboardController")[0] as HTMLElement
const w = document.getElementById("w")
const a = document.getElementById("a")
const s = document.getElementById("s")
const d = document.getElementById("d")
const pressedOpacity = "0.5"

export default class UI{
  controller: Controller
  isMobile: boolean
  constructor(controller: Controller){
    this.controller = controller
    this.isMobile = isMobile()

    if(this.isMobile) keyboardController.style.display = "none"
  }

  update(){
    if(this.isMobile) return
    const dir = this.controller.direction

    if(!w){console.error("UI key \"W\" is invalid"); return }
    if(!a){console.error("UI key \"A\" is invalid"); return }
    if(!s){console.error("UI key \"S\" is invalid"); return }
    if(!d){console.error("UI key \"D\" is invalid"); return }

    if(dir.y == 1) w.style.opacity = pressedOpacity
    if(dir.x == -1) a.style.opacity = pressedOpacity
    if(dir.y == -1) s.style.opacity = pressedOpacity
    if(dir.x == 1) d.style.opacity = pressedOpacity

    if(dir.y == 0) w.style.opacity = "1"
    if(dir.x == 0) a.style.opacity = "1"
    if(dir.y == 0) s.style.opacity = "1"
    if(dir.x == 0) d.style.opacity = "1"
  }
}

