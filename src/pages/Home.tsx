import React, { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import ServiceCard from "../components/ServiceCard";
import servicesData from "../assets/services.json"; // Import the JSON file

// Define the type for a service object
interface Service {
  title: string;
  description: string;
  image: string;
}

const Home: React.FC = () => {
  // State for visible services and remaining services
  const [services, setServices] = useState<Service[]>([]); // Visible services (4 at a time)
  const [remainingServices, setRemainingServices] = useState<Service[]>([]); // Remaining services

  useEffect(() => {
    // Load the services from the JSON file
    const initialServices = servicesData.slice(0, 4); // First 4 services
    const nextServices = servicesData.slice(4); // Remaining services
    setServices(initialServices);
    setRemainingServices(nextServices);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setServices((prevServices) => {
        if (remainingServices.length === 0) return prevServices; // Avoid errors if no remaining services

        const nextService = remainingServices[0]; // Get the next service
        const updatedRemaining = remainingServices.slice(1); // Remove the added service from remaining
        const updatedServices = [...prevServices.slice(1), nextService]; // Remove the first service and add the new one to the end

        // If all remaining services are used, reset the remaining services
        setRemainingServices((prevRemaining) =>
          prevRemaining.length > 1 ? updatedRemaining : servicesData
        );

        return updatedServices;
      });
    }, 3000); // Adjust interval timing as needed

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [remainingServices]);

  return (
    <Box>
      <Box sx={{ padding: "40px 20px", textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 4 }}>
          Services We Deliver
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
