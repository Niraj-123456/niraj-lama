import React from "react";
import { useParams } from "react-router-dom";
import useSpellByIndex from "../../hooks/useSpellByIndex";
import { Badge } from "../ui/badge";
import styles from "./spell.module.css";
import { cn } from "@/lib/utils";

const Spell: React.FC = () => {
  const { index } = useParams();
  const { loading, spell } = useSpellByIndex(index || "");

  if (loading) {
    return <div className="w-full text-center">Loading...</div>;
  }

  return (
    <div
      className={cn(
        "w-full h-screen p-12 flex items-center relative",
        styles.spell__container
      )}
    >
      <div className="w-full z-20 text-white">
        <div className="flex items-center gap-2">
          <h4 className="text-4xl">{spell?.name}</h4>
          <Badge className="bg-white text-gray-900">
            Level: {spell?.level}
          </Badge>
        </div>

        <p className={"pt-2 text-white/90 text-lg"}>{spell?.desc}</p>

        <div className="pt-2">
          <p className="text-white/80 mt-1">Duration: {spell?.duration}</p>
          <p className="text-white/80 mt-1">Range: {spell?.range}</p>
          <p className="text-white/80 mt-1 capitalize">
            Attack Type: {spell?.attack_type}
          </p>
          <p className="text-white/80 mt-1 capitalize">
            Casting Time: {spell?.casting_time}
          </p>
          <p className="text-white/80 mt-1 capitalize">
            Material: {spell?.material}
          </p>
          <p className="text-white/80 mt-1 capitalize">
            Concentration: {String(spell?.concentration)}
          </p>
          <p className="text-white/80 mt-1 capitalize">
            Retual: {String(spell?.ritual)}
          </p>
          <p className="text-white/80 mt-1 capitalize">Url: {spell?.url}</p>
        </div>
      </div>
    </div>
  );
};

export default Spell;
