import React, {useState} from 'react';
const Search =(props)=>{
    const {searchMovies}= props

    const [search, setSearch]= useState('');
    const [type, setType] = useState('all');
    const  handleKey = (e)=>{
        if(e.key === 'Enter'){
            searchMovies(search, type);
        }
    }
    const  handleFilter =(e)=>{
        setType(e.target.dataset.type);
            searchMovies(search, e.target.dataset.type);
    }

        return <div className="row">
            <div className="col s12">
                <div className="input-field ">
                    <input
                        placeholder="search"
                        id="email_inline"
                        type="search"
                        className="validate"
                        value ={search}
                        onChange={(e)=>setSearch(e.target.value)}
                        onKeyDown={handleKey}
                    />
                    <button className="btn" onClick={() =>searchMovies(search, type)}>Search</button>
                </div>
                <div className="radio">
                    <label>
                        <input
                            onChange={handleFilter}
                            className="with-gap"
                            name="group3"
                            checked={type ==='all'}
                            type="radio"
                            data-type="all" />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            onChange={handleFilter}
                            className="with-gap"
                            name="group3"
                            type="radio"
                            data-type="movie"
                            checked={type ==='movie'}
                        />
                        <span>Movies</span>
                    </label>
                    <label>
                        <input
                            onChange={handleFilter}
                            className="with-gap"
                            name="group3"
                            type="radio"
                            data-type="series"
                            checked={type ==='series'}
                        />
                        <span>Series</span>
                    </label>
                </div>

            </div>
        </div>

}
export {Search}