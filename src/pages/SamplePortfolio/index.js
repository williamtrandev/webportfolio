import Slider from "./Slider";
import bgSample from "../../assets/bg-sample3.jpg";
function SamplePortfolio() {
    return (
        <div
            className="w-full h-screen flex flex-col justify-center items-center"
            style={{
                backgroundImage: `url(${bgSample})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <p className="mb-[20px] font-merienda text-[30px]">
                Choose one sample to edit
            </p>
            <Slider />
        </div>
    );
}

export default SamplePortfolio;
