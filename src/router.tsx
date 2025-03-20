import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./shared/Layout";
import { HomePage } from "./pages/HomePage";
import { Products } from "./pages/Products";
import { Categories } from "./pages/Categories";


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products/>}/>
          <Route path="/categories" element={<Categories/>}/>
          {/*Aca van las otras rutas por ejemplo productos, categorias */}

          {/*Ejemplo de Favoritos */}
          {/* <Route path='/favoritos' element={<FavoritesPage />} /> */}
        </Route>

      </Routes>
    </BrowserRouter>
  );
};
