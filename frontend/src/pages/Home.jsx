import NavBar from "@components/NavBar/Navbar";
import NavLog from "@components/NavLog";
import SHome from "./style";

export default function Home() {
  return (
    <SHome>
      <NavLog />
      <NavBar />
    </SHome>
  );
}
