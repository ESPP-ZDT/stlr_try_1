import React from "react";

type TableProps = {
  products: { id: number; title: string; description: string }[];
};

const Table: React.FC<TableProps> = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
