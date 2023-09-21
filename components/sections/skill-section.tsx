import React from "react";
import Section from "@/components/section";

import Heading from "@/components/heading";
import CVMasonryGrid from "@/components/cv-masonry-grid";
import CVMasonryGridItem from "@/components/cv-masonry-grid-item";
import { mock } from "node:test";

type Props = {
  skills: {
    title: string;
    category: string;
  }[];
};

const mockData = [
  {
    title: "Frontend Development",
    category: "Framework",
  },
  {
    title: "Mobile Optimization",
    category: "Framework",
  },
  {
    title: "SEO Optimization",
    category: "Language",
  },
  {
    title: "Unit Testing",
    category: "Framework",
  },
  {
    title: "REST API Development",
    category: "Framework",
  },
  {
    title: "Content Management System Integration",
    category: "Framework",
  },
  {
    title: "Version Control",
    category: "Framework",
  },
];

const SkillSection = ({ skills }: Props) => {
  if (!skills) {
    return null;
  }

  return (
    <Section>
      <Heading>Skills</Heading>
      <CVMasonryGrid
        data={skills}
        defaultDisplay="text"
        hideDisplayOptions
      ></CVMasonryGrid>
    </Section>
  );
};

export default SkillSection;
