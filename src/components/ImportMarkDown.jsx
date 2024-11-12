import {useState} from 'react';
import './assets/ImportMarkDown.css';
import PropTypes from "prop-types";

function ImportMarkDown({ BtnName }) {
    const [showPopup, setShowPopup] = useState(false)

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        if (file && file.name.endsWith(".md")) {
            const reader = new FileReader()
            reader.onload = (e) => {
                localStorage.setItem(file.name, e.target.result)
                window.location.reload();
            }
            reader.readAsText(file)
        }
    }

    const togglePopup = () => {
        setShowPopup(!showPopup)
    }

    return (
        <div>
            <button className={"importButton"} onClick={togglePopup}>{BtnName}</button>
            {showPopup && (
                <div className="popup">
                    <button className="closeButton" onClick={togglePopup}>×</button>
                    <input type={"file"} accept={".md"} onChange={handleFileChange}/>
                </div>
            )}
        </div>
    )
}

ImportMarkDown.propTypes = {
    BtnName: PropTypes.string.isRequired
}

export default ImportMarkDown;