import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import { Chip, Link } from "@mui/joy";

export default function OverflowCard({ book }) {
  const bookInfo = book.volumeInfo;

  return (
    <Card variant="outlined" sx={{ borderRadius: 1 }}>
      <CardOverflow>
        <AspectRatio ratio="0.75">
          <img
            src={bookInfo.imageLinks?.thumbnail || bookInfo.imageLinks?.smallThumbnail}
            loading="lazy"
            alt=""
            style={{ objectPosition: "cover" }}
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">{bookInfo.title}</Typography>
        <Typography level="body-sm">
          {bookInfo.authors?.length === 1
            ? bookInfo.authors[0]
            : bookInfo.authors?.map((author) => `${author}, `)}
        </Typography>

        <Divider sx={{ marginY: 1 }}></Divider>

        <Typography level="body-sm">{`${bookInfo.description?.slice(
          0,
          200
        )}...`}</Typography>

        <Divider sx={{ marginY: 1 }}></Divider>

        <Chip variant="soft" color="success">
          Publish Date: {bookInfo.publishedDate}
        </Chip>
        <Chip variant="soft" color="primary">
          Page: {bookInfo.pageCount}
        </Chip>
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Link
            level="body-xs"
            href={bookInfo.previewLink}
            fontWeight="md"
            textColor="text.secondary"
          >
            Preview
          </Link>
        </CardContent>
      </CardOverflow>
    </Card>
  );
}
