//import TituloPrincipal from "./componentes/TituloPrincipal/TituloPrincipal"
//import ItemCount from "./componentes/ItemCount/ItemCount"
import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
/*
COMPONENTES 1: 
¿Qué es un componente? Conjunto de elementos que cumplen una función específica. 

Ventajas de trabajar con componentes: 

- Reutilizamos código. 
- Favorece la separación de responsabilidades. 
- El código es más fácil de enteder. 
- Mejora el rendimiento de la aplicación.

Características principales:

- Pueden renderizar un único elemento. 
- Pueden recibir props (propiedades). 
- Pueden tener un estado. 


¿Qué son las props? 
Son objetos que contienen datos que un componente necesita para renderizarse correctamente. Estas se envían de forma unidireccional del componente padre a componente hijo. .


¿Qué es el estado? 
Es un objeto que contiene información del componente que puede cambiar durante la ejecución de la App. 



*/



const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer/>




      {/* <TituloPrincipal saludo={"Hola mundo"} titulo = {"Clase 4"} />
      <h2>Esto es un h2</h2>
      <img src="" alt="" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquid non itaque sequi, incidunt nemo vel voluptates quibusdam. Ducimus libero dolorum debitis eaque quas iste, quibusdam quidem sunt nisi alias?</p> */}
      
    </>
    
  )
}

export default App