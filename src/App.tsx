import * as React from "react";
import Home from './Pages/Home';
import { StyledHR } from './Components/Shared/shared.styled';
import Navbar from './Components/Navbar';

function App() {
  const [authenticated, setAuthenticated] = React.useState(true);
  return (
    <div>
      <header>
        <Navbar authenticated={authenticated} setAuthenticated={setAuthenticated}></Navbar>
        <StyledHR></StyledHR>
        <Home authenticated={authenticated} setAuthenticated={setAuthenticated}></Home>
      </header>
    </div>
  );
}

export default App;
