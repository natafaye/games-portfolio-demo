import { useState } from "react";
import HomePage from "./components/HomePage"
import RandomPage from "./components/RandomPage"
import { TEST_GAMES } from "./TEST_GAMES"
import { Link, NavLink, Route, Routes } from "react-router-dom";
import GamePage from "./components/GamePage";
import { Container, Nav, Navbar } from "react-bootstrap";

function App() {
  const [gamesList, setGamesList] = useState(TEST_GAMES)

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">My Board Games</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/random">Random</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<HomePage gamesList={gamesList} />} />
          <Route path="/random" element={<RandomPage gamesList={gamesList} />} />
          <Route path="/games/:gameId" element={<GamePage gamesList={gamesList} />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
