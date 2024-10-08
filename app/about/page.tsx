import Blob from "@/components/ui/Blob";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { socials } from "@/constants/dummy";
import { Download } from "lucide-react";
import Image from "next/image";
import AboutImage from "@/public/Moh. Afizan.jpeg";
type Props = {};

export default function page({}: Props) {
  return (
    <main className="px-container py-container min-h-screen">
      <section className="flex flex-col items-center gap-16">
        <SectionTitle
          className="text-[35px] font-semibold text-slate-600 dark:text-white md:text-[45px] md:font-bold"
          title="About Me"
          tagStyle="text-accent_primary font-bold"
        />
        <div className="flex w-full flex-col-reverse items-center justify-evenly gap-14 lg:flex-row">
          <article className="w-full max-w-xl">
            <header className="max-w-lg text-[40px] font-bold leading-none text-slate-600 dark:text-white lg:text-[48px]">
              Moh. Afizan
            </header>
            <p className="mt-5 text-slate-500 dark:text-slate-300">
              I am a frontend developer with a primary focus on React.js,
              Next.js, Tailwind CSS, and Framer Motion technologies. I am an
              individual who is diligent and passionate about the learning
              process, with the ultimate goal of realizing my aspirations as a
              professional frontend developer.
            </p>

            <div className="mt-5 flex items-end gap-3">
              <Button className="mt-5 flex items-center gap-2 !bg-accent_primary !text-dark shadow-2xl hover:!bg-accent_hover">
                <a
                  href="/MYCV.pdf"
                  download="MYCV.pdf"
                  className="flex gap-3 text-white dark:text-dark"
                >
                  Download CV
                  <Download size={18} />
                </a>
              </Button>
              {socials.map((social) => (
                <Button
                  key={social.name}
                  variant="outline"
                  size="icon"
                  className="border-none !bg-transparent text-slate-500 hover:!text-accent_primary dark:text-white"
                  aria-label={`Link to ${social.name}`}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    aria-label={`Link to ${social.name}`}
                  >
                    <social.Icon size={18} />
                  </a>
                </Button>
              ))}
            </div>
          </article>
          <div className="lg:max-w-sms relative aspect-square w-full max-w-xs overflow-hidden rounded-full object-contain">
            <Image
              src={AboutImage}
              alt="My Image"
              fill
              style={{ objectFit: "contain" }}
              placeholder="blur"
              priority
            />
          </div>
        </div>
        <Blob
          className={`-left-20 -top-10 h-72 w-72 bg-accent_secondary blur-[90px] dark:bg-[red] lg:-left-44 lg:h-96 lg:w-96 lg:blur-[120px]`}
        />
        <Blob className="-right-0 top-44 h-64 w-64 bg-[red] blur-[90px] dark:bg-accent_secondary lg:-right-60 lg:bottom-40 lg:h-96 lg:w-96 lg:blur-[120px]" />
      </section>
    </main>
  );
}
