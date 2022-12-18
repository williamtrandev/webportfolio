function H({className = "", children}) {
    return ( 
        <h2 className={className} contentEditable
        suppressContentEditableWarning={true}>
            {children}
        </h2>
     );
}

export default H;