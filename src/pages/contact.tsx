import React from "react";
import Navbar from "../components/blog/navbar";
import { useForm } from "react-hook-form";

interface ContactForm {
  name: string;
  email: string;
  description: string;
}

const Contact: React.FC<PageProps> = (props: PageProps) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>();
  const onSubmit = handleSubmit((data) => console.log(data));

  const labelClass = "block text-sm font-medium text-gray-700 mt-3";
  const inputClass =
    "mt-3 p-2 focus:outline-none focus:ring focus:ring-primary-light focus:border-primary block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md";

  return (
    <main>
      <Navbar />
      <section className="max-w-2xl mx-auto mt-12">
        <div className="mt-12 mb-4 mx-auto w-1/2 text-center text-red-800">
          <h1 className="text-4xl font-bold">Contact</h1>
        </div>
        <p className="mx-auto text-base font-body font-light leading-relaxed">
          I am particularly versed in asp.net core backends and SPA front ends
          (mainly with React and Blazor). I also have experience in modern cloud
          applications and architecture, particularly with AWS. If you need to
          start a project from scratch, or need some consulting on how to
          improve an existing project to meet the scalability demands of the
          modern web, then feel free to fill the information below and we can
          chat more about your project and how can I help.
        </p>
      </section>
      <section className="max-w-2xl mx-auto mt-12">
        <form onSubmit={onSubmit}>
          <label className={labelClass}>Name</label>
          <input className={inputClass} {...register("name")} />
          <label className={labelClass}>Email</label>
          <input className={inputClass} {...register("email")} />
          <label className={labelClass}>Description</label>
          <input className={inputClass} {...register("description")} />
          <div className="mt-4 flex justify-end">
            <button
              className="w-full sm:w-auto rounded-md px-3 py-2 text-base sm:text-sm focus:ring focus:ring-opacity-60 shadow-sm hover:shadow-md border bg-red-800 hover:bg-red-700 text-white focus:ring-red-800 border-red-800 font-medium focus:outline-none"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Contact;
