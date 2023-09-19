
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