import { Container, Divider, Option, Select } from "@mui/joy";
import "./globals.css";
import Header from "./components/header";
import SearchInput from "./components/search-input";
import BooksList from "./components/books-list";

function App() {
  return (
    <Container>
      <Header />
      <SearchInput />
      <Divider sx={{ marginY: 3 }} />
      <BooksList />
    </Container>
  );
}

export default App;
