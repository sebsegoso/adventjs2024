// Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

// Reglas:

// Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
// Cada nombre debe estar en una línea, alineado a la izquierda.
// El marco está construido con * y tiene un borde de una línea de ancho.
// La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
// Ejemplo de funcionamiento:

function createFrame(names = []) {
  if (names.length === 0) return "";

  const maxLength = Math.max(...names.map((name) => name.length));

  const topAndBottom = "*".repeat(maxLength + 4);
  const framedNames = names.map((name) => `* ${name.padEnd(maxLength, " ")} *`);

  return `${topAndBottom}\n${framedNames.join("\n")}\n${topAndBottom}`;
}

console.log(createFrame(["midu", "madeval", "educalvolpz"]));

// // Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

console.log(createFrame(["midu"]));

// // Resultado esperado:
// ********
// * midu *
// ********

console.log(createFrame(["a", "bb", "ccc"]));

// // Resultado esperado:
// *******
// * a   *
// * bb  *
// * ccc *
// *******

console.log(createFrame(["a", "bb", "ccc", "dddd"]));

// // Resultado esperado:
// *********
// * a     *
// * bb    *
// * ccc   *
// * dddd  *
// *********
