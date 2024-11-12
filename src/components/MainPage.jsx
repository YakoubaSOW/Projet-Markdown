import React from 'react';
import {Link} from "react-router-dom";
import './assets/MainPage.css';
import ImportMarkDown from "./ImportMarkDown.jsx";
import CreateMarkdown from "./CreateMarkdown.jsx";

function MainPage() {
    const showFiles = () => {
        const files = Object.keys(localStorage);

        const handleDelete = (file) => {
            localStorage.removeItem(file);
            window.location.reload();
        };

        const deleteFile
            = (file) => () => handleDelete(file);


        return files.map((file, index) => {
            return (
                <div key={index} className="fileItem">
                    <Link to={`/EditMarkdown/${file}`} className="item">
                        {file}
                    </Link>
                    <button className="deleteButton" onClick={deleteFile(file)}>Delete</button>
                </div>
            )
        })
    }

    return (
        <div className={"listContainer"}>
            <div className={"liste"}>{showFiles()}</div>
            <div className={"ImportBtn"}>
                <CreateMarkdown/>
                <ImportMarkDown BtnName={"Import Markdown"}/>
            </div>
        </div>
    );

}

export default MainPage;