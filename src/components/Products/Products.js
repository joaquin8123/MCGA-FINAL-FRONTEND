import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/Products/thunk';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import Product from './Product';
import { Link } from 'react-router-dom';
import { FRONT_URL } from "../../helpers/constants"

export default function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      return window.location.href = `${FRONT_URL}/`
    }
    dispatch(getProducts({isRoutePrivate: true}))
  }, []);

  const { loading, error, products } = useSelector((state) => state.products);
  return (
    <Fragment>
      <Header />
      <div className="flex">
        <div className="container">
          <h2 className="text-center my-5">Listado de Productos</h2>

          {error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error al obtener los productos</p> : null}

          {loading ? <p className="text-center">Cargando....</p> : null}

          <Link
            to={'/product/new'}
            className='btn btn-danger nuevo-post d-block d-md-inline-block'
          >
            Nuevo Producto &#43;
          </Link>
          <table className="table table-striped">
            <thead className="bg-primary table-dark">
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Stock</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? 'No hay productos' : (
                products.map(product => (
                  <Product
                    key={product._id}
                    product={product}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}
