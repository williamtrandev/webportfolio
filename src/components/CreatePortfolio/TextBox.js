export default function TextBox({padd, textAlign, bgColor, maxWidth, margin}) {
	return (
        <div
            id="TextBox"
            className={`text-center editableBox relative w-full flex justify-center items-center ${margin}`}
            spellCheck="false"
        >
            <p
                className={`${padd} ${textAlign} ${bgColor} ${maxWidth} no-wrap break-words`}
                contentEditable
                suppressContentEditableWarning
            >
                Your edit text
            </p>
        </div>
    );
}