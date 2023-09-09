import * as React from "react";

import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";

export default function Header() {
  const [color, setColor] = React.useState("primary");
  return (
    <Sheet
      variant="solid"
      color={color}
      invertedColors
      sx={{
        flexGrow: 1,
        display: "flex",
        bgcolor: color === "primary" ? "#042449" : undefined,
        p: { xs: "36px", md: "70px" },
        pt: { xs: "24px", md: "60px" },
        borderRadius: "lg",
        overflow: "hidden",
        "& button": { borderRadius: "xl" },
      }}
    >
      <Box sx={{ zIndex: 1, position: "relative" }}>
        <Typography level="h2">Searching Book App</Typography>
        <Typography sx={{ mt: 1, mb: 3 }}>
          Search, view or purchase any book you want through the Google Books
          API.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexWrap: "wrap",
            maxWidth: "max-content",
            "& > *": { flexGrow: 1, fontWeight: "lg" },
          }}
        >
          <a href="https://books.google.com" target="_blank">
            <Button sx={{ minWidth: 120 }}>Open Google Books</Button>
          </a>
        </Box>
      </Box>
      <Box
        component="img"
        alt=""
        src="https://storage.googleapis.com/cms-storage-bucket/72521e62275b24d3c37d.png"
        sx={{ position: "absolute", height: "100%", top: 0, right: 0 }}
      />
    </Sheet>
  );
}
