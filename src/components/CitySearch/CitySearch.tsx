import React, { useEffect, useRef, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { fetchCityAsync } from '../../store/actions/actions';
import { useDispatch } from 'react-redux';

const CitySearch = () => {
    const dispatch = useDispatch();
    const cityNameRef: React.MutableRefObject<
        HTMLInputElement | undefined
    > = useRef();
    useEffect(() => {
        cityNameRef.current?.focus();
    }, []);
    const [unitValue, setUnitValue] = useState('metric');
    const handleUnitChange = (e: React.SyntheticEvent) => {
        const { value } = e.target as HTMLInputElement;
        setUnitValue(value);
    };
    const handleSearch = (e: React.SyntheticEvent) => {
        e.preventDefault();
        let { value } = cityNameRef.current as HTMLInputElement;
        if (value.trim() !== '') {
            dispatch(fetchCityAsync(value, unitValue));
        }
    };
    return (
        <form className="searchContainer" onSubmit={handleSearch}>
            <div className={'searchContainer__searchWrapper'}>
                <div className={'searchContainer__searchWrapper__inputWrapper'}>
                    <TextField label={'City'} inputRef={cityNameRef} />
                </div>
                <div className={'searchContainer__searchWrapper__unitWrapper'}>
                    <RadioGroup
                        aria-label="measureUnit"
                        name="measureUnit"
                        value={unitValue}
                        onChange={handleUnitChange}
                    >
                        <FormControlLabel
                            value="metric"
                            control={<Radio />}
                            label="metric"
                        />
                        <FormControlLabel
                            value="imperial"
                            control={<Radio />}
                            label="imperial"
                        />
                        <FormControlLabel
                            value="kelvin"
                            control={<Radio />}
                            label="kelvin"
                        />
                    </RadioGroup>
                </div>
            </div>
            <div className={'searchContainer__ButtonWrapper'}>
                <Button variant="contained" type={'submit'}>
                    Search
                </Button>
            </div>
        </form>
    );
};

export default CitySearch;
