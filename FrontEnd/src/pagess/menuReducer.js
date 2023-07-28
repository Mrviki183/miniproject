// menuReducer.js
const initialState = {
    menuItems: [], // Initialize an empty array to store the menu items
  };
  
  const menuReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_MENU_ITEM":
        // Add the new menu item to the state
        return {
          ...state,
          menuItems: [...state.menuItems, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default menuReducer;
  