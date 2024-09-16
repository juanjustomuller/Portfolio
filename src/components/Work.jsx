import React from "react";
import naturalFarma from "../assets/projects/naturalFarma.png";
import pokeApi from "../assets/projects/pokeApi.png";
import disneyClone from "../assets/projects/disneyClone.png";
import resultadosEnVivo from "../assets/projects/resultados-en-vivo.png";
import suarezFigari from "../assets/projects/suarez-fagari.png";
import toDo from "../assets/projects/listadetareas.png";
import cityrama from "../assets/projects/cityrama.png";
import dreamApp from "../assets/projects/dream-app.png";

export const Work = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 mt-8">
            Projects
          </p>
          <p className="py-6">// Algunos de mis ultimos proyectos</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item 1 */}
          <div
            style={{ backgroundImage: `url(${resultadosEnVivo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative overflow-hidden"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 p-4 text-center max-h-48 overflow-auto">
              {" "}
              {/* Añadido 'max-h-48' y 'overflow-auto' */}
              <span className="text-sm font-medium text-white block mb-4">
                Sitio web, realizado con React, HTML y TailwindCSS para ver
                resultados de partidos de fútbol en vivo de todo el mundo.
                Proporciona actualizaciones en tiempo real de los partidos,
                mostrando detalles como el marcador, eventos importantes y más.
              </span>
              <div className="flex flex-col items-center">
                <a
                  href="https://resultados-en-vivo-futbol.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-sm">
                    Demo
                  </button>{" "}
                  {/* Botón más pequeño */}
                </a>
                <a
                  href="https://github.com/juanjustomuller/Resultados-en-vivo-futbol"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-sm">
                    Code
                  </button>{" "}
                  {/* Botón más pequeño */}
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 2 */}
          <div
            style={{ backgroundImage: `url(${suarezFigari})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative overflow-hidden"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 p-4 text-center max-h-48 overflow-auto">
              <span className="text-sm font-medium text-white block mb-4">
                Sitio web profesional para Suárez Figari utilizando WordPress.
                Implementé un diseño personalizado optimizado para SEO, con
                integración de plugins avanzados para gestión de contenido y
                formularios de contacto interactivos. El sitio está totalmente
                responsive y cuenta con medidas de seguridad robustas para
                proteger los datos de los usuarios.
              </span>
              <div className="flex flex-col items-center">
                <a
                  href="https://suarez-figari.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-sm">
                    Demo
                  </button>{" "}
                  {/* Botón más pequeño */}
                </a>
                <a href="#">
                  <button
                    className="text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-sm cursor-not-allowed"
                    disabled
                  >
                    Code
                  </button>{" "}
                  {/* Botón más pequeño y deshabilitado */}
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 3 */}
          <div
            style={{ backgroundImage: `url(${cityrama})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative overflow-hidden"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 p-4 text-center max-h-48 overflow-auto">
              <span className="text-sm font-medium text-white block mb-4">
                Landing page dinámica para Cityrama, utilizando WordPress para
                crear un diseño atractivo y funcional. La página está optimizada
                para SEO y velocidad, con integración de herramientas de reserva
                y contacto directo. Ademas de ser completamente responsive.
              </span>
              <div className="flex flex-col items-center">
                <a
                  href="https://cityrama.tur.ar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-sm">
                    Demo
                  </button>{" "}
                  {/* Botón más pequeño */}
                </a>
                <a href="#">
                  <button
                    className="text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-sm cursor-not-allowed"
                    disabled
                  >
                    Code
                  </button>{" "}
                  {/* Botón más pequeño y deshabilitado */}
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 4 */}
          <div
            style={{ backgroundImage: `url(${toDo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative overflow-hidden"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 p-4 text-center max-h-48 overflow-auto">
              <span className="text-sm font-medium text-white block mb-4">
                Aplicación de lista de tareas en React JS. Permite gestionar
                tareas diarias con una interfaz intuitiva y moderna.
              </span>
              <div className="flex flex-col items-center">
                <a
                  href="https://lista-de-tareas-flax.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-sm">
                    Demo
                  </button>{" "}
                  {/* Botón más pequeño */}
                </a>
                <a
                  href="https://github.com/juanjustomuller/listaDeTareas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-sm">
                    Code
                  </button>{" "}
                  {/* Botón más pequeño */}
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 5 */}
          <div
            style={{ backgroundImage: `url(${dreamApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative overflow-hidden"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 p-4 text-center max-h-48 overflow-auto">
              <span className="text-sm font-medium text-white block mb-4">
                Aplicación web interactiva utilizando React y TailwindCSS. La
                aplicación permite a los usuarios crear y gestionar listas
                personalizadas de alojamientos, con una interfaz limpia y responsive,
                optimizada para un rendimiento rápido y una experiencia de
                usuario fluida. El backend está implementado con Node.js y MongoDB, ofreciendo un
                sistema seguro y eficiente de almacenamiento de datos.
              </span>
              <div className="flex flex-col items-center">
                <a
                  href="https://dream-app-ok9d.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-sm">
                    Demo
                  </button>{" "}
                  {/* Botón más pequeño */}
                </a>
                <a
                  href="https://github.com/juanjustomuller/Dream-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-sm">
                    Code
                  </button>{" "}
                  {/* Botón más pequeño */}
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 6 */}
          <div
            style={{ backgroundImage: `url(${pokeApi})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative overflow-hidden"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 p-4 text-center max-h-48 overflow-auto">
              <span className="text-sm font-medium text-white block mb-4">
                Aplicación de Pokémon en React JS. Permite explorar y buscar
                información sobre diferentes Pokémon con una interfaz
                interactiva y atractiva.
              </span>
              <div className="flex flex-col items-center">
                <a
                  href="https://deploy-three-beryl.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-sm">
                    Demo
                  </button>{" "}
                  {/* Botón más pequeño */}
                </a>
                <a
                  href="https://github.com/juanjustomuller/pokemon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-sm">
                    Code
                  </button>{" "}
                  {/* Botón más pequeño */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/*
 //Grid Item 4 
<div
style={{ backgroundImage: `url(${suarezFigari})` }}
className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
>
 //Hover Effects 
<div className="opacity-0 group-hover:opacity-100">
  <span className="text-2xl font-bold text-white tracking-wider">
    Wordpress Application
  </span>
  <div className="pt-8 text-center">
    <a
      href="https://suarez-figari.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
        Demo
      </button>
    </a>
    <a href="#">
      <button
        className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg cursor-not-allowed"
        disabled
      >
        Code
      </button>
    </a>
  </div>
</div>
</div>
*/
