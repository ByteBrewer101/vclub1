import { atom } from "recoil";
interface Message {
  status: boolean
  message: string
  senderName: string
}

export const chatArray = atom<Message[]>({
  key: "chatArray",
  default: [],
});

    
export const socketAtom = atom<WebSocket | null>({
  key: "socketAtom",
  default: null,
});


export const ConnStatus = atom({
    key : "ConnStatus",
    default : false

})