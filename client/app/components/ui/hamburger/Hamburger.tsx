'use client'
import { useState } from "react";


interface Props {
    onClick: () => void;
}

export default function Hamburger({ onClick }: Props) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
        onClick();
    };

    return (
        
        <button className="hamburger-button" onClick={handleClick}>
            <div className={`hamburger ${open ? "open" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </button>
    );
}
