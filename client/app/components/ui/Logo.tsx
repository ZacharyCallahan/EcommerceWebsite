import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/icon.png";
import Button from "./Button";

interface LogoProps {
    imageClass?: string;
    headerClass?: string;
}

export default function Logo({ imageClass, headerClass }: LogoProps) {
    return (
        <Button link="/" className="flex items-center flex-col">
            <div className="flex items-center mb-4">
                <Image
                    src={logo}
                    alt="Logo"
                    width={1000}
                    height={1000}
                    className={`w-12 mr-3 ${imageClass}`}
                />
                <h1 className={`text-3xl font-bold ${headerClass}`}>
                    GROOVY GEAR
                </h1>
            </div>
        </Button>
    );
}
