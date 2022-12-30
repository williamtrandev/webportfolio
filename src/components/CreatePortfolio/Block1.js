import ImageBox from "./ImageBox";
import Text from "./TextBox";
export default function Block1({ color, classname = "" }) {
    return (
        <div
            id="Block1"
            className="changeClass w-full min-h-[300px] h-[50%] flex justify-between border-dashed border-y border-slate-300"
            spellCheck="false"
        >
            <div
                className={
                    (color ? color : "") +
                    " w-full px-[50px] py-[20px] flex justify-between"
                }
            >
                <ImageBox
                    minHeight={"max-h-[300px] h-[100%]"}
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
