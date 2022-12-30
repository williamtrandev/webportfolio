import ImageBox from "./ImageBox";
import Text from "./TextBox";
export default function Block4({ color }) {
    return (
        <div
            id="Block4"
            className="changeClass relative w-full max-h-[300px] h-[300px]  grid grid-cols-2 border-dashed border-y border-slate-300"
            spellCheck="false"
        >
            <div
                className={
                    (color ? color : "") +
                    " w-full px-[50px] py-[20px] flex justify-between items-center"
                }
            >
                <ImageBox
                    maxHeight={"max-h-[300px]"}
                    basisWidth={"basis-[40%]"}
                ></ImageBox>
                <div className="ml-[20px] flex justify-center items-center flex-grow-0 flex-shrink-0 basis-[60%] max-w-[60%]">
                    <Text
                        padd={"p-[20px]"}
                        textAlign={"text-left"}
                        bgColor={""}
                    ></Text>
                </div>
            </div>
            <div
                className={
                    (color ? color : "") +
                    " w-full px-[50px] py-[20px] flex justify-between items-center"
                }
            >
                <ImageBox
                    maxHeight={"max-h-[200px]"}
                    basisWidth={"basis-[40%]"}
                ></ImageBox>
                <div className="ml-[20px] flex justify-center items-center flex-grow-0 flex-shrink-0 basis-[60%] max-w-[60%]">
                    <Text
                        padd={"p-[20px]"}
                        textAlign={"text-left"}
                        bgColor={""}
                    ></Text>
                </div>
            </div>
        </div>
    );
}
