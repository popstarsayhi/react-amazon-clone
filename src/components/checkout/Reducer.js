export const initialState = {
  basket: [],
  user: null,
  address:[],
  dev: '0',
};

// selector
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => {
    console.log(amount)
    return parseFloat(item.price)*item.quantity + parseFloat(amount)}, 0)

export const getTax = (basket) => 
    basket?.reduce((amount, item) => {
      //console.log(amount)
      return parseFloat((parseFloat(item.price)*item.quantity+ parseFloat(amount)) *0.13).toFixed(2)}, 0)

const reducer = (state, action) => {

  //console.log(action)

  switch (action.type) {

    case "ADD_TO_BASKET":
      let quantity = 0;
        const checkIndex = state.basket.findIndex(item => item.id === action.item.id);
        
        if (checkIndex === -1) {
          quantity = 1;
          return {
            ...state,
            basket: [...state.basket, 
              { ...action.item, quantity: quantity }]
          };
        }

      quantity = state.basket[checkIndex].quantity += 1;

      return {
        ...state,
        ...action.item, quantity: quantity
      };



    case "REMOVE_FROM_BASKET":
    //basket: state.basket.filter(item => item.id !== action.id) 
    //the array.filter method will remove all items having this id 
      const index = state.basket.findIndex( //returns the index of the first element in an array 
        (basketItem) => basketItem.id === action.id
      )

      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `can't remove product(id:${action.id}) as it's not in the basket`
        );
      }
      return {
        ...state,
        basket: newBasket
      }
    
      case "ADD_QUANTITY":
        return {
          ...state,
          basket: state.basket.map(basketItem =>
            basketItem.id === action.id
              ? {
                  ...basketItem,
                  quantity: basketItem.quantity + 1 
                }
              : basketItem
          ),
        };  

      case "SUB_QUANTITY":
        return {
          ...state,
          basket: state.basket.map(basketItem =>
            basketItem.id === action.id
              ? {
                  ...basketItem,
                  quantity: basketItem.quantity !== 1 ? basketItem.quantity - 1 : 1,
                }
              : basketItem
          ),
        };  

    case "SET_USER":
      return {
        ...state,
        user: action.user
      };

    case "ADD_ADDRESS":
      return{
        ...state,
        address: [...state.address, action.item]
      }  
    case "ADD_DEV":
      return{
        ...state,
        dev:action.item
      }  

    case "EMPTY_BASKET":
      return{
        ...state,
        basket:[]
      }

    default:
      return state;
  }
};

export default reducer;


