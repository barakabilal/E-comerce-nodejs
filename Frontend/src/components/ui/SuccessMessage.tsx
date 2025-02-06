import { Alert, Snackbar } from "@mui/material";

interface props{
    open:boolean;
}
function SuccessMessage({open}:props) {
  return (
    <div>
      
      <Snackbar open={open} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert severity="success">Message sent successfully!</Alert>
      </Snackbar>
    </div>
  );
}

export default SuccessMessage;
