import { useEffect } from "react";
import {  useSetRecoilState } from "recoil";
import { chatArray, ConnStatus, socketAtom } from "../SocketLogic/atoms";

export function useWebSocketServer(url: string) {
  const setSocket = useSetRecoilState(socketAtom);
  const setConnectionStatus = useSetRecoilState(ConnStatus);
  const  setCurrentChatArray = useSetRecoilState(chatArray);

  useEffect(() => {
    const socket = new WebSocket(url);

    // Store socket instance in Recoil state
    setSocket(socket);

    socket.onopen = () => {
      console.log("WebSocket connected");
      setConnectionStatus(true); // Set connection status to true when connected
    };

    socket.onmessage = (event) => {
      console.log("Message received:", event.data);
      const receivedData = JSON.parse(event.data);
      console.log(receivedData);

      const chat = {
        status: true,
        message: receivedData.msg,
        senderName: receivedData.sender,
      };

      // Update the chat array with the received data
      setCurrentChatArray((chats) => [...chats, chat]);

      console.log("Updated chat array:", receivedData);
    };

    socket.onclose = () => {
      console.log("WebSocket disconnected");
      setConnectionStatus(false); // Set connection status to false when disconnected
    };

    // Cleanup function to close the WebSocket connection on unmount
    return () => {
      socket.close();
      console.log("WebSocket connection closed");
      setConnectionStatus(false);
    };
  }, [setSocket, url, setConnectionStatus, setCurrentChatArray]);

  return null; // This hook does not return any JSX
}
