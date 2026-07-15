import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import SearchSection from './components/SearchSection'
import MovieCard from './components/MovieCard'

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const SEARCHAPI = "";

  async function getMovies() {
    try {

      setLoading(true)
      let API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"

      if (query !== "") {
        API = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${query}`
      }

      const response = await fetch(API)
      const data = await response.json();
      setMovies(data.results)

    } catch (error) {
      setMovies([]);
    } finally {
      setLoading(false)
    }
  }



  useEffect(
    () => {
      getMovies()
    },
    [query]
  )


  if (loading) {
    return <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="text-center">

        <div
          className="spinner-border text-primary"
          role="status"
          style={{ width: "4rem", height: "4rem" }}
        >
          <span className="visually-hidden">
            Loading...
          </span>
        </div>

        <h5 className="mt-3 text-secondary">
          Loading...
        </h5>

      </div>
    </div>
  }

  return (
    <>
      <Header />
      <SearchSection setQuery={setQuery} query={query} />
      <div className="container-xl">
        <div className="row gy-5">
          {
            movies.map((data, index) => {
              return (
                <MovieCard key={index} thumbnail={"https://image.tmdb.org/t/p/w1280" + data.poster_path} title={data.title} rating={data.vote_average} />
              )
            })
          }

        </div>
      </div>
    </>
  )
}
