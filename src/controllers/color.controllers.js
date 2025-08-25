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
