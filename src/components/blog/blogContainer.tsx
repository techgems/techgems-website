import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

interface IProps {
    children: React.ReactNode;
}

const BlogContainer: React.FC<IProps> = (props: IProps) => {
    return (
        <main>
            <Navbar />
            {props.children}
            <Footer />
        </main>
    )
};

export default BlogContainer;