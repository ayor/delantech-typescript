import React from 'react';
import { Link } from 'react-router-dom';
import { convert } from '../../utils/convertToNGN';
import { Button } from '../Button';

interface ProductProp {
  images: string[];
  name: string;
  type: 'lock' | 'switch';
  price: number;
  id: string;
  handleButtonClickEvent: React.MouseEventHandler;
}

export const Product = (props: ProductProp): JSX.Element => {

  const price = convert(props.price)
  return (
    <div className="col col-md-6 col-lg-3 mb-4 text-center" >
      <Link replace to={`/product/${props.type}/${props.name}/${props.id}`}  >
        <img
          className="img-fluid rounded"
          src={props.images[0]}
          width="150"
          height="150"
          style={{ minHeight: 150 }}
          alt={props.name}
        />
      </Link>
      <small className="text-secondary d-block font-weight-bolder">
        {props.name}
      </small>
      <small className="text-muted mb-2 d-block font-weight-bolder">
        @{price}
      </small>
      <Button
        title='Add To Cart'
        clickEvent={props.handleButtonClickEvent}
      />
    </div>
  )
}