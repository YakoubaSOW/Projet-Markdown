import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import './assets/MarkdownTextArea.css';
import ExportMarkDown from "./ExportMarkDown.jsx";
import Showdown from 'showdown';
import PropTypes from "prop-types";

function MarkdownTextArea({onPreview, onTogglePreview}) {
    const {fileId} = useParams();
    const [title, setTitle] = useState(fileId ||'');
    const [markdown, setMarkdown] = useState('');
    const navigate = useNavigate();

    const converter = new Showdown.Converter();

    useEffect(() => {
        const html = converter.makeHtml(markdown);
        onPreview(html);
    }, [markdown, onPreview]);

    useEffect(() => {
        if (title) {
            const savedMarkdown = localStorage.getItem(title);
            if (savedMarkdown) {
                setMarkdown(savedMarkdown);
            }
        }
    }, [title]);

    function handleSave() {
        const markdownText = document.getElementById("markdownArea").value;
        localStorage.setItem(title, markdownText);
        setMarkdown(markdownText);
    }

    return (
        <div className={"mainContainer"}>
            <div className={"headerContainer"}>
                <h1>Markdown Edit</h1>
                <div className={"btnContainer"}>
                    <input
                        type="text"
                        placeholder="Title. . ."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className={"btn"}
                    />
                    <ExportMarkDown markDownTitle={title}/>
                    <button onClick={() => onPreview(onTogglePreview)}>Preview</button>
                    <button onClick={() => navigate('/')}>Home</button>

                </div>
            </div>
            <div className={"textField"}>
            <textarea
                id={"markdownArea"}
                className={"markdownArea"}
                value={markdown}
                onChange={handleSave}
                disabled={!title}
            ></textarea>
            </div>
        </div>
    );
}

export default MarkdownTextArea;

MarkdownTextArea.propTypes = {
    onPreview: PropTypes.func,
    onTogglePreview: PropTypes.func,
};
