import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'

const Home = lazy(() => import('../pages/Home/Home'))
const Products = lazy(() => import('../pages/Products/Products'))
const Calculator = lazy(() => import('../pages/Calculator/Calculator'))
const Contact = lazy(() => import('../pages/Contact/Contact'))
const NotFound = lazy(() => import('../pages/NotFound/NotFound'))

function PageFallback() {
  return (
    <div className="py-12 text-center text-slate-500" role="status">
      Carregando…
    </div>
  )
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<PageFallback />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="produtos"
            element={
              <Suspense fallback={<PageFallback />}>
                <Products />
              </Suspense>
            }
          />
          <Route
            path="calculadora"
            element={
              <Suspense fallback={<PageFallback />}>
                <Calculator />
              </Suspense>
            }
          />
          <Route
            path="contato"
            element={
              <Suspense fallback={<PageFallback />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<PageFallback />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
