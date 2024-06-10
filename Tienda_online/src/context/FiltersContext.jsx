import { createContext, useState } from "react";

export const FiltersContext = createContext()


export const FiltersProvider = ({children}) => {

    const [filters, setFilters] = useState({
        minPrice: 0,
        winery: "all"
    })

    const filterProducts = (products) => {

    }




    return(
        <FiltersContext.Provider value={filters,filterProducts,setFilters}>  
        {children}
        </FiltersContext.Provider>
    )
}


