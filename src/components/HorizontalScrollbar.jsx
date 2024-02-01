import React, { useContext } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography } from "@mui/material";

import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="left-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="right-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        style={{
          display: 'inline-block',
          verticalAlign: 'top',
          margin: '0 20px', // Adjusted margin for smaller screens
          maxWidth: '300px', // Added max-width for better responsiveness
        }}
      >
        <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;