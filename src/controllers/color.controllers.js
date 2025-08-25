import Color from "../models/color.js";

export const test = (req, res) => {
  res.status(200);
  res.send("Primera prueba desde el backend");
};

export const crearColor = async (req, res) => {
  try {
    console.log(req.body);

    const nuevoColor = new Color(req.body);
    await nuevoColor.save();

    res.status(200).json({ mensjae: "El color fue creado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensjae: "Error al crear el color" });
  }
};

export const LeerColores = async (req, res) => {
  try {
    const listaColores = await Color.find();

    res.status(200).json(listaColores);
  } catch (error) {
    console.error(error)
    res.status(500).json({ mensaje: 'Error al leer los Colores' })
  }
};

export const editarColorPorId = async (req, res)=> {
  try {
    const colorModificado = await Color.findByIdAndUpdate(req.params.id, req.body)

    res.status(200).json({ mensaje: 'El color ha sido actualizado' })
    if(!colorModificado) {
      return res.status(404).json({ mensaje: 'Color no econtrado' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ mensaje: 'Error al editar el color' })
  }
}

export const borrarColorPorId = async (req, res)=> {
  try {
    const colorEliinado = await Color.findByIdAndDelete(req.params.id, req.body)

    if(!colorEliinado) {
      return res.status(404).json({ mensaje: 'Color no econtrado' })
    }
    res.status(200).json({ mensaje: 'Color eliminado exitosamente' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ mensaje: 'Error al editar el color' })
  }
}

export const leerColorPorId = async (req, res) => {
  try {
    // 1-Obtener el parametro del requets
    // 2- Pedir a mongoose que encuenter el producto con tal id
    const colorBuscado = await Color.findById(req.params.id)
    if(!colorBuscado) {
      return res.status(404).json({ mensaje: 'Color no encontrado' })
    }
    // 3- Contestar al front
    res.status(200).json(colorBuscado)
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener el color' })
  }
}
