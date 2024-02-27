import "./App.css";

import UsersList from "./Components/Gestion_usuarios/UsersList";

import Cards from "./Components/Cards";
import { Navbar } from "./Components/Navbar/Navbar";
import { TablaVentas } from "./Components/AgregarVentas/TablaVentas";

function App() {
  return (
    <>
      {/* <Navbar/> */}

     {/*  <Cards />

      <UsersList /> */}
      <TablaVentas/>
    </>
  );
}

export default App;
