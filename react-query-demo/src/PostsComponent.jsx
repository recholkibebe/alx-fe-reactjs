import { useQuery } from "@tanstack/react-query";

async function fetchPosts() {
	  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	  if (!res.ok) {
		      throw new Error("Network response was not ok");
		    }
	  return res.json();
}

export default function PostsComponent() {
	  const {
		      data: posts,
		      error,
		      isLoading,
		      isError,
		      refetch,
		    } = useQuery({
			        queryKey: ["posts"],
			        queryFn: fetchPosts,
			      });

	  if (isLoading) return <p className="text-blue-500">Loading posts...</p>;
	  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

	  return (
		      <div className="p-4">
		        <h1 className="text-xl font-bold mb-4">Posts</h1>
		        <button
		          onClick={() => refetch()}
		          className="px-4 py-2 mb-4 bg-blue-500 text-white rounded"
		        >
		          Refetch Posts
		        </button>
		        <ul className="space-y-2">
		          {posts.slice(0, 10).map((post) => (
				            <li key={post.id} className="border p-2 rounded">
				              <h2 className="font-semibold">{post.title}</h2>
				              <p className="text-gray-600">{post.body}</p>
				            </li>
				          ))}
		        </ul>
		      </div>
		    );
}

