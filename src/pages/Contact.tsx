// src/pages/Contact.tsx
import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <Box sx={{ padding: "40px 20px", textAlign: "center" }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 4 }}>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 4 }}>
          Have questions or want to get a quote? Reach out to us, and we'll be
          happy to help!
        </Typography>
        <Box
          component="form"
          sx={{
            maxWidth: "600px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <TextField fullWidth label="Your Name" variant="outlined" required />
          <TextField
            fullWidth
            label="Your Email"
            variant="outlined"
            type="email"
            required
          />
          <TextField
            fullWidth
            label="Your Message"
            variant="outlined"
            multiline
            rows={4}
            required
          />
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              variant="contained"
              size="large"
              type="submit"
              sx={{
                backgroundColor: "#FF5722",
                "&:hover": { backgroundColor: "#E64A19" },
              }}
            >
              Send Message
            </Button>
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Contact;
