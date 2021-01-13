import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingIndicator = () => {
    const style = {
        marginTop: '5rem',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
        width: '100%',
    };
    return (
        <div style={style}>
            <CircularProgress />
        </div>
    );
};

export default LoadingIndicator;
