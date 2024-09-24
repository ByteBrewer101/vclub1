import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { ConnStatus, socketAtom } from "../SocketLogic/atoms";

export function useWebSocketServer(url: string) {
  const socketAtomSetter = useSetRecoilState(socketAtom);
  const connectionStatus = useSetRecoilState(ConnStatus);

  useEffect(() => {
    const socket = new WebSocket(url);
    socketAtomSetter(socket);

    socket.onopen = () => {
      console.log("WebSocket connected");
      connectionStatus(true);
    };

    socket.onmessage = (event) => {
      console.log(event.data);
      const recievedData = JSON.parse(event.data);

      console.log(recievedData);
    };

    socket.onclose = () => {
      console.log("WebSocket disconnected");
    };

    return () => {
      socket.close();
      console.log("websocket disconnected");
      connectionStatus(false);
    };
  }, [socketAtomSetter, url, connectionStatus]);
}
