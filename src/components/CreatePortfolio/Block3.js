import ImageBox from "./ImageBox";
import TextBox from "./TextBox";
export default function Block3({ color }) {
    return (
        <div
            id="Block3"
            className="changeClass relative w-full max-h-[300px] h-[300px]  grid grid-cols-4 border-dashed border-y border-slate-300"
            spellCheck="false"
        >
            <div className="h-full w-full flex flex-col justify-between">
                <div className="flex justify-center items-center pt-[20px]">
                    <ImageBox
                        minHeight={"min-h-[200px]"}
                        maxWidth={"max-w-[350px]"}
                        basisWidth={"basis-[80%]"}
                    ></ImageBox>
                </div>
                <TextBox
                    maxWidth={"w-[80%]"}
                    padd={"p-[5px]"}
                    margin={"my-[20px]"}
                ></TextBox>
            </div>
            <div className="h-full w-full flex flex-col justify-between">
                <div className="flex justify-center items-center pt-[20px]">
                    <ImageBox
                        minHeight={"min-h-[200px]"}
                        maxWidth={"max-w-[350px]"}
                        basisWidth={"basis-[80%]"}
                    ></ImageBox>
                </div>
                <TextBox
                    maxWidth={"w-[80%]"}
                    padd={"p-[5px]"}
                    margin={"my-[20px]"}
                ></TextBox>
            </div>
            <div className="h-full w-full flex flex-col justify-between">
                <div className="flex justify-center items-center pt-[20px]">
                    <ImageBox
                        minHeight={"min-h-[200px]"}
                        maxWidth={"max-w-[350px]"}
                        basisWidth={"basis-[80%]"}
                    ></ImageBox>
                </div>
                <TextBox
                    maxWidth={"w-[80%]"}
                    padd={"p-[5px]"}
                    margin={"my-[20px]"}
                ></TextBox>
            </div>

            <div className="h-full w-full flex flex-col justify-between">
                <div className="flex justify-center items-center pt-[20px]">
                    <ImageBox
                        minHeight={"min-h-[200px]"}
                        maxWidth={"max-w-[350px]"}
                        basisWidth={"basis-[80%]"}
                    ></ImageBox>
                </div>
                <TextBox
                    maxWidth={"w-[80%]"}
                    padd={"p-[5px]"}
                    margin={"my-[20px]"}
                ></TextBox>
            </div>
        </div>
    );
}
