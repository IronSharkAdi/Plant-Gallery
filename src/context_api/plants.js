import React, { createContext, useState } from 'react'

export const PlantContext = createContext();

export const PlantProvider = (props) =>{
    const [plant, setPlant] = useState([])
    return(
        <PlantContext.Provider value={[plant , setPlant]}>
            {props.children}
        </PlantContext.Provider>
    )
}

