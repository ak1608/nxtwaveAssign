
import "./index.css";
import { PiCopyrightFill } from "react-icons/pi";


const Footer =() =>(
    <>
    <div className="footerContainer">
        <div className="footertop">
            <div></div>

            <div className="serv">
                <h1>Services</h1>
                <ul className="lis">
                    <li>Appointments</li>
                    <li>Lab Tests</li>
                    <li>A-Z Medicine</li>
                    <li>Doctor Support</li>
                </ul>
            </div>
            <div className="serv">
                <h1>Legal</h1>
                <ul className="lis">
                    <li>General info</li>
                    <li>Privacy policy</li>
                    <li>A-Z Terms of services</li>
                    <li>Consultation</li>
                    <li>How it works</li>
                </ul>
            </div>
            <div className="serv">
                <h1>Talk to us</h1>
                <ul className="lis">
                    <li>support@notinline.com</li>
                    <li>Lab appointment@notinline.com</li>
                    <li>+91 12345 67899</li>
                    <li>+91 97642 09752</li>
                </ul>
            </div>











        </div>



        
        <p  className="check">hrssssll</p>
        <hr className="hrline"  />
        <div className="copyright">
            <PiCopyrightFill className="icon" />
            <p className="copyText">2021-2023 All Rights Reserved</p>
        </div>

    </div>
    
 
    
    </>
)

export default Footer