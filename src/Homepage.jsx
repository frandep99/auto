import React from "react";
import Navbar from "./Navbar";
import background from "./auto.jpg";
import Servizi from "./service";
import PercheSceglierci from "./PercheSceglierci";
const Homepage = () => {
  return (
    <div>
      <section className="relative min-h-screen overflow-hidden">

        {/* BACKGROUND */}
        <img
          src={background}
          alt="Autoscuola Guidonia"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gray-800/70"></div>

        {/* NAVBAR */}
        <Navbar />

        {/* HERO CONTENT */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-5 text-center">
          <div className="max-w-4xl text-white">

            <h1 className="
              text-5xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-semibold
              tracking-tight
              leading-[1.05]
              drop-shadow-lg
            ">
              La tua patente.
              <br />
              Il tuo prossimo traguardo.
            </h1>

            <p className="
              mt-6
              md:mt-7
              max-w-2xl
              mx-auto
              text-lg
              sm:text-lg
              md:text-xl
              lg:text-2xl
              font-normal
              leading-relaxed
              text-white/90
              drop-shadow-md
            ">
              Conseguimento, rinnovo, revisione e duplicato patenti.
            </p>

            <a
              href="#servizi"
              className="
                inline-flex
                items-center
                justify-center
                mt-8
                md:mt-9
                px-7
                md:px-9
                py-3.5
                md:py-4
                bg-[#D62828]
                hover:bg-[#b91f1f]
                rounded-lg
                text-base
                md:text-lg
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-200
              "
            >
              Scopri di più
            </a>

          </div>
        </div>

      </section>
      <Servizi></Servizi>
      <PercheSceglierci></PercheSceglierci>
    </div>
  );
};

export default Homepage;