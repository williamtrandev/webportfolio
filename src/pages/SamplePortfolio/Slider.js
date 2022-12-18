import { useRef, useState, useEffect } from "react";
import { HiArrowLeft, HiArrowRight, HiColorSwatch } from "react-icons/hi";
import backgroundImg from "../../assets/home-create5.jpg";
import btnImg from "../../assets/btn-img.jpg";
import { Link } from "react-router-dom";
import config from "../../config";
import img1 from "../../assets/sample1.png"
import img2 from "../../assets/sample2.png"
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
            url:img2,
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

    return (
        <div className="mx-auto overflow-hidden w-full h-screen relative">
            <div
                className="whitespace-nowrap transition duration-1000"
                style={{ transform: `translate3d(${-currIndex * 100}%, 0, 0)` }}
                onClick={getBack}
            >
                {/* {slides.map((slide) => (
                    
                        <div
                            className="inline-block h-screen w-full bg-cover bg-center rounded-lg"
                            key={slide.id}
                            style={{ backgroundImage: `url(${slide.url})` }}
                        ></div>
                    
                ))} */}
                <Link to={config.routes.sample2}>
                    <div
                        className="inline-block h-screen w-full bg-cover bg-center rounded-lg"
                        style={{ backgroundImage: `url(${img1})` }}
                    ></div>
                </Link>
                <Link to={config.routes.sample3}>
                    <div
                        className="inline-block h-screen w-full bg-cover bg-center rounded-lg"
                        style={{ backgroundImage: `url(${img2})` }}
                    ></div>
                </Link>
                <Link to={config.routes.sample4}>
                    <div
                        className="inline-block h-screen w-full bg-cover bg-center rounded-lg"
                        style={{ backgroundImage: `url(${img3})` }}
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
