import * as React from 'react'
import { SchemaAndLanguage } from '../models/SchemaAndLanguage'
import colorSchemaList from '../consts/colorSchemalist'
import languageList from '../consts/languagelist'
import Select from './Select'
import snowsight from '../assets/colorSchema/schemas/snowsight'

interface Props {
  schemaAndLanguage: SchemaAndLanguage
  setColorSchema: (event) => void
  setLanguage: (event) => void
}

const runHighlight = (schemaAndLanguage: SchemaAndLanguage) => {
  parent.postMessage(
    { pluginMessage: { type: 'CHANGE_COLOR', schemaAndLanguage } },
    '*'
  )
}

const HighlightExecutor: React.FC<Props> = ({
  schemaAndLanguage,
  setColorSchema,
  setLanguage,
}: Props) => {
  return (
    <div className="box">
      <div className="flex">
        <img height="100" src="https://www.snowflake.com/etc.clientlibs/snowflake-site/clientlibs/clientlib-react/resources/static/media/throwing-snowball.1d9b2b454d45acbfdcb3.gif"/>
      </div>
      <div className="flex">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {Object.entries(snowsight).map(([key, value]) => (
        <div
          key={key}
          style={{
            backgroundColor: `rgb(${value.color.r * 255}, ${value.color.g * 255}, ${value.color.b * 255})`,
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            margin: '5px',
          }}
        />
      ))}
    </div>
      </div>

      <button
        className="button button--secondary buttonFullWidth cursor"
        onClick={() => {
          runHighlight({
            language: 'sql',
            colorSchema: 'snowsight',
          })
        }}
      >
        Run SQL
      </button>
      <button
        className="button button--secondary buttonFullWidth cursor"
        onClick={() => {
          runHighlight({
            language: 'python',
            colorSchema: 'snowsight',
          })
        }}
      >
        Run Python
      </button>
    </div>
  )
}

export default HighlightExecutor
