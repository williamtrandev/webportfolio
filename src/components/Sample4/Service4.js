function Service4({ item }) {
    return (
        <div className="service-item-inner">
            <div className="icon">
                <div className="h-full flex flex-col justify-center items-center">
                    {item.icon}
                </div>
            </div>
            <h4 contentEditable suppressContentEditableWarning={true}>
                {item.title}
            </h4>
            <p contentEditable suppressContentEditableWarning={true}>
                {item.detail}
            </p>
        </div>
    );
}

export default Service4;
