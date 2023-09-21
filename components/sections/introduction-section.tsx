import React from "react";
import Section from "@/components/section";
import Heading from "@/components/heading";

import { PortableText } from "@portabletext/react";

type Props = {
  text: PortableTextProps;
};

const IntroductionSection = ({ text }: Props) => {
  return (
    <Section className="font-light">
      <Heading>Introduction</Heading>
      <PortableText value={text} />
    </Section>
  );
};

export default IntroductionSection;
