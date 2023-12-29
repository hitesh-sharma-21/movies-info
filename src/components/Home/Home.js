import React, { useEffect, useState } from 'react'
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
const apiKey = "db21912bb7da357c3dd76a1aaf0fccf8";
const url = "https://api.themoviedb.org/3";
const upcoming = "upcoming";
const imgUrl = "https://image.tmdb.org/t/p/original";
const nowPlaying = "now_playing";
const Popular = "popular"
const topRated = "top_rated";

const Card = ({ img }) => {
  return <img src={img} className='card' alt="cover" />
}


const Row = ({
  title,
  arr = [

  ]
}) => {
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div>
        {arr.map((item, index) => (
          <Card key={index} img={`${imgUrl}${item.poster_path}`} />
        ))}
      </div>

    </div>
  )
};


function Home() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchUpcoming = async () => {
      let data = await fetch(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      let parsed_data = await data.json();
      setUpcomingMovies(parsed_data.results);
    };
    const fetchNowPlaying = async () => {
      let data = await fetch(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
      let parsed_data = await data.json();
      setNowPlayingMovies(parsed_data.results);
    };
    const fetchPopular = async () => {
      let data = await fetch(`${url}/movie/${Popular}?api_key=${apiKey}`);
      let parsed_data = await data.json();
      setPopularMovies(parsed_data.results);
    };
    const fetchTopRated = async () => {
      let data = await fetch(`${url}/movie/${topRated}?api_key=${apiKey}`);
      let parsed_data = await data.json();
      setTopRatedMovies(parsed_data.results);
    };

    fetchUpcoming();
    fetchNowPlaying();
    fetchPopular();
    fetchTopRated();
  }, [])

  return (
    <>
      <section className="home">
        <div className="banner" style={{
          background: popularMovies[0] ? `url(${imgUrl}/${popularMovies[0].poster_path})` : "black"
        }}>
          {
            popularMovies[0] && (
              <h1>{popularMovies[0].original_title}</h1>
            )

          }
          {
            popularMovies[0] && (
              <p>{popularMovies[0].overview}</p>
            )
          }
             <div>
             <button >Play <BiPlay /></button>
              <button>My Lists <AiOutlinePlus /></button>
             </div>
        </div>
        <Row title="Upcoming Movies on Netflix" arr={upcomingMovies} />
        <Row title="Now Playing Movies" arr={nowPlayingMovies} />
        <Row title="Popular Movies" arr={popularMovies} />
        <Row title="Top Rated Movies" arr={topRatedMovies} />
      </section>
    </>
  )
}

export default Home