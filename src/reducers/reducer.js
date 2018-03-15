import { actionTypes } from "../actions/actions";

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$1666699.99', stocked: true, name: 'Nexus 7'}
];

const INITIAL_STATE = {
  products: PRODUCTS,
  textInput: '',
  checked: false, 
  filterProducts: PRODUCTS
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TEXT_INPUT:
      state = {
        ...state,
        textInput: action.text
      }
      break;
    case actionTypes.SHOW_PRODUCTS_STOCK:
      state = {
        ...state,
        checked: action.checkBoxValue
      }
    break;      
    default:
      return state
  }

  // verificar que si los productos van a filtrarse 
  if (
    action.type  === actionTypes.CHANGE_TEXT_INPUT ||
    action.type === actionTypes.SHOW_PRODUCTS_STOCK
  ) {
    const filterProducts = state.products.filter(product => {
      // text input almacenará el texto con el cual se filtrará a los productos 
      // NOTA: trim() elimina espacios en blanco
      const textInput = ( action.type === actionTypes.CHANGE_TEXT_INPUT ?  action.text : state.textInput ).trim();
      // checked alamacenará el valor del checkbox
      const checked = action.type === actionTypes.SHOW_PRODUCTS_STOCK ? action.checkBoxValue : state.checked;

      // NOTA: el método filter si se pasa una function esta debe retornar un valor booleano para seleccionar 
      // los elementos del nuevo array de retorno
      return (
        (checked ? product.stocked : true) &&
        // match busca todas las ocurrencias (i: ignora mayusculas / g: array de emparejamientos )
        // si se pasa un obj a macth convierte implicitamente en RegExp usando (New RegExp)
        ( product.name.match(new RegExp(textInput, 'ig')) )
      )
    });

    state = {
      ...state,
      filterProducts
    }
  }

  return state;
}