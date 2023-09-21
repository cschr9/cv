import React from "react";
import Section from "@/components/section";
import Heading from "@/components/heading";
import CVGrid from "@/components/cv-grid";
import CVGridItem from "@/components/cv-grid-item";
import { get } from "http";
import { renderTimeSpan } from "@/lib/utils";

type Props = {
  data: EducationDTO[];
};

const EducationSection = ({ data }: Props) => {
  if (!data) {
    return null;
  }

  return (
    <Section>
      <Heading>Education</Heading>
      <CVGrid>
        {data.map((item) => (
          <CVGridItem
            key={item._key}
            title={item.degree}
            image={item.logo}
            subtitle={item.name}
            timespan={renderTimeSpan(item.startdate, item.enddate)}
          />
        ))}
      </CVGrid>
    </Section>
  );
};

export default EducationSection;
