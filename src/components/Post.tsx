import { Card } from './Card';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  datetime: string;
  readingTime: string;
  author: Author;
}

interface Author {
  name: string;
  image: string;
}

export default async function Posts(data: Post[]) {
  return (
    <div className="bg-gray-800">
      <div className="container px-6 py-8 mx-auto">
        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
          {data.map((post: Post) => (
            <Card
              key={post.id}
              post={post}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
