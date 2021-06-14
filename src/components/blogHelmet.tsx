import React from "react";
import { Helmet } from "react-helmet";
import Favicon from "../images/logos/favicon-32x32.png";

interface IProps {
  title: string;
  description: string;
}

const BlogHelmet: React.FC<IProps> = (props: IProps) => {
    const { title, description } = props;

  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="description"
        content={description}
      />
      <link rel="icon" type="image/png" sizes="32x32" href={Favicon} />
    </Helmet>
  );
};

export default BlogHelmet;
