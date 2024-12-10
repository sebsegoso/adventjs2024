// Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

// type indica si es una bota izquierda (I) o derecha (R).
// size indica el tamaño de la bota.
// Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

// ¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!
/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes
 */
function organizeShoes(shoes) {
  let availableShoes = [...shoes.map((shoe) => ({ ...shoe, available: true }))];
  const result = [];

  availableShoes.forEach((shoe, i) => {
    if (!shoe.available) return;
    const matchShoe = availableShoes.findIndex(
      (availableShoe, availableShoeIndex) =>
        availableShoe.available &&
        availableShoe.size == shoe.size &&
        availableShoe.type !== shoe.type &&
        i != availableShoeIndex
    );

    if (availableShoes[matchShoe]) {
      result.push(shoe.size);
      availableShoes[i].available = false;
      availableShoes[matchShoe].available = false;
    }
  });
  return result;
}

const shoes = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 42 },
];

console.log("1: ", organizeShoes(shoes));
// [38, 42]

const shoes2 = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "I", size: 38 },
  { type: "I", size: 38 },
  { type: "R", size: 38 },
];
console.log("2: ", organizeShoes(shoes2));
// [38, 38]

const shoes3 = [
  { type: "I", size: 38 },
  { type: "R", size: 36 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 43 },
];

console.log("3: ", organizeShoes(shoes3));
// []
