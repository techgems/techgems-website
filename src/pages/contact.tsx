import React from "react";
import BlogHelmet from "../components/blogHelmet";
import BlogContainer from "../components/blog/blogContainer";

const Contact: React.FC<PageProps> = (props: PageProps) => {
  return (
    <BlogContainer>
      <BlogHelmet
        title="Tech Gems - Contact"
        description="Tech Gems page with contact information to the author."
      />
      <section className="max-w-2xl mx-auto mt-12">
        <div className="mt-12 mb-4 mx-auto w-1/2 text-center text-red-800">
          <h1 className="text-4xl font-bold">Contact</h1>
        </div>
        <p className="text-gray-700 mx-auto text-base font-body leading-relaxed mb-6">
          I am particularly versed in asp.net core backends and SPA front ends
          (mainly with React and Blazor). I also have experience in modern cloud
          applications and architecture, particularly with AWS. If you need to
          start a project from scratch, or need some consulting on how to
          improve an existing project to meet the scalability demands of the
          modern web, then feel free to fill the information below and we can
          chat more about your project and how can I help.
        </p>
        <ul className="mb-6 text-gray-700 text-base font-body leading-relaxed list-disc list-inside ml-6">
          <li>Have a web application designed and made for you.</li>
          <li>Consulting on your web-based project.</li>
          <li>
            Crafting of a proper architecture diagram for your application.
          </li>
        </ul>
        <p className="text-gray-700 mx-auto text-base font-body leading-relaxed mb-6">
          If you're interested in the services I have to offer you can contact
          me through my email:{" "}
          <a className="text-red-800" href="mailto:cjimenezber@gmail.com">cjimenezber@gmail.com</a>, you
          can also check my <a className="text-red-800" href="https://github.com/techgems">Github</a> and{" "}
          <a className="text-red-800" href="https://www.linkedin.com/in/carlos-jimenez-61a926b7/">
            Linked In
          </a>
        </p>
      </section>
    </BlogContainer>
  );
};

export default Contact;
