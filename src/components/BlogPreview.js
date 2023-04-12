import { Link } from "react-router-dom";

const BlogPreview = ({blog}) => {

    return(
        <Link
            to={'/blogs/' + blog.id}
        >
            <div className="blogPreview">
                <h3>{blog.title}</h3>
                <p style={{color:'#000'}}><i>{blog.date}</i></p>
            </div>
        </Link>
    )
}

export default BlogPreview;