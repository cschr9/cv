import EducationSection from "@/components/sections/education-section";
import ExperienceSection from "@/components/sections/experience-section";
import SkillSection from "@/components/sections/skill-section";
import TechSection from "@/components/sections/tech-section";
import { getCV } from "@/lib/sanity";
import IntroductionSection from "@/components/sections/introduction-section";

export default async function Home() {
  const cv = await getCV();
  return (
    <div className="flex flex-col space-y-8">
      <IntroductionSection text={cv.introduction} />
      <ExperienceSection data={cv.experience} />
      <EducationSection data={cv.education} />
      <SkillSection skills={cv.skills} />
      <TechSection data={cv.technologies} />
    </div>
  );
}
