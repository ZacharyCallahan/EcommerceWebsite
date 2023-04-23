import { Children } from "react";
import SliderImage from "./SliderImage";
import SliderLogo from "./SliderLogo";
import { memo } from "react";

interface SliderProps {
    children: React.ReactNode;
}

function Slider({ children }: SliderProps )  {
    const childArray = Children.toArray(children);
    

    return (
        <div className="slider">
            {
                childArray.map((child: any) => {
                    if (child.type === SliderImage) {
                        return <SliderImage key={child.props.imageCSSClass} {...child.props} />;
                    } else if (child.type === SliderLogo) {
                        return <SliderLogo key={child.props.headerContent} {...child.props} />;
                    }
                })
            }
        </div>
    );
}
export default memo(Slider);
