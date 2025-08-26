import {
  faHeadphones,
  faLaptop,
  faMapMarkerAlt,
  faMobileAlt,
  faQuestionCircle,
  faTruck,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faPaypal,
  faApplePay,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <>
      <div className="h-10"></div>
      <Divider></Divider>
      <section className=" bg-slate-800 rounded-xl m-3">
        <div className="flex flex-row space-x-64 justify-center align-top text-white">
          <div className="flex flex-col justify-center items-center  px-3 max-w-48">
            <Typography
              sx={{
                fontSize: 18,
                color: "orange",
                fontWeight: "bold",
                fontFamily: '"Pacifico", cursive',
              }}
            >
              B-tech-Store
            </Typography>
            <Typography
              sx={{ fontSize: 12, color: "white", fontWeight: "bold" }}
            >
              "Your one-stop tech shop for the latest gadgets, unbeatable deals,
              and expert service."
            </Typography>
          </div>
          <div className="flex flex-col space-y-3 justify-center">
            <Typography
              sx={{ fontSize: 18, color: "orange", fontWeight: "bold" }}
            >
              Shop
            </Typography>
            <Link
              to={"/"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              <FontAwesomeIcon icon={faLaptop} color="white" /> lAptops
            </Link>
            <Link
              to={"/"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              <FontAwesomeIcon icon={faMobileAlt} color="white" /> Phones
            </Link>
            <Link
              to={"/"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              <FontAwesomeIcon icon={faHeadphones} color="white" />
              Accessories
            </Link>
          </div>
          <div className="flex flex-col space-y-3 justify-center">
            <Typography
              variant="h6"
              color="white"
              sx={{ fontSize: 18, color: "orange", fontWeight: "bold" }}
            >
              customer service
            </Typography>
            <Link
              to={"/"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              <FontAwesomeIcon icon={faQuestionCircle} /> FAQS
            </Link>
            <Link
              to={"/"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              <FontAwesomeIcon icon={faTruck} />
              Shipping
            </Link>
            <Link
              to={"/"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              <FontAwesomeIcon icon={faUndo} /> Retruns
            </Link>
            <Link
              to={"/"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Retruns
            </Link>
          </div>
          <div className="flex flex-col space-y-3 justify-center">
            <Typography
              variant="h6"
              color="white"
              sx={{ fontSize: 18, color: "orange", fontWeight: "bold" }}
            >
              Follow Us
            </Typography>
            <Link
              to={"/"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </Link>
            <Link
              to={"/"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </Link>
            <Link
              to={"/"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
              Twitter
            </Link>
          </div>
        </div>
        <div className="flex flex-row space-x-24 justify-center">
          <div className="flex space-x-6 mt-4 text-white">
            <Typography
              variant="h6"
              color="white"
              sx={{ fontSize: 18, color: "orange", fontWeight: "bold" }}
            >
              Payment Methodes
            </Typography>
            <div>Visa</div>
            <div>Mastercard</div>

            <FontAwesomeIcon icon={faPaypal} className="h-8" />
            <FontAwesomeIcon icon={faApplePay} className="h-8" />
          </div>

          <div className="flex space-x-6 mt-4 text-white">
            <Link
              to={"/privacy-policy"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              Privacy Policy
            </Link>
            <Link
              to={"/privacy-policy"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              Terms of Service
            </Link>
            <Link
              to={"/privacy-policy"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              Refund Policy
            </Link>
            <Link
              to={"/privacy-policy"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
        <div className=" flex mt-4  text-gray-400 text-sm justify-center items-center">
          &copy; 2024 B-Tech Store. All rights reserved.
        </div>
        <div className="h-5"></div>
      </section>
    </>
  );
};
export default Footer;
