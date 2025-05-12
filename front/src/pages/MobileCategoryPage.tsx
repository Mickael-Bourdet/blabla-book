import { useEffect, useState } from "react";
import { getAllCategories } from "../api/apiBooks";
import { ICategory } from "../@types";
import { Link } from "react-router-dom";

export default function MobileCategoryPage() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    async function loadCategories() {
      try {
        const allCategories = await getAllCategories();
        setCategories(allCategories);
      } catch (error) {
        console.log(error);
      }
    }
    loadCategories();
  }, []);
  return (
    <div>
      {/* Conteneur principal avec Flexbox */}
      <div className="flex justify-center ">
        {/* Sidebar fixe à gauche */}
        <div className="pl-4 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          <h2 className="text-xl mb-4 font-title font-bold">Genres</h2>
          <ul>
            {categories.map((category) => {
              return (
                <li key={category.id} className="relative">
                  <Link
                    to={`/categories/${category.id}`}
                    className="block text-gray-800 hover:text-yellow-700 hover:underline mb-2 font-body tracking-widest "
                  >
                    <img src="/romance.jpg" alt="" className="rounded-2xl" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-white font-bold text-2xl text-center"> {category.name}</p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Contenu principal avec la Navbar */}
      </div>
    </div>
  );
}
