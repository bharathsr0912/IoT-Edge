import { Link } from 'react-scroll';

export default function HeaderLinks() {

  return(
    <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {/* <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li> */}
            <li>
              <Link to="about" smooth={true} duration={500} className="page-scroll cursor-pointer">
                About
              </Link>
            </li>
            <li>
              <Link to="services" smooth={true} duration={500} className="page-scroll cursor-pointer">
                Services
              </Link>
            </li>
            {/* <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li> */}
            {/* <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li> */}
            {/* <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li> */}
            <li>
              <Link to="contact" smooth={true} duration={500} className="page-scroll cursor-pointer">
                Contact
              </Link>
            </li>
          </ul>
        </div>
    );
}