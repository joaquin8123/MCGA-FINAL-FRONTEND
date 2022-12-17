import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/Products/thunk';
import { getProductEdit } from '../../redux/Products/actions';

const Product = ({product}) => {
    const { name, price, stock, _id } = product;
    const dispatch = useDispatch();
    const history = useHistory();

    const confirmDeleteProduct = (id, name) => {
        Swal.fire({
            title: '¿Estas seguro?',
            text: `eliminar ${name} permanentemente`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                dispatch( deleteProduct(id) )
            }
        });
    }

    const editProduct = product => {
        dispatch( getProductEdit(product) )
        history.push(`/product/edit/${product._id}`)
    }
    
    return ( 
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold"> $ {price} </span></td>
            <td>{stock}</td>
            <td className="acciones">
                <button 
                    type="button"
                    onClick={ () => editProduct(product) }
                    className="btn btn-primary mr-2">
                    Editar
                </button>
                <button 
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmDeleteProduct(_id,name)}
                >Eliminar </button>
            </td>
        </tr>
    );
}

export default Product;