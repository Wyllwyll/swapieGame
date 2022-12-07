
import { Accueil } from './components/Accueil';
import { Cv } from './components/cv';
import React, { useState } from 'react';
import { Navbar } from './components/NavBar';


function App() {
  const [page, setPage] = useState("accueil");
  return (

    <div className="container" >
      <Navbar setPage={setPage} ></Navbar>
      {page === "accueil" && <Accueil></Accueil>}
      {page === "cv" && <Cv></Cv>}
    </div>

  );
}


export default App;

