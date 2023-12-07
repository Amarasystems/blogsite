// import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Intro from "components/intro";
// import ListItem from 'components/list-item';
// import GridItem from "components/grid-item";
import MyNavbar from "components/my-navbar";
import { Media, Image } from "react-bootstrap";

export default ({children}) => {
    return (
        
        <div className='header '>
        <MyNavbar />
        <div className="blog-detail-page">
  
          <div className={`page-wrapper`}>
            {children}
          </div>
      </div>
      <footer className="page-footer">
        <Image
            width={200}
            height={47}
            src="logo.png"
          />
        <div>
        <br />
          <a href='#'>Бидний тухай</a>
          <a href='#' >Нууцлалын бодлого</a>
          <a href='#' >Сурталчилгаа байршуулах</a>
          <a href='#'>Холбоо барих</a>
        </div>
        <br />
        <div className='social-icons'>
        {/* <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a> */}
        </div>
        <hr />
      
        <div className='footer-bottom'>
         Бүх эрх хуулиар хамгаалагдсан © 2023 он, Powered by <span className="amara">AmaraSystem</span>
        </div>
      </footer>
     
      </div>
    )
}