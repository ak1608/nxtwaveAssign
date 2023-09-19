
import "./index.css";
import { PiCopyrightFill,PiPhoneCall } from "react-icons/pi";



const Footer =() =>(
    <>
    <div className="footerContainer">
        <div className="footertop">
            <div className="topleft">
                <div>
                <img src="https://res.cloudinary.com/dy3sku9c7/image/upload/v1695120352/assignment/NIL_logo_Transparent_1_1_npdqms.png" alt="Italian Trulli" className="footerlogo"/>


                </div>
                <p className="footerpara">Book doctor appointments online and get your ailments treated in no time with our expert medical support systems. Get rid of all your medical problem with our expert panel of doctors who guide you towards a healthier life.</p>
                <div className="phone">
                    <div>
                        <p className="callno"> +91</p>
                        
                        <div class="vl"></div>

                    </div>
                    <div>
                        <div className="callcontainer">
                        <img src="https://res.cloudinary.com/dy3sku9c7/image/upload/v1695141013/assignment/call_1_mnia18.svg" alt="Italian Trulli" className="call"/>

                        </div>
                     
                    

                    </div>

                    
                    
                    

                </div>




            </div>

            <div  className="footerlis">
                <h1 className="serv">Services</h1>
                <ul className="lis">
                    <li>Appointments</li>
                    <li>Lab Tests</li>
                    <li>A-Z Medicine</li>
                    <li>Doctor Support</li>
                </ul>
            </div>
            <div className="footerlis" >
                <h1 className="serv">Legal</h1>
                <ul className="lis">
                    <li>General info</li>
                    <li>Privacy policy</li>
                    <li>A-Z Terms of services</li>
                    <li>Consultation</li>
                    <li>How it works</li>
                </ul>
            </div>
            <div  className="footerlis">
                <h1 className="serv">Talk to us</h1>
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