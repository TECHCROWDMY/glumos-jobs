const BlogPost = ({post}) => {
    if (!post) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl font-bold text-gray-800">Blog Post Not Found</h1>
                <p className="mt-4 text-gray-600">The blog post you are looking for does not exist.</p>
            </div>
        );
    }

    return (
        <div className="bg-gray-100 py-32 font-circularStdBook">
            <div className="container mx-auto px-4">
                <article className="bg-white rounded-lg shadow-md p-8">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{post.title}</h1>
                    <p className="text-gray-500 mb-6">
                        By <span className="font-semibold">{post.author}</span> on {post.date}
                    </p>
                    {/* ADDED: Banner image goes here */}
                    {post.bannerImage && (
                        <img 
                        src={post.bannerImage} 
                        alt={post.title} 
                        className="w-full h-auto rounded-lg mb-8 object-cover" 
                        />
                    )}
                    {/* Render the HTML content from the API */}
                    <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>
            </div>
        </div>
    );
}

export default BlogPost