// Array para almacenar los libros leídos
const librosLeidos = [];

// Función para agregar un libro al array
function agregarLibro(titulo) {
  librosLeidos.push(titulo);
  return librosLeidos; // Devolvemos el array actualizado
}
// Función para mostrar los libros leídos
function mostrarLibrosLeidos() {
  return librosLeidos.length === 0
    ? "Aún no has leído ningún libro."
    : `Libros leídos:\n${librosLeidos
        .map((libro, i) => `${i + 1}. ${libro}`)
        .join("\n")}`;
}