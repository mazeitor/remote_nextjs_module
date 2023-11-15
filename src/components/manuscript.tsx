import * as React from "react";
// import styles from "./manuscript.module.css";
import {Submission} from "@/interfaces/Submission";

interface ManuscriptProps {
    submission?: Submission;
}

function Manuscript(props: ManuscriptProps) {

    return (
        props.submission ?
        <div>
            <h2 className={"mt-8 text-3xl font-serif"}>{props.submission.title}</h2>
            <div
                className="mt-4 text-sm italic">{props.submission.authors
                .map(author => `${author.firstName} ${author.lastName}`)
                .join(', ')}
            </div>
            <h3 className={"mt-4 text-2xl font-serif"}>Abstract</h3>
            <p className={"mt-2 font-serif"}>{props.submission.abstractText}</p>
        </div> : null
    )
}

export default Manuscript