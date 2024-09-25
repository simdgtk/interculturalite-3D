import { Suspense } from "react";
import Fallback from "./components/Fallback";
import Scene from "./components/Scene";
import Modal from "./components/Modal";
import Menu from "./components/Menu";
import "./styles/index.scss";

function App() {
  return (
  //  <Suspense fallback={<Fallback />}>
  //  <Scene />
  //  </Suspense>
  <Modal></Modal>
  );
}

export default App;
