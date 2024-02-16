export type MessageData = {
  source?: string
  message?: string
}

declare global {
  var ReactNativeWebView: ReactNativeWebView
}

export interface ReactNativeWebView{
  /**
   * Posts a message to the given window. Messages can be structured objects, e.g. nested objects and arrays, can contain JavaScript values (strings, numbers, Date objects, etc), and can contain certain data objects such as File Blob, FileList, and ArrayBuffer objects.
   * Objects listed in the transfer member of options are transferred, not just cloned, meaning that they are no longer usable on the sending side.
   * A target origin can be specified using the targetOrigin member of options. If not provided, it defaults to "/". This default restricts the message to same-origin targets only.
   * If the origin of the target window doesn't match the given target origin, the message is discarded, to avoid information leakage. To send the message to the target regardless of origin, set the target origin to "*".
   * Throws a "DataCloneError" DOMException if transfer array contains duplicate objects or if message could not be cloned.
   * MDN Reference
   * 
   * @param message 
   * @param options 
   */
  postMessage(message: any, options?: WindowPostMessageOptions | undefined): void
}

export default class Messenger{

  constructor(){
    if(window.ReactNativeWebView){
      window.ReactNativeWebView.postMessage("Hello from dynamics-inputs-example")
  
      window.addEventListener('message', (event: MessageEvent<string>) => {
        const data: MessageData = JSON.parse(event.data)
        if(data.source === "react-native-web-view"){
          window.ReactNativeWebView.postMessage(`dynamics-inputs-example recieved your message - ${data.message}`)
        }
      });
    }
  }
}