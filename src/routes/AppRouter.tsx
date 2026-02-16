import { Navigate, Route, Routes } from 'react-router-dom'
import Inicio from '../pages/inicio/Inicio'
import Produtos from '../pages/produtos/Produtos'
import Calculadora from '../pages/calculadora/Calculadora'
import Contato from '../pages/contato/Contato'

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
