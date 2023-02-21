import { useEffect, useState, useCallback } from "react";

// Api Imports
import { getPeople, getCharacter } from "../api/peopleApi";

// Type imports
import { IPeople } from "../api/types";

// hooks imports
import { useLocation, useNavigate } from "react-router-dom";

export const usePeople = () => {
  const [people, setPeople] = useState<IPeople[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();

  const loadMorePeople = async () => {
    const data = await getPeople(page);
    if (data) {
      setPeople((people) => [...people, ...data.results]);
      if (data.next) {
        setPage((page) => page + 1);
      } else {
        setPage(0);
      }
    }
  };

  const getPeopleInfo = useCallback(async () => {
    try {
      setLoading(true);

      const data = location.state?.name
        ? await getCharacter(location.state?.name)
        : await getPeople(1);

      location.state = undefined;
      navigate("/", { replace: true });

      if (data) {
        setPage(data?.next ? Number(data?.next.split("=")[1]) : 0);
        setPeople(data.results);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getPeopleInfo();
  }, [getPeopleInfo]);

  return {
    loading,
    getPeopleInfo,
    loadMorePeople,
    people,
    setPeople,
    page,
    setPage,
  };
};
