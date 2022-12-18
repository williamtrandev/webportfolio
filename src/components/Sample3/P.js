function P({className = "", children}) {
    return ( 
        <p className={className} contentEditable
        suppressContentEditableWarning={true}>
            {children}
        </p>
     );
}

export default P;