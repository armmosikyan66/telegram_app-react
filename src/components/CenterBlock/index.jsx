import React from 'react';

import classes from './CenterBlock.module.scss';

const CenterBlock = ({children}) => {
    return (
        <div className={classes.item}>
            {children}
        </div>
    );
};

export default CenterBlock;
