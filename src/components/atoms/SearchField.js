import React from "react";

export const SearchField = () => {
    return(
        <div>
            <label>Search:</label>
            <input type="text" onChange={(event) => handleSearch(event)} />
        </div>
    );
}