import React from "react";
import Navbar from "../components/blog/navbar";
import BlogContainer from "../components/blog/blogContainer";

const Contact: React.FC<PageProps> = (props: PageProps) => {

  return (
    <BlogContainer>
      <section className="max-w-2xl mx-auto mt-12">
        <div className="mt-12 mb-4 mx-auto w-1/2 text-center text-red-800">
          <h1 className="text-4xl font-bold">Contact</h1>
        </div>
        <p className="text-gray-700 mx-auto text-base font-body font-light leading-relaxed">
          I am particularly versed in asp.net core backends and SPA front ends
          (mainly with React and Blazor). I also have experience in modern cloud
          applications and architecture, particularly with AWS. If you need to
          start a project from scratch, or need some consulting on how to
          improve an existing project to meet the scalability demands of the
          modern web, then feel free to fill the information below and we can
          chat more about your project and how can I help.
        </p>
        <p className="text-gray-700 mx-auto text-base font-body font-light leading-relaxed">
          
        </p>
      </section>
    </BlogContainer>
  );
};

export default Contact;
