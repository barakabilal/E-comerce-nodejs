import { Box, Card, CardContent, CardMedia, Grid, styled, Typography } from "@mui/material";

import BlurFade from "../../../components/blur-fade";


 const About=()=>{
    const StyledCard = styled(Card)(({ theme }) => ({
        transition: 'background-color 0.3s ease',
        '&:hover': {
          backgroundColor: theme.palette.action.hover, // You can change this to any color
 // You can change this to any color
        },
      }));
return(
    <BlurFade delay={0.28} inView
>
    <Typography
variant="h3"
            fontFamily="Merriweather"
            sx={{padding:"20px",textAlign:"center",  fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                color: '#333',marginTop:"30px",marginBottom:"20px"}}
                 className=""
>
Top gadgets, from high-performance laptops to smart home essentials.
</Typography>
<div className="flex flex-row space-x-14 lex justify-center items-center ">
<StyledCard sx={{ maxWidth: 345,boxShadow:'4px 9px 20px rgba(0, 0, 0, 0.5)' }}>
      <CardMedia
        component="img"
        height="140"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF4LBPFpui0SGpg0aP1OhiRdGd4cZxm-tYyg&s"
        alt="Sample Image"
      
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
<StyledCard sx={{ maxWidth: 345,boxShadow:'4px 9px 20px rgba(0, 0, 0, 0.5) '}}>
      <CardMedia
        component="img"
        height="140"
        image="data:image/jpeg;base64,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"
        alt="Sample Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Apple accessories
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Top Pick for the Month,best accessories
        </Typography>
      </CardContent>
    </StyledCard>
<StyledCard sx={{ maxWidth: 345,boxShadow:'4px 9px 20px rgba(0, 0, 0, 0.5) ' }}>
      <CardMedia
        component="img"
        height="140"
        image="https://img01.huaweifile.com/sg/ms/za/pms/uomcdn/ZA_HW_B2C/pms/202403/gbom/6942103117718/428_428_C21A56CA679DA886154015517D5BCB6Cmp.jpg"
        alt="Sample Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Huawei Phones
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Highest-Rated Item of the Month, Your Smart Connection Solution
        </Typography>
      </CardContent>
    </StyledCard>
</div>
   
   
  

      

</BlurFade>
)
 }
 export default About
