import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import { Button, Input } from "@mui/joy";

import { AiOutlineSearch } from "react-icons/ai";

export default function ControllableStates() {
  return (
    <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
      <Input color="primary" variant="soft" fullWidth placeholder="Start typing..."/>
      <Button variant="soft">
        <AiOutlineSearch style={{ fontSize: 20, marginRight: 0 }} />
      </Button>
    </div>
  );
}
