import { Link } from "react-router-dom";
import { RecipeType } from "../../types/Recipe.type";
import path from "../../constants/path";

interface Props {
  recipe: RecipeType;
}

export default function Recipe({ recipe }: Props) {
  return (
    <Link to={path.recipeDetail} className="group flex-col">
      <div className="w-full group-hover:shadow-2xl transition-all group-hover:-translate-y-1">
        <img className="w-full h-full" src={recipe.image} />
      </div>
      <div className="bg-primary text-white text-xs px-3 py-1 uppercase line-clamp-1">
        {recipe.category.join(", ")}
      </div>
      <h4 className="text-xl font-bold group-hover:text-primary transition-all">
        {recipe.name}
      </h4>
      <p className="text-base text-tertiary">{recipe.description}</p>
    </Link>
  );
}
