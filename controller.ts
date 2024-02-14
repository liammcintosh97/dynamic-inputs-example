import { isMobile } from "./util";

type EventType =  "keydown" | "keyup"

export class Controller{
  direction: {x:number,y:number};
  isMobile: boolean;

  constructor(){
    this.direction ={
      x:0,
      y:0
    },
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
      el.addEventListener("touchstart", this.onTouchStart);
      el.addEventListener("touchend", this.onTouchEnd);
      el.addEventListener("touchcancel", this.onTouchCancel);
      el.addEventListener("touchmove", this.onTouchMove);
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
    console.log("onTouchStart",ev)
  }

  onTouchEnd(ev: TouchEvent) {
    console.log("onTouchEnd",ev)
  }

  onTouchCancel(ev: TouchEvent) {
    console.log("onTouchCancel",ev)
  }

  onTouchMove(ev: TouchEvent) {
    console.log("onTouchMove",ev)
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
