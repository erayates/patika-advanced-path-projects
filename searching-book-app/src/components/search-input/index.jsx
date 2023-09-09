import * as React from "react";
import { Button, Divider, Input } from "@mui/joy";

import { AiOutlineSearch } from "react-icons/ai";

export default function SearchInput({ setSearchInput, inputRef }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    setSearchInput(form.get("search_input"));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", gap: 20, marginTop: 20 }}
      >
        <Input
          color="primary"
          variant="soft"
          id="search_input"
          name="search_input"
          fullWidth
          placeholder="Start typing..."
          
        />
        <Button type="submit" variant="soft">
          <AiOutlineSearch style={{ fontSize: 20, marginRight: 0 }} />
        </Button>
      </form>
      <Divider sx={{ marginY: 3 }} />
    </>
  );
}
