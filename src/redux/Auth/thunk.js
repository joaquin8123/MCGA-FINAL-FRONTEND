import Swal from 'sweetalert2';
import { FRONT_URL, BASE_URL } from "../../helpers/constants"

export function authentication(data) {
    return async () => {
        try {
            let response = await fetch(`${BASE_URL}/auth/login`,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify(data)
                });
            if (response.status === 200) {
                const res = await response.json()
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('isLogged', true);
                return window.location.href = `${FRONT_URL}/home`

            } else if (response.status === 401 && !response.ok) {
                Swal.fire({
                    icon: 'error',
                    title: 'Ocurrio un error.',
                    text: 'Usuario y/o contraseña incorrecta.',
                });
            }

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Ocurrio un error.',
                text: 'vuelva a intentar en unos minutos.',
            });
        }
    }
}

export function registerUser(data) {
    return async () => {
        try {
            let response = await fetch(`${BASE_URL}/auth/register`,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify(data)
                });
            if (response.status === 201) {
                Swal.fire({
                    title: 'Creacion de cuenta Exitosa',
                    text: `La cuenta se creo correctamente.`,
                    icon: 'success',
                    showCancelButton: false,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Aceptar',
                }).then((result) => {
                    if (result.value) {
                        return window.location.href = `${FRONT_URL}/`
                    }
                });
            }else if(response.status === 401){
                Swal.fire({
                    icon: 'error',
                    title: 'Ocurrio un error',
                    text: 'El usuario que intenta crear, ya existe.',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Ocurrio un error',
                    text: 'Ocurrio un error al crear la cuenta.',
                });
            }

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Ocurrio un error.',
                text: 'vuelva a intentar en unos minutos.',
            });
        }
    }
}

