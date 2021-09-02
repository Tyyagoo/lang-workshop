import Movie from "./Movie";

interface CategoryInterface {
    slug: string;
    title: string;
    items: Movie[];
}

type Category = CategoryInterface;
export default Category;