import React from 'react';
import Sidebar from './components/Sidebar';
import Sidebar1 from './components/Sidebar1';
import { BrowserRouter as Router, Route, Switch ,Redirect } from 'react-router-dom';
import "./App.css";
import ContentPage from './components/ContentPage';
import ContentPage1 from './components/ContentPage1';
import View from './components/View';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';


function App() {
  const [selectedCategory , setSelectedCategory] = useState('');
  const [selectedSubCategory , setSelectedSubCategory] = useState('');

  const handleMenuClick = (category, subCategory) => {
    setSelectedCategory(category);
    setSelectedSubCategory(subCategory);
  }
  return (
   //  <Router>
     <div>
        <Header />
        <div className="main-container">
      <Router>
      { /* <Sidebar onMenuClick={handleMenuClick}>
     
  </Sidebar> */ }
   <Sidebar1 onMenuClick={handleMenuClick} /> 

      </Router>
      <div className="main-content">
       {/*  <Switch>
            <Route path="/content" element={<ContentPage1 selectedCategory={selectedCategory} selectedSubCategory={selectedSubCategory} />} />
            <Route path="/View" element={<View />} />
            <Redirect to="/content" />
        </Switch>
     <ContentPage selectedCategory={selectedCategory} selectedSubCategory={selectedSubCategory} /> */}
     <ContentPage1 selectedCategory={selectedCategory} selectedSubCategory={selectedSubCategory} />  
       {/* <View />   */}
      </div>
      
      </div>
      <Footer />
      </div>
      //</Router>
  )
}

export default App