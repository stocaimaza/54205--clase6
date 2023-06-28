import { useState, useEffect } from "react"
import { getProductos } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos()
      .then(respuesta => setProductos(respuesta))
  }, [])

  return (
    <>
      <h2 style={{ color: "blue", textAlign: "center" }}> Mis Productos </h2>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer