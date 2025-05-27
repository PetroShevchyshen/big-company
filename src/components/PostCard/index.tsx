import type { FC } from "react";
import type { IPostDto } from "../../types/post.type";

interface PostCardProp {
  data: IPostDto;
}

export const PostCard: FC<PostCardProp> = ({ data }) => {
  const { body, userId, title } = data;
  return (
    <div className="w-60 h-52 bg-slate-50 dark:bg-slate-800 p-2 space-y-1 rounded-lg ring-1 ring-slate-700 text-slate-900 dark:text-white hover:bg-slate-200 cursor-pointer">
      <p>
        <strong>Id: </strong>
        {userId}
      </p>
      <p>
        <strong>Name: </strong>
        {title}
      </p>
      <article className="overflow-hidden text-ellipsis whitespace-pre">
        <strong>Post:</strong> {body}
      </article>
    </div>
  );
};
