// COMMON PATTERNS FOR UPDATING ARRAYS IN STATE
// array de objetos normal y coriente
const shoppingCart = [
    { id: 1, product: "HDMI Cable", price: 4 },
    { id: 2, product: "Easy Bake Oven", price: 28 },
    { id: 3, product: "Peach Pie", price: 6.5 },
  ];
  
  
  // ADDING TO AN ARRAY
//   spread operator que va a copiar la variable literal, da igual si es un objeto o un array, y lo que vaya detrás de cada coma se añade
  [...shoppingCart, { id: 4, product: "Coffee Mug", price: 7.99 }];
  
  // REMOVING AN ELEMENT
  // itera cada elemento, si su id es diferente a 2, la condicion es true y devuelve un array con los trues
  shoppingCart.filter((item) => item.id !== 2);
  
  // UPDATING ALL ELEMENTS IN AN ARRAY
  // se copia el array y se sobreescribe la propiedad
  shoppingCart.map((item) => {
    return {
      ...item,
      product: item.product.toLowerCase(),
    };
  });
  
  // MODIFYING A PARTICULAR ELEMENT IN AN ARRAY
  
  shoppingCart.map((item) => {
    if (item.id === 3) {
      return { ...item, price: 10.99 };
    } else {
      return item;
    }
  });


//   la idea de editar, añadir, o borrar objetos es mantener inmutable siempre el array del que se parte, copiar ese y editarlo con el cambio deseado