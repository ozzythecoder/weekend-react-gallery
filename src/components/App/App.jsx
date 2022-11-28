import React from 'react';
import './App.css';


import Header from '../Header/Header';
import GalleryList from '../GalleryList/GalleryList';
import PostItemForm from '../PostItemForm/PostItemForm';

function App() {
    return (
      <div className="App">
        <Header />
        <PostItemForm />
        <GalleryList />

      </div>
    );
}

export default App;
