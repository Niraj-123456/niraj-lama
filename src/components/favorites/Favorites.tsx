import React, { useState } from "react";
import SpellCard from "../common/spell-card/SpellCard";
import type { Spell } from "@/types/spell";
import { Badge } from "../ui/badge";

const Favorites: React.FC = () => {
  const [favSpells, setFavSpells] = useState(
    JSON.parse(localStorage.getItem("favorite-spells") || " {}")
  );

  if (Object.keys(favSpells).length === 0) {
    return <div>No Favorites</div>;
  }

  return (
    <div className="p-12">
      <div className="flex items-center gap-2">
        <h4 className="text-2xl">Favorites</h4>
        <Badge>{Object.entries(favSpells)?.length}</Badge>
      </div>
      <div className="grid grid-cols-6 gap-4 mt-4">
        {Object.values(favSpells).map((favorite, index: number) => (
          <SpellCard
            key={index}
            spell={favorite as Spell}
            favSpells={favSpells}
            onUpdateFavSpells={(spell) => setFavSpells(spell)}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
