import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { createTheme, ThemeProvider } from "@mui/material/styles"; // Import theme provider
import { motion } from "framer-motion";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate,useLocation } from "react-router-dom";
import { useEffect } from "react";
const pages = ["home", "shop", "contact"];
const settings = ["orders", "cart", "Logout"];
const buttonColors: Map<string, string> = new Map();
buttonColors.set('home', 'orange');
buttonColors.set('shop', 'white');
buttonColors.set('contact', 'white');

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif", // Define Poppins font
  },
});

function NavBar() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
const navigate=useNavigate();

const [color,setcolor]=React.useState<Map<string, string>>(buttonColors)
const handleButtonClick=(page:string)=>{
  // Create a new map with the updated color
    const updatedColor = new Map(color);
    //change all them into white befor changingthe color of one of them 
    updatedColor.forEach((_,key) => {
      updatedColor.set(key, "white");
    });
    updatedColor.set(page, 'orange'); // Set color for the clicked button
     
  
    setcolor(updatedColor);
    // Navigate to the new page based on the page send in parametre 
    if(page=="home") navigate(`/`);
     else{ navigate(`/${page}`);}
  };
  //making the hover orange in the nav bar different of the current location tat is different home shop  contact
   const location = useLocation();
  // if(location.pathname=="/privacy-policy"){
  //   
  // }
  const locpath=location.pathname=="/privacy-policy";
  useEffect(() =>{
    const updatedColor = new Map(color);
    updatedColor.forEach((_,key) => {
      updatedColor.set(key, "white");
    });
    setcolor(updatedColor);

    
  }, [locpath]); 
  return (
    <motion.div>
      <ThemeProvider theme={theme}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#1e293b",
            shadow: "3px",
            marginTop: "1px",
            borderRadius: "16px",
            maxWidth: "xl",
            boxShadow: "3px 6px 10px rgba(2, 5, 0, 0.5)",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* Desktop Logo */}
              <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Poppins, sans-serif", // Apply Poppins font
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                B-TECH
              </Typography>

              {/* Hide the mobile menu completely */}
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  
                  <Button
                    key={page}
                    onClick={() => handleButtonClick(page)}
                    sx={{
                      my: 2,
                      color: color.get(page.toString()), 
                      display: "block",
                      
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              {/* User Avatar - Desktop only */}
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <FontAwesomeIcon icon={faUser} color="white" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography sx={{ textAlign: "center" }}>
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </motion.div>
  );
}

export default NavBar;
