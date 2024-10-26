
import { motion } from 'framer-motion';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Button, Typography } from '@mui/material';
import  { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';



const Hero = () => {
  const typedTextRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js with options
    const typed = new Typed(typedTextRef.current, {
      strings: ["Welcome to Our Store!", "Find the best deals here!", "Shop Now!"], // Text to type
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    // Cleanup on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

    return (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 4}}
    transition={{ duration: 2 }}
    className="hero-container"
  >
     <Box
      sx={{
        backgroundImage: `url("https://images.pexels.com/photos/6893804/pexels-photo-6893804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        height: '90vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        margin:'7px',
        borderRadius:'10px',
          //  boxShadow: '3px 7px 20px rgba(200, 200, 200, 0.4)',
      }}
    >
      <div className='flex-col-2 space-y-8  '> < Typography
       boxShadow= '0px 4px 20px '
       variant='h2'
       fontFamily={'Merriweather'}
       ref={typedTextRef}
       >
       </Typography>
     
        <Button    startIcon={<ShoppingCartIcon />}  variant="contained" sx={{background:'white',color:'#333332',width:'200px',fontFamily:'Merriweather',fontWeight:"bold",height:"50px",boxShadow: '3px 7px 20px rgba(200, 200, 200, 0.4)'}}
        >Shop Now!</Button ></div>
      
</Box>

  </motion.div>
    )}


    
 

  




export default Hero