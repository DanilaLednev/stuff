
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import { useGetProducQuery  } from '../../features/api/apiSlice';
import { ROUTES } from '../../utils/routes';
import Product from './Product';
import Products from './Producs';
import { useDispatch, useSelector } from 'react-redux';
import { getRelatedProducts } from '../../features/products/productsSlice';

const SingleProduct = () => {

  const dispatch = useDispatch()
  const { id } = useParams();
  const navigate = useNavigate();
  const { list, related} = useSelector(({ products }) => products)

  const { data, isLoading, isFetcing, isSuccess } = useGetProducQuery ({ id });

  useEffect(() => {
    if(!isLoading && !isFetcing && !isSuccess) {
      navigate(ROUTES.HOME)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isLoading, isFetcing, isSuccess]);

  useEffect(() => {
    if(!data || !list.length) return 

      dispatch(getRelatedProducts(data.category.id))
    
  },[data, dispatch, list.length])

  return !data ? (
    <section className='preloader'>Loading...</section>
  ) : (
    <>
      <Product { ...data } />
      <Products products={ related } amount={5} title="Related products" />
    </>
  )
}

export default SingleProduct; 