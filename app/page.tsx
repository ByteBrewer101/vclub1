
import TopBar from "./components/Topbar";
import { useWebSocketServer } from "./customHooks/Connection";

import AppPage from "./screens/AppPage";


export default function Home() {

   const url = process.env.NEXT_PUBLIC_API_URL || "";
   useWebSocketServer(url);
 

  return <div>
    <TopBar/>
    <AppPage/>
  </div>
}
