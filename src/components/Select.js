import * as React from 'react';
const Select = ({ current, collection, onChange }) => {
    return (React.createElement("select", { className: "select-menu__button", onChange: event => {
            onChange(event);
        } }, collection.map((item, index) => {
        return item == current ? (React.createElement("option", { selected: true, value: item, key: index }, item)) : (React.createElement("option", { value: item, key: index }, item));
    })));
};
export default Select;
