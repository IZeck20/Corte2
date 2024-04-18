import React, { useState } from 'react';
import AddCategory from './AddCategory/AddCategory';
import GifGrid from './GifGrid/GifGrid';
import appFirebase from '../credenciales';
import { getAuth, signOut } from 'firebase/auth';
const auth = getAuth(appFirebase)

const Home = ({correoUsuario}) => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (category) => {
        setCategories(list => [...list, category]);
    };

    return (
        <div>
            <h2 className= 'text-center'>Bienvenido {correoUsuario} <button className='btn btn-primary' onClick={()=> signOut(auth)}>logout</button></h2>
            <h1>Gif Expert</h1>
            <AddCategory onAddCategory={onAddCategory} />
            {categories.map((category, key) => (
                <GifGrid category={category} key={key} item={key + 1} />
            ))}
        </div>
    );
};

export default Home; // Exporta el componente predeterminado
