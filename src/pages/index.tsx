import React from "react"
import Navbar from "../components/home/Navbar"
import Footer from "../components/home/Footer"
import BlogHelmet from "../components/blogHelmet";
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(fab, faEnvelope);

const Index: React.FC<PageProps> = (props: PageProps) => {
  return (
    <main className="bg-gradient-to-r from-red-800 to-red-500 text-white min-h-screen h-full flex flex-col">
      <BlogHelmet title="Tech Gems" description="Tech Gems is a web and cloud development blog, you'll also find gamification, UI and Product Development." />
      <Navbar />
      <div className="flex flex-1 ">
        <section className="flex justify-center max-w-lg w-full items-center text-center m-auto">
          <div className="text-center">
            <h1 className="my-4 text-2xl md:text-3xl font-extrabold font-header">Carlos Jimenez</h1>
            <h2 className="my-2 text-md md:text-lg font-light font-body">
              Full Stack Web Developer, Freelancer and Writer of the Tech Gems Blog.
            </h2>
            <ul className="mt-8">
              <li className="inline-block mx-2">
                <a href="https://github.com/techgems" className="text-3xl shadow-none hover:text-red-400">
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </a>
              </li>
              <li className="inline-block mx-2">
                <a href="https://www.linkedin.com/in/carlos-jimenez-61a926b7/" className="text-3xl shadow-none hover:text-red-400">
                  <FontAwesomeIcon icon={["fab", "linkedin"]} />
                </a>
              </li>
              <li className="inline-block mx-2 text-3xl">
                <a href="mailto:cjimenezber@gmail.com" className="text-3xl shadow-none hover:text-red-400">
                  <FontAwesomeIcon icon={["fa", "envelope"]} />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

export default Index;
