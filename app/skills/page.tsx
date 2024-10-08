import SkillsTabs from "@/components/features/skillsList/SkillsTabs";
import Blob from "@/components/ui/Blob";
import SectionTitle from "@/components/ui/SectionTitle";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="px-container py-container min-h-screen">
      <section className="flex flex-col items-center gap-16">
        <SectionTitle
          className="text-[35px] font-semibold text-slate-600 dark:text-white md:text-[45px] md:font-bold"
          title="My Skills"
          tagStyle="text-accent_primary font-bold"
        />
        <SkillsTabs />
        <Blob
          className={`-left-20 -top-10 h-72 w-72 bg-accent_secondary blur-[90px] dark:bg-[red] lg:-left-44 lg:h-96 lg:w-96 lg:blur-[120px]`}
        />
        <Blob className="-right-0 top-44 h-64 w-64 bg-[red] blur-[90px] dark:bg-accent_secondary lg:-right-60 lg:bottom-40 lg:h-96 lg:w-96 lg:blur-[120px]" />
      </section>
    </main>
  );
}
