import React from 'react';

const MessageCard = ({ message }: { message: string }) => {
    const style = {
        container: {
            width: '100%',
            justifyContent: 'center',
            display: 'flex',
        },
        wrapper: {
            width: '75%',
            background: 'white',
            border: '0.2rem dashed #696969',
            marginTop: '8rem',
            padding: '1rem',
            justifyContent: 'center',
            display: 'flex',
        },
    };
    return (
        <div style={style.container}>
            <div style={style.wrapper}>
                <h1>{message}</h1>
            </div>
        </div>
    );
};

export default MessageCard;
