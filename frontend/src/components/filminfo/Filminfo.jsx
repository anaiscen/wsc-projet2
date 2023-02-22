import React from "react";
import CarouselSimilarMovies from "../carousel/CarouselSimilarMovies";
import "./Filminfo.css";

function Filminfo() {
  const movieId = 505642;

  return (
    <div className="filminfo">
      <div className="filminfo-first">
        <img src="#" alt="poster of movie" className="filminfo-poster" />
        <div className="filminfo-box-video">
          {/* <video className="filminfo-video">
            <source src="#" type="video" />
          </video> */}
          <div className="filminfo-retrouver">A retrouver sur</div>
        </div>
      </div>

      <div className="filminfo-second">
        <p className="filminfo-info">
          Info Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nulla obcaecati autem, tempore harum repudiandae fugiat enim
          ipsa nesciunt perferendis nihil reiciendis corporis maiores
          reprehenderit numquam? Aliquam luta consequuntur labore recusandae
          esse enam, ducimus deserunt itaque beatae accusantium quia commodi
          eaque qui quibusdam error sunt quo reiciendis tenetur! Ab, non
          pariatur.
        </p>
        <p className="filminfo-resume">
          Resume Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Atque, quis est, nobis reprehenderit ea consectetur pariatur
          blanditiis quia dolor accusamus voluptatem adipisci officia eos,
          eveniet minima quam voluptamus excepturi, accusantium animi libero.
          Provident aut debitis consectetur cupiditate maxime qui, aliquid
          facilis, quod, perferendis a quibusdam repellat reiciendis facere.
        </p>
      </div>
      <div className="similar-movies-carousel">
        <CarouselSimilarMovies movieId={movieId} />
      </div>
    </div>
  );
}

export default Filminfo;
