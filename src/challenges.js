// 1.Quanto custa o sanduíche trybe?
// 2.Montar e validar sanduíche recebendo ingredientes e retornar o preço 
// 3.Calcular menu com promoção baseado no dia
// 4.Procurar pizzas mais baratas que X
// 5.Calcular preço final e quanto fica pra cada amigo
// 6.Retornar lanches e preço dos combos
const data = require('../data');

function sumItemsPrice(itemIdsOrNames) {
  let preço = 0;
  itemIdsOrNames.forEach((ingredient) => {
    const currIngredient = data.menu.sandwichItems
    .find((item) => item.id === ingredient || item.name === ingredient);
    if (!currIngredient) throw new Error('Pedido inválido');
    preço += currIngredient.price;
  });
  return preço;
};

function getSandwichPrice(sandwichName) {
  const foundSandwich = data.premade.sandwichs
  .find((sandwich) => sandwich.name === sandwichName);
  if (!foundSandwich) throw new Error('Sanduíche não encontrado');
  return sumItemsPrice(foundSandwich.ingredients);
};

function getDayMenu(day) {
  const isSaleDay = data.saleDays.find((currDay) => currDay === day);
  if (isSaleDay) {
    const discontePizzas = data.menu.pizzas.map((pizza) => {
      pizza.price = pizza.price * 0.9;
      return pizza;
    })
    return {... data.menu, pizza: discontePizzas};
  }
  return data.menu;
}

function getSharedBill(ordersIDs, qtd) {
  const productCategories = ['pizzas', 'drinks'];

  const total = ordersIDs.reduce((acc, order) => {

    productCategories.forEach((category) => {
      const foundProduct = data.menu[category].find((curr) => curr.id === orders.id)
      if (foundProduct) {
        acc += foundProduct.price * order.qtd;
      }
      return acc;
    }); 
  }), 0
    
  
};

function makeSandwich(items) {
  return sumItemsPrice(items);
}

function getCheapestPizza(price) {
  const { pizzas } = data.menu;
  const cheapestPizzas = pizzas.filter((pizza) => price >= pizza.price);
  return cheapestPizzas;
}

function getComboSandwichsAndPrices() {

}

module.exports = {
  getSandwichPrice,
  getDayMenu,
  getSharedBill,
  makeSandwich,
  getCheapestPizza,
  getComboSandwichsAndPrices
}

