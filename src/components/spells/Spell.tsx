import React from "react";
import { useParams } from "react-router-dom";
import useSpellByIndex from "../../hooks/useSpellByIndex";

const Spell: React.FC = () => {
  const { index } = useParams();
  const { loading, spell } = useSpellByIndex(index || "");

  if (loading) {
    return <div className="w-full">Loading...</div>;
  }
  console.log("spell", spell);
  return (
    <div>
      <h4 className="text-2xl">{spell?.name}</h4>
      
      <p className="text-gray-600">{spell?.desc}</p>
    </div>
  );
};

export default Spell;
