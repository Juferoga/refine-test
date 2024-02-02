import { FilterDropdown, useTable } from "@refinedev/antd";
import { List, Table } from "antd";
import { Radio } from "antd/lib";


const ProductList = () => {

  const { tableProps } = useTable();

  return <List>
    <Table {...tableProps} rowKey="id">
      <Table.Column dataIndex="id" title="ID" />
      <Table.Column dataIndex="name" title="Nombre"  
        filterDropdown = {
          (props) => {
              return (
                <FilterDropdown {...props}>
                  <Radio.Group>
                    <Radio value="Bose QuietComfort 35 II Wireless Headphones">Bose QuietComfort 35 II Wireless Headphones</Radio>
                    <Radio value="Felipe">Felipe</Radio>
                    <Radio value="Jhon">Jhon</Radio>
                  </Radio.Group>
                </FilterDropdown>
              )
          }
        } />
      <Table.Column dataIndex="description" title="Descripción" />
      <Table.Column dataIndex="price" title="Precio" />
    </Table>
  </List>;
};

export default ProductList;