import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import GithubContext from '../../context/github/githubContext';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import UserDetail from './UserDetail';
import UserActivities from './UserActivities';

const iconStyles = {
  marginRight: '5px',
};

const User = ({ match: { params } }) => {
  const githubContext = useContext(GithubContext);

  const {
    getUser,
    loading,
    user,
    repos,
    getUserRepos,
    resetUser,
  } = githubContext;

  useEffect(() => {
    getUser(params.login);
    getUserRepos(params.login);
    // eslint-disable-next-line
  }, []);

  if (loading || !user) {
    return <Spinner></Spinner>;
  }

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    // eslint-disable-next-line
    hireable,
    company,
    created_at,
  } = user;

  const getCreatedAt = () => {
    const year = created_at.substr(0, 4);
    const month = created_at.substr(5, 2);
    return `${month}/${year}`;
  };

  return (
    <div className="user-container">
      <div>
        <Link to="/" onClick={() => resetUser()}>
          VOLTAR
        </Link>
      </div>
      <div className="user-info">
        <div className="user-overview">
          <img src={avatar_url} className="user-img" alt={`${name}`} />
          <h1>{name}</h1>
          <h3>{location}</h3>
        </div>
        <div className="user-details">
          <UserDetail
            bio={bio}
            login={login}
            company={company}
            blog={blog}
            getCreatedAt={getCreatedAt}
          />
        </div>
      </div>
      <div className="all-center">
        <Button variant="contained" color="primary">
          <a
            target="_blank"
            href={html_url}
            rel="noreferrer"
            className="github"
          >
            <i className="fab fa-github" style={iconStyles}></i>
            github
          </a>
        </Button>
      </div>
      <div className="activities">
        <UserActivities
          login={login}
          followers={followers}
          following={following}
          public_repos={public_repos}
          public_gists={public_gists}
        />
      </div>
      <div className="repos">
        <Repos repos={repos} />
      </div>
    </div>
  );
};

export default User;
