import Logo from '../Img/Logo.png'
import './NavBar.css'
import { Link } from 'react-router-dom';
function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt='' ></img>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="about">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="about">Contact</Link>
                            </li>
                        </ul>
                        <form class="form d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <button class="btn-53" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">
                            <div class="original">login</div>
                            <div class="letters">
                                <span>l</span>
                                <span>o</span>
                                <span>g</span>
                                <span>i</span>
                                <span>n</span>
                            </div>
                        </button>

                    </div>
                    <div className='icon-navbar'>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                            <div class="mb-3">
                                                <label for="recipient-name" class="col-form-label">UserName</label>
                                                <input type="text" class="form-control" id="recipient-name" />
                                            </div>
                                            <div class="mb-3">
                                                <label for="recipient-name" class="col-form-label">Password</label>
                                                <input type="password" class="form-control" id="recipient-name" />
                                            </div>
                                        </form>
                                        <Link className='sign-in'>create account</Link>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn-53" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn-53">Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default NavBar;