import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { chatArray, ConnStatus, socketAtom } from "../SocketLogic/atoms";
import { useSession } from "next-auth/react";
import jwt from "jsonwebtoken"; // Import jwt

export function useWebSocketServer(url: string) {
  const setSocket = useSetRecoilState(socketAtom);
  const setConnectionStatus = useSetRecoilState(ConnStatus);
  const setCurrentChatArray = useSetRecoilState(chatArray);
  const { data: session } = useSession();

  const token = session?.accessToken
// console.log(token);

  // Construct the new URL with the signed token
  const newUrl =  `${url}?token=${token}` 

  useEffect(() => {
    const socket = new WebSocket(newUrl);

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

      // Handle various messages
      if (receivedData.msg === "connected") {
        // Allow messages
      } else if (receivedData.msg === "disconnected message") {
        // Disconnection frontend logic
      } else if (receivedData.msg === "switch") {
        // Switch logic
      }

      const chat = {
        status: true,
        message: receivedData.msg,
        senderName: receivedData.sender,
      };

      // Update the chat array with the received data
      setCurrentChatArray((chats) => [...chats, chat]);
      console.log("Updated chat array:", receivedData);
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
      // Optionally, you can set the connection status to false here
      setConnectionStatus(false);
    };

    socket.onclose = (event) => {
      console.log("WebSocket disconnected", event.reason);
      setConnectionStatus(false); // Set connection status to false when disconnected
    };

    // Cleanup function to close the WebSocket connection on unmount
    return () => {
      socket.close();
      console.log("WebSocket connection closed");
      setConnectionStatus(false);
    };
  }, [setSocket, newUrl, setConnectionStatus, setCurrentChatArray]);

  return null; // This hook does not return any JSX
}
