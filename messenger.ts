export default class Messenger{

  constructor(){
    window.addEventListener('message', message => {
      console.log("dynamics-inputs-example recieved a message - ",message)
      this.sendMessage("dynamics-inputs-example recieved your message")
    });
  }

  sendMessage(message:string){
    console.log("dynamics-inputs-example is posting a message - ", message)
    window.postMessage(message)
  }
}