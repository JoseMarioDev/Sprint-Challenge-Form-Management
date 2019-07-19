import React from 'react';
import Form from './components/Form';
import { Route, Link } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import RecipesList from './components/RecipesList';

function App() {
  return (
    <div className='App'>
      <Link to='/'>Register </Link>
      <Link to='/restricted/data'>Recipes</Link>
      <Route exact path='/' component={Form} />
      <ProtectedRoute exact path='/restricted/data' component={RecipesList} />
    </div>
  );
}

export default App;
