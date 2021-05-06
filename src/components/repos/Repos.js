import React from 'react';
import RepoItem from './RepoItem';
import { Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import fadeInAnimation from '../animations/fadeInAnimation';
import { motion } from 'framer-motion';

const Repos = ({ repos }) => {
  const theme = useTheme();
  const matchesLg = useMediaQuery(theme.breakpoints.up('lg'));
  const { variants, transition } = fadeInAnimation;

  if (repos) {
    return (
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={variants}
        transition={transition}
      >
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={matchesLg ? 3 : 0}
        >
          {repos.map((repo) => (
            <RepoItem repo={repo} key={repo.id} />
          ))}
        </Grid>
      </motion.div>
    );
  }

  return <></>;
};

export default Repos;
