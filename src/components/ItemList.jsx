export const ItemList = ({ products }) => {
  return (
    <CardGroup>
      {products.map((p) => (
        <Item key={p.id} producto={p} />
      ))}
    </CardGroup>
  );
};
