import { createMuiTheme } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[300],
    },
  },
});

export const loadingContainer = {
  width: '2rem',
  height: '2rem',
  display: 'flex',
  textAlign: 'center',
  margin: '0 auto',
  marginTop: '30vh',
  justifyContent: 'space-around',
};

export const loadingCircle = {
  display: 'block',
  width: '0.5rem',
  height: '0.5rem',
  background: theme.palette.primary.main,
  borderRadius: '0.25rem',
};

export const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const loadingCircleVariants = {
  start: {
    y: '0%',
  },
  end: {
    y: '100%',
  },
};

export const loadingCircleTransition = {
  duration: 0.2,
  yoyo: Infinity,
  ease: 'easeInOut',
};
