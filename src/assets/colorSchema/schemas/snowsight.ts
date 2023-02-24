
const colors = {
  grey: {
    r: 101,
    g: 103,
    b: 108
  },
  lightgrey: {
    r: 174,
    g: 176,
    b: 179
  },
  green: {
    r: 78,
    g: 182,
    b: 133,
  },
  blue: {
    r: 8,
    g: 91,
    b: 215
  },
  orange: {
    r: 249,
    g: 155,
    b: 21
  },
  red: {
    r: 191,
    g: 8,
    b: 34
  },
  pink: {
    r: 201,
    g: 38,
    b: 175
  },
  purple: {
    r: 151,
    g: 18,
    b: 232
  }
  
}

const colorsMapped = {
  grey: {
    r: 101/255,
    g: 103/255,
    b: 108/255
  },
  lightgrey: {
    r: 174/255,
    g: 176/255,
    b: 179/255
  },
  green: {
    r: 78/255,
    g: 182/255,
    b: 133/255
  },
  blue: {
    r: 64/255,
    g: 140/255,
    b: 255/255
  },
  orange: {
    r: 249/255,
    g: 155/255,
    b: 21/255
  },
  red: {
    r: 191/255,
    g: 8/255,
    b: 34/255
  },
  pink: {
    r: 201/255,
    g: 38/255,
    b: 175/255
  },
  purple: {
    r: 151/255,
    g: 18/255,
    b: 232/255
  }
}


const colorsMapped2 = {
  grey: {
    r: 101/255,
    g: 103/255,
    b: 108/255
  },
  lightgrey: {
    r: 174/255,
    g: 176/255,
    b: 179/255
  },
  green: {
    r: 12/255,
    g: 126/255,
    b: 94/255
  },
  blue: {
    r: 64/255,
    g: 140/255,
    b: 255/255
  },
  orange: {
    r: 138/255,
    g: 109/255,
    b: 0/255
  },
  red: {
    r: 191/255,
    g: 8/255,
    b: 34/255
  },
  pink: {
    r: 201/255,
    g: 38/255,
    b: 175/255
  },
  
}


