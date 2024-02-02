import "./Style.css"
import { FaPhoneVolume } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { IoTimeSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";



function Info(){
    return(
        <>
        <div className="container">

            <div className="contacts">
                <p><a href="#"><FaPhoneVolume style={{width: "12px"}}/> +244 948 324 028</a></p>
                <p><a href="#"><BiLogoGmail style={{width: "15px"}}/> albertoronny237@gmail.com</a></p>
                <p><a href="#"><IoTimeSharp/> Segunda - Sábado 08hr:00 - 17hr:00</a></p>
            
                <div className="social">
                    <a href="#"> <FaFacebook /></a>
                    <a href="#"> <FaInstagramSquare /></a>
                </div>
            </div> 

        </div>    

        </>
    )}
export default Info