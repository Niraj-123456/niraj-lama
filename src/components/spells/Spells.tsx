import useSpells from "../../hooks/useSpells";

const Spells = () => {
  const { loading, spells } = useSpells();

  console.log("spells", spells);

  if (loading) {
    return <p>Loading...</p>;
  }
  return <div className="w-full border">this is spells component</div>;
};

export default Spells;
