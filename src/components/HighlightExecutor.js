import * as React from 'react';
import colorSchemaList from '../consts/colorSchemalist';
import languageList from '../consts/languagelist';
import Select from './Select';
const runHighlight = (schemaAndLanguage) => {
    parent.postMessage({ pluginMessage: { type: 'CHANGE_COLOR', schemaAndLanguage } }, '*');
};
const HighlightExecutor = ({ schemaAndLanguage, setColorSchema, setLanguage, }) => {
    return (React.createElement("div", { className: "box" },
        React.createElement("div", { className: "flex" },
            React.createElement("div", { className: "flexChild" },
                React.createElement("div", { className: "section-title" }, "Color Schema"),
                React.createElement(Select, { current: schemaAndLanguage.colorSchema, collection: colorSchemaList, onChange: event => {
                        setColorSchema(event);
                    } })),
            React.createElement("div", { className: "flexChild" },
                React.createElement("div", { className: "section-title" }, "Language"),
                React.createElement(Select, { current: schemaAndLanguage.language, collection: languageList, onChange: event => {
                        setLanguage(event);
                    } }))),
        React.createElement("div", { className: "flex" },
            React.createElement("div", { className: "flexChild" },
                React.createElement("div", { className: "section-title" }, "Colors"))),
        React.createElement("button", { className: "button button--secondary buttonFullWidth cursor", onClick: () => {
                runHighlight(schemaAndLanguage);
            } }, "Run test")));
};
export default HighlightExecutor;
