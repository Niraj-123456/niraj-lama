import React from "react";
import { useParams } from "react-router-dom";
import useSpellByIndex from "../../hooks/useSpellByIndex";
import { Badge } from "../ui/badge";

const Spell: React.FC = () => {
  const { index } = useParams();
  const { loading, spell } = useSpellByIndex(index || "");

  if (loading) {
    return <div className="w-full">Loading...</div>;
  }

  return (
    <div>
      <div className="flex items-center gap-2">
        <h4 className="text-2xl">{spell?.name}</h4>

        <Badge>Level: {spell?.level}</Badge>
      </div>
      <p className={"text-gray-600 pt-2"}>{spell?.desc}</p>
      <p className="text-sm text-gray-500 mt-1">Duration: {spell?.duration}</p>
      <p className="text-sm text-gray-500 mt-1">Range: {spell?.range}</p>
      <p className="text-sm text-gray-500 mt-1 capitalize">
        Attack Type: {spell?.attack_type}
      </p>
      <p className="text-sm text-gray-500 mt-1 capitalize">
        Casting Time: {spell?.casting_time}
      </p>
      <p className="text-sm text-gray-500 mt-1 capitalize">
        Material: {spell?.material}
      </p>
      <p className="text-sm text-gray-500 mt-1 capitalize">
        Concentration: {String(spell?.concentration)}
      </p>
      <p className="text-sm text-gray-500 mt-1 capitalize">
        Retual: {String(spell?.ritual)}
      </p>
      <p className="text-sm text-gray-500 mt-1 capitalize">Url: {spell?.url}</p>
    </div>
  );
};

export default Spell;
