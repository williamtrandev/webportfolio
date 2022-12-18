export default function SubHeading({
    padd,
    textAlign,
    bgColor,
    maxWidth,
    margin,
}) {
    return (
        <div
            id="SubHeading"
            className={`text-center w-full flex justify-center items-center ${margin}`}
            spellCheck="false"
        >
            <h2
                className={`${padd} ${textAlign} ${bgColor} ${maxWidth} no-wrap break-words`}
                contentEditable
                suppressContentEditableWarning
            >
                Your SubHeading
            </h2>
        </div>
    );
}
