import { Button } from "@/components/ui/button";
import { LinkedinOriginal } from "devicons-react";
import { LucideGithub, Mail, PhoneIcon } from "lucide-react";
import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  weight: "700",
  variable: "--font-roboto",
  subsets: ["latin"],
});

export default function Contact() {
  return (
    <>
      <div className="grid h-screen items-center justify-center">
        <div>
          <h3 className={`text-3xl text-white mb-6 font-bold ${roboto.className}`}>Contact me</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <Link href={"mailto:luizguilhermebg28@gmail.com"}>
              <Button className="bg-[#353535] h-16 w-16 hover:bg-[#404040]">
                <Mail></Mail>
              </Button>
            </Link>
            <Link href={"https://api.whatsapp.com/send?phone=5582998089270"}>
              <Button className="bg-green-500 h-16 w-16 hover:bg-[#404040]">
                <PhoneIcon></PhoneIcon>
              </Button>
            </Link>
            <Link href={"https://linkedin.com/in/luizgguilherme"}>
              <Button className="bg-blue-600 h-16 w-16 hover:bg-[#404040]">
                <LinkedinOriginal></LinkedinOriginal>
              </Button>
            </Link>
            <Link href={"https://github.com/lvxzxn"}>
              <Button className="bg-[#353535] h-16 w-16 hover:bg-[#404040]">
                <LucideGithub></LucideGithub>
              </Button>
            </Link>
            </div>
        </div>
      </div>
    </>
  );
}