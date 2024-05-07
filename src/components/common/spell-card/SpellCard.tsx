import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { bgLevelColor } from "@/lib/bgColor";
import { Spell } from "@/types/spell";

type SpellCard = {
  spell: Spell;
  onUpdateFavSpells: (obj: Spell) => void;
  favSpells?: Record<string, Spell>;
};

const SpellCard = ({ spell, onUpdateFavSpells, favSpells }: SpellCard) => {
  const { name, level, url } = spell;

  const handleUpdateFavoriteSpells = (spell: Spell) => {
    const savedFavSpells = JSON.parse(
      localStorage.getItem("favorite-spells") || "{}"
    );
    if (savedFavSpells[spell.index]) {
      delete savedFavSpells[spell.index];
      onUpdateFavSpells(savedFavSpells);
    } else {
      savedFavSpells[spell.index] = spell;
      onUpdateFavSpells(savedFavSpells);
    }
    localStorage.setItem("favorite-spells", JSON.stringify(savedFavSpells));
  };

  return (
    <Card className="w-full overflow-hidden">
      <img
        src="/images/spells/spell2.jpg"
        alt="spell1"
        className="w-full h-64 object-cover object-center"
      />
      <CardContent className="pt-2 flex justify-between gap-4">
        <div>
          <div className="flex items-start gap-2">
            <h4 className="text-xl">
              <Link to={`/spell/${spell.index}`} className="hover:underline">
                <span className="pr-2">{name}</span>

                <Badge className={cn("py-0 px-2", bgLevelColor(level))}>
                  {level}
                </Badge>
              </Link>
            </h4>
            {/* <div>
              <Badge className={cn("py-0 px-2", bgLevelColor(level))}>
                {level}
              </Badge>
            </div> */}
          </div>

          <p className="text-sm text-gray-500 mt-2">{url}</p>
        </div>
        <div className="pt-1">
          <Heart
            fill={
              favSpells && favSpells[spell.index]?.index === spell.index
                ? "red"
                : "white"
            }
            strokeWidth={
              favSpells && favSpells[spell.index]?.index === spell.index ? 0 : 2
            }
            id={`heart-icon-${spell.index}`}
            className="transition-all duration-300 cursor-pointer hover:text-gray-500"
            onClick={() => handleUpdateFavoriteSpells(spell)}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default SpellCard;
