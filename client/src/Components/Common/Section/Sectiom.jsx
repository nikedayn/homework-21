const Section = (props) => {
    return(
        <section key={props.keyForSection} className={props.classForSection}>
            <div className="container">
                {props.content}
            </div>
        </section>
    )
};

export default Section;