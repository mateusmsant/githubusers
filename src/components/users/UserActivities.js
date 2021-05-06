import React from 'react';
import { Button } from '@material-ui/core';

const UserActivities = ({
  login,
  followers,
  following,
  public_repos,
  public_gists,
}) => {
  const baseURL = `https://github.com/${login}`;
  return (
    <div style={activiesStyles}>
      <a target="_blank" rel="noreferrer" href={`${baseURL}?tab=followers`}>
        <Button disabled>
          <div className="badge">seguidores: {followers}</div>
        </Button>
      </a>
      <a target="_blank" rel="noreferrer" href={`${baseURL}?tab=following`}>
        <Button disabled>
          <div className="badge">seguindo: {following}</div>
        </Button>
      </a>
      <a target="_blank" rel="noreferrer" href={`${baseURL}?tab=repositories`}>
        <Button disabled>
          <div className="badge">repositórios: {public_repos}</div>
        </Button>
      </a>
      <Button disabled>
        <div className="badge">gists: {public_gists}</div>
      </Button>
    </div>
  );
};

const activiesStyles = {
  margin: '30px',
  textAlign: 'center',
};

export default UserActivities;
