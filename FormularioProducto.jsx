import React, { useState, useEffect } from "react";

const FormularioProducto = ({ onSubmit, producto, isEditing }) => {
  const [nombre_prod, setNombreProd] = useState(producto ? producto.Nombre_Prod : "");
  const [medida_prod, setMedidaProd] = useState(producto ? producto.Medida_Prod : "");
  const [unidad_medida_prod, setUnidadMedidaProd] = useState(producto ? producto.Unidad_Medida_Prod : "");
  const [precio_bruto_prod, setPrecioBrutoProd] = useState(producto ? producto.Precio_Bruto_Prod : "");
  const [iva_prod, setIvaProd] = useState(producto ? producto.Iva_Prod : "");
  const [porcentaje_ganancia, setPorcentajeGanancia] = useState(producto ? producto.Porcentaje_Ganancia : "");
  const [unidades_totales_prod, setUnidadesTotalesProd] = useState(producto ? producto.Unidades_Totales_Prod : "");
  const [marca_prod, setMarcaProd] = useState(producto ? producto.Marca_Prod : "");
  const [estado_prod, setEstadoProd] = useState(producto ? producto.Estado_Prod : "");
  const [id_proveedor, setIdProveedor] = useState(producto ? producto.Id_Proveedor : "");
  const [id_subcategoria, setIdSubcategoria] = useState(producto ? producto.Id_Subcategoria : "");

  useEffect(() => {
    if (producto && isEditing) {
      setNombreProd(producto.Nombre_Prod);
      setMedidaProd(producto.Medida_Prod);
      setUnidadMedidaProd(producto.Unidad_Medida_Prod);
      setPrecioBrutoProd(producto.Precio_Bruto_Prod);
      setIvaProd(producto.Iva_Prod);
      setPorcentajeGanancia(producto.Porcentaje_Ganancia);
      setUnidadesTotalesProd(producto.Unidades_Totales_Prod);
      setMarcaProd(producto.Marca_Prod);
      setEstadoProd(producto.Estado_Prod);
      setIdProveedor(producto.Id_Proveedor);
      setIdSubcategoria(producto.Id_Subcategoria);
    }
  }, [producto, isEditing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      Nombre_Prod: nombre_prod,
      Medida_Prod: medida_prod,
      Unidad_Medida_Prod: unidad_medida_prod,
      Precio_Bruto_Prod: precio_bruto_prod,
      Iva_Prod: iva_prod,
      Porcentaje_Ganancia: porcentaje_ganancia,
      Unidades_Totales_Prod: unidades_totales_prod,
      Marca_Prod: marca_prod,
      Estado_Prod: estado_prod,
      Id_Proveedor: id_proveedor,
      Id_Subcategoria: id_subcategoria
    };
    onSubmit(newProduct);
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del Producto"
        value={nombre_prod}
        onChange={(e) => setNombreProd(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Medida del Producto"
        value={medida_prod}
        onChange={(e) => setMedidaProd(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Unidad de Medida"
        value={unidad_medida_prod}
        onChange={(e) => setUnidadMedidaProd(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Precio Bruto"
        value={precio_bruto_prod}
        onChange={(e) => setPrecioBrutoProd(e.target.value)}
        required
      />
      <input
        type="number"
        step="0.01"
        placeholder="IVA"
        value={iva_prod}
        onChange={(e) => setIvaProd(e.target.value)}
        required
      />
      <input
        type="number"
        step="0.01"
        placeholder="Porcentaje de Ganancia"
        value={porcentaje_ganancia}
        onChange={(e) => setPorcentajeGanancia(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Unidades Totales"
        value={unidades_totales_prod}
        onChange={(e) => setUnidadesTotalesProd(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Marca"
        value={marca_prod}
        onChange={(e) => setMarcaProd(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Estado"
        value={estado_prod}
        onChange={(e) => setEstadoProd(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="ID Proveedor"
        value={id_proveedor}
        onChange={(e) => setIdProveedor(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="ID Subcategoria"
        value={id_subcategoria}
        onChange={(e) => setIdSubcategoria(e.target.value)}
        required
      />
      <button type="submit">{isEditing ? "Actualizar Producto" : "Agregar Producto"}</button>
    </form>
  );
};

export default FormularioProducto;
