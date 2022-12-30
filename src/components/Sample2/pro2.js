function Pro2({ item }) {
    return (
        <>
            <img
                src={item.src}
                alt="ava"
                className="rounded-md duration-200 hover:scale-100"
            ></img>
            <div className="flex items-center flex-col justify-center">
                <p
                    contentEditable
                    suppressContentEditableWarning={true}
                    className="w-full px-6 py-1 text-center duration-500 hover:scale-100"
                >
                    {item.tenWeb}
                </p>
                <p
                    contentEditable
                    suppressContentEditableWarning={true}
                    className="w-full px-6 py-1 text-center duration-500 hover:scale-100 text-sm"
                >
                    {item.linkWeb}
                </p>
                <p
                    contentEditable
                    suppressContentEditableWarning={true}
                    className="w-full px-6 py-1 text-center duration-500 hover:scale-100 text-sm"
                >
                    {item.theloai}
                </p>
                <p
                    contentEditable
                    suppressContentEditableWarning={true}
                    className="w-full px-6 py-1 text-center duration-500 hover:scale-100 text-sm"
                >
                    {item.mota}
                </p>
                <p
                    contentEditable
                    suppressContentEditableWarning={true}
                    className="w-full px-6 py-1 text-center duration-500 hover:scale-100 text-sm"
                >
                    {item.client}
                </p>
                <p
                    contentEditable
                    suppressContentEditableWarning={true}
                    className="w-full px-6 py-1 text-center duration-500 hover:scale-100 text-sm"
                >
                    {item.date}
                </p>
            </div>
        </>
    );
}

export default Pro2;
