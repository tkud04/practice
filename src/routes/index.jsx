import Banner from "../components/Banner/Banner";

export default function Index(){
    let eventDate = "April 30, 2022";
    let services = [
        {
            title: "Heading 1",
            copy: "Some representative placeholder content for the three columns of text below the carousel. This is the first column.",
            linkHref: "#",
            linkText: "View details »"
        },
        {
            title: "Heading 2",
            copy: "Some representative placeholder content for the three columns of text below the carousel. This is the first column.",
            linkHref: "#",
            linkText: "View details »"
        },
        {
            title: "Heading 3",
            copy: "Some representative placeholder content for the three columns of text below the carousel. This is the first column.",
            linkHref: "#",
            linkText: "View details »"
        }
    ];
    return (
        <>
        <Banner/>
        <section className="container">
         <div className="row text-center">
        {
            services.map(s => (
         <div className="col-lg-4">
           <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
           <h2>{s.title}</h2>
           <p>{s.copy}</p>
           <p><a className="btn btn-secondary" href={s.linkHref}>{s.linkText}</a></p>
         </div>
            )
        )}
        </div>
        </section>
        <hr className="divider"/>
        <section className="row">
       
            <div className="col-md-12">
                <div>
                   
                </div>
            </div>
        </section>
        </>
    );
}