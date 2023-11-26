import { Media, Image } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from "react-bootstrap";

export default () => (

  <div className="float-container">
  <div className="float-child">
    <div className="ontsloh-medee"><h2>ОНЦЛОХ МЭДЭЭ<h2>ene bol garchig yum </h2></h2> 
    Монголын шинжлэх ухааны салбар монгол  орон төдийлөн
    хөрөнгө мөнгө зарцуулахгүй байгаа юм.
    </div>
  </div>

  
  
  <div className="float-child">
    <div className="blue"> 
    <Card.Img 
             src="https://cdn.sanity.io/images/68liq5mc/production/a9f2e1f6041ab758ee62134830e5ddb510369057-612x408.jpg?h=348"
             height="348px"
             width={"100%"}
            alt="Card image cap"
            style={{borderTopRightRadius: "8px", borderBottomRightRadius: "8px"}}
          />

      </div>
  </div>
  
</div>
  // <Media className="mb-4 admin-intro">
  //   <Image
  //     roundedCircle
  //     width={64}
  //     height={64}
  //     className="mr-3"
  //     src="usa.png"
  //     alt="Generic placeholder"
  //   />
  //   <Media.Body>
  //     <h5 className="font-weight-bold mb-0">asdasd</h5>
  //     <p className="welcome-text">
  //     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  //     </p>
  //   </Media.Body> 
  // </Media>
);