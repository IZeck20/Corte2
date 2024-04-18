import React, { useEffect, useState } from 'react';
import AddCategory from './components/AddCategory/AddCategory';
import GifGrid from './components/GifGrid/GifGrid';
import './App.css';
import appFirebase from "./credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Home from './components/Home';
import Login from './components/Login';

const auth = getAuth(appFirebase);

const GiftExpertApp = () => {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
            if (usuarioFirebase) {
                setUsuario(usuarioFirebase);
            } else {
                setUsuario(null);
            }
        });

        return () => {
            unsubscribe(); // Limpia el efecto cuando el componente se desmonta
        };
    }, []); // Este efecto se ejecuta solo una vez al montar el componente

    const [categories, setCategotiries] = useState([]);

    const onAddCategory = (category) => {
        setCategotiries(list => [...list, category]);
    };

    return (
        <>
            {usuario ? <Home correoUsuario={usuario.email} /> : <Login />}
        </>
    );
};

export default GiftExpertApp;
