import "./index.css"

const Header = () => (
    <>
    <nav className="navbar navbar-expand-lg header-container">
        <div className="container-fluid">
            <div clasName ="logo-container">
            <img src="https://res.cloudinary.com/dy3sku9c7/image/upload/v1695120352/assignment/NIL_logo_Transparent_1_1_npdqms.png" alt="Italian Trulli" className="logo" />
            <img src="https://res.cloudinary.com/dy3sku9c7/image/upload/v1695120414/assignment/Screenshot_2023-07-25_165513-removebg-preview_1_1_nfcp0u.png" alt="Italian Trulli" className="logoname" />

            </div>
            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav group1 ">
                <li className="nav-item">
                <a className="nav-link hometext active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link healthtext active" aria-current="page" href="#">Health Conditions</a>
                </li>
                <li className="nav-item">
                <a className="nav-link labtext active" aria-current="page" href="#">Lab Tests</a>
                </li>
                <li className="nav-item">
                <a className="nav-link medicinestext active" aria-current="page" href="#">Medicines</a>
                </li>
                 
            </ul>
            
                <div>
                    <button className="forpatients m-1">For Patients</button>
                </div>
                <div>
                    <button className="forpatients m-1">For Hospitals</button>
                </div>
                <div className="btt">
                    <button className="forpatients m-1">Play Store</button>
                </div>
            

            </div>

            
            
        </div>
    </nav>
     
     

    
    
    
    
    
    
    
    </>
)

export default Header;