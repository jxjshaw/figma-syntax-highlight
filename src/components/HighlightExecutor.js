import * as React from 'react';
import snowsight from '../assets/colorSchema/schemas/snowsight';
const runHighlight = (schemaAndLanguage) => {
    parent.postMessage({ pluginMessage: { type: 'CHANGE_COLOR', schemaAndLanguage } }, '*');
};
const HighlightExecutor = ({ schemaAndLanguage, setColorSchema, setLanguage, }) => {
    return (React.createElement("div", { className: "box" },
        React.createElement("div", { className: "flex" },
            React.createElement("div", { style: { display: 'flex', flexWrap: 'wrap' } }, Object.entries(snowsight).map(([key, value]) => (React.createElement("div", { key: key, style: {
                    backgroundColor: `rgb(${value.color.r * 255}, ${value.color.g * 255}, ${value.color.b * 255})`,
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    margin: '5px',
                } }))))),
        React.createElement("button", { className: "button button--secondary buttonFullWidth cursor", onClick: () => {
                runHighlight({
                    language: 'sql',
                    colorSchema: 'snowsight',
                });
            } }, "Run SQL"),
        React.createElement("button", { className: "button button--secondary buttonFullWidth cursor", onClick: () => {
                runHighlight({
                    language: 'python',
                    colorSchema: 'snowsight',
                });
            } }, "Run Python")));
};
export default HighlightExecutor;
