import {   Card, CardContent, CardMedia,styled, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import BlurFade from "../../../components/magicui/blur-fade";


import { useNavigate } from "react-router-dom";
import { Bestselersproducts } from "../../../components/utils/Bestselersproducts";
 const Bestsellers=()=>{
    const StyledCard = styled(Card)(({ theme }) => ({
        transition: 'background-color 0.3s ease',
        '&:hover': {
          backgroundColor: theme.palette.action.hover, // You can change this to any color
 // You can change this to any color
        },
      }));
      const navigate=useNavigate();//navigation to the page shop 
      const handleonclick=()=>{
       navigate("/shop/element");
      }
return(
    <BlurFade delay={0.5} inView={true}>

    <Typography
variant="h3"
            fontFamily="Merriweather"
            sx={{padding:"20px",textAlign:"center",  fontFamily: 'Poppins, sans-serif',
               
                color: 'orange',marginTop:"30px",marginBottom:"20px",  
                  background: 'orange',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold',
                }}
              
>
Bestsellers
  </Typography>
  <div className="flex flex-row space-x-14 lex justify-center items-center ">
  {Bestselersproducts .map((product)=>(
    <StyledCard sx={{ maxWidth: 345,boxShadow:'4px 9px 20px rgba(0, 0, 0, 0.5)' }}>
          <CardMedia
            onClick={handleonclick}
            component="img"
            height="140"
            image={product.image}
            alt="Sample Image"
            className="cursor-pointer h-64 hover:h-56"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {product.description}
            </Typography>
          </CardContent>
        </StyledCard>
   
  )

  )}

</div>  

<div className="h-7"></div>
  
<Divider></Divider>  




</BlurFade>


)
 }
 export default Bestsellers
