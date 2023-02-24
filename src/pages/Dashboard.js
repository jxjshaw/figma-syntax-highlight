import * as React from 'react';
import { useState, useEffect } from 'react';
import HighlightExecutor from '../components/HighlightExecutor';
const Dashboard = () => {
    const [schemaAndLanguage, setSchemaAndLanguage] = useState({
        language: '',
        colorSchema: '',
    });
    const [bookmarkedSchemaAndLanguages, setBookmarkedSchemaAndLanguages,] = useState([]);
    useEffect(() => {
        onmessage = event => {
            if (event.data.pluginMessage.type == 'CURRENT_SCHEMA_AND_LANGUAGE') {
                setSchemaAndLanguage(event.data.pluginMessage.schemaAndLanguage);
            }
            if (event.data.pluginMessage.type == 'BOOKMARKED_SCHEMA_AND_LANGUAGES') {
                setBookmarkedSchemaAndLanguages(array => [
                    ...array,
                    ...event.data.pluginMessage.schemaAndLanguages,
                ]);
            }
        };
    });
    useEffect(() => {
        parent.postMessage({
            pluginMessage: {
                type: 'UPDATE_BOOKMARKS',
                schemaAndLanguages: bookmarkedSchemaAndLanguages,
            },
        }, '*');
    }, [bookmarkedSchemaAndLanguages]);
    return (React.createElement("div", null,
        React.createElement(HighlightExecutor, { schemaAndLanguage: schemaAndLanguage, setColorSchema: event => {
                setSchemaAndLanguage(Object.assign(schemaAndLanguage, {
                    colorSchema: event.target.value,
                }));
            }, setLanguage: event => {
                setSchemaAndLanguage(Object.assign(schemaAndLanguage, {
                    language: event.target.value,
                }));
            } })));
};
export default Dashboard;
