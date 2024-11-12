import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/CreateMarkdown.css';

function CreateMarkdown() {
    const [title, setTitle] = useState('');
    const navigate = useNavigate();

    const handleCreate = () => {
        if (title) {
            localStorage.setItem(title, '');
            setTitle('');
            navigate(`/EditMarkdown/${title}`);
        }
    };

    return (
        <div className="createContainer">
            <input
                type="text"
                className="titleInput"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
            />
            <button className="createButton" onClick={handleCreate}>Create</button>
        </div>
    );
}

export default CreateMarkdown;