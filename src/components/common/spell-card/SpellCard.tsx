import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { bgLevelColor } from "@/lib/bgColor";

type SpellCard = {
  index: string;
  name: string;
  level: number;
  url: string;
};

const SpellCard: React.FC<{ spell: SpellCard }> = ({ spell }) => {
  const { name, level, url } = spell;

  const savedFavSpells = JSON.parse(
    localStorage.getItem("favorite-spells") || "{}"
  );

  const handleUpdateFavoriteSpells = (spell: SpellCard) => {
    const savedFavSpells = JSON.parse(
      localStorage.getItem("favorite-spells") || "{}"
    );
    const heartIcon = document.getElementById(`heart-icon-${spell.index}`);
    if (heartIcon)
      if (savedFavSpells[spell.index]) {
        delete savedFavSpells[spell.index];
        heartIcon.style.fill = "white";
        heartIcon.style.strokeWidth = "2px";
      } else {
        savedFavSpells[spell.index] = spell;
        heartIcon.style.fill = "red";
        heartIcon.style.strokeWidth = "0px";
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
              savedFavSpells[spell.index]?.index === spell.index
                ? "red"
                : "white"
            }
            strokeWidth={
              savedFavSpells[spell.index]?.index === spell.index ? 0 : 2
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
