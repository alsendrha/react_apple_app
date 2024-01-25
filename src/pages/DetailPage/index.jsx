import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "../../api/axios";
import { imageBasePath } from "../../constant";

const DetailPage = () => {

  console.log(useParams());

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/movie/${movieId}`);
      setMovie(response.data);
    }
    fetchData();
  }, [movieId])

  if (!movie) return null;
  return (
    <section>
      <img
        src={`${imageBasePath}${movie.backdrop_path}`}
        alt="detail"
      />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </section>
  )
}

export default DetailPage