import React, {createContext, useContext, useReducer} from 'react'

//prepare the data layer
export const StateContext = createContext();

//wrap app and provide the data layer to every component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull information from the datalayer
export const useStateValue = () => useContext(StateContext)

