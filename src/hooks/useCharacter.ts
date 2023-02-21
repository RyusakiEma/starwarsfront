import { useEffect, useState } from "react";

// Api Imports
import { getCharacter } from "../api/peopleApi";

// Type imports
import { IPeople } from "../api/types";

// hooks import
import { useNavigate } from "react-router-dom";

export const useCharacter = (name: string) => {
  const [character, setCharacter] = useState<IPeople | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getCharacterInfo = async () => {
      try {
        setLoading(true);
        const data = await getCharacter(name);

        if (data && data.results.length > 0) {
          setCharacter(data.results[0]);
        } else {
          navigate("*");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getCharacterInfo();
  }, []);

  return { loading, character };
};
