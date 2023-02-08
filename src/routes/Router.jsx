import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CategoriesPage from '../pages/CategoriesPage'
import GifPokemonPage from '../pages/GifPokemonPage'
import PokemonPage from '../pages/PokemonPage'



const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<PokemonPage />} />
                    <Route path='/gifpokemon' element={<GifPokemonPage />} />
                    <Route path='/categories' element={<CategoriesPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router