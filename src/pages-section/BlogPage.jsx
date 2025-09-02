// src/BlogPost.jsx
import { Footer, Header } from '../components';
import { useParams } from 'react-router-dom';
import { BLOGS } from '../data/BLOGS';
import BlogPost from '../components/BlogPost';

const Blog = () => {
  const { slug } = useParams();

  // Find the blog post that matches the ID from the URL
  const post = BLOGS.find(p => p.slug === slug);

  return (
    <>
      <Header fixed={true} />
      <BlogPost post={post} />
      <Footer />
    </>
  )

  

};

export default Blog;