import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import { FRONT_URL } from "../../helpers/constants"

const Home = () => {
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      return window.location.href = `${FRONT_URL}/`
    }
  }, []);

  return (
    <Fragment>
      <Header />
      <div className="flex">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 p-4">
              <div className="card">
                <div className="card-header">
                  <h2 className="text-center mb-4 font-weight-bold">Final MCGA</h2>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-6 font-weight-bold">
                      Asignatura:
                    </div>
                    <div className="col-6 mb-4 font-weight-bold">
                      Modelos computacionales de gestion administrativa
                    </div>
                    <div className="col-6 font-weight-bold">
                      Profesores:
                    </div>
                    <div className="col-6 mb-4 font-weight-bold">
                      Frare, Esteban.
                      Barea, Martin.
                    </div>
                    <div className="col-6 font-weight-bold">
                      Integrantes:
                    </div>
                    <div className="col-6 mb-4 font-weight-bold">
                      Suarez, Joaquin
                    </div>
                    <div className="col-12 text-center">
                      <Link
                        to={"/products"}
                        className="btn btn-danger nuevo-post d-block d-md-inline-block"
                      >
                        Lista de Productos
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
