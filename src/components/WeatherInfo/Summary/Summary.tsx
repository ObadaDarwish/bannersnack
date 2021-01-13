import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

interface ISummary {
    title: string;
    description: string;
}
const Summary = ({ summary }: { summary: ISummary }) => {
    return (
        <div className={'weatherContainer__cardContainer'}>
            <div
                className={`weatherContainer__cardContainer__title summaryColor`}
            >
                <h2>Summary</h2>
                <FontAwesomeIcon className={'icon'} icon={faFile} />
            </div>
            <div className={'weatherContainer__cardContainer__dataWrapper'}>
                <div
                    className={
                        'weatherContainer__cardContainer__dataWrapper__item'
                    }
                >
                    <p>{summary.title}</p>
                </div>
            </div>
        </div>
    );
};

export default Summary;
