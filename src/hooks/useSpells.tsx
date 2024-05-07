import { useEffect, useState } from "react";
import { getAllSpells } from "../api/spells";
import { Spell } from "../types/spell";

const useSpells = (query: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [spells, setSpells] = useState<Spell[]>([]);

  useEffect(() => {
    const fetchSpells = async () => {
      setLoading(true);
      try {
        const res = await getAllSpells(query);
        if (res.status === 200) {
          setSpells(res.data?.results);
        }
      } catch (err) {
        // handle error
      } finally {
        setLoading(false);
      }
    };
    fetchSpells();
  }, [query]);

  return { loading, spells };
};

export default useSpells;
