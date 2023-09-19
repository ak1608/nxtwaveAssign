
import "./index.css";



const Toplanding =()=>(
    <>
    <div className="bgcontainer">
        <div className="left">
            
            <form id="myForm">
                <h3 className="formhead">Fill in the details to get a call!</h3>

                <div className="mb">
                    <img src="https://res.cloudinary.com/dy3sku9c7/image/upload/v1695148422/assignment/person_jkql2i.svg" className="formlogo" />
                    <input type="text" className="inp"  id="name" placeholder="Full Name" />
                 
                </div>
                <div className="mb">
                    <img src="https://res.cloudinary.com/dy3sku9c7/image/upload/v1695148422/assignment/call_2_b8tewg.svg" className="formlogo" />
                    <input type="text" className="inp"  id="name" placeholder="Phone Number" />
                 
                </div>
                <div className="mb">
                    <img src="https://res.cloudinary.com/dy3sku9c7/image/upload/v1695148422/assignment/distance_mshomw.svg" className="formlogo" />
                    <input type="text" className="inp"  id="name" placeholder="Location" />
                 
                </div>
                <div className="checkbox">
                    <input type="checkbox" checked="checked" />
                    <p className="terms" >By continuing, you agree to our <span className="termsspl">T&C and privacy policy</span></p>
                </div>
                <div className="proceed">
                    <button type="submit" class="btn btn-primary">Proceed</button>

                </div>
                
            </form>

            <div className="offers">
                <div className="leftoff">
                    <p className="offertext">Get a Full Body Checkup Now at <span className="orgprice">Rs 5999 </span> <span>Rs 999</span></p>
                </div>
                <div className="rightoff">
                    <p className="seventy">70% OFF</p>
                </div>

            </div>

        </div>
        <div>
            <div className="midContainer">
                    <p  className="midTitle"><span className="exp">Best in Class</span>Lab Tests!</p>
                </div>
                <div className="midContainer">
                <img src="https://res.cloudinary.com/dy3sku9c7/image/upload/v1695144451/assignment/Vector_2_dtgoga.png" className="bluestr" />
            </div>

            <div className="right">
            </div>
        
        </div>






    </div>
    <div className="accred">
        <div className="acContainer">
        <img src="https://res.cloudinary.com/dy3sku9c7/image/upload/v1695142501/assignment/Rectangle_80_czfeaw.png" alt="Italian Trulli" className="toplogo" />
            <p className="para">NABL Accredited Labs</p>
        </div>
        <div className="acContainer">
        <img src="https://res.cloudinary.com/dy3sku9c7/image/upload/v1695142501/assignment/Rectangle_81_rirffm.png" />
            <p className="para">Free Sample Collection</p>
        </div>

    </div>
    

    
    
    
    
    
    
    
    
    </>
)

export default Toplanding;