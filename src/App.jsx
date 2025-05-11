import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate, Navigate } from "react-router-dom";
import Navigator from './navbar/navbar';
import PanelArticles from './listproject/ListProjects';
import DetailContnet from "./detailcontent/DetailContent";
import PanelContact from './contact/panelContact';
import MainContent from './maincontent/maincontent';

// Componente para la página principal
function HomePage({ onSelectArticle }) {
  useEffect(() => {
    // Inicializar parallax al cargar la página principal
    setTimeout(() => {
      if (window.$) { // Verificar si jQuery está disponible
        window.$('.tm-parallax').each(function() {
          const imageSrc = window.$(this).data('image-src');
          window.$(this).parallax({ imageSrc: imageSrc });
        });
      }
    }, 100);
  }, []);

  return (
    <>
      <MainContent />
      <PanelArticles Load={onSelectArticle} />
      <PanelContact
        Phone="541136695771"
        Email="pgnahuel@gmail.com"
        Instagram="_nacho.png"
        X="NachoPNG"
        Youtube="NahuelGomez94"
        Linkedin="nahuel-g%C3%B3mez-a869617b"
        Podcast="escuchar-audios-nahuel-gomez_al_15792872_1.html" 
      />
    </>
  );
}

// Componente para ver el detalle de un artículo
function ArticleDetailPage({ articulos }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [articulo, setArticulo] = useState(null);

  useEffect(() => {
    // Aquí deberías buscar el artículo basado en el ID de la URL
    // Esto es un ejemplo, deberás adaptarlo a cómo tengas estructurados tus datos
    const articuloEncontrado = articulos.find(art => art.id === id);
    console.log("articuloEncontrado: ", articuloEncontrado, id);
    console.log("id: ", id, id);
    console.log("find: ", articulos.find(art => {return art.id === id}));
    if (articuloEncontrado) {
      setArticulo(articuloEncontrado);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
        console.log("opapapapapa);");
      // Si no se encuentra el artículo, redirigir a la página principal
      navigate('/');
    }
  }, [id, articulos, navigate]);

  const volverALista = () => {
    navigate('/');
    
    // Reiniciar parallax después de volver a la lista
    setTimeout(() => {
      if (window.$) { // Verificar si jQuery está disponible
        window.$('.tm-parallax').each(function() {
          const imageSrc = window.$(this).data('image-src');
          window.$(this).parallax({ imageSrc: imageSrc });
        });
      }
    }, 100);
  };

  if (!articulo) {
    return <div>Cargando...</div>;
  }

  return <DetailContnet Articulo={articulo} Volver={volverALista} />;
}

// Componente principal que gestiona el enrutamiento
function AppContent() {
  const [articulos, setArticulos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Aquí deberías cargar tus artículos, ya sea desde una API o desde donde los tengas
    // Este es un ejemplo, deberás adaptarlo a tu caso
    const cargarArticulos = async () => {
      // Simulando carga de artículos
      // Reemplaza esto con tu lógica real de carga de datos
      const datosArticulos = [
        {"id":1,"title":"Mi experiencia profesional", "file":"exp.md", "author":"Nahuel Gómez", "img":"codeando.webp"},
        {"id":2,"title":"Codificación prolija y documentación", "file":"neat_coding.md", "author":"Nahuel Gómez", "img":"relatando.webp"},
        {"id":3,"title":"Pensar en abstracciones: una forma más sana de programar", "file":"think_abstract.md", "author":"Nahuel Gómez", "img":"podcaster.webp"},
        {"id":4,"title":"Mi libro: Código del alma", "file":"mybook.md", "author":"Nahuel Gómez", "img":"news.webp"}
    ]
      setArticulos(datosArticulos);
    };

    cargarArticulos();
  }, []);

  const seleccionarArticulo = (articulo) => {
    // Navegar a la ruta del artículo seleccionado
    navigate(`/articulo/${articulo.id}`);
  };

  const volverALista = () => {
    navigate('/');
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Navigator Unload={volverALista} />
        <div className="tm-main">
          <Routes>
            <Route path="/" element={<HomePage onSelectArticle={seleccionarArticulo} />} />
            <Route path="/articulo/:id" element={<ArticleDetailPage articulos={articulos} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;