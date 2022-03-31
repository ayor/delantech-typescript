import React from 'react';
import { Typography, TextField } from '@mui/material';
import { RemoveCircle, AddCircle, Delete } from '@mui/icons-material';
import { convert } from '../../utils';
import { Link } from 'react-router-dom';
import { ICart } from "../../interfaces";
import Carousel from 'react-material-ui-carousel'


export const classes = {
  item: {
    border: `.5px solid #ccc`,
    borderRadius: '10px',
    padding: '20px',
    margin: '5px 0',
    display: 'flex',
  },
  sectionLeft: {
    margin: 'auto 20px',
    marginLeft: '0px',
    curosor: 'pointer',
    // borderRadius: '15px',
  },

  sectionRight: { width: '100%' },
  image: { borderRadius: '10px' },
};


export const Cart = (props: ICart) => {

  return (
    <div style={classes.item}>
      <div style={classes.sectionLeft}>
        <Carousel>
          <Link to={`/products/${props.id}`} >
            {props.images.map((image, ind) => (
              <img key={ind}
                src={image}
                alt=""
                width="90"
                height="90"
                style={classes.image}
                loading="eager"
              />
            ))}
          </Link>
        </Carousel>

      </div>
      <div style={classes.sectionRight}>
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant="h6"
            style={{
              fontWeight: 600,
              display: 'block',
              width: '',
            }}
            component="p"
          >
            {props.name}
          </Typography>
          <Delete
            style={{
              color: 'red',
              fontSize: '16px',
              cursor: 'pointer',
              marginLeft: '5px',
            }}
            onClick={props.deleteItem}
          />
        </div>
        <Typography variant="caption" style={{ color: 'grey' }}>
          {`@${convert(props.price)} per unit`}
        </Typography>
        <div className="my-2">
          {/* <h6 className="text-secondary">Qty</h6> */}

          <RemoveCircle
            style={{
              fontSize: '16px',
              cursor: 'pointer',
              color: 'grey',
            }}
            onClick={props.decrement}
          />
          <TextField
            type="number"
            value={props.qty}
            style={{ textAlign: 'center', width: '50px' }}
            onChange={props.handleChange}
          />
          <AddCircle
            style={{
              fontSize: '16px',
              cursor: 'pointer',
            }}
            onClick={props.increment}
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant="body2"
            component="p"
            style={{ fontSize: '12px', fontWeight: 600 }}
          >
            Total: {convert(props.price * props.qty)}
          </Typography>
        </div>
      </div>
    </div>
  );
};

