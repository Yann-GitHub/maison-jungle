import "../styles/Categories.css";
// import { plantList } from "../datas/plantList";

function Categories({ setActiveCategory, categories, activeCategory }) {
  return (
    <div className="lmj-categories">
      <select
        className="lmj-categories-select"
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
      >
        <option value="">---</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button onClick={() => setActiveCategory("")}>Réinitialiser</button>
    </div>
  );
}

export default Categories;
