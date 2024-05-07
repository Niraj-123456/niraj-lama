import { Link } from "react-router-dom";
import useSpells from "../../hooks/useSpells";
import { Spell } from "../../types/spell";
import SpellCard from "../common/spell-card/SpellCard";
import { Heart, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "../ui/input";
import { debounce } from "@/lib/debounce";

const Spells: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [savedSpells, setSavedSpells] = useState(
    JSON.parse(localStorage.getItem("favorite-spells") || "{}")
  );
  const { loading, spells } = useSpells(searchQuery);

  // const handleSearchQueryChange = debounce(
  //   (e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value),
  //   750
  // );

  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // if (loading) {
  //   return <div className="w-full text-center">Loading...</div>;
  // }

  return (
    <div className="p-12">
      <div className="flex items-center gap-4 justify-end">
        <div className="relative">
          <Input
            value={searchQuery}
            onChange={handleSearchQueryChange}
            className="w-64 pl-9 rounded-full border-gray-400 border-2"
            placeholder="Search spell by name..."
          />
          <Search className="absolute top-1/2 left-3 translate-x-0 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        <div className="py-4 flex item-center">
          <div className="pr-1">
            <Heart fill="red" strokeWidth={0} />
          </div>
          <Link to="/favorites" className="pr-2 hover:underline">
            Favorites
          </Link>
          <div>{Object.entries(savedSpells).length}</div>
        </div>
      </div>
      <div className="w-full min-h-[80vh]">
        {loading ? (
          <div className="w-full h-screen mt-2 grid place-items-center place-content-center">
            Loading...
          </div>
        ) : spells.length > 0 ? (
          <div className="grid grid-cols-6 gap-4 mt-2">
            {spells.map((spell: Spell, idx: number) => (
              <SpellCard
                key={idx}
                spell={spell}
                onUpdateFavSpells={(spells) => {
                  setSavedSpells(spells);
                }}
                favSpells={savedSpells}
              />
            ))}
          </div>
        ) : (
          <p className="text-center mt-4">No Spells found</p>
        )}
      </div>
    </div>
  );
};

export default Spells;
