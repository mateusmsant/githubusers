import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

const UserItem = ({ user: { avatar_url, login } }) => {
  return (
    <Grid item xs={4} sm={3} md={3} xl={3}>
      <Link to={`/user/${login}`}>
        <img src={avatar_url} className="round-img" alt=""></img>
      </Link>
      <div className="all-center">
        <Link to={`/user/${login}`}>{login}</Link>
      </div>
    </Grid>
  );
};

export default UserItem;
