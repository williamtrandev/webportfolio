import { useRef, useState, useEffect } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import config from "../../config";
import img1 from "../../assets/sample1.png";
import img2 from "../../assets/sample2.png";
import img3 from "../../assets/sample3.png";
const Slider = () => {
    const slides = [
        {
            id: 1,
            url: img1,
            title: "Sample1",
        },
        {
            id: 2,
            url: img2,
            title: "Sample2",
        },
        {
            id: 3,
            url: img3,
            title: "Sample3",
        },
    ];
    const delayTime = 5000;
    const [currIndex, setCurrIndex] = useState(0);
    const timeoutRef = useRef(null);
    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setCurrIndex((preIndex) =>
                preIndex === slides.length - 1 ? 0 : preIndex + 1
            );
        }, delayTime);

        return () => {
            resetTimeout();
        };
    }, [currIndex]);

    const getBack = () => {
        const firstSlide = currIndex === 0;
        const newIndex = firstSlide ? slides.length - 1 : currIndex - 1;
        setCurrIndex(newIndex);
    };
    const getNext = () => {
        const lastSlide = currIndex === slides.length - 1;
        const newIndex = lastSlide ? 0 : currIndex + 1;
        setCurrIndex(newIndex);
    };
    const height = window.innerHeight * 0.7 + "px";
    const width = window.innerWidth * 0.7 + "px";

    return (
        <div className="mx-auto overflow-hidden w-[70%] h-[70%] relative">
            <div
                className="whitespace-nowrap transition duration-1000 h-full w-full"
                style={{ transform: `translate3d(${-currIndex * 100}%, 0, 0)` }}
                onClick={getBack}
            >
                <Link to={config.routes.sample2}>
                    <div
                        className={"inline-block rounded-lg"}
                        style={{
                            width: `${width}`,
                            height: `${height}`,
                            backgroundImage: `url(${img1})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                    ></div>
                </Link>
                <Link to={config.routes.sample3}>
                    <div
                        className={"inline-block rounded-lg"}
                        style={{
                            width: `${width}`,
                            height: `${height}`,
                            backgroundImage: `url(${img2})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                    ></div>
                </Link>
                <Link to={config.routes.sample4}>
                    <div
                        className={"inline-block rounded-lg"}
                        style={{
                            width: `${width}`,
                            height: `${height}`,
                            backgroundImage: `url(${img3})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                    ></div>
                </Link>
            </div>
            <div
                className="absolute top-1/2 translate-x-0 translate-y-[-50%] left-6 cursor-pointer text-rose-400"
                onClick={getBack}
            >
                <HiArrowLeft></HiArrowLeft>
            </div>
            <div
                className="absolute top-1/2 translate-x-0 translate-y-[-50%] right-6 cursor-pointer text-rose-400"
                onClick={getNext}
            >
                <HiArrowRight></HiArrowRight>
            </div>
        </div>
    );
};
export default Slider;
