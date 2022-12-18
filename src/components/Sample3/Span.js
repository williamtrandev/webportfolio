function Span({className = "", children}) {
    return ( 
        <span className={className} contentEditable
        suppressContentEditableWarning={true}>
            {children}
        </span>
     );
}

export default Span;