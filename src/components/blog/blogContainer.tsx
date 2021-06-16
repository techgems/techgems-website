import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

interface IProps {
  children: React.ReactNode;
}

const BlogContainer: React.FC<IProps> = (props: IProps) => {
  return (
    <main className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow">{props.children}</div>
      <Footer />
    </main>
  );
};

export default BlogContainer;
