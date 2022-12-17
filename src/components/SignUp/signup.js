import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import './signup.css'
import { useDispatch, useSelector } from 'react-redux';
import { authentication, registerUser } from '../../redux/Auth/thunk';
import { FRONT_URL } from "../../helpers/constants"
import { Link } from "react-router-dom";

export const SignUp = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        //llamar al thunk
        dispatch(registerUser(data))
    }

    useEffect(() => {
        if (localStorage.getItem('isLogged')) {
            return window.location.href = `${FRONT_URL}/home`
        }
    }, []);


    return (
        <div class="main-container">
            <div class="container-lg">
                <h2 class="t-center">Registrarse</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="inputDiv">
                        <label for="name" class="username">Username</label>
                        <div class="userArea">
                            <i class="fa-solid fa-user"></i><input type="text" id="user" placeholder="User" name="user" {...register("user", { required: true })}></input>
                        </div>
                        <hr></hr>
                    </div>
                    <div class="inputDiv">
                        <label for="password" class="username">Password</label>
                        <div class="userArea">
                            <i class="fa-solid fa-key"></i><input type="password" minLength="3" id="password" placeholder="Password" {...register("password", { required: true })}></input>
                        </div>
                        <hr></hr>
                    </div>

                    <button class="btn-login">Crear cuenta</button>
                    <div class="formBottom">
                        <Link to={"/"}> LOGIN </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}