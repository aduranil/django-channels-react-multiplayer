# grommet-styles

Independent styles from Grommet apps

## Install

`npm install grommet-styles`

or

`yarn add grommet-styles`

## Usage

```javascript
import styled from 'styled-components';
import { colorStyle, sizeStyle } from 'grommet-styles';

const Box = styled.div`
  ${props => props.bg && colorStyle('background-color', props.bg, props.theme)}
  ${props => props.width && sizeStyle('width', props.width, props.theme)}
`;

const theme = {
  global: {
    colors: {
      test: 'white',
    },
    size: {
      small: '75px',
    },
  },
};

<Box bg="test" width="small" theme={theme}>
  Hello World
</Box>;
```

## Run locally

```
git clone https://github.com/grommet/grommet-styles.git
npm install
npm run storybook
```

## Try

Check this [codesandbox](https://codesandbox.io/s/2wjllwrwl0)
