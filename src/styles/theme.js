const colors = {
  white: '#fff',
  black: '#000',
  indigo: '#5f259f',
  olive: '#84754e',
  gray: '#f5f5f5',
};

const theme = {
  colors: {
    header: colors.indigo,
    subheader: colors.olive,
    activeTextColor: colors.white,
    link: colors.white,
    tableBackground: colors.white,
    tableBackgroundActive: colors.olive,
    tableTextActive: colors.white,
    dropdownBackground: colors.white,
    baseBodyColor: colors.gray,
    baseBorderColor: colors.indigo,
    baseTextColor: colors.black,
  },
  font: {
    base: '"Open Sans", sans-serif',
    overpass: 'Overpass, sans-serif',
  },
  transition: 'all .2s',
  borderRadius: '8px',
};

export { theme };
