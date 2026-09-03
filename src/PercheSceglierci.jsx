import React from "react";
import {
  FiAward,
  FiUsers,
  FiCheckCircle,
  FiArrowUpRight,
} from "react-icons/fi";
import strada from "./2.webp"

const PercheSceglierci = () => {
  const cards = [
    {
      number: "01",
      icon: <FiAward size={25} />,
      title: "Preparazione seria",
      text: "Teoria, pratica e guida affrontate con attenzione, per arrivare all'esame preparato.",
    },
    {
      number: "02",
      icon: <FiUsers size={25} />,
      title: "Ti seguiamo davvero",
      text: "Un punto di riferimento durante tutto il percorso, dalla prima pratica fino alla patente.",
    },
    {
      number: "03",
      icon: <FiCheckCircle size={25} />,
      title: "Tutto più semplice",
      text: "Informazioni chiare e assistenza nelle pratiche, senza complicazioni inutili.",
    },
  ];

  return (
    <section id="chi-siamo" className="relative bg-white">

      {/* AREA DELLA SEZIONE */}
      <div className="relative min-h-[180vh]">

        {/* IMMAGINE STICKY */}
        <div className="sticky top-0 h-screen overflow-hidden">

          <img
            src={strada}
            alt="Strada panoramica"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-white/55" />

        </div>


        {/* CONTENUTO */}
        <div className="absolute inset-0 z-10">

          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

            <div className="min-h-[180vh] flex flex-col pt-24 md:pt-32 pb-32">

              {/* HEADER */}
              {/* HEADER */}
<div className="max-w-3xl mx-auto mb-10 md:mb-12 text-center">

  <p className="
    text-sm
    font-bold
    uppercase
    tracking-[0.18em]
    text-[#3FA66B]
    mb-4
  ">
    Perché sceglierci
  </p>

  <h2 className="
    text-4xl
    md:text-5xl
    lg:text-6xl
    font-semibold
    tracking-tight
    leading-[1.05]
    text-black
  ">
    Un percorso semplice.
    <br />
    Una patente in più.
  </h2>

  <p className="
    mt-5
    max-w-xl
    mx-auto
    text-base
    md:text-lg
    leading-relaxed
    text-black/65
  ">
    Ti accompagniamo con chiarezza e attenzione in ogni fase
    del percorso.
  </p>

</div>


              {/* CONTENITORE CARD */}
              <div className="max-w-6xl w-full mx-auto">

                <div className="
                  grid
                  grid-cols-1
                  md:grid-cols-3
                  items-center
                  gap-5
                  lg:gap-7
                ">

                  {cards.map((card, index) => (

                    <div
                      key={card.number}
                      className={`
                        group
                        relative
                        bg-white
                        w-full
                        rounded-2xl
                        border
                        border-black/5
                        shadow-xl
                        p-7
                        md:p-8
                        overflow-hidden
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        hover:shadow-2xl
                        ${
                          index === 1
                            ? "md:-translate-y-7 md:min-h-[340px]"
                            : "md:min-h-[290px]"
                        }
                      `}
                    >

                      {/* LINEA VERDE */}
                      <div className="
                        absolute
                        top-0
                        left-0
                        right-0
                        h-1.5
                        bg-[#3FA66B]
                      " />


                      {/* TOP */}
                      <div className="
                        flex
                        items-center
                        justify-between
                      ">

                        <span className="
                          text-sm
                          font-bold
                          tracking-[0.15em]
                          text-[#3FA66B]
                        ">
                          {card.number}
                        </span>

                        <div className="
                          w-12
                          h-12
                          rounded-xl
                          bg-[#3FA66B]/10
                          text-[#3FA66B]
                          flex
                          items-center
                          justify-center
                        ">
                          {card.icon}
                        </div>

                      </div>


                      {/* TESTO */}
                      <div className="mt-9">

                        <h3 className="
                          text-2xl
                          md:text-[26px]
                          font-semibold
                          tracking-tight
                          text-black
                        ">
                          {card.title}
                        </h3>

                        <p className="
                          mt-4
                          text-base
                          leading-relaxed
                          text-black/55
                        ">
                          {card.text}
                        </p>

                      </div>


                      {/* FRECCIA */}
                      <div className="
                        absolute
                        bottom-7
                        right-7
                        w-10
                        h-10
                        rounded-full
                        border
                        border-black/10
                        flex
                        items-center
                        justify-center
                        text-black/50
                        transition-all
                        duration-300
                        group-hover:bg-[#3FA66B]
                        group-hover:border-[#3FA66B]
                        group-hover:text-white
                      ">
                        <FiArrowUpRight size={19} />
                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default PercheSceglierci;