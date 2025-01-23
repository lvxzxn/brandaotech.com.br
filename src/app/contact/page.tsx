import { Button } from "@/components/ui/button";
import { LinkedinOriginal } from "devicons-react";
import { LucideGithub, Mail, PhoneIcon } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="grid h-screen items-center justify-center">
      <div className="flex flex-col md:flex-row gap-8">
        <Link href={"mailto:luizguilhermebg28@gmail.com"}>
          <Button className="bg-[#353535] h-12 w-12 hover:bg-[#404040]">
            <Mail></Mail>
          </Button>
        </Link>
        <Link href={"https://api.whatsapp.com/send?phone=5582998089270"}>
          <Button className="bg-[#353535] h-12 w-12 hover:bg-[#404040]">
            <PhoneIcon></PhoneIcon>
          </Button>
        </Link>
        <Link href={"https://linkedin.com/in/luizgguilherme"}>
          <Button className="bg-[#353535] h-12 w-12 hover:bg-[#404040]">
            <LinkedinOriginal></LinkedinOriginal>
          </Button>
        </Link>
        <Link href={"https://github.com/lvxzxn"}>
          <Button className="bg-[#353535] h-12 w-12 hover:bg-[#404040]">
            <LucideGithub></LucideGithub>
          </Button>
        </Link>
        </div>
    </div>
  );
}