import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CategoriesPage from '../pages/CategoriesPage'
import GifPokemonPage from '../pages/GifPokemonPage'
import PokemonPage from '../pages/PokemonPage'
import UploadPage from '../pages/UploadPage'



const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<PokemonPage />} />
                    <Route path='/gifpokemon' element={<GifPokemonPage />} />
                    <Route path='/categories' element={<CategoriesPage />} />
                    <Route path='/upload' element={<UploadPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router