const snowsight = {
    hljs: {
      type: 'SOLID',
      color: {
        r: colorsMapped.grey.r,
        g: colorsMapped.grey.g,
        b: colorsMapped.grey.b,
      },
    },
    'hljs-comment': {
      type: 'SOLID',
      color: {
        r: colorsMapped.lightgrey.r,
        g: colorsMapped.lightgrey.g,
        b: colorsMapped.lightgrey.b,
      },
    },
    'hljs-quote': {
      type: 'SOLID',
      color: {
        r: 0.5764705882352941,
        g: 0.6313725490196078,
        b: 0.6313725490196078,
      },
    },
    'hljs-keyword': {
      type: 'SOLID',
      color: {         r: colorsMapped.blue.r,
        g: colorsMapped.blue.g,
        b: colorsMapped.blue.b, },
    },
    'hljs-selector-tag': {
      type: 'SOLID',
      color: { r: 0.5215686274509804, g: 0.6, b: 0 },
    },
    'hljs-addition': {
      type: 'SOLID',
      color: { r: 0.5215686274509804, g: 0.6, b: 0 },
    },
    'hljs-number': {
      type: 'SOLID',
      color: {
        r: colorsMapped.orange.r,
        g: colorsMapped.orange.g,
        b: colorsMapped.orange.b,
      },
    },
    'hljs-string': {
      type: 'SOLID',
      color: {
        r: colorsMapped.green.r,
        g: colorsMapped.green.g,
        b: colorsMapped.green.b,
      },
    },
    'hljs-metahljs-meta-string': {
      type: 'SOLID',
      color: {
        r: colorsMapped.green.r,
        g: colorsMapped.green.g,
        b: colorsMapped.green.b,
      },
    },
    'hljs-literal': {
      type: 'SOLID',
      color: {
        r: colorsMapped.green.r,
        g: colorsMapped.green.g,
        b: colorsMapped.green.b,
      },
    },
    'hljs-doctag': {
      type: 'SOLID',
      color: {
        r: colorsMapped.green.r,
        g: colorsMapped.green.g,
        b: colorsMapped.green.b,
      },
    },
    'hljs-regexp': {
      type: 'SOLID',
      color: {
        r: colorsMapped.green.r,
        g: colorsMapped.green.g,
        b: colorsMapped.green.b,
      },
    },
    'hljs-title': {
      type: 'SOLID',
      color: {
        r: colorsMapped.green.r,
        g: colorsMapped.green.g,
        b: colorsMapped.green.b,
      },
    },
    'hljs-section': {
      type: 'SOLID',
      color: {
        r: colorsMapped.green.r,
        g: colorsMapped.green.g,
        b: colorsMapped.green.b,
      },
    },
    'hljs-name': {
      type: 'SOLID',
      color: {
        r: colorsMapped.orange.r,
        g: colorsMapped.orange.g,
        b: colorsMapped.orange.b,
      },
    },
    'hljs-selector-id': {
      type: 'SOLID',
      color: {
        r: colorsMapped.orange.r,
        g: colorsMapped.orange.g,
        b: colorsMapped.orange.b,
      },
    },
    'hljs-selector-class': {
      type: 'SOLID',
      color: {
        r: colorsMapped.blue.r,
        g: colorsMapped.blue.g,
        b: colorsMapped.blue.b,
      },
    },
    'hljs-attribute': {
      type: 'SOLID',
      color: { r: 0.7098039215686275, g: 0.5372549019607843, b: 0 },
    },
    'hljs-attr': {
      type: 'SOLID',
      color: { r: 0.7098039215686275, g: 0.5372549019607843, b: 0 },
    },
    'hljs-variable': {
      type: 'SOLID',
      color: { r: 0.7098039215686275, g: 0.5372549019607843, b: 0 },
    },
    'hljs-template-variable': {
      type: 'SOLID',
      color: { r: 0.7098039215686275, g: 0.5372549019607843, b: 0 },
    },
    'hljs-classhljs-title': {
      type: 'SOLID',
      color: { r: 0.7098039215686275, g: 0.5372549019607843, b: 0 },
    },
    'hljs-type': {
      type: 'SOLID',
      color: { r: 0.7098039215686275, g: 0.5372549019607843, b: 0 },
    },
    'hljs-symbol': {
      type: 'SOLID',
      color: {
        r: 0.796078431372549,
        g: 0.29411764705882354,
        b: 0.08627450980392157,
      },
    },
    'hljs-bullet': {
      type: 'SOLID',
      color: {
        r: 0.796078431372549,
        g: 0.29411764705882354,
        b: 0.08627450980392157,
      },
    },
    'hljs-subst': {
      type: 'SOLID',
      color: {
        r: 0.796078431372549,
        g: 0.29411764705882354,
        b: 0.08627450980392157,
      },
    },
    'hljs-meta': {
      type: 'SOLID',
      color: {
        r: 0.796078431372549,
        g: 0.29411764705882354,
        b: 0.08627450980392157,
      },
    },
    'hljs-metahljs-keyword': {
      type: 'SOLID',
      color: {
        r: 0.796078431372549,
        g: 0.29411764705882354,
        b: 0.08627450980392157,
      },
    },
    'hljs-selector-attr': {
      type: 'SOLID',
      color: {
        r: colorsMapped.blue.r,
        g: colorsMapped.blue.g,
        b: colorsMapped.blue.b,
      },
    },
    'hljs-selector-pseudo': {
      type: 'SOLID',
      color: {
        r: colorsMapped.blue.r,
        g: colorsMapped.blue.g,
        b: colorsMapped.blue.b,
      },
    },
    'hljs-link': {
      type: 'SOLID',
      color: {
        r: colorsMapped.blue.r,
        g: colorsMapped.blue.g,
        b: colorsMapped.blue.b,
      },
    },
    'hljs-built_in': {
      type: 'SOLID',
      color: {
        r: colorsMapped.blue.r,
        g: colorsMapped.blue.g,
        b: colorsMapped.blue.b,
      },
    },
    'hljs-deletion': {
      type: 'SOLID',
      color: {
        r: colorsMapped.blue.r,
        g: colorsMapped.blue.g,
        b: colorsMapped.blue.b,
      },
    },
    'hljs-formula': {
      type: 'SOLID',
      color: {
        r: colorsMapped.orange.r,
        g: colorsMapped.orange.g,
        b: colorsMapped.orange.b,
      },
    },
    'hljs-emphasis': {
      type: 'SOLID',
      color: {
        r: colorsMapped.orange.r,
        g: colorsMapped.orange.g,
        b: colorsMapped.orange.b,
      },
    },
    'hljs-strong': {
      type: 'SOLID',
      color: {
        r: colorsMapped.orange.r,
        g: colorsMapped.orange.g,
        b: colorsMapped.orange.b,
      },
    },
  }
  export default snowsight
  