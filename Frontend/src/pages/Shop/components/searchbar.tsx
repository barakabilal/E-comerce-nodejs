import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


const Searchbar = () => {
  return <>
  <div className="flex justify-center "> <TextField
      label="Search"
      variant="standard"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      fullWidth
      sx={{width:"240px",
        marginTop:"6px",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          margin: '7px',
          borderRadius: '10px',
      }}
    /></div>
  </>;
};

export default Searchbar;
