export default function Toolbar({ isEnable }) {
    const sizeList = [
        "8px",
        "9px",
        "10px",
        "11px",
        "12px",
        "14px",
        "16px",
        "18px",
        "20px",
        "72px",
    ];

    return (
        <div className="flex h-[30px]">
            {isEnable && (
                <div id="toolbar" className="w-full text-center">
                    <select className="ql-size">
                        {sizeList.map((size) => (
                            <option value={size}>{size}</option>
                        ))}
                    </select>
                    <button className="ql-bold" />
                    <button className="ql-italic" />
                    <button className="ql-underline" />
                    <select className="ql-align" />
                    <select className="ql-color" />
                    <select className="ql-background" />
                </div>
            )}
        </div>
    );
}
