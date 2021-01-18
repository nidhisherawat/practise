import React from "react"

function Header(props)
{
    const {search, onInputChange} = props;
    
    return(
        <div className = "jumbotron">
        <h3 className = "display-1">Food Receipe</h3>
        <div class="input-group w-50 mx-auto">
            <input 
            type = "text" 
            class = "form-control" 
            placeholder="Search your receipe..." 
            value={search}
            onChange={onInputChange}
            />
            <div class="input-group-append">
                <button className="btn btn-dark">Search Receipe</button>
            </div>
        </div>
        </div>
    )
}

export default Header;