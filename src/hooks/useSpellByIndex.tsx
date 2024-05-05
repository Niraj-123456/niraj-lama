import { useEffect, useState } from "react";
import { getSpellByIndex } from "../api/spells";
import { Spell } from "../types/spell";

const useSpellByIndex = (index: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [spell, setSpell] = useState<Spell>();

  useEffect(() => {
    const fetchSpellByIndex = async () => {
      setLoading(true);
      try {
        const res = await getSpellByIndex(index);
        if (res.status === 200) {
          setSpell(res.data);
        }
      } catch (err) {
        // handle error
      } finally {
        setLoading(false);
      }
    };
    fetchSpellByIndex();
  }, [index]);

  return { loading, spell };
};

export default useSpellByIndex;
