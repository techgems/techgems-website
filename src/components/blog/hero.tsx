import React from "react";
import Logo from "../../images/logos/techgems.png";

const Hero: React.FC = () => { 
    return(
        <section className="mx-auto w-4/5 lg:w-1/2 text-center mt-8 mb-12">
            <img src={Logo} className="h-32 mx-auto" />
            <h2 className="mx-auto text-2xl font-bold text-red-800">by Carlos Jimenez</h2>
            <p className="font-body mx-auto md:w-2/3 mt-4 text-gray-700">
                Tech Gems is a blog about all things tech, here you will find posts about:
                Web development, architecture and opinion pieces on platforms, software, cloud and the future of the web.
            </p>
        </section>
    );
};

export default Hero;