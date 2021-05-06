import React, { useState, useContext, useEffect } from 'react';
import GithubContext from '../../context/github/githubContext';
import { Input } from '@material-ui/core';
import searchStyles from '../styles/searchStyles';

const Search = () => {
  const classes = searchStyles();
  const githubContext = useContext(GithubContext);
  const { searchUsers } = githubContext;
  const [input, setInput] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('searchInput');
    const parsedData = JSON.parse(data);
    if (parsedData) {
      setInput(parsedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('searchInput', JSON.stringify(input));
  }, [input]);

  const handleChange = (e) => {
    searchUsers(e.target.value);
    setInput(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={classes.root}
      autoComplete="off"
    >
      <Input
        autoFocus
        color="primary"
        value={input}
        onChange={handleChange}
        placeholder="Digite um usuário"
        type="search"
        className={classes.underline}
      />
    </form>
  );
};

export default Search;
