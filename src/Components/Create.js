import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Create = () => {

    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [mail, setMail] = useState("");
    const [role, setRole] = useState("");
    const [statut, setStatut] = useState("");

    const history = useNavigate()

    const header = { "Access-Control-Allow": "*" };

    const handleAjouter = (e) => {
       
        console.log("clciekdhhj");

        axios.post(
            "https://66b60882b5ae2d11eb65a80b.mockapi.io/crud-mon-app",{
                nom: nom,
                prenom: prenom,
                mail: mail,
                role: role,
                statut: statut,
                header,
    } );

    history("/read")

    };

  return <>


<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Voir un utilisateur" aria-label="Search" />
      <button class="btn btn-outline-success" type="submit">Rechercher</button>
    </form>
  </div>
</nav>

<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Nom</label>
    <input type="text" class="form-control" onChange={(e) => setNom(e.target.value)} />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Prenom</label>
    <input type="text" class="form-control" onChange={(e) => setPrenom(e.target.value)} />
  </div>


  <div class="mb-3">
    <label for="form-label" class="form-label">Mail </label>
    <input type="email" class="form-control"  aria-describedby="emailHelp" onChange={(e) => setMail(e.target.value)}  />

  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Role</label>
    <input type="text" class="form-control" onChange={(e) => setRole(e.target.value)} />
    <div id="emailHelp" class="form-text"></div>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Statut</label>
    <input type="text" class="form-control" onChange={(e) => setStatut(e.target.value)} />
  </div>

  <button type="submit" class="btn btn-primary" onClick={handleAjouter}>
    Ajouter 

  </button>
</form>
        
    </>
  
}

export default Create
