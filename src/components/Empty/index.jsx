import React from "react";

import emptyData from '../../assets/empty.svg';
import classes from './Empty.module.scss';

const Empty = ({text}) => {
    return(
        <div className={classes.empty}>
            <img src={emptyData}/>
            {text}
        </div>
    )
}

export default Empty;