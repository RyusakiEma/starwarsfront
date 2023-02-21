import { useEffect, useState } from "react";

// Api Imports
import { getFilms } from "../api/filmApi";

// Type imports
import { IFilm } from "../api/types";

export const useFilm = () => {
  const [films, setFilms] = useState<IFilm[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFilmsInfo = async () => {
      try {
        setLoading(true);
        const data = await getFilms();

        if (data && data.results.length > 0) {
          setFilms(data.results);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getFilmsInfo();
  }, []);

  return { loading, films };
};
