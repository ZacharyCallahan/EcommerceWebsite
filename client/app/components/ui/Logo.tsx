import Image from "next/image";
import logo from "../../../public/icon.png";
import Button from "./Button";

interface LogoProps {
    imageClass?: string;
    headerClass?: string;
    className?: string;
}

export default function Logo({ imageClass, headerClass, className }: LogoProps) {
    return (
        <Button link="/" className={`flex items-center flex-col ${className}`}>
            <div className="flex items-center mb-4">
                <Image
                    src={logo}
                    alt="Logo"
                    width={1000}
                    height={1000}
                    className={`w-12 mr-3 ${imageClass}`}
                />
                <h1 className={`text-2xl font-bold ${headerClass}`}>
                    GROOVY GEAR
                </h1>
            </div>
        </Button>
    );
}
