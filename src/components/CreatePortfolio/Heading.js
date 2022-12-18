export default function Heading({
    padd,
    textAlign,
    bgColor,
    maxWidth,
    margin,
}) {
    return (
        <div
            id="Heading"
            className={`text-center w-full flex justify-center items-center ${margin}`}
            spellCheck="false"
        >
            <h1
                className={`${padd} ${textAlign} ${bgColor} ${maxWidth} no-wrap break-words`}
                contentEditable
                suppressContentEditableWarning
            >
                Your heading
            </h1>
        </div>
    );
}
