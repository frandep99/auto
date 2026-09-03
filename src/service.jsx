import React from "react";
import { ArrowUpRight, Car, RefreshCw, FileText, ShieldCheck } from "lucide-react";

const Servizi = () => {
  return (
    <section id="servizi" className="bg-[#f5f7fa] py-24 md:py-32">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#D62828] mb-4">
              I nostri servizi
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#123B6D] leading-[1.05]">
              Pensiamo noi alla strada.
              <br />
              Tu pensa a guidare.
            </h2>
          </div>

          <p className="max-w-sm text-slate-600 text-base md:text-lg leading-relaxed">
            Dalla prima patente alle pratiche più complesse, ti seguiamo
            passo dopo passo.
          </p>

        </div>


        {/* SERVIZI */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

          {/* SERVIZIO PRINCIPALE */}
          <div className="lg:col-span-7">

            <a
              href="#patenti"
              className="group relative block h-full min-h-[480px] overflow-hidden rounded-3xl bg-[#123B6D] p-8 md:p-10"
            >

              {/* NUMERO */}
              <span className="absolute top-8 right-9 text-sm font-semibold text-white/40">
                01
              </span>

              {/* ICONA */}
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                <Car size={27} strokeWidth={1.7} />
              </div>

              <div className="absolute left-8 right-8 bottom-8 md:left-10 md:right-10 md:bottom-10">

                <p className="text-sm uppercase tracking-widest text-white/50 mb-4">
                  Il percorso completo
                </p>

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
                  Conseguimento
                  <br />
                  patente
                </h3>

                <p className="mt-5 max-w-lg text-white/70 text-base md:text-lg leading-relaxed">
                  Preparazione teorica, esercitazioni e guida. Tutto il
                  percorso necessario per arrivare pronto all'esame.
                </p>

                {/* PATENTI */}
                <div className="flex flex-wrap gap-2 mt-7">
                  <span className="px-3 py-1.5 rounded-full bg-white/10 text-white text-sm">
                    AM
                  </span>

                  <span className="px-3 py-1.5 rounded-full bg-white/10 text-white text-sm">
                    A
                  </span>

                  <span className="px-3 py-1.5 rounded-full bg-white/10 text-white text-sm">
                    B
                  </span>

                  <span className="px-3 py-1.5 rounded-full bg-white/10 text-white text-sm">
                    C
                  </span>

                  <span className="px-3 py-1.5 rounded-full bg-white/10 text-white text-sm">
                    D
                  </span>

                  <span className="px-3 py-1.5 rounded-full bg-white/10 text-white text-sm">
                    E
                  </span>
                </div>

              </div>

              {/* FRECCIA */}
              <div className="
                absolute top-8 right-20
                w-11 h-11
                rounded-full
                bg-white
                flex items-center justify-center
                text-[#123B6D]
                transition-transform duration-300
                group-hover:translate-x-1 group-hover:-translate-y-1
              ">
                <ArrowUpRight size={20} />
              </div>

              {/* DECORAZIONE */}
              <div className="
                absolute
                -right-32
                -bottom-32
                w-80
                h-80
                rounded-full
                border-[55px]
                border-white/[0.04]
                pointer-events-none
              " />

            </a>

          </div>


          {/* SERVIZI SECONDARI */}
          <div className="lg:col-span-5 flex flex-col gap-5">


            {/* RINNOVO */}
            <a
              href="#rinnovo"
              className="group flex-1 relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-7 md:p-8 hover:border-[#123B6D]/30 hover:shadow-lg transition-all duration-300"
            >

              <div className="flex items-start justify-between">

                <div className="w-12 h-12 rounded-xl bg-[#123B6D]/5 text-[#123B6D] flex items-center justify-center">
                  <RefreshCw size={22} strokeWidth={1.8} />
                </div>

                <span className="text-sm font-semibold text-slate-300">
                  02
                </span>

              </div>

              <div className="mt-8 flex items-end justify-between">

                <div>
                  <h3 className="text-2xl font-semibold text-[#123B6D]">
                    Rinnovo patente
                  </h3>

                  <p className="mt-2 text-slate-500 leading-relaxed">
                    Una procedura semplice, senza pensieri.
                  </p>
                </div>

                <div className="
                  shrink-0
                  w-10 h-10
                  rounded-full
                  bg-slate-100
                  flex items-center justify-center
                  text-[#123B6D]
                  transition-transform
                  group-hover:translate-x-1 group-hover:-translate-y-1
                ">
                  <ArrowUpRight size={18} />
                </div>

              </div>

            </a>


            {/* REVISIONE + DUPLICATO */}
            <div className="grid grid-cols-2 gap-5">

              <a
                href="#revisione"
                className="group rounded-3xl bg-white border border-slate-200 p-6 hover:border-[#123B6D]/30 hover:shadow-lg transition-all duration-300"
              >

                <div className="flex justify-between items-start">

                  <ShieldCheck
                    size={23}
                    strokeWidth={1.7}
                    className="text-[#123B6D]"
                  />

                  <span className="text-xs font-semibold text-slate-300">
                    03
                  </span>

                </div>

                <h3 className="mt-12 text-xl font-semibold text-[#123B6D]">
                  Revisione
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Assistenza per la pratica.
                </p>

                <div className="mt-6 text-[#D62828]">
                  <ArrowUpRight size={19} />
                </div>

              </a>


              <a
                href="#duplicato"
                className="group rounded-3xl bg-white border border-slate-200 p-6 hover:border-[#123B6D]/30 hover:shadow-lg transition-all duration-300"
              >

                <div className="flex justify-between items-start">

                  <FileText
                    size={23}
                    strokeWidth={1.7}
                    className="text-[#123B6D]"
                  />

                  <span className="text-xs font-semibold text-slate-300">
                    04
                  </span>

                </div>

                <h3 className="mt-12 text-xl font-semibold text-[#123B6D]">
                  Duplicato
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Per patente smarrita o danneggiata.
                </p>

                <div className="mt-6 text-[#D62828]">
                  <ArrowUpRight size={19} />
                </div>

              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Servizi;