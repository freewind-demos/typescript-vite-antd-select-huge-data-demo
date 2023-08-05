import React, {FC} from 'react';
import './Hello.pcss';
import {Select, TreeSelect} from "antd";

type Props = {};

function generateTreeData(count: number) {
    return new Array(count).fill(1).map((_, index) => {
        return {
            key: `${index}`,
            label: index,
            value: index,
        }
    })
}

export const Hello: FC<Props> = ({}) => {
    return <div className={'Hello'}>
        <Select style={{width: 200}}
                mode={'multiple'}
                dropdownMatchSelectWidth={false}
                options={generateTreeData(100000)}/>
    </div>;
}
