import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
    {/*Header commun à toutes les pages */}
      <Header />
      <main
        style={{
          maxWidth: "1200px",
          margin: "2rem auto",
          padding: "1.5rem",
          background: "rgba(20, 20, 20, 0.9)",
          borderRadius: "10px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
       }}
>
        <Outlet />
      </main>
    </>
  );
}

export default App;
