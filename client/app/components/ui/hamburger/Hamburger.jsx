import { useState, useEffect, useRef } from "react";

export default function Hamburger({ onClick, hamRef }) {
    const [open, setOpen] = useState(false);
    const hamButtonRef = useRef(null);

    const handleClickOutside = (e) => {
        if (!hamRef.current.contains(e.target) && hamRef.current) {
            setOpen(false);
        }
    };

    const handleClickInside = (e) => {
        if (hamRef.current && hamRef.current.contains(e.target)) {
            console.log(e.target);
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleClick = () => {
        setOpen(!open);
        onClick();
    };

    return (
            <button
                className="hamburger-button"
                onClick={handleClick}
                ref={hamButtonRef}>
                <div
                    className={`hamburger ${open ? "open" : ""}`}
                    onClick={handleClickInside}
                    ref={hamRef}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
    );
}
