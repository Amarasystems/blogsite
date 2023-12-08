// import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Intro from "components/intro";
import ListItem from 'components/list-item';
import GridItem from "components/grid-item";

// import MyNavbar from "components/my-navbar";
import { getAllPosts} from '../lib/api';
import Layout from "components/layout";

export default function Home({posts, categories}) {
  return (
    <Layout>
      Категори: Иргэдийн индэр
    <Row className='row2'> 
  <Col md="100%" >
      {/* <Intro/> */}
  </Col>
</Row>
<hr />
{/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
          {/* <pre>{JSON.stringify(categories, null, 2)}</pre> */}
<Row className="mb-5">
  <Col md="100%">
    <ListItem/>
  </Col>
  
  {
    posts.map((post) => 
        {
            if(post.category.category_name === "Иргэдийн индэр"){
                return <Col md="4">
                <GridItem post = {post}/>
              </Col>
            }
        }
    )
  }

</Row>
</Layout>
   
  )
}
export async function getStaticProps() {
    const posts = await getAllPosts();
    return {
        props: {
             posts
        }
   };
  }