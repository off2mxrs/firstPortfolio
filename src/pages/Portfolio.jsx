import React from 'react'
import "../styles/portfolio.scss"
import Sidebar from "../components/Sidebar"
import CategoryDetail from "../components/CategoryDetail"
import categoryData from '../categoryData';
import Header from '../components/Header'

class Portfolio extends React.Component {

    state = {
      categoryIdx: 0
    }
  
    updateCategoryIdx = (idx) => {
      console.log('Updating index', idx);
      this.setState({categoryIdx: idx})
    }
  
    render() {
  
      let categoryNames = categoryData.map(category => {
        return category.categoryName
      })
      // console.log(categoryNames);
    let selectedCategory = categoryData[this.state.categoryIdx]
    // console.log(selectedCategory);
  
    return (
      <div className="main-page">
            <div className="side">
             <Sidebar />
             <h3 className='vertical'>
                PROJECTS
             </h3>
            </div>
         
    
          <main className="category-info">
            <CategoryDetail category={selectedCategory}/>
        
          </main>
          

         
          
        </div>
    )
  }
}

export default Portfolio;