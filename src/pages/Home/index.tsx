import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { Content } from './styles';
import products from '../../services/products/data.json';

import ComboBox from '../../components/ComboBox';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Description from '../../components/Description';
import { addToCart, updateTotalValue } from '../../store/shop/actions';
import Pagination from '../../components/Pagination';

const Home = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(3);
  const [total, setTotal] = useState(
    products.filter(item => item.idCategory === 0).length,
  );
  const [currentProducts, setCurrentProducts] = useState<Product[]>(products);

  const indexOfLastPost = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastPost - productsPerPage;
  const currentPublish = currentProducts.slice(
    indexOfFirstPost,
    indexOfLastPost,
  );

  const selectCategory = (value: number) => {
    setCategory(value);
    const totalCategory = products.filter(item => item.idCategory === value);
    setCurrentProducts(totalCategory);
    setTotal(totalCategory.length);
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const submit = (item: Product) => {
    dispatch(addToCart({ ...item, counter: 1 }));
    dispatch(
      updateTotalValue({
        type: 'add',
        price: item.price,
        id: item.id,
        counter: 1,
      }),
    );
  };

  return (
    <Content>
      <ComboBox value={category} change={selectCategory} />
      {currentPublish.map(
        item =>
          item.idCategory === category && (
            <Card key={item.name}>
              <Description
                title={item.name}
                subtitle={item.description}
                price={item.price}
              />
              <Button submit={() => submit(item)}>Adicionar no carrinho</Button>
            </Card>
          ),
      )}
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={total}
        paginate={paginate}
        currentPage={currentPage}
      />
    </Content>
  );
};

export default Home;
