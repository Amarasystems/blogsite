// import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import Intro from "components/intro";
import ListItem from 'components/list-item';
import GridItem from "components/grid-item";
import { getPaginatedPosts } from '../lib/api';
import { getAllCategories } from '../lib/api';
import Layout from "components/layout";
import { usePosts } from '/hooks/usePosts';
import useSWRInfinite from 'swr/infinite'
import { getAllStories } from 'lib/api';

// import MyNavbar from "components/my-navbar";
const PAGE_LIMIT = 6;

export default function Home({posts, categories, stories}) {
  const { data, size, setSize } = useSWRInfinite((index) => `/api/posts?page=${index}&limit=${PAGE_LIMIT}`,{ initialData: [posts] }
  );
  return (
    <Layout>

                <Row className='row2'> 
              <Col md="100%" >
                  <Intro/>
              </Col>
          </Row>
          <hr />
            <pre>{JSON.stringify(stories, null, 2)}</pre>
            {/* <pre>{JSON.stringify(categories, null, 2)}</pre> */}
            {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
            {/* <pre>{JSON.stringify(data, null, 2)}</pre>
            
            <div>-----------------------------------------------------</div>
            <pre>{JSON.stringify(posts, null, 2)}</pre> */}
              <Row className="mb-5">
                <Col md="100%">
                  <ListItem />
                </Col>
                {data && data.map((page) => 
                  page.map((post) => (
                    <Col md={24/PAGE_LIMIT}>
                      <GridItem post = {post}/>
                    </Col>
                  )
                  ))}
              </Row>
            <div className='more-button' style={{textAlign: "center"}}>
              {data && data[data.length-1].length !== 0 && <Button 
              style={{backgroundColor: "white", fontWeight: "500", color: "#0C6FFF", borderColor: "#B4A8FF", borderWidth: "3px"}} 
              onClick={()=> setSize(size + 1)}>
                Цааш үзэх
              </Button>}
            </div>
      </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getPaginatedPosts(1, PAGE_LIMIT);
  const categories = await getAllCategories();
  const stories = await getAllStories();
  return {
      props: {
           posts, categories, stories
      }
 };
}
