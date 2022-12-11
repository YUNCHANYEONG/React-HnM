import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Col, Row, Dropdown, Button } from 'react-bootstrap'

const ProductDetail = () => {
    let {id} = useParams();

    const [product, setProduct] = useState(null);

    const getProductDetail = async() => {
        let url = `https://my-json-server.typicode.com/YUNCHANYEONG/React-HnM/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data);
    }

    useEffect(()=>{
        getProductDetail();
    },[])

    return (
        <Container>
            <Row>
                <Col className='product-img'>
                    <img src={product?.img} />
                </Col>
                <Col>
                    <div className='product-title'>{product?.title}</div>
                    <div className='product-price'>\{product?.price}</div>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className='product-dropdown'>
                            사이즈 선택
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {product?.size.map((size, index) => 
                                <Dropdown.Item href={'#/action-' + {index}} key={index}>{size}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="dark" className='product-add'>추가</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetail