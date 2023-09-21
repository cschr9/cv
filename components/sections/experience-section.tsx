import React from "react";
import ExperienceSectionItem from "@/components/experience-section-item";
import Heading from "@/components/heading";
import Section from "@/components/section";

type Props = {
  data: ExperienceDTO[];
};

const ExperienceSection = ({ data }: Props) => {
  if (!data) {
    return null;
  }

  return (
    <Section>
      <Heading>Experience</Heading>
      <div className="flex flex-col space-y-4">
        {data.map((position) => (
          <ExperienceSectionItem key={position._key} data={position} />
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
