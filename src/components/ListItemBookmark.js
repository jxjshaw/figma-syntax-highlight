import * as React from 'react';
const runHighlight = (schemaAndLanguage) => {
    parent.postMessage({ pluginMessage: { type: 'CHANGE_COLOR', schemaAndLanguage } }, '*');
};
const ListItemBookmark = ({ schemaAndLanguage, destroy, }) => {
    return (React.createElement("div", { className: "bookmarkListItem" },
        React.createElement("div", null,
            React.createElement("span", { className: "type type--neg-small-normal" }, schemaAndLanguage.colorSchema),
            React.createElement("span", { className: "type type--neg-small-normal" }, " / "),
            React.createElement("span", { className: "type type--neg-small-normal" }, schemaAndLanguage.language)),
        React.createElement("div", { className: "bookmarkListItemButtons" },
            React.createElement("span", { onClick: () => {
                    runHighlight(schemaAndLanguage);
                }, className: "type type--neg-small-bold cursor" }, "Run"),
            React.createElement("span", null,
                React.createElement("div", { className: "icon icon--minus cursor", onClick: () => {
                        destroy();
                    } })))));
};
export default ListItemBookmark;
