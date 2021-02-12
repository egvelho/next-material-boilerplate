import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

interface Item {
  text: string;
  image: string;
}

export interface ItemListProps {
  title: string;
  backgroundColor: string;
  color: string;
  items: Item[];
}

function InfoViewImage({ image, text }: { image: string; text: string }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <img
      src={image}
      alt={text}
      style={{
        width: isDesktop ? 128 : 72,
      }}
    />
  );
}

function InfoViewText({ text, reverse }: { text: string; reverse?: boolean }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box display="flex" alignItems="center" flexGrow={1}>
      <Typography
        variant={isDesktop ? "h5" : "body1"}
        component="p"
        align={reverse === true ? "right" : undefined}
        style={{
          width: "100%",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

function InfoView({
  text,
  image,
  reverse,
}: {
  text: string;
  image: string;
  reverse?: boolean;
}) {
  if (reverse) {
    return (
      <Box display="flex" alignItems="center">
        <InfoViewText text={text} reverse />
        <Box marginLeft={2}>
          <InfoViewImage image={image} text={text} />
        </Box>
      </Box>
    );
  } else {
    return (
      <Box display="flex" alignItems="center">
        <Box marginRight={2}>
          <InfoViewImage image={image} text={text} />
        </Box>
        <InfoViewText text={text} />
      </Box>
    );
  }
}

export function ItemList({
  title,
  color,
  backgroundColor,
  items,
}: ItemListProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      paddingY={16}
      paddingX={2}
      style={{
        backgroundColor,
        color,
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        maxWidth={720}
        marginX="auto"
      >
        <Box marginBottom={4}>
          <Typography
            align="center"
            variant={isDesktop ? "h3" : "h4"}
            component="h1"
          >
            {title}
          </Typography>
        </Box>
        {items.map(({ text, image }: Item, index) => (
          <Box
            key={`how-works-${index}`}
            marginBottom={items.length - 1 === index ? 0 : 8}
            width="100%"
          >
            <InfoView text={text} image={image} reverse={index % 2 !== 0} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}