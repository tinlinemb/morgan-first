import React from 'react';
import { connect } from 'react-redux';
import Login from '../../components/login/Login';

const LoginContainer = ({ dispatch, loading, error }) => {
  const handleLogin = () => {
    dispatch({
      type: 'LOGIN_REQUEST',
      payload: { username: 'user', password: 'pass' }
    });
  };

  return (
    <Login onLogin={handleLogin} loading={loading} error={error} />
  );
};

const mapStateToProps = (state) => ({
  loading: false, // Update if you add a real loading state
  error: state.login.error
});

export default connect(mapStateToProps)(LoginContainer);
