import React from "react";
import BookCard from "../book-card";
import { Box, Grid } from "@mui/joy";

export default function BooksList() {
  return (
    <Grid container spacing={6}>
      <Grid xs={12} md={6} lg={3}>
        <BookCard></BookCard>
      </Grid>
      <Grid xs={12} md={6} lg={3}>
        <BookCard></BookCard>
      </Grid>
      <Grid xs={12} md={6} lg={3}>
        <BookCard></BookCard>
      </Grid>
      <Grid xs={12} md={6} lg={3}>
        <BookCard></BookCard>
      </Grid>
    </Grid>
  );
}
