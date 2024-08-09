import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState("");

  function getData() {
    axios
      .get("https://66b60882b5ae2d11eb65a80b.mockapi.io/crud-mon-app")
      .then((res) => {
        setData(res.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://66b60882b5ae2d11eb65a80b.mockapi.io/crud-mon-app/${id}`)
      .then(() => {
        getData();
      });
  }

  const setToLocalStorage = (id, nom, prenom, mail, role, statut ) => {
    localStorage.setItem("id", id);
    localStorage.setItem("nom", nom);
    localStorage.setItem("prenom", prenom);
    localStorage.setItem("mail", mail);
    localStorage.setItem("role", role);
    localStorage.setItem("statut", statut);
    
    
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            if (tabledark === "table-dark") setTableDark("");
            else setTableDark("table-dark");
          }}
        />
      </div>
      <div className="d-flex justify-content-between m-2">
        <h2>Configuration</h2>

        <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Voir un utilisateur" aria-label="Search" />
      <button class="btn btn-outline-success" type="submit">Rechercher</button>
    </form>
  </div>
</nav>

        <Link to="/">
          <button className="btn btn-secondary">Creer</button>
        </Link>
      </div>
      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom</th>
            <th scope="col">Premon</th>
            <th scope="col">Mail</th>
            <th scope="col">Role</th>
            <th scope="col">Statut</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.nom}</td>
                  <td>{eachData.prenom}</td>
                  <td>{eachData.mail}</td>
                  <td>{eachData.role}</td>
                  <td>{eachData.statut}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn-success"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email
                          )
                        }
                      >
                        VOIR{" "}
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;