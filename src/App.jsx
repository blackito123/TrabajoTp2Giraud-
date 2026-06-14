import { jsx, jsxs } from "react/jsx-runtime";
function App() {
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-white text-zinc-900 px-6 py-12 sm:py-24 font-sans selection:bg-zinc-200 selection:text-zinc-900", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxs("header", { className: "mb-16", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl sm:text-5xl font-medium tracking-tight mb-4 text-zinc-950", children: "API de GameTrackr" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-zinc-600 leading-relaxed max-w-2xl", children: "Un backend completo e independiente en Node.js/Express estructurado bajo un patr\xF3n multicapa (N-Tier) para gestionar cat\xE1logos de videojuegos, registrar progresos y organizar sesiones de juego multijugador." })
    ] }),
    /* @__PURE__ */ jsxs("main", { className: "space-y-16", children: [
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-medium mb-4 pb-2 border-b border-zinc-200 text-zinc-900", children: "Arquitectura del Sistema" }),
        /* @__PURE__ */ jsx("p", { className: "text-zinc-700 leading-relaxed mb-4", children: "Este sistema est\xE1 construido mediante un estricto patr\xF3n arquitect\xF3nico multicapa N-Tier, para asegurar una alta mantenibilidad y una estructura bien segmentada del c\xF3digo fuente:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-zinc-700 list-none pl-0", children: [
          /* @__PURE__ */ jsxs("li", { className: "pl-4 border-l-2 border-zinc-200", children: [
            /* @__PURE__ */ jsx("strong", { className: "font-medium text-zinc-900 block mb-1", children: "Controladores (Controllers)" }),
            "Gestionan el ciclo de vida de las peticiones y respuestas HTTP."
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "pl-4 border-l-2 border-zinc-200", children: [
            /* @__PURE__ */ jsx("strong", { className: "font-medium text-zinc-900 block mb-1", children: "Servicios (Services)" }),
            "Albergan el desarrollo de la l\xF3gica de negocio y las validaciones."
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "pl-4 border-l-2 border-zinc-200", children: [
            /* @__PURE__ */ jsx("strong", { className: "font-medium text-zinc-900 block mb-1", children: "Repositorios (Repositories)" }),
            "Manejan el acceso a datos abstrayendo la conexi\xF3n a la base a trav\xE9s de Mongoose."
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "pl-4 border-l-2 border-zinc-200", children: [
            /* @__PURE__ */ jsx("strong", { className: "font-medium text-zinc-900 block mb-1", children: "Modelos (Models)" }),
            "Definen los esquemas, tipos y estructuras de los documentos para MongoDB."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-medium mb-6 pb-2 border-b border-zinc-200 text-zinc-900", children: "M\xF3dulos Principales" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-sm uppercase tracking-wider text-zinc-500 font-semibold mb-2", children: "Autenticaci\xF3n" }),
            /* @__PURE__ */ jsx("p", { className: "text-zinc-700 text-sm leading-relaxed", children: "Autenticaci\xF3n segura basada en JWT con cifrado de contrase\xF1as bcrypt y sistema de control por roles (Usuario/Admin)." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-sm uppercase tracking-wider text-zinc-500 font-semibold mb-2", children: "Biblioteca de Juegos" }),
            /* @__PURE__ */ jsx("p", { className: "text-zinc-700 text-sm leading-relaxed", children: "Cat\xE1logo central de videojuegos para colecciones personales con registro de horas jugadas, estados y valoraciones." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-sm uppercase tracking-wider text-zinc-500 font-semibold mb-2", children: "Sesiones" }),
            /* @__PURE__ */ jsx("p", { className: "text-zinc-700 text-sm leading-relaxed", children: "Gesti\xF3n de sesiones multijugador, permitiendo crear, agendar e ingresar a eventos grupales para jugar con otros miembros." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-sm uppercase tracking-wider text-zinc-500 font-semibold mb-2", children: "Estad\xEDsticas" }),
            /* @__PURE__ */ jsx("p", { className: "text-zinc-700 text-sm leading-relaxed", children: "Endpoints que devuelven resultados estad\xEDsticos con base en todos los logros de la galer\xEDa e historial propio." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-zinc-50 border border-zinc-200 p-6 sm:p-8 mt-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-medium mb-3 text-zinc-900", children: "Documentaci\xF3n de la API" }),
        /* @__PURE__ */ jsx("p", { className: "text-zinc-700 leading-relaxed mb-6", children: "Toda la superficie de la API est\xE1 documentada siguiendo est\xE1ndares formales OpenAPI (Swagger). Puedes interactuar probando autenticaci\xF3n y diferentes esquemas desde esta vista gr\xE1fica integrada." }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/api-docs",
            className: "inline-block bg-zinc-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-zinc-800 transition-colors",
            children: "Abrir Swagger UI \u2192"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("footer", { className: "mt-24 pt-8 border-t border-zinc-200 text-sm text-zinc-500", children: "GameTrackr \u2014 Servicio Principal de API" })
  ] }) });
}
export {
  App as default
};
