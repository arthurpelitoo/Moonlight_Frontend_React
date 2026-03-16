import { Card } from "../Card";

type CategoryCardProps = {
    category: Category
}

export function CategoryCard({category} : CategoryCardProps) {

  return (
    <Card>
      <img src={category.image} className="h-64 w-full object-cover rounded-md" />
      <p>{category.name}</p>
    </Card>
  );
}
