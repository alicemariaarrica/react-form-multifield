import { useState } from 'react';
import ArticleForm from './Form/FormLogic.jsx';
import initialArticles from '../data/articles.js';

export default function ArticlesLogic() {
    const [articles, setArticles] = useState(initialArticles);
    const [newArticle, setNewArticle] = useState('');


    function addArticle(newArticle) {
        setArticles([
            ...articles,
            newArticle,
        ]);
    }

    function deleteArticle(indexToDelete) {
        const newArticles = articles.filter((article, index) => index !== indexToDelete);
        setArticles(newArticles);
    }

    return (
        <div>
            <h1>Gestione Articoli Blog</h1>


            <ArticleForm onAddArticle={addArticle} />


            <ul>
                {articles.map((article, index) => (
                    <li key={index}>
                        {article}
                        <button onClick={() => deleteArticle(index)}>Elimina</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}


//Creare un semplice form con un campo input per il titolo di un articolo del blog. Al submit del form, mostrare la lista degli articoli inseriti, con la possibilità di cancellare ciascun articolo utilizzando un'icona.

//1. Creo il form 

