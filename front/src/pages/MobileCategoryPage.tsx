import { useEffect, useState } from "react";
import { getAllCategories } from "../api/apiBooks";
import { ICategory } from "../@types";
import { Link } from "react-router-dom";
import { categoriesImage } from "../data/categoriesImage";

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
      <div className="content ml-[5vw] mr-[5vw] pt-8 md:hidden">
        {/* Sidebar fixe à gauche */}
        <div className="">
          <h2 className="text-3xl mb-4 font-bold font-title">Genres</h2>
          <ul className="book-list grid grid-cols-1 gap-6 xs:grid-cols-2 lg:grid-cols-5 ">
            {categories.map((category) => {
              return (
                <li key={category.id} className="relative">
                  <Link
                    to={`/categories/${category.id}`}
                    className="block text-gray-800 hover:text-yellow-700 hover:underline mb-2 font-body tracking-widest "
                  >
                    <img src={categoriesImage[category.id - 1].src} alt="" className="rounded-2xl brightness-60 " />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-white text-shadow-black text-shadow-sm font-extrabold text-3xl xs:text-2xl sm:text-3xl text-center opacity-100">
                        {" "}
                        {category.name}
                      </p>
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
