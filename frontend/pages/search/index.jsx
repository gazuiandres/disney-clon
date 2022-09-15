import React, { useEffect, useState } from "react";

// styled elements
import { SearchResultContainer } from "../../styles/pages/search";

import MainLayout from "../../components/layouts/MainLayout";
import SearchContainer from "../../components/elements/SearchContainer";
import SearchedCard from "../../components/elements/SearchedCard";
import Loader from "../../components/elements/Loader";

// Services
import { getAudiovisuals } from "../../services/audiovisuals.service";

const searchElements = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getAudiovisuals({ limit: 16, random: true })]).then(
      ([audiovisuals]) => {
        setResults(audiovisuals);
        setLoading(false);
      }
    );
  }, []);

  const searchAudiovisuals = async (value) => {
    const options = { limit: 16 };

    if (value) {
      options.audiovisual_name = value.toLowerCase();
    }

    if (!value) {
      options.random = true;
    }

    try {
      const audiovisuals = await getAudiovisuals(options);
      setResults(audiovisuals);
    } catch (error) {
      console.log(error.message);
    }
  };

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
        <SearchContainer searchAudiovisuals={searchAudiovisuals} />

        <SearchResultContainer>
          <h5>Explore</h5>
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

export default searchElements;
