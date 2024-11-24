import { useState } from 'react'

import ArticlesLogic from './components/ArticlesLogic.jsx'

function App() {

  return (
    <>

      <ArticlesLogic />
    </>

  )
}

export default App

//Ampliare l'esercizio precedente aggiungendo, nel form, i campi per immagine, contenuto, categoria (select), tags (lista di checkbox) e uno stato per pubblicare o meno l'articolo. Utilizzare un unico oggetto per gestire tutti i dati del form.
