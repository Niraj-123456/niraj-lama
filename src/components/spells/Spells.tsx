import useSpells from "../../hooks/useSpells";
import { Spell } from "../../types/spell";
import SpellCard from "../common/spell-card/SpellCard";

const Spells: React.FC = () => {
  const { loading, spells } = useSpells();

  if (loading) {
    return <div className="w-full">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-6 gap-4">
      {spells.map((spell: Spell, idx: number) => (
        <SpellCard key={idx} spell={spell} />
      ))}
    </div>
  );
};

export default Spells;
