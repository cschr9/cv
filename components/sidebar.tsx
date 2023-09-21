import { Separator } from "@/components/ui/separator";
import React from "react";
import SidebarListItem from "./sidebar-list-item";
import { Instagram, Link, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { BiLogoXing } from "react-icons/bi";

import GB from "country-flag-icons/react/3x2/GB";
import DE from "country-flag-icons/react/3x2/DE";
import Image from "next/image";
import FileDownloadDropdown from "./file-download-dropdown";
import { Button } from "./ui/button";
import { getCVSidebar, urlFor } from "@/lib/sanity";

type SidebarProps = React.ComponentPropsWithoutRef<"aside"> & {
  children?: React.ReactNode;
};

const Sidebar = async ({ children, ...asideProps }: SidebarProps) => {
  const data = await getCVSidebar();

  return (
    <aside {...asideProps}>
      <div className="flex flex-col">
        <Image
          src={urlFor(data.baseinformation.image).url()}
          width={200}
          height={200}
          alt={"Christian Schröder"}
          className=" self-start rounded-lg mb-4 bg-white bg-opacity-5 backdrop-blur-lg"
        />
        <h1 className="text-2xl font-bold">{data.baseinformation.name}</h1>
        <span className="block font-medium text-lg mb-4  text-yellow-700">
          {data.baseinformation.role}
        </span>
      </div>
      <Separator className="hidden lg:block" />
      <div className="flex flex-col space-y-4">
        <SidebarListItem
          icon={<Mail width={16} height={16} />}
          val={data.baseinformation.email}
          linkTo="@mailto:christian.schroeder@levaro.net"
          label={"Email"}
        />
        <SidebarListItem
          icon={<Phone width={16} height={16} />}
          val={data.baseinformation.phone}
          linkTo="@tel:+49(0) 152 277 584 02"
          label={"Phone"}
        />
        <SidebarListItem
          icon={<Link width={16} height={16} />}
          val={data.baseinformation.portfolio}
          linkTo={`https://${data.baseinformation.portfolio}`}
          label={"Portfolio"}
        />
        <SidebarListItem
          icon={<MapPin width={16} height={16} />}
          val={"Schwalmstadt, Hesse, Germany"}
          label={"Location"}
        />
      </div>
      <Separator className="hidden lg:block" />
      <div className="flex flex-col space-y-4">
        <SidebarListItem
          icon={<Linkedin width={16} height={16} className="text-white" />}
          bgColor={"bg-[#0077B5]"}
          val={"cschroeder92"}
          label={"LinkedIn"}
          linkTo={data.socialmedia.linkedin}
        />
        <SidebarListItem
          icon={<BiLogoXing width={16} height={16} className="text-white" />}
          bgColor={"bg-[#126567]"}
          val={"cschroeder92"}
          label={"Xing"}
          linkTo={data.socialmedia.xing}
        />
        <SidebarListItem
          icon={<Instagram width={16} height={16} className="text-white" />}
          bgColor={
            "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          }
          val={"christian.schroeder92"}
          label={"Instagram"}
          linkTo={data.socialmedia.instagram}
        />
      </div>
      <Separator className="hidden lg:block" />
      <div className="flex flex-col space-y-4">
        <SidebarListItem
          icon={<DE title="German" className="h-64 w-64" />}
          val={"Deutsch"}
          label={"Muttersprache"}
          reverse
          iconFullsize
        />
        <SidebarListItem
          icon={<GB title="English" className="h-64 w-64" />}
          val={"English"}
          label={"Fluent, C1 Level"}
          reverse
          iconFullsize
        />
      </div>
      <Separator className="hidden lg:block" />
      <div className="flex flex-col space-y-4">
        <FileDownloadDropdown data={data.downloads} />
        <Button className="bg-slate-900 dark:bg-slate-700 dark:bg-opacity-30 bg-opacity-10 text-left justify-start dark:text-white">
          View Code on Github
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
