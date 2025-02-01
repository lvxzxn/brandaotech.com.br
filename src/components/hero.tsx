import { Roboto } from "next/font/google";
import { Button } from "./ui/button";
import {
	ArrowRight,
	Contact,
	FileText,
	Github,
	LucideLinkedin,
} from "lucide-react";
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
			<h3
				className={`text-white text-3xl uppercase ${roboto.className} tracking-wide`}
			>
				BrandãoTech
			</h3>
			<span className="text-2xl text-[#606060] mt-1 lowercase">
				Building Your Future, One Website at a Time!
			</span>
			<div className="flex flex-row justify-center mt-4 gap-4">
				<Link href={"https://github.com/lvxzxn"} target="_blank">
					<Button className="text-white bg-[#303030] hover:bg-[#404040]">
						<span>
							<Github className="w-8 h-8 text-white" />
						</span>
					</Button>
				</Link>
				<Link href={"https://linkedin.com/in/luizgguilherme"} target="_blank">
					<Button className="text-white bg-blue-700 hover:bg-blue-800">
						<span>
							<LucideLinkedin className="w-8 h-8 text-white" />
						</span>
					</Button>
				</Link>
				<Link href={"/cv/Luiz Guilherme Brandão.pdf"} target="_blank">
					<Button className="text-white bg-gray-800 hover:bg-gray-700">
						<span>
							<FileText className="w-8 h-8 text-white" />
						</span>
					</Button>
				</Link>
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
