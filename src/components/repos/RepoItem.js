import React from 'react';
import { Grid } from '@material-ui/core';

const RepoItem = ({ repo: { name, html_url } }) => {
  return (
    <Grid item xs>
      <div className="card">
        <h3 className="all-center repo-item">
          <a target="_blank" href={html_url} rel="noreferrer">
            {name}
          </a>
        </h3>
      </div>
    </Grid>
  );
};

export default RepoItem;
