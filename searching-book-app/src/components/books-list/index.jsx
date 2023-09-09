import BookCard from "../book-card";
import { CircularProgress, Grid, Box, Button } from "@mui/joy";
import useFetch from "../../lib/hooks/useFetch";
import { useState } from "react";

export default function BooksList({ searchInput }) {
  const [startIndex, setStartIndex] = useState(0);

  const { isLoading, error, data: books } = useFetch(searchInput, startIndex);
  if (isLoading) {
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CircularProgress size="lg" />
      </Box>
    );
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
          marginBottom: 2,
          gap: 2,
        }}
      >
        <Button
          color="primary"
          variant="soft"
          onClick={() => setStartIndex((prev) => (prev !== 0 ? prev - 10 : 0))}
        >
          Prev
        </Button>
        <Button
          color="primary"
          variant="soft"
          onClick={() =>
            setStartIndex((prev) =>
              prev + 10 < books.totalItems ? prev + 10 : prev
            )
          }
        >
          Next
        </Button>
      </Box>
      <Grid container spacing={6}>
        {books.items?.map((book, idx) => (
          <Grid key={idx} xs={12} md={6} lg={3}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
