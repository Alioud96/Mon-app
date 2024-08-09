import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [nom, setNom] = useState("");
  const [premon, setPrenom] = useState("");
  const [mail, setMail] = useState("");
  const [role, setRole] = useState("");
  const [statut, setStatut] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setNom(localStorage.getItem("nom"));
    setPrenom(localStorage.getItem("prenom"));
    setMail(localStorage.getItem("mail"));
    setRole(localStorage.getItem("role"));
    setStatut(localStorage.getItem("statut"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id...", id);
    axios
      .put(`https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube/${id}`, {
        nom: nom,
        premon: premon,
        mail: mail,
        role: role,
        statut: statut,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <>
      <h2>Modifier</h2>

      <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Voir un utilisateur" aria-label="Search" />
      <button class="btn btn-outline-success" type="submit">Rechercher</button>
    </form>
  </div>
</nav>


      <form>
        <div className="mb-3">
          <label className="form-label">Nom</label>
          <input type="text" className="form-control" value={nom} onChange={(e) => setNom(e.target.value)} />
       
        </div>

        <div className="mb-3">
          <label className="form-label">Prenom</label>
          <input type="text" className="form-control" value={premon} onChange={(e) => setPrenom(e.target.value)} />
        
        </div>
        <div className="mb-3">
          <label className="form-label">Mail</label>
          <input type="mail" className="form-control" value={mail} onChange={(e) => setMail(e.target.value)} />
     
        </div>
        <div className="mb-3">
          <label className="form-label">Role</label>
          <input type="text" className="form-control" value={role} onChange={(e) => setRole(e.target.value)} />
          
        </div>
        <div className="mb-3">
          <label className="form-label">Statut</label>
          <input type="text" className="form-control" value={statut} onChange={(e) => setStatut(e.target.value)} />
        </div>

        <button type="submit" className="btn btn-primary mx-2" onClick={handleUpdate} >
          Modifier
        </button>
        <Link to="/read">
          <button className="btn btn-secondary mx-2"> Retourner </button>
        </Link>
      </form>
    </>
  );
};

export default Update;