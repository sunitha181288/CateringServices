// src/components/Footer.tsx
import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#2E3B55",
        color: "white",
        textAlign: "center",
        padding: "20px 0",
        position: "relative",
      }}
    >
      <Typography variant="body2">
        &copy; 2025 Kaimanam Catering. All rights reserved.
      </Typography>
      <motion.div whileHover={{ scale: 1.3 }}>
        <IconButton
          sx={{
            position: "absolute",
            right: "50%",
            transform: "translateX(50%)",
            bottom: "-20px",
            backgroundColor: "#FF5722",
            color: "white",
            "&:hover": { backgroundColor: "#E64A19" },
          }}
          onClick={scrollToTop}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      </motion.div>
    </Box>
  );
};

export default Footer;
