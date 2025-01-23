import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ArrowRight } from "lucide-react";
import { Roboto } from "next/font/google";

import Image from "next/image";
import Link from "next/link";
import { ProjectProps } from "../../@types/project-props";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const roboto = Roboto({
  weight: "700",
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const Project = ({
  title,
  description,
  imageSrc,
  link,
  icons,
  tips,
}: ProjectProps) => {
  return (
    <Card className="bg-dark text-white border-[#303030]">
      <CardHeader>
        <Image
          alt={`${title}-image`}
          className="flex h-auto w-auto rounded-lg md:max-w-lg mb-2 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer"
          src={imageSrc}
          width={500}
          height={500}
        />
        <CardTitle className={`text-2xl font-semibold ${roboto.className}`}>
          {title}
        </CardTitle>
        <CardDescription
          className={`text-md max-w-lg text-[#909090] ${roboto.className}`}
        >
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="flex flex-row gap-2">
          {icons.map((Icon, iconIndex) => (
            <TooltipProvider key={iconIndex}>
              <Tooltip>
                <TooltipTrigger>
                  <Badge
                    variant="outline"
                    className="border-none text-white bg-[#404040] flex items-center text-2xl"
                  >
                    <Icon />
                  </Badge>
                </TooltipTrigger>
                <TooltipContent className="bg-dark text-white border-none">{tips[iconIndex]}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </CardFooter>
      <Link href={link} target="_blank" className="flex justify-center mb-4">
        <Button className={`bg-[#404040] hover:bg-[#505050] text-white font-extrabold ${roboto.className}`}>
          Visit Project
          <ArrowRight />
        </Button>
      </Link>
    </Card>
  );
};
