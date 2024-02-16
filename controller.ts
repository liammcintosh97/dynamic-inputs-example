import { isMobile } from "./util";
import Vector2 from "./vector2";

type EventType =  "keydown" | "keyup"

export class Controller{
  direction: Vector2;
  isMobile: boolean;
  pos: Vector2
  prevPos: Vector2

  constructor(){
    this.direction = new Vector2(0,0)
    this.prevPos = new Vector2(0,0)
    this.pos = new Vector2(0,0)
    this.isMobile = isMobile()

    this.init = this.init.bind(this)
    this.initTouchListener = this.initTouchListener.bind(this)
    this.initKeyboardListener = this.initKeyboardListener.bind(this)
    this.interporateKey = this.interporateKey.bind(this)
    this.onKeyEvent = this.onKeyEvent.bind(this)
    this.onTouchStart = this.onTouchStart.bind(this)
    this.onTouchEnd = this.onTouchEnd.bind(this)
    this.onTouchCancel = this.onTouchCancel.bind(this)
    this.onTouchMove = this.onTouchMove.bind(this)

    window.addEventListener("load",()=> {this.init()})
  }

  init(){
    if(this.isMobile) this.initTouchListener()
    else this.initKeyboardListener()
  }

  initTouchListener(){
    const el = document.getElementsByTagName("canvas")[0];
    if(el){
      const style = {
        height: "100%",
        overflow: "hidden",
        width: "100%",
        position: "fixed",
      }
      Object.keys(style).forEach((key)=>el.style[key] = style[key])

      document.addEventListener("touchstart", this.onTouchStart);
      document.addEventListener("touchend", this.onTouchEnd);
      document.addEventListener("touchcancel", this.onTouchCancel);
      document.addEventListener("touchmove", this.onTouchMove);
      console.log("Touch listener initialised")
    }
  }

  initKeyboardListener(){
    document.addEventListener("keydown",(event)=>this.onKeyEvent(event,"keydown"))
    document.addEventListener("keyup",(event)=>this.onKeyEvent(event,"keyup"))
    console.log("Keyboard listener initialised")
  }

  onKeyEvent(event:KeyboardEvent,type: EventType){
    if (event.defaultPrevented) return
    this.interporateKey(event.key,type)
    event.preventDefault();
  }

  onTouchStart(ev: TouchEvent) {
    const touch = ev.touches[0]
    this.pos = new Vector2(touch.pageX,touch.pageY)

    const dir = Vector2.subtract(this.prevPos,this.pos)
    const normalDir =  Vector2.normalize(dir)
    console.log(dir)

    if(normalDir){
      this.direction = {
        x: Math.min(Math.max(normalDir.x, -1), 1),
        y: Math.min(Math.max(normalDir.y, -1), 1)
      }
    }
    
    this.prevPos = this.pos
  }

  onTouchEnd(ev: TouchEvent) {
    this.direction = new Vector2(0,0)
  }

  onTouchCancel(ev: TouchEvent) {
    this.direction = new Vector2(0,0)
  }

  onTouchMove(ev: TouchEvent) {
    const touch = ev.touches[0]
    this.pos = new Vector2(touch.pageX,touch.pageY)

    const dir = Vector2.subtract(this.prevPos,this.pos)
    const normalDir =  Vector2.normalize(dir)
    console.log(dir)

    if(normalDir){
      this.direction = {
        x: Math.min(Math.max(normalDir.x, -1), 1),
        y: Math.min(Math.max(normalDir.y, -1), 1)
      }
    }
    
    this.prevPos = this.pos
  }

  interporateKey(key:string,eventType: EventType){
    const d = this.direction
  
    if(eventType === "keydown"){     
      if(key === "w") d.y = 1
      if(key === "a") d.x = -1
      if(key === "s") d.y = -1
      if(key === "d") d.x = 1     
    }
    else if(eventType === "keyup"){
      if(key === "w") d.y = 0
      if(key === "a") d.x = 0
      if(key === "s") d.y = 0
      if(key === "d") d.x = 0 
    }

    this.direction = d
    console.log(this.direction)
  }


}
