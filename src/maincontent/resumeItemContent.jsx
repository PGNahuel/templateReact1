import React from "react";

export default function ResumeMainItem(props) {
    return (
        <div className="media mb-4">
            <i className={"fas fa-4x "+ props.Icon+" tm-post-icon tm-text-primary"}></i>
            <div className="media-body">
                <b>{props.Title}</b><a href="#" className="d-block mb-2 tm-text-primary tm-post-link">{props.Date}</a>
                <p>{props.Resume}</p>
            </div>
        </div>
    )
}