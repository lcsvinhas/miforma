import { Navigate, Route, Routes } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Produtos from '../pages/Produtos'
import Calculadora from '../pages/Calculadora'
import Contato from '../pages/Contato'

export default function AppRouter() {
    return (
        <Routes>
            <Route path={"/"} element={<Inicio />} />
            <Route path={"/produtos"} element={<Produtos />} />
            <Route path={"/calculadora"} element={<Calculadora />} />
            <Route path={"/contato"} element={<Contato />} />
            <Route path={"*"} element={<Navigate to="/" />} />
        </Routes>
    )
}
