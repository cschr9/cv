import React from "react";
import Section from "@/components/section";

import Heading from "@/components/heading";
import CVMasonryGrid from "@/components/cv-masonry-grid";

type Props = {
  data: {
    title: string;
    category: string;
  }[];
};

const TechSection = ({ data }: Props) => {
  if (!data) {
    return null;
  }
  return (
    <Section>
      <Heading>Technology</Heading>
      <CVMasonryGrid data={data} defaultDisplay="icons"></CVMasonryGrid>
    </Section>
  );
};

export default TechSection;
