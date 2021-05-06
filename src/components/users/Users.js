import React, { useContext, useEffect } from 'react';
import UserItem from './UserItem';
import GithubContext from '../../context/github/githubContext';
import { Grid } from '@material-ui/core';
import Spinner from '../layout/Spinner';
import { motion } from 'framer-motion';
import fadeInAnimation from '../animations/fadeInAnimation';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { users, loading, setUsers } = githubContext;
  const { variants, transition } = fadeInAnimation;

  useEffect(() => {
    const data = localStorage.getItem('users-list');
    if (data) {
      const parsedData = JSON.parse(data);
      setUsers(parsedData);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem('users-list', JSON.stringify(users));
  }, [users]);

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

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
        className="users"
        direction="row"
        justify="center"
        alignItems="center"
      >
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </Grid>
    </motion.div>
  );
};

export default Users;
