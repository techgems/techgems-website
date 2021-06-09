//A list for curated posts on more defined topics than just tags.
//The topics are:
//-Web Development
//-Architecture
//-Cloud
//-Project/Product Management

import React from "react";
import { PageProps } from "gatsby";
import Navbar from "../components/blog/navbar";

const Categories: React.FC<PageProps> = (props: PageProps) => {

    return (
        <main>
            <Navbar />
        </main>
    );
};

export default Categories;