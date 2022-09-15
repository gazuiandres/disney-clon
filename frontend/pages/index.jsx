import React, { useEffect, useState } from "react";

import MainLayout from "../components/layouts/MainLayout";
import Slider from "../components/elements/MainSlider";
import CardsContainer from "../components/elements/CardsContainer";
import CarouselContainer from "../components/elements/CarouselContainer";
import Loader from "../components/elements/Loader";

// Services
import { getBanners } from "../services/banners.service";
import { getAudiovisuals } from "../services/audiovisuals.service";

const home = () => {
  const [banners, setBanners] = useState([]);
  const [recomendations, setRecomendations] = useState([]);
  const [randoms, setRandoms] = useState([]);
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      getBanners(),
      getAudiovisuals({ limit: 8 }),
      getAudiovisuals({ limit: 8, random: true }),
      getAudiovisuals({ limit: 8, random: true, type: "movie" }),
      getAudiovisuals({ limit: 8, random: true, type: "serie" }),
    ]).then(([banners, recomendations, random, movies, series]) => {
      setBanners(banners);
      setRecomendations(recomendations);
      setRandoms(random);
      setMovies(movies);
      setSeries(series);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <MainLayout>
        <main>
          <Loader />
        </main>
      </MainLayout>
    );
  }

  return (
    <>
      <MainLayout>
        <main>
          {banners && <Slider banners={banners} />}

          <CardsContainer />

          {recomendations && (
            <CarouselContainer
              title={"Recomendaciones para ti"}
              items={recomendations}
            />
          )}

          {randoms && (
            <CarouselContainer
              title={"Novedades en Disney +"}
              items={randoms}
            />
          )}

          {movies && <CarouselContainer title={"Peliculas"} items={movies} />}

          {series && <CarouselContainer title={"Series"} items={series} />}
        </main>
      </MainLayout>
    </>
  );
};

export default home;
