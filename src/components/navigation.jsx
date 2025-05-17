import HeaderLinks from "./headerLinks";
import { Link } from 'react-scroll';

export const Navigation = (props) => {
  console.log(props.showLinks);
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <Link to="page-top" smooth={true} duration={500} className="navbar-brand page-scroll">
            IOT EDGE
          </Link>
        </div>
        { props.showLinks ? <HeaderLinks /> : null}
      </div>
    </nav>
  );
};
