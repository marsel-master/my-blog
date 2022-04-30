import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {posts} from "./constans/index";

export const Main = () => {
    return <h1 className="title">Главная страничка</h1>
}

export const Products = () => {
    return <h1 className="title" >Наши продукты</h1>
}

export  const About = () =>{
    return <h1 className="title" >О нас</h1>

}

export  const Contacts = () =>{
    return <h1 className="title" >Контакты</h1>
}

export  const Post = () =>{
    const {id} = useParams();
    const [post, setPost] = useState({});

    const getPost = () => {
       const post = posts.find(item => item.id === parseInt(id));
       setPost(post);
    }

    useEffect(()=>{
        getPost();
    }, [])

    return (
        <>
        <h1 className="title" >(Post.title)</h1>
            <p>{Post.desc}</p>
        </>
    )
}

export const Posts = () => {
    return (
        <div className={posts}>
            <h1 className="title">Все посты</h1>
        <ul>
            {
                posts.map(item => {
                    return <li><Link to={`/post/${item.id}`}>{item.title}</Link></li>
                })
            }
        </ul>
        </div>
    )
}


export  const NotFound = () =>{

    return <h1>Страница не найдена. , <Link to="/"> Перейти на главную </Link></h1>
}

