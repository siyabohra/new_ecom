import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { fetchProducts } from '../features/productslice';
import {
    setimage,
    setcategory,
    settitle,
    setprice
} from '../features/productslice';

function Products() {

    // remove useState bcoz of redux toolkit state is managed by redux store 
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const image = useSelector((state) => state.products.image);
    const category = useSelector((state) => state.products.category);
    const title = useSelector((state) => state.products.title);
    const price = useSelector((state) => state.products.price);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className='container-fluid py-5'>
            <div className='row row-cols-4 m-auto'>
                {products.map((product, index) => (
                    <div className='my-3 text-center' key={index}>
                        <Card className='cart'>
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                className='imglogo m-auto' 
                            />
                            <Card.Body>
                                <div>
                                    <p>Category: {product.category}</p>
                                    <p>Price: {product.price}</p>
                                </div>
                                <div>
                                    <Button>
                                        Add to Cart
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products;
