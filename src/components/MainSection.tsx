import React from "react";
import Slider from "react-slick";
import { Typography, Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg"; // Add more images as needed
import bg3 from "../assets/bg3.jpg";

const images = [bg1, bg2, bg3];

const MainSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box sx={{ height: "90vh", position: "relative" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              height: "90vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              overflow: "hidden", // Ensure anything overflowing is hidden
            }}
          >
            <motion.div
              initial={{ scale: 1.1 }} // Start with a zoomed-in scale
              animate={{ scale: 1 }} // Animate to original size
              exit={{ scale: 1.1 }} // Optional: zoom back out on exit
              transition={{ duration: 0.5 }} // Transition duration for load
              style={{
                height: "90vh",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute", // Positioning the image
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Light black translucent overlay
                zIndex: 1, // Ensure overlay is on top
              }}
            />
            <Box
              sx={{
                position: "relative",
                zIndex: 2, // Ensure text is above the overlay
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", // Center vertically
                alignItems: "center", // Center horizontally
                textAlign: "center",
                height: "100%", // Full height to center text
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Typography
                  className="top-color"
                  variant="h2"
                  sx={{ fontWeight: "bold", marginBottom: 2 }}
                >
                  Welcome to Kaimanam Catering
                </Typography>
                <Typography
                  className="top-color"
                  variant="h5"
                  sx={{ marginBottom: 4 }}
                >
                  Discover Delicious Food & Exceptional Service
                </Typography>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Link to="/menu" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        backgroundColor: "#FF5722",
                        "&:hover": { backgroundColor: "#E64A19" },
                      }}
                    >
                      Explore Our Menu
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default MainSection;
