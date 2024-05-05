import { Link } from "react-router-dom";
import useSpells from "../../hooks/useSpells";
import { Spell } from "../../types/spell";

const Spells: React.FC = () => {
  const { loading, spells } = useSpells();

  if (loading) {
    return <div className="w-full">Loading...</div>;
  }
  return (
    <div className="grid grid-cols-6 gap-4">
      {spells.map((spell: Spell, idx: number) => (
        <Link key={idx} to={`/spell/${spell.index}`}>
          <div className="border px-4 py-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-gray-100">
            <p className="">Name: {spell.name}</p>
            <p className="text-sm text-gray-600 mt-1">Level: {spell.level}</p>
            <p className="text-sm text-gray-400 mt-1">Url: {spell.url}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Spells;
