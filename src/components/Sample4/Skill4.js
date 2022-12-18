function Skill4({ item }) {
    return (
        <>
            <h5 contentEditable suppressContentEditableWarning={true}>
                {item.skill}
            </h5>
            <div className="progress">
                <div
                    className="progress-in"
                    style={{
                        width: item.percent + "%",
                    }}
                ></div>
                <div
                    className="skills-percent flex justify-center"
                    contentEditable
                    suppressContentEditableWarning={true}
                >
                    {item.percent}{" "}
                    <p
                        contentEditable={false}
                        suppressContentEditableWarning={false}
                    >
                        %
                    </p>
                </div>
            </div>
        </>
    );
}

export default Skill4;
