import { createClient, groq } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
        projectId: '9xjnmdml',
        dataset: 'production',
        apiVersion: '2021-03-25',
        useCdn: true,
    })

export async function getCV() {
    const query = groq `*[_type == "cv"][0]{
        baseinformation,
        socialmedia,
        introduction,  
        experience[]{
          ...,
          "logo":logo.asset->url
        },
        education[]{
          ...,
          "logo":logo.asset->url
        },
        skills[]{
          title,
          "category":category->title
        },
        technologies[]{
            title,
            "category":category->title,
            "logo":logo.asset->url
        },
        languages,
        downloads[]{
          _key,
          title,
          type,
          "fileUrl":file.asset->url
        }
    }`;
    const cv = await client.fetch(query);
    return cv;
}

export async function getCVSidebar() {
    const query = groq `*[_type == "cv"][0]{
        socialmedia,
        baseinformation,
        languages,
        downloads[]{
          _key,
          title,
          type,
          "fileUrl":file.asset->url
        }
    }`;
    return client.fetch(query);
}

export async function getClients() {
    const query = groq`*[_type == "clients"][]{
        _id,
        client,
        "logo":logo.asset->url
    }`;
    return client.fetch(query);
}

const builder = imageUrlBuilder(client)

export function urlFor(source:any) {
  return builder.image(source)
}