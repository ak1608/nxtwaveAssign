import "./index.css"

const Header = () => (
    <>
    <nav className="navbar navbar-expand-lg header-container">
        <div className="container-fluid">
            <div clasName ="logo-container">
            <img src="https://res.cloudinary.com/dy3sku9c7/image/upload/v1695120352/assignment/NIL_logo_Transparent_1_1_npdqms.png" alt="Italian Trulli" className="logo" />
            <img src="https://res.cloudinary.com/dy3sku9c7/image/upload/v1695120414/assignment/Screenshot_2023-07-25_165513-removebg-preview_1_1_nfcp0u.png" alt="Italian Trulli" className="logoname" />

            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    <h1>hello</h1>
    <h1>hello</h1>

    
    
    
    
    
    
    
    </>
)

export default Header;