import {lightColors, darkColors, createTheme} from '@rneui/themed';

const Theme = createTheme({
  mode: 'light',
  lightColors: {
    ...lightColors,
    primary: '#00aaff',
    secondary: '#ff0000',
  },
  darkColors: {
    ...darkColors,
    primary: '#0088aa',
    secondary: '#ff0000',
  },
  components: {
    Text: {
      h1Style: {
        fontSize: 24,
      },
      h2Style: {
        fontSize: 20,
      },
      h3Style: {
        fontSize: 16,
      },
      h4Style: {
        fontSize: 12,
      },
    },
  },
});

export default Theme;
