import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Typography } from "@mui/material"

const Privacy=()=>{
return (

<>
<div className="flex justify-center mt-6">
     <Typography sx={{fontWeight:"bold",size:21,}}> This page is under construction. For questions about our privacy practices, please contact us at:<div className="hover:text-blue-700"> <FontAwesomeIcon icon={faEnvelope} /> support@btechstore.com</div></Typography>
      
    </div>
<div className="h-72"></div>
</>
)
}

export default Privacy