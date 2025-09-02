// src/Blogs.jsx

import { BLOGS } from "../data/BLOGS";
import { Link } from 'react-router-dom';


const BlogCard = ({ post }) => (
    <Link 
        to={`/blog/${post.slug}`} 
        className="block bg-white rounded-lg shadow-md overflow-hidden hover:cursor-pointer hover:shadow-lg transition-shadow duration-300"
    >
        <img src={post.bannerImage} alt={post.title} className="w-full h-48 object-cover" />
        <div className="font-circularStdBook p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
          <p className="text-gray-600 mb-4">{post.description}</p>
          <span className="text-gray-500">{post.date}</span>
        </div>
    </Link>
);

const Blogs = () => {
  return (
    <div className="bg-gray-100 py-16 font-circularStdBook">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {BLOGS.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;