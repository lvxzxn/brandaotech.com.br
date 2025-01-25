import { Roboto } from "next/font/google";
import { Button } from "./ui/button";
import { ArrowRight, Contact, Github, LucideLinkedin } from "lucide-react";
import Link from "next/link";

const roboto = Roboto({
  weight: "700",
  variable: "--font-roboto",
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <div
      className={`flex flex-col min-h-screen justify-center text-center ${roboto.className}`}
    >
      <h3 className="text-white text-3xl">Luiz Guilherme Brandão Araújo</h3>
      <span className="text-2xl text-white mt-1">Software Engineer, 18y</span>
      <div className="flex flex-row justify-center mt-4 gap-4">
        <Button className="text-white bg-[#303030] hover:bg-[#404040]">
          <span>
            <Github className="w-8 h-8 text-white" />
          </span>
        </Button>
        <Button className="text-white bg-blue-700 hover:bg-blue-800">
          <span>
            <LucideLinkedin className="w-8 h-8 text-white" />
          </span>
        </Button>
      </div>
      <div className="flex flex-row justify-center gap-5 mt-7">
        <Link href="/projects">
          <Button className="bg-gradient-to-r from-green-500 to-lime-800 hover:from-green-500 hover:to-lime-900 text-md font-extrabold">
            Projects
            <ArrowRight />
          </Button>
        </Link>
        <Link href="/contact">
          <Button className="bg-[#404040] hover:bg-[#505050]">
            Contact
            <Contact />
          </Button>
        </Link>
      </div>
    </div>
  );
}
