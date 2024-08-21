import Terminal from "@/components/features/terminal/Terminal";
import { Button } from "@/components/ui/button";
import Blob from "../../ui/Blob";
import { Download } from "lucide-react";
import Brand from "@/components/features/brand/Brand";
import Image from "next/image";
import AboutImage from "@/public/aboutme.jpg";
type Props = {};

export default function MainSection({}: Props) {
  return (
    <section className="relative w-full">
      <article className="relative z-10 flex w-full flex-col items-center justify-between gap-20 lg:flex-col">
        {/* Hero Title */}
        <div className="w-full grid grid-cols-2 ">
          <div>

          <h1 className="text-[45px] font-bold leading-none text-slate-700 drop-shadow-[0_0_15px_rgba(200,218,189,0.5)] dark:text-white dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] sm:text-[60px] md:text-[64px] lg:text-[80px]">
            Hello,
            <br />
            I’m Fizan{" "}
            <span className="wave inline-block text-[50px] md:text-[60px]">
              👋
            </span>
          </h1>
          <h2 className="my-2 text-2xl font-semibold text-slate-600 drop-shadow-[0_0_15px_rgba(200,218,189,0.5)] dark:text-slate-300 lg:text-3xl">
            Junior FrontEnd Developer
          </h2>
          <p className="mt-2 max-w-lg text-slate-500 dark:text-slate-300 lg:text-xl">
            Transforming Pixels into Poetry, Conjuring Captivating Web Journeys
            as a Front-End Wizard
          </p>
          <Button className="!dark:text-dark hover:!bg-accent_hover mt-5 flex items-center gap-2 !bg-accent_primary shadow-2xl">
            <a href="/MYCV.pdf" download="MYCV.pdf" className="flex gap-3">
              Download CV
              <Download size={18} />
            </a>
          </Button>
          </div>
          <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-2xl object-contain lg:max-w-sms">
            <Image
              src={AboutImage}
              alt="My Image"
              fill
              style={{objectFit: "cover"}}
              placeholder="blur"
              priority
            />
          </div>
        </div>
        {/* Terminal */}
        <Terminal />
      </article>
      {/* Built With */}
      <Blob className={`-left-20 -top-10 h-72 w-72 dark:bg-[red] blur-[90px] bg-accent_secondary lg:-left-44 lg:h-96 lg:w-96 lg:blur-[120px]`} />
      <Blob className="-right-20 top-44 h-64 w-64 dark:bg-accent_secondary blur-[90px] bg-[red] lg:-right-60 lg:bottom-40 lg:h-96 lg:w-96 lg:blur-[120px]" />
      <Brand />
    </section>
  );
};
