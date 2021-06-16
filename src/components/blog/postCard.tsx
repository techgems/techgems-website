import React from "react";
import { Link } from "gatsby";

interface IProps {
  title: string;
  postSlug: string;
  date: string;
  excerpt: string;
  timeToRead: number;
  tags?: string[];
  containerClass: string;
}

const PostCard: React.FC<IProps> = (props: IProps) => {
  return (
    <div className={`prose prose-sm ${props.containerClass}`}>
      <h1 className="mb-0">
        <Link to={props.postSlug}>{props.title}</Link>
      </h1>
      <span className="text-gray-400">{props.date} • ☕️ {props.timeToRead} min read</span>
      <p>{props.excerpt}</p>
    </div>
  );
};

export default PostCard;
