import { useEffect, useState } from "react";

// Api Imports
import { getPeople } from "../api/peopleApi";

// Type imports
import { IPeople } from "../api/types";

export const usePeople = () => {
  const [people, setPeople] = useState<IPeople[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

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

  useEffect(() => {
    const getPeopleInfo = async () => {
      try {
        setLoading(true);
        const data = await getPeople(1);
        if (data) {
          setPage(Number(data?.next.split("=")[1]));
          setPeople(data.results);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getPeopleInfo();
  }, []);

  return { loading, loadMorePeople, people, page };
};
