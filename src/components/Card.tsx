import Image from 'next/image';
import Link from 'next/link';

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

export function Card({ post }: { post: Post }) {
  return (
    <div className="flex flex-col col-span-full overflow-hidden bg-white rounded-lg shadow">
      <div className="flex-shrink-0">
        <Image
          src={post.image}
          alt={post.title}
          className="object-cover"
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col justify-between flex-1 p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-sky-600">
            <Link
              href="#"
              className="hover:underline"
            >
              Article
            </Link>
          </p>
          <Link
            href="#"
            className="block mt-2"
          >
            <p className="text-xl font-semibold text-gray-900">{post.title}</p>
            <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
          </Link>
        </div>
        <div className="flex items-center mt-6">
          <div className="flex-shrink-0">
            <Link href="#">
              <span className="sr-only">{post.author.name}</span>
              <Image
                className="rounded-full"
                src={post.author.image}
                alt={post.author.name}
                width={40}
                height={40}
              />
            </Link>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              <Link
                href="#"
                className="hover:underline"
              >
                {post.author.name}
              </Link>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={post.datetime}>{post.date}</time>
              <span aria-hidden="true">&middot;</span>
              <span>{post.readingTime} read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
