import { makeStyles } from '@material-ui/core/styles';

const searchStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      padding: 0,
      color: '#fff',
      fontFamily: 'Poppins',
    },
  },

  underline: {
    '&:before': {
      borderBottom: '1px solid #ccc',
    },

    '&:not(.Mui-disabled):hover::before': {
      borderColor: '#ccc',
    },
  },
}));

export default searchStyles;
