import { getClients } from "@/lib/sanity";
import Image from "next/image";
import React from "react";

const ClientSection = async () => {
  const clients: ClientDTO[] = await getClients();

  if (!clients) {
    return null;
  }

  return (
    <div className="flex flex-col space-y-8">
      <div className="text-sm opacity-80 tracking-wider font-light lowercase text-center">
        Brands I worked with in the past
      </div>
      <div className="flex justify-center space-x-16">
        {clients.map((item) => {
          return (
            <Image
              src={item.logo}
              alt={item.client}
              key={item._key}
              className="grayscale opacity-80 object-contain invert max-h-16"
              width={128}
              height={64}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ClientSection;
