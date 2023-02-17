import * as React from 'react';
import ListItemBookmark from './ListItemBookmark';
const Bookmarks = ({ schemaAndLanguage, bookmarkedSchemaAndLanguages, createBookmark, destroyBookmark, }) => {
    return (React.createElement("div", { className: "box" },
        React.createElement("div", { className: "bookmarksSectionTitle" },
            React.createElement("div", { className: "section-title" }, "Bookmarks"),
            React.createElement("div", { className: "icon icon--plus cursor", onClick: () => {
                    createBookmark(schemaAndLanguage);
                } })),
        bookmarkedSchemaAndLanguages &&
            bookmarkedSchemaAndLanguages.map((item, index) => {
                return (React.createElement(ListItemBookmark, { key: index, schemaAndLanguage: item, destroy: () => {
                        destroyBookmark(index);
                    } }));
            })));
};
export default Bookmarks;
