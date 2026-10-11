import FitnessScene from "./FitnessScene";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-8 px-5 pb-10 pt-28 sm:px-8 md:grid-cols-2 lg:gap-12"
    >
      {/* Left Content */}
      <div className="relative z-10">
        <p className="mb-5 text-sm font-bold tracking-[0.2em] text-lime-400">
          ONE PLATFORM. THREE PILLARS.
        </p>

        <h1 className="max-w-2xl text-[clamp(2.5rem,5.5vw,4.5rem)] font-black leading-[1.08] tracking-tight">
          The connected fitness home for your{" "}
          <span className="text-lime-400">gym.</span>
        </h1>

        <p className="mt-6 max-w-lg text-base leading-7 text-neutral-400 sm:text-lg">
          ClanFit brings owners, trainers, and members together so the
          business, the training floor, and the community run as one.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#download"
            className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3.5 font-bold text-black transition hover:bg-lime-300"
          >
            Get the app
            <ArrowUpRight size={18} />
          </a>

          <a
            href="#product"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:border-lime-400 hover:text-lime-400"
          >
            See the product
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      {/* Right Side 3D Animation */}
      <div className="relative flex min-h-[300px] items-center justify-center sm:min-h-[400px] md:min-h-[460px]">
        <div className="absolute h-48 w-48 rounded-full bg-lime-400/15 blur-[90px] sm:h-72 sm:w-72" />
        <div className="relative z-10 w-full min-w-0">
          <FitnessScene />
        </div>
      </div>
    </section>
  );
}