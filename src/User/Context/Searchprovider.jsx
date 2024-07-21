import React, { createContext, useState } from 'react'

export const searchContext = createContext()
function Searchprovider({children}) {
    const[term,setterm] = useState("")
  return (
    <searchContext.Provider value={{term,setterm}}>
        {children}
    </searchContext.Provider>
        

  )
}

export default Searchprovider