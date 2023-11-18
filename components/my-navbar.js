import { Navbar, Nav, NavDropdown} from "react-bootstrap";
import { Media, Image } from "react-bootstrap";
import Weather from "./weather";
import Currency from "./currency";
import { useContext } from "react";
import ThemeContext from "/context/theme-context";

export default () => {

  const context = useContext(ThemeContext)
  return (
    <div>
      <link href='https://fonts.googleapis.com/css?family=Rubik' rel='stylesheet'></link>
       <Navbar className="fj-navbar fj-nav-base"  expand="lg">
      <Navbar.Brand className="fj-navbar-brand">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar.Brand>  
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link className="fj-navbar-link" href="/">
        <Media>
          <Image
            width={165}
            height={39}
            className="logo"
            src="logo.png"
          />
          </Media>
          </Nav.Link>
          <Nav.Link className="fj-navbar-item fj-navbar-link" href="/"  >
            {/* {context.theme.fontColor} */}
            Эхлэл
          </Nav.Link>
          <Nav.Link className="fj-navbar-item fj-navbar-link" href="/Ontsloh">
            Онцлох
          </Nav.Link>
          <div className="live">
            <Nav.Link className="live fj-navbar-item fj-navbar-link" href="/#" >
            LIVE <span className="live-circle"></span>
          </Nav.Link>
          </div>
          <Nav.Link className="fj-navbar-item fj-navbar-link" href="/entertainment">
            Энтертайнмент
          </Nav.Link>
          <Nav.Link className="fj-navbar-item fj-navbar-link" href="/tsagaan-medee">
            Цагаан мэдээ
          </Nav.Link>
          <Nav.Link className="fj-navbar-item fj-navbar-link" href="/irgediin-inder">
            Иргэдийн индэр
          </Nav.Link>
          <Nav.Link className="fj-navbar-item fj-navbar-link" href="/ergen-toirond">
            Эргэн тойронд
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Currency/>
      <Weather/>
    </Navbar>


      {/* <Navbar className="fj-navbar fj-nav-base" bg="transparent" expand="lg">
      <Navbar.Brand className="fj-navbar-brand">
      <Nav.Link className="fj-navbar-link" href="/">
        <Media>
          <Image
            width={165}
            height={39}
            className="logo"
            src="logo.png"
          />
          </Media>
          </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="fj-navbar-item fj-navbar-link" href="/">
            Эхлэл
          </Nav.Link>
          <Nav.Link className="fj-navbar-item fj-navbar-link" href="/Ontsloh">
            Онцлох
          </Nav.Link>
          <div className="live">
            <Nav.Link className="live fj-navbar-item fj-navbar-link" href="/#" >
            LIVE <span className="live-circle"></span>
          </Nav.Link>
          </div>
          <Nav.Link className="fj-navbar-item fj-navbar-link" href="/entertainment">
            Энтертайнмент
          </Nav.Link>
          <Nav.Link className="fj-navbar-item fj-navbar-link" href="/tsagaan-medee">
            Цагаан мэдээ
          </Nav.Link>
          <Nav.Link className="fj-navbar-item fj-navbar-link" href="/irgediin-inder">
            Иргэдийн индэр
          </Nav.Link>
          <Nav.Link className="fj-navbar-item fj-navbar-link" href="/ergen-toirond">
            Эргэн тойронд
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Currency/>
      <Weather/>
    </Navbar> */}
   
    </div>
  );
};
