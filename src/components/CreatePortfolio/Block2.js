import ImageBox from "./ImageBox";
import TextBox from "./TextBox";
export default function Block2({ color }) {
    return (
        <div
            id="Block2"
            className="changeClass w-full max-h-[300px] h-[300px]  grid grid-cols-3 border-dashed border-y border-slate-300"
            spellCheck="false"
        >
            <div className="w-full flex flex-col justify-between">
                <div className="flex justify-center items-center pt-[20px] ">
                    <ImageBox
                        minHeight={""}
                        maxWidth={"max-w-[350px]"}
                        basisWidth={"basis-[80%]"}
                    ></ImageBox>
                </div>
                <TextBox
                    maxWidth={"w-[80%]"}
                    padd={"p-[3px]"}
                    margin={"my-[20px]"}
                ></TextBox>
            </div>
            <div className="w-full flex flex-col justify-between">
                <div className="flex justify-center items-center pt-[20px] ">
                    <ImageBox
                        minHeight={""}
                        maxWidth={"max-w-[350px]"}
                        basisWidth={"basis-[80%]"}
                    ></ImageBox>
                </div>
                <TextBox
                    maxWidth={"w-[80%]"}
                    padd={"p-[3px]"}
                    margin={"my-[20px]"}
                ></TextBox>
            </div>

            <div className="w-full flex flex-col justify-between">
                <div className="flex justify-center items-center pt-[20px] ">
                    <ImageBox
                        minHeight={""}
                        maxWidth={"max-w-[350px]"}
                        basisWidth={"basis-[80%]"}
                    ></ImageBox>
                </div>
                <TextBox
                    maxWidth={"w-[80%]"}
                    padd={"p-[3px]"}
                    margin={"my-[20px]"}
                ></TextBox>
            </div>
        </div>
    );
}
