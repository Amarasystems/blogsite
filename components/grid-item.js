import { Card } from "react-bootstrap";
import Link from 'next/link'
import moment from "moment";
import { urlFor } from "/lib/api";
import Date from "./date";

export default ({post}) => {
  moment.locale("mn");

  return (
   
    <Card className={`fj-card`}>
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
          <img
            src={urlFor(post.author.profile).height(70).url()}
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
            alt="avatar"
          />
          <div>
            <Card.Title className="font-weight-bold mb-1">
              {post.author.author_name}
            </Card.Title>
            <Card.Text className="card-date">
            <Date dateString={post.date}/> 
              {/* {post.date} */}
            </Card.Text>
          </div>
        </Card.Header>

      <Link href={`/${post.slug}`} style={{textDecoration: "none", fontFamily: "rubik", color: "black"}}>
        <div className="view overlay">
          <Card.Img
             src={urlFor(post.image).height(300).url()}
             height="300px"
            alt="Card image cap"
          />
        </div>
        <Card.Body>
          <Card.Title className="card-main-title">
            {post.title}
          </Card.Title>
          <Card.Text>{post.category.category_name}</Card.Text>
        </Card.Body>
      </Link>
      </div>
    </Card>
  );
};