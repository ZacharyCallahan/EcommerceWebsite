import Image from "next/image";
import logo from "../../../public/icon.png";
import Button from "./Button";

export default function Logo({ imageClass, headerClass, className }) {
    return (
        <Button
            link="/"
            className={`flex justce items-center flex-col ${className}`}>
            <div className="flex items-center">
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
