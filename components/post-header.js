import { urlFor } from "/lib/api";
import moment from "moment";
import Date from "./date";

export default ({post}) => {
    moment.locale("mn");
    return (
            
        <div className="blog-detail-header">
           
        <p className="lead mb-0" >
          <img
              src={post.author.profile}
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
          />
          <span className="profile_name">{post.author.author_name}, <Date dateString={post.date}/> 
             {/* {post.date} */}
          </span>
        </p>

        <h2 className="font-weight-bold blog-detail-header-title mb-0">
              {post.title}
        </h2>
        

        <h5 className="blog-detail-header-subtitle mb-3">
              {post.category.category_name}
        </h5>
        <img className="img-fluid rounded" 
          src={urlFor(post.cover_image).height(800).url()}
          alt={post.cover_image.alt} />
        <div className="code-filename" style={{textAlign:"center"}}>{post.cover_image.alt}</div>
      </div>
    )
}