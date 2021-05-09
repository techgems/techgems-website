import React from "react"
import Navbar from "../components/home/Navbar"
import Footer from "../components/home/Footer"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(fab, faEnvelope);

const Index: React.FC<PageProps> = (props: PageProps) => {
  return (
    <main className="bg-red-800 text-white min-h-screen h-full flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <section className="flex justify-center max-w-lg w-full items-center text-center m-auto">
          <div className="text-center">
            <h1 className="my-4 text-3xl font-extrabold">Carlos Jimenez</h1>
            <h2 className="my-2 text-lg font-light">
              Full Stack Web Developer, Freelancer and Tech Blogger
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
