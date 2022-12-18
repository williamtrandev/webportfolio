function Li({clasname = "", children, ...othders}) {
    return ( 
        <li className={clasname} contentEditable
        suppressContentEditableWarning={true}>
            {children}
        </li>
     );
}

export default Li;