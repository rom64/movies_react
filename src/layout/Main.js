import React, {useState, useEffect} from 'react';
import {Movies} from '../components/Movies';
import {Preloader} from "../components/Preloader";
import {Search} from "../components/Search";

function Main(){
    const [movies, setMovies]= useState(['']);
    const [loading, setLoading] = useState(true);


    const searchMovies= (str, type = 'all') =>{
      setLoading(true);
        fetch(`http://www.omdbapi.com/?apikey=ed3f9a7e&s=${str}${type !== 'all'?`&type=${type}`:''}` )
            .then(response =>response.json())
            .then(data =>{
                setMovies(data.Search);
                setLoading(false);})

    };

        useEffect(()=>{
            fetch('http://www.omdbapi.com/?apikey=ed3f9a7e&s=gladiator')
                .then(response =>response.json())
                .then(data => {
                    setLoading(false);
                    setMovies(data.Search);
                }/*this.setState({movies: data.Search, loading: false})*/)
        },[]);

        return<main className="content container">
            <Search searchMovies={searchMovies}/>
            {loading ? (
                    <Preloader/>
                ):(
            <Movies movies={movies}/>)}
            </main>


}
export {Main}