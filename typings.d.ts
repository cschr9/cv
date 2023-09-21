type techDTO = {
    title: string,
    logo: string,
    category: string,
}

type ExperienceDTO = {
    _key: string,
    jobtitle: string,
    company: string,
    logo: string,
    current: boolean,
    startdate: string,
    enddate: string,
    description: string,
    location: string,
}

type EducationDTO = {
    _key: string,
    name: string,
    degree: string,
    startdate: string,
    enddate: string,
    logo: string,
}

type ClientDTO = {
    _key: string,
    client: string,
    logo: string,
    description: string,
}

type DownloadItemDTO = {
  _key: string;
  title: string;
  type: string;
  fileUrl: string;
};


type PortableTextProps = {
  _type: string;
  _key: string;
  children: any[];
  markDefs: any[];
};