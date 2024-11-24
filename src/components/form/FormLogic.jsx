import React, { useState } from 'react';

function CreateForm({ onAddArticle }) {
    const [newArticle, setNewArticle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newArticle.trim()) {
            onAddArticle(newArticle);
            setNewArticle('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newArticle}
                onChange={(e) => setNewArticle(e.target.value)}
                placeholder="Scrivi"
                required
            />
            <button type="submit">Scrivi il titolo del tuo articolo</button>
        </form>
    );
}

export default CreateForm;
