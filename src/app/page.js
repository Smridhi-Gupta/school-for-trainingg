import Achievements from "@/components/sections/Achievements";
import ChooseCourse from "@/components/sections/ChooseCourse";
import HomeHero from "@/components/sections/heros/HomeHero";
import Instructors from "@/components/sections/Instructors";
import ProcessSteps from "@/components/sections/ProcessSteps";
import StudentsComments from "@/components/sections/StudentsComments";
import TopCompanies from "@/components/sections/TopCompanies";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <ProcessSteps />
      <TopCompanies />
      <ChooseCourse />
      <Instructors />
      <Achievements />
      <WhyChooseUs />
      <StudentsComments />
    </div>
  );
}
