function Info4({ item }) {
    return (
        <>
            <p contentEditable suppressContentEditableWarning={true}>
                {item.content1} :{" "}
                <span contentEditable suppressContentEditableWarning={true}>
                    {item.content2}
                </span>
            </p>
        </>
    );
}

export default Info4;
