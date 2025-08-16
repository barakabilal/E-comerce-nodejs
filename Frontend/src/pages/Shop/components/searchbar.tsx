import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = () => {
  return (
    <div className="flex justify-center mt-4">
      <TextField
        variant="outlined"
        placeholder="Search..."
        size="small"
        InputProps={{
      
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#1e293b" }} />
            </InputAdornment>
          ),
        }}
        sx={{
          width: "300px",
          backgroundColor: "#fff",
          borderRadius: "50px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "50px",
            color: "#1e293b",
            "& fieldset": {
              borderColor: "gray", // default border
            },
            "&:hover fieldset": {
              borderColor: "#888", // hover border
            },
            "&.Mui-focused fieldset": {
              borderColor: "#1e293b", // focus border
            },
          },
          "& .MuiOutlinedInput-input": {
            padding: "10px 14px",
          },
        }}
      />
    </div>
  );
};

export default Searchbar;
