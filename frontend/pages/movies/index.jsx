import React, { useEffect, useState } from "react";

// styled elements
import { SearchResultContainer } from "../../styles/pages/search";

import MainLayout from "../../components/layouts/MainLayout";
import SearchedCard from "../../components/elements/SearchedCard";
import Loader from "../../components/elements/Loader";

// Services
import { getAudiovisuals } from "../../services/audiovisuals.service";

const moviesElements = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      getAudiovisuals({ limit: 16, random: true, type: "movie" }),
    ]).then(([audiovisuals]) => {
      setResults(audiovisuals);
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
        <SearchResultContainer padding="2rem 0 0">
          <h5>Movies</h5>
          <div>
            {results &&
              results.map(({ id, thumbnailDesktop }) => (
                <SearchedCard key={id} image={thumbnailDesktop} id={id} />
              ))}
          </div>
        </SearchResultContainer>
      </MainLayout>
    </>
  );
};

export default moviesElements;
