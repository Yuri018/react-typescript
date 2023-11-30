import "./styles.css";

function Homework20() {

    let firstName: string = "John";
    let lastName: string = "Doe";
    let job: string = "Software Engineer";
    let isManager: boolean = false;
    let experience: number = 5;
    let email: string = "john.doe@google.com";
    let programLangs: string[] = ["JavaScript", "Python", "Machine Learning"];

    const affiliation = () => {
        if(isManager) {
            return "Manager";
        }
        return "Employee";
    };

    const langs = programLangs.map((lang: string) => {
        return <li key = {`program-langs-${Math.random()}`}>{lang}</li>;
    });


    return <div className="card-wrapper">
        <p className="card-name">Personal card</p>
        <ul className="card-element">
            <li>First Name: {firstName}</li>
            <li>Last Name: {lastName}</li>
            <li>Jo: {job}</li>
            <li>Affiliation: {affiliation()}</li>
            <li>Experienc: {experience}</li>
            <li>Email: {email}</li>
        </ul>
        <p className="card-program">Programming languages</p>
        <ol className="program-element">{langs}</ol>
    </div>
}
export default Homework20;