import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import { Chip, Link } from "@mui/joy";

export default function OverflowCard() {
  return (
    <Card variant="outlined" sx={{ borderRadius: 1 }}>
      <CardOverflow>
        <AspectRatio ratio="0.75">
          <img
            src="https://books.google.com.tr/books/publisher/content?id=_xKsEAAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71yr2Y1M501l9TpPKOrKcFoyZ6PpD0t9XxQkUfQxPHMO71zrmDVXUWarEzQ3aiaC2p4k7I0Gzl4ppQCD3x-Fa3v_jUIChTEmhEeMaHSW-eEWduPoDN8nRZ9i9GDG1a3Y1h1aldf"
            loading="lazy"
            alt=""
            style={{ objectPosition: "cover" }}
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">The Making of A King</Typography>
        <Typography level="body-sm">Robert Hardman</Typography>

        <Divider sx={{ marginY: 1 }}></Divider>

        <Typography level="body-sm">
          The dramatic story of the new kings evolution over the past year from
          Prince of Wales to King Charles III, from one of the most acclaimed
          royal biographers writing today.
        </Typography>

        <Divider sx={{ marginY: 1 }}></Divider>

        <Chip variant="soft" color="success">
          Publish Date: 04-08-2001
        </Chip>
        <Chip variant="soft">Page: 512</Chip>
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Link level="body-xs" fontWeight="md" textColor="text.secondary">
            Preview
          </Link>
        </CardContent>
      </CardOverflow>
    </Card>
  );
}
