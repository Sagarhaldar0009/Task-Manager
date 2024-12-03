// The use of Dyanmic Routing

//"use client" //This allows you to use client-side features like React hooks.

// import { useParams } from 'next/navigation';

const BlogList = () => {
    const blogs = [
        { id: 1, title: 'How to Learn JavaScript' },
        { id: 2, title: 'Getting Started with Next.js' },
        { id: 3, title: 'Understanding Dynamic Routing' },
    ];

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center">Blog List</h1>
        </div>
    );
};

export default BlogList;

