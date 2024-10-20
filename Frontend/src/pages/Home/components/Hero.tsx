
import { motion } from 'framer-motion';

import { Box, Typography } from '@mui/material';




const Hero = () => {
    return (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 2}}
    transition={{ duration: 1 }}
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
      }}
    >
        <Typography
        variant='h3'
        >
            welcome to our store
        </Typography>
</Box>

  </motion.div>
    )}


    
 

  




export default Hero