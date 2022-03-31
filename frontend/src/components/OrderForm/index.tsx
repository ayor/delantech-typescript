import { useEffect, useState, useCallback, ChangeEvent } from 'react';
import { convert, validateEmail } from '../../utils';
import { store } from '../../store';
import { Button } from '../Button';
import {
    Paper,
    TextField,
    Typography,
    LinearProgress,
    Select,
    MenuItem,
    Alert,
    SelectChangeEvent,
} from '@mui/material';
import { ICountry, IOrderResponse } from "../../interfaces";

export const OrderForm = ({ totalPrice }: { totalPrice: number }) => {

    const [countries, setCountries] = useState<ICountry[]>();
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loadingState, setLoadingState] = useState(false);

    const { cart } = store.getState();

    const _url = 'https://countriesnow.space/api/v0.1/countries';

    const price = convert(totalPrice);

    const fetchData = useCallback(async (url: string, cb: Function, method?: string, data?: object) => {
        try {
            let res;
            let response;
            if (method === 'POST') {
                res = await fetch(url, {
                    method: method,
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                response = await res.json() as ICountry[] | IOrderResponse;
                cb(response);
            } else {
                res = await fetch(url);
                response = await res.json();
                const data = response.data as ICountry[] | IOrderResponse;
                cb(data);
            }
        } catch (error) {
            cb(error);
        }
    }, []);

    useEffect(() => {
        fetchData(_url, (data: ICountry[]) => {
            setCountries(data);
        });
    }, [fetchData]);

    const countryDropdown = countries?.map((country: ICountry, ind: number) => (
        <MenuItem value={country.country} key={ind}>
            {country.country}
        </MenuItem>
    ));


    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>, type: string) => {
        const val = event.target.value;
        switch (type) {
            case 'email':
                setEmail(val);
                break;
            case 'address':
                setAddress(val);
                break;
            case 'country':
                setCountry(val);
                break;
            case 'city':
                setCity(val);
                break;
            case 'phone':
                setPhone(val);
                break;

            default:
                break;
        }
    };

    const orderHandler = () => {
        setLoadingState(true);
        let data = {
            email,
            phone,
            address,
            city,
            country,
            order: cart,
        };
        if (cart.items.length === 0) {
            setLoadingState(false);
            setErrorMessage('kindly add items to your cart');
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
            return;
        }

        if (
            address.trim() === '' ||
            email.trim() === '' ||
            city.trim() === '' ||
            country.trim() === '' ||
            phone.trim() === ''
        ) {
            setLoadingState(false);
            setErrorMessage('kindly complete all fields, then try again');

            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
            return;
        }

        if (!validateEmail(email)) {
            setLoadingState(false);
            setErrorMessage('kindly enter a valid email');
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
            return;
        }

        fetchData(
            '/api/order',
            (data: IOrderResponse) => {
                console.log(data);
                setErrorMessage(data.message);
                setTimeout(() => {
                    setErrorMessage('');
                }, 3000);
                setLoadingState(false);
            },
            'POST',
            data
        );
    };

    return (
        <Paper variant="outlined" style={{ borderRadius: 30 }}>
            <form className="mx-auto p-4 rounded w-md-75 ">
                {errorMessage !== '' ? (
                    <Alert severity="info">{errorMessage} </Alert>
                ) : null}
                <Typography variant="h6" style={{ color: '#46B5F3' }} align="center">
                    Total : {price}
                </Typography>
                <div className="form-row  m-3">
                    <div className="form-group ">
                        <TextField
                            type="email"
                            size="small"
                            style={{ width: '100%' }}
                            variant="outlined"
                            onChange={(ev) => handleChange(ev, 'email')}
                            value={email}
                            id="inputEmail4"
                            placeholder="Email"
                        />
                    </div>
                </div>
                <div className="form-row  m-3">
                    <div className="form-group ">
                        <TextField
                            type="tel"
                            size="small"
                            style={{ width: '100%' }}
                            variant="outlined"
                            onChange={(ev) => handleChange(ev, 'phone')}
                            value={phone}
                            id="inputEmail4"
                            placeholder="+2348123456789"
                        />
                    </div>
                </div>
                <div className="form-group m-3">
                    <TextField
                        type="text"
                        size="small"
                        variant="outlined"
                        style={{ width: '100%' }}
                        onChange={(ev) => handleChange(ev, 'address')}
                        value={address}
                        id="inputAddress"
                        placeholder="1234 Main St"
                    />
                </div>
                <div className="form-row m-3">
                    <TextField
                        type="text"
                        size="small"
                        variant="outlined"
                        style={{ width: '100%' }}
                        onChange={(ev) => handleChange(ev, 'city')}
                        value={city}
                        id="inputCity"
                        placeholder="City"
                    />
                </div>

                <div className="form-row m-3">
                    <Select
                        id="countryInput"
                        label="Your Country"
                        size="small"
                        labelId="countryInput-label"
                        style={{ width: '100%' }}
                        value={country}
                        onChange={(ev) => handleChange(ev, 'country')}
                    >
                        <MenuItem value="">Choose a Country</MenuItem>
                        {countryDropdown}
                    </Select>
                </div>

                <Button
                    title={loadingState ? 'Placing order...' : 'Place Order'}
                    clickEvent={orderHandler}
                />


            </form>
        </Paper>
    );
};

