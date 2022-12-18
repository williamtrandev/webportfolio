import { FaBook } from "react-icons/fa";
function Exp4({ item }) {
    return (
        <>
            <div className="circle-dot"></div>
            <h3
                className="timeline-date flex"
                contentEditable
                suppressContentEditableWarning={true}
            >
                <span className="mr-[5px]">
                    <FaBook></FaBook>
                </span>
                {item.time}
            </h3>
            <h4
                className="timeline-title"
                contentEditable
                suppressContentEditableWarning={true}
            >
                {item.title}
            </h4>
            <p
                className="timeline-text"
                contentEditable
                suppressContentEditableWarning={true}
            >
                {item.detail}
            </p>
        </>
    );
}

export default Exp4;
