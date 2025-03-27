import "./App.css";
import { MenuBar, SideBar, Main } from "./components/layout";

function App() {
  return (
    <div className="container mx-auto">
      <MenuBar />
      <main className="flex flex-col px-2 sm:flex-row sm:px-0">
        <SideBar />
        <Main />
      </main>
    </div>
  );
}

export default App;
