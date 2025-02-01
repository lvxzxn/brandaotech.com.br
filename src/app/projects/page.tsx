import { Project } from "@/components/project";
import { BunOriginal, Html5Original, JavascriptOriginal, MongodbOriginal, NextjsOriginal, TailwindcssOriginal, TypescriptOriginal } from "devicons-react";
import type { ProjectProps } from "../../../@types/project-props";

const projects: ProjectProps[] = [
  {
    title: "Canhão Podcast",
    description:
      "A showcase website combined with an administrative management system for a podcast with over 1 million views on social media platforms.",
    imageSrc: "/canhaopodcast.png",
    link: "https://canhaopodcast.com.br/",
    icons: [BunOriginal, NextjsOriginal, TypescriptOriginal, TailwindcssOriginal, MongodbOriginal],
    tips: ['Bun', 'Next.JS', 'Typescript', 'TailwindCSS', 'MongoDB']
  },
  {
    title: "CuattroRH",
    description:
      "Landing page developed as part of a demonstration project for a recruitment and selection company, aiming to assess front-end development skills.",
    imageSrc: "/cuattrorh.png",
    link: "https://cuattrorh.vercel.app/",
    icons: [Html5Original, TailwindcssOriginal],
    tips: ['HTML5', 'TailwindCSS']
  },
  {
    title: "ConsultaCEP",
    description:
      "A simple project designed for ZIP code lookup, utilizing a public API to retrieve address information based on the entered postal code. This project demonstrates the ability to integrate with external API.",
    imageSrc: "/consultacep.png",
    link: "https://consulta-cep-phi.vercel.app/ ",
    icons: [Html5Original, TailwindcssOriginal, JavascriptOriginal],
    tips: ['HTML5', 'TailwindCSS', 'Javascript']
  }
];

export default function Projects() {
  return (
    <div className="flex flex-col md:flex-row justify-center md:gap-8 gap-6 mt-6 p-7">
      {projects.map((project, index) => {
        return (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            link={project.link}
            icons={project.icons}
            tips={project.tips}
          />
        );
      })}
    </div>
  );
}
