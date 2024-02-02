import { useTable } from "@refinedev/antd";
import { List, Table } from "antd";


const ProductList = () => {

  const { tableProps } = useTable();

  return <List>
    <Table {...tableProps} rowKey="id">
      <Table.Column dataIndex="id" title="ID" />
      <Table.Column dataIndex="name" title="Nombre" />
      <Table.Column dataIndex="description" title="Descripción" />
      <Table.Column dataIndex="price" title="Precio" />
    </Table>
  </List>;
};

export default ProductList;