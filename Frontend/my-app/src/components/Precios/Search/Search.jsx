export const Search = ({handleSearch}) => {

    
   

    return (
        <form className="d-flex searchBar" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar una cripto" aria-label="Search" onChange={handleSearch}/>
      </form>
    );
}
