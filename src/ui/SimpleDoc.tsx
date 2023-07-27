import Link from 'next/link';
interface PostProps {
  id: number;
  title: string;

  content: string;
  is_published: boolean;
  published_date: string | null;
  created_at: string;
  updated_at: string | null;
  author_id: string;
}

type TitleProps = string[] | undefined;
type ContentProps = string[] | undefined;

export interface SimpleDocProps {
  id: number;

  title: TitleProps;
  content: ContentProps;
}

export default function SimpleDoc(posts: PostProps) {
  return (
    <div
      className="flex flex-col col-span-full overflow-hidden bg-white rounded-lg shadow"
      key={posts.id}
    >
      <div className="flex-shrink-0">{/** Image will go here */}</div>
      <div className="flex flex-col justify-between flex-1 p-6">
        <div className="flex-1">
          <p className="text-xl font-semibold text-gray-900">{posts.title}</p>
          <Link
            href={`/blog/${posts.id}`}
            className=" text-cyan-600 border shadow-lg m-2 p-2 hover:underline"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
