import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';

import * as actions from '../../actions/Reviews/setReviewSearch.js';

const useStyles = makeStyles({
  root: {
    margin: '10px 0',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid grey',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
});

const ReviewSearch = ({ search, setReviewSearch }) => {
  const classes = useStyles();

  const handleSearch = e => {
    setReviewSearch(e.target.value);
  };

  return (
    <Box className={classes.root}>
      <InputBase
        className={classes.input}
        variant="outlined"
        label="Search"
        placeholder="Keyword search"
        onChange={handleSearch}
        value={search}
      />
      <IconButton className={classes.iconButton}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

let mapStateToProps = state => ({
  search: state.reviewSearch,
});

export default connect(
  mapStateToProps,
  actions
)(ReviewSearch);