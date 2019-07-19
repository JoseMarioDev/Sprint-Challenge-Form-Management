import React from 'react';
import Form from './components/Form';
import { Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import RecipesList from './components/RecipesList';


function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={Form} />
      <ProtectedRoute exact path='/restricted/data' component={RecipesList} />
    </div>
  );
}

export default App;
