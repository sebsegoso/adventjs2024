// ¡Es hora de poner el árbol de Navidad en casa! 🎄 Pero este año queremos que sea especial. Vamos a crear una función que recibe la altura del árbol (un entero positivo entre 1 y 100) y un carácter especial para decorarlo.

// La función debe devolver un string que represente el árbol de Navidad, construido de la siguiente manera:

// El árbol está compuesto de triángulos de caracteres especiales.
// Los espacios en blanco a los lados del árbol se representan con guiones bajos _.
// Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
// El árbol siempre debe tener la misma longitud por cada lado.
// Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea \n para cada línea.

/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
  const maxWidth = height * 2 - 1;
  let treeBody = "";

  for (let i = 1; i <= height; i++) {
    const ornaments = ornament.repeat(i * 2 - 1);
    const fillSpace = "_".repeat((maxWidth - ornaments.length) / 2);

    treeBody += `${fillSpace}${ornaments}${fillSpace}\n`;
  }

  const trunk =
    "_".repeat((maxWidth - 1) / 2) + "#" + "_".repeat((maxWidth - 1) / 2);
  treeBody += `${trunk}\n${trunk}`;
  return treeBody;
}

// Ejemplos:
const tree = createXmasTree(30, "*");
console.log(tree);
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, "+");
console.log(tree2);
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, "@");
console.log(tree3);
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/
