// src/pages/About.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <Box sx={{ padding: "40px 20px", textAlign: "center" }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 4 }}>
          About Us
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 4 }}>
          Kaimanam Catering is dedicated to crafting memorable culinary
          experiences for every event. Whether it's weddings, corporate events,
          or private parties, our team ensures a perfect blend of taste and
          service. With years of expertise, we pride ourselves on quality,
          innovation, and customer satisfaction.
        </Typography>
        <Typography variant="body1">
          Our mission is to provide delicious food and exceptional service,
          ensuring your events are as special as you envisioned. Let's make your
          celebrations unforgettable!
        </Typography>
      </motion.div>
    </Box>
  );
};

export default About;
