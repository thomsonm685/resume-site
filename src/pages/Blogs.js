import BlogNav from "../components/BlogNav";
import Nav from "../components/Nav";

import blogData from '../public/blogs.json'

import { useEffect, useState } from "react";
import BlogPreview from "../components/BlogPreview";



const Blogs = () => {

    // useState[blogsObj, setBlogsObj] = useState(null);

    // useEffect(()=>{
    //     getFiles();
    // },[])


    // const getFiles = async () => {
    //     const json = await JSON.parse(
    //         await readFile(
    //           new URL('/blogs.json')
    //         )
    //     );
    //     setBlogsObj(json);
    //     console.log('blogs json:', blogsObj);
    // } 

    console.log('blogData:', blogData);

    return(
        <>
            <BlogNav></BlogNav>
            <div className="blogs-title">
                <h1 style={{marginTop:'15vh'}}>Blogs</h1>
            </div>
            <div className="blogs">
                {blogData.map(b=>(
                    <BlogPreview blog={b}></BlogPreview>
                ))}
            </div>
        </>
    )
}

export default Blogs;