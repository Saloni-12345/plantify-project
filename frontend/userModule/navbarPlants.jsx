import "../css/navbar.css";
function NavbarPlants() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
            <div className="container-fluid nav-container">
                <a className="navbar-brand logo" href="/home">
                    <div className="logo-icon">
                        <i className="fas fa-seedling"></i>
                    </div>
                    Plantify
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-menu" id="nav-menu">
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="/home">
                                <i class="fas fa-home"></i>Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/weather">
                                <i class="fas fa-camera"></i>Weather Forcasting</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/diseases">
                                <i class="fas fa-info-circle"></i>Diseases</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/gallery?page=1">
                                <i class="fas fa-images"></i>Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">
                                <i class="fas fa-leaf"></i>About</a>
                        </li>
                    </ul>
                    <a href="/predict-disease" class="cta-btn">
                        <i class="fas fa-magic"></i>
                        Detect Disease
                    </a>
                </div>
            </div>
        </nav>
    )
}
export default NavbarPlants;