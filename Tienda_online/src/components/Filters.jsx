import React, { useContext } from "react";
import { FiltersContext } from "../context/FiltersContext";


const Filters = ({children}) => {

    const {filters, setFilters} = useContext(FiltersContext)
    
    const handleChangeMinRating = (e) => {
        setFilters((prevState) => {
                return({...prevState, minRating : e.target.value})}
        )
    }

    const handleChangeWinery = (e) => {
        setFilters((prevState) => {
                return({...prevState, winery : e.target.value})}
        )
    }

    return (
        <>
        <h1>Winery</h1>
        <section>
            {children}
            <div>
                <label htmlFor="rating">A partir de </label>
                <input 
                type="range"
                id="rating"
                min={0}
                max={1000}
                value={filters.minRating}
                onChange={handleChangeMinRating} 
                />
                <strong>{filters.minRating}</strong>
            </div>
            <div>
                <label htmlFor="">Winery</label>
                <select name="winary" id="winery" onChange={handleChangeWinery}>
                    <option value="all">Todos</option>
                    <option value={products.winery}></option>
                </select>              
            </div>
        </section>
        </>
    )
}

export default Filters