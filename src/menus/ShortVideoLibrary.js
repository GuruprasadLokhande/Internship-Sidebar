import React, { useState } from "react";
import { Box, Modal, Button, Typography } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import YoutubeShort from "../popups/YoutubeShort";
import Instagram from "../popups/Instagram";
import TikTok from "../popups/TikTok";
import YoutubeVideo from "../popups/YoutubeVideo";

const ShortVideoLibrary = () => {
  const [open, setOpen] = useState(false);
  const [popupContent, setPopupContent] = useState();

  const handleBoxClick = (content) => {
    setPopupContent(content);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(true);
    setPopupContent(null);
  };

  return (
    <>
      <div
        style={{
          marginLeft: "30px",
          color: "white",
          padding: "20px",
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        <h2 style={{ marginBottom: "50px", marginTop: "0px" }}>
          Video Library
        </h2>
        <div>
          <p style={{ marginTop: "0", fontSize: "1.2rem" }}>Upload Videos</p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          marginLeft: "50px",
          marginTop: "0px",
        }}
      >
        {[
          {
            icon: <ControlPointIcon fontSize="inherit" />,
            label: "YouTube Shorts",
            content: <YoutubeShort />,
          },
          {
            icon: <InstagramIcon fontSize="inherit" />,
            label: "Instagram",
            content: <Instagram />,
          },
          {
            icon: <AudiotrackIcon fontSize="inherit" />,
            label: "TikTok",
            content: <TikTok />,
          },
          {
            icon: <YouTubeIcon fontSize="inherit" />,
            label: "YouTube Videos",
            content: <YoutubeVideo />,
          },
        ].map((item, index) => (
          <Box
            key={index}
            height={400}
            width={245}
            display="flex"
            alignItems="center"
            justifyContent="center"
            onClick={() => setPopupContent(item.content)}
            sx={{
              border: "2px dotted grey",
              backgroundColor: "#191d38",
              borderRadius: "5px",
              color: "white",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#2e3b4e",
              },
            }}
          >
            <div style={{ fontSize: "60px" }}>{item.icon}</div>
          </Box>
        ))}
      </div>

      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "15px",
            marginLeft: "20px",
            justifyContent: "flex-end",
            marginTop: "50px",
          }}
        >
          <p
            style={{
              marginTop: "0px",
              marginRight: "560px",
              color: "white",
              fontSize: "1.2rem",
            }}
          >
            Published Videos
          </p>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#233d82",
              "&:hover": { backgroundColor: "#233d82" },
            }}
          >
            Edit Mood
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#233d82",
              "&:hover": { backgroundColor: "#233d82" },
            }}
          >
            +A/B Test
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#233d82",
              "&:hover": { backgroundColor: "#233d82" },
            }}
          >
            Published
          </Button>
        </div>
      </div>

      {popupContent}
      
    </>
  );
};

export default ShortVideoLibrary;












