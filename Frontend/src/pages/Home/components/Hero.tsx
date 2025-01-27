import { motion } from "framer-motion";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Hero = () => {
  const typedTextRef = useRef(null);
  useEffect(() => {
    const typed = new Typed(typedTextRef.current, {
      strings: [
        "Welcome to Our Store!",
        "Find the best deals here!",
        "Shop Now!",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: false,
    });

    return () => {
      typed.destroy();
    };
  });

  return (
    <motion.div
      initial={{ filter: `blur(3px)` }}
      animate={{ opacity: 1, filter: `blur(0px)` }}
      transition={{ duration: 2 }}
      className="hero-container"
    >
      <Box
        sx={{
          backgroundImage: `url("https://images.pexels.com/photos/6893804/pexels-photo-6893804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
          height: { xs: "60vh", md: "90vh" },
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          margin: "7px",
          borderRadius: "10px",
          boxShadow: "4px 9px 20px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="flex-col-2 space-y-8">
          <Typography
            variant="h2"
            fontFamily="Merriweather"
            ref={typedTextRef}
            sx={{ textShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)" }}
          >
            {/* Typed.js text will appear here */}
          </Typography>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 2 }}
            transition={{ delay: 0.6, duration: 2 }}
            className="hero-container"
          >
            <Button
              startIcon={<ShoppingCartIcon style={{ color: "orange" }} />}
              variant="contained"
              sx={{
                background: "white",
                color: "#333332",
                width: "200px",
                fontFamily: "Merriweather",
                fontWeight: "bold",
                height: "50px",
                boxShadow: "3px 7px 20px rgba(200, 200, 200, 0.4)",
                borderRadius: "6%",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.9)",
                },
              }}
            >
              Shop Now!
            </Button>
          </motion.div>
        </div>
      </Box>
    </motion.div>
  );
};

export default Hero;
