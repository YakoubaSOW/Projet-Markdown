import {useState} from 'react';
import MarkdownTextArea from "./MarkdownTextArea.jsx";
import './assets/EditMarkdown.css';

function EditMarkdown() {
    const [asidePreview, setAsidePreview] = useState(false);
    const [htmlContent, setHtmlContent] = useState('');

    const updateHtmlContent = (html) => {
        setHtmlContent(html);
    };

    const togglePreview = () => {
        setAsidePreview(prevState => !prevState);
    };

    return (
        <main>
            <MarkdownTextArea onPreview={updateHtmlContent} onTogglePreview={togglePreview}/>
            {asidePreview ?
                <div className={"aside"}>
                    {htmlContent && <div dangerouslySetInnerHTML={{__html: htmlContent}}></div>} {/* Source: https://stackoverflow.com/questions/58253994/react-component-continuously-updating */}
                </div> : null}
        </main>
    );
}

export default EditMarkdown;