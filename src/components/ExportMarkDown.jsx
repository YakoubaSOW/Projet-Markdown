import PropTypes from "prop-types";

/*
* markDownTitle corresponds to the key of the localStorage item
* */

const ExportMarkDown = ({ markDownTitle }) => {
    const downloadFile = () => {
        const savedText = localStorage.getItem(markDownTitle);
        if (savedText === null) return;

        // source: https://stackoverflow.com/questions/3916191/download-data-url-file
        const url = `data:text/plain;charset=utf-8,${encodeURIComponent(savedText)}`;
        const a = document.createElement('a');
        a.href = url;
        a.download = `${markDownTitle}.md`;
        a.click();
    };

    return (
        <div>
            <button onClick={downloadFile} className={"btn"}>Export</button>
        </div>
    );
};


ExportMarkDown.propTypes = {
    markDownTitle: PropTypes.string.isRequired
}

export default ExportMarkDown;