import { useRecoilValue } from "recoil";
import { socketAtom } from "../SocketLogic/atoms";

export function useJoinMessage() {
  const socket = useRecoilValue(socketAtom);
  const sendMessage = () => {
    const message = {
      type: "joinRoom",
    };

    socket?.send(JSON.stringify(message));
  };
  return sendMessage;
}

export function useSendChat() {
  const socket = useRecoilValue(socketAtom);
  const sendMessage = (msg:string) => {
    const message = {
      type: "chat",
      content: msg,
    };

    socket?.send(JSON.stringify(message));
  };
  return sendMessage;
}
