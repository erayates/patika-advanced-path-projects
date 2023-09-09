import { Container } from "@mui/joy";
import "./globals.css";
import Header from "./components/header";
import SearchInput from "./components/search-input";
import BooksList from "./components/books-list";
import { useRef, useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <Container>
      <Header />
      <SearchInput setSearchInput={setSearchInput} />
      <BooksList searchInput={searchInput} />
    </Container>
  );
}

export default App;
