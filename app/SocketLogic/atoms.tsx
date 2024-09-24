import { atom } from "recoil";

    
    
export const socketAtom = atom<WebSocket | null>({
  key: "socketAtom",
  default: null,
});


export const ConnStatus = atom({
    key : "ConnStatus",
    default : false

})