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
        <div className="flexChild">
          <div className="section-title">Color Schema</div>
          <Select
            current={schemaAndLanguage.colorSchema}
            collection={colorSchemaList}
            onChange={event => {
              setColorSchema(event)
            }}
          />
        </div>
        <div className="flexChild">
          <div className="section-title">Language</div>
          <Select
            current={schemaAndLanguage.language}
            collection={languageList}
            onChange={event => {
              setLanguage(event)
            }}
          />
        </div>
      </div>
      <div className="flex">
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Object.entries(snowsight).map(([key, value]) => (
        <div
          key={key}
          style={{
            backgroundColor: `rgb(${value.color.r * 255}, ${value.color.g * 255}, ${value.color.b * 255})`,
            width: '20px',
            height: '20px',
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
          runHighlight(schemaAndLanguage)
        }}
      >
        Run
      </button>
    </div>
  )
}

export default HighlightExecutor
