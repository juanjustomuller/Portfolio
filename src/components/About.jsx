import React from "react";

export const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hola soy Juan Justo Müller, y es un placer darles la bienvenida a
              mi portfolio.
            </p>
          </div>
          <div>
            <p>
              Mi pasión por la programación se refleja en cada proyecto que
              emprendo. Con una sólida experiencia en el desarrollo web, me
              dedico a construir aplicaciones que no solo cumplen con los
              requisitos, sino que superan las expectativas en términos de
              funcionalidad y diseño. Me especializo en encontrar soluciones
              innovadoras a problemas complejos, ya sea trabajando en proyectos
              pequeños que requieren precisión o en iniciativas a gran escala
              que demandan una visión integral. Estoy siempre dispuesto a
              enfrentar nuevos desafíos, aprender y evolucionar en el mundo de
              la tecnología. Si buscas un profesional comprometido con la
              excelencia y el crecimiento continuo, estaré encantado de conectar
              contigo y explorar cómo puedo aportar valor a tu equipo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
