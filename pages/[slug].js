
import {Row, Col} from "react-bootstrap";
import Layout from "components/layout";
import { getPostBySlug } from "/lib/api";
import { getAllPosts } from "lib/api";
import { getPaginatedPosts } from "lib/api";
import { urlFor } from "/lib/api";
import PostHeader from "components/post-header";
import {useRouter} from 'next/router';
const BlockContent = require('@sanity/block-content-to-react')


export default ({post}) => {
  const router = useRouter();
  if(router.isFallback) return 
  <Layout>
    <div>
      Түр хүлээнэ үү...
    </div>
  </Layout>
return (
<Layout>
    <Row className='row1'>
      <Col md="12">
        {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
        <PostHeader post={post}/>
        <br />
        <BlockContent
            blocks={post.content} 
            serializers={serializers} 
            imageOptions={{w: 320, h: 240, fit: 'max'}}
        />,
      </Col>
    </Row>
  </Layout>
  )
}

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    image: (props) => (
      <div className={`blog-image blog-image-${props.node.position}`}> 
          <img 
          src={urlFor(props.node).height(400).url()}/>
          <div className="code-filename" style={{textAlign: "center"}}>{props.node.alt}</div>
      </div>
    ),
  },
}


// export const getServerSideProps = async ({ params }) => {
//     const post = await getPostBySlug(params.slug);
//     return {
//       props: {
//         post: post[0],
//       },
//     };
//   };

export const getStaticProps = async ({ params }) => {

    const post = await getPostBySlug(params.slug);
    return {
      props: {
        post: post[0],
      },
    };
  };
  
  export const getStaticPaths = async () => {
    const posts = await getPaginatedPosts(0, 15);
    return {
      paths: posts.map((post) => ({
        params: {
          slug: post.slug
        },
      })),
      fallback: true,
    };
  };
