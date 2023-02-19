import { useEffect, useState } from "react";

// Api Imports
import { GetCharacter } from "../api/peopleApi";

// Type imports
import { IPeople } from "../api/types";

export const useCharacter = (name: string) => {
  const [character, setCharacter] = useState<IPeople | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCharacterInfo = async () => {
      try {
        setLoading(true);
        const data = await GetCharacter(name);

        if (data) {
          setCharacter(data.results[0]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getCharacterInfo();
  }, []);

  return { loading, character };
};
