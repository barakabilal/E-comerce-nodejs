import {  Button, Card, CardContent, CardMedia,styled, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import BlurFade from "../../../components/magicui/blur-fade";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Latestproductitems } from "../../../components/utils/lastproductitems";
import { useNavigate } from "react-router-dom";
 const Latestproduct=()=>{
    const StyledCard = styled(Card)(({ theme }) => ({
        transition: 'background-color 0.3s ease',
        '&:hover': {
          backgroundColor: theme.palette.action.hover, // You can change this to any color
 // You can change this to any color
        },
      }));
      const navigate=useNavigate();
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
  latest product
</Typography>
<div className="flex flex-row space-x-14 lex justify-center items-center ">
<StyledCard sx={{ maxWidth: 345,boxShadow:'4px 9px 20px rgba(0, 0, 0, 0.5)' }}>
      <CardMedia
        onClick={handleonclick}
        component="img"
        height="140"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF4LBPFpui0SGpg0aP1OhiRdGd4cZxm-tYyg&s"
        alt="Sample Image"
        className="cursor-pointer hover:w-96"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         DELL Laptops
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Powering Your Potential,
        Top Seller This Month
        </Typography>
      </CardContent>
    </StyledCard>

     
</div>

   <div className="h-7"></div>
<Divider></Divider>  
<div className="text-center font-bold flex-row">
  <Typography variant="h3" sx={{fontWeight:"bold",padding:'10px',fontFamily: 'Poppins, sans-serif',}}>
  For more information visit the shop page </Typography> 
  <Button
            startIcon={<ShoppingCartIcon style={{ color: 'orange' }} />}
            variant="contained"
            sx={{
              
              marginTop:"20px",
              background: 'white',
              color: '#333332',
              width: '200px',
              fontFamily: 'Merriweather',
              fontWeight: "bold",
              height: "50px",
              boxShadow: '3px 7px 20px rgba(200, 200, 200, 0.4)',
              borderRadius: '6%',
              '&:hover': {
                background: '#333332',
                color:"white"
              },
            }}
          >
            Shop Now!
          </Button>
</div>



</BlurFade>


)
 }
 export default Latestproduct
