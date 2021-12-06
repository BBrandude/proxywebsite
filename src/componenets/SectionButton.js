const SectionButton = ({directName, className, href}) => {
    return (
        <a className={`SectionButton ${ className }`} href={href}>
            {directName}
        </a>
    )
}

export default SectionButton
