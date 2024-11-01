import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";
import { AdminEquipo } from "../../componentes/equipos/AdminEquipo";
import { ListarEquipo } from "../../componentes/equipos/ListarEquipo";
import { RegistrarEquipo } from "../../componentes/equipos/RegistrarEquipo";
import { Quienes } from "../../componentes/otros/Quienes";

export const Ruteo = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/admin-equipo" element={<AdminEquipo />} />
            <Route path="/listar-equipo" element={<ListarEquipo />} />
            <Route path="/registrar-equipo" element={<RegistrarEquipo />} />
            <Route path="/quienes" element={<Quienes />} />
            <Route path="*" element={<NoEncontrado />} />
        </Routes>
    );
};
