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
          

 {/* //////////////////// SKILLS //////////////////            */}
            {/* <section className="glass">
            <div className="inner">
                <div className="skill-header">
                    <h2>My Skills</h2> 
                </div>
                <section className="container">
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="skill-img">
                                <img className="skill-icon" src="/png/javascript.png"></img>
                            </div>
                            <h3>JavaScript</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="skill-img">
                                <img className="skill-icon" src="/png/css.png"></img>
                            </div>
                            <h3>CSS 3</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="skill-img">
                                <img className="skill-icon" src="/png/sass.png"></img>
                            </div>
                            <h3>SASS</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="skill-img">
                                <img className="skill-icon" src="/png/html-5.png"></img>
                            </div>
                            <h3>HTML 5</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="skill-img">
                                <img className="skill-icon" src="/png/python.png"></img>
                            </div>
                            <h3>Python</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="skill-img">
                                <img className="skill-icon" src="/png/react.png"></img>
                            </div>
                            <h3>React</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="skill-img">
                                <img className="skill-icon" src="/png/nodejs.png"></img>
                            </div>
                            <h3>Node Js</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                    <div className="skill-box">
                        <div className="skill-title">
                            <div className="skill-img">
                                <img className="skill-icon" src="/png/github.png"></img>
                            </div>
                            <h3>Github</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>

                </section>
    
                <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
            </section> */}
        </div>
    )
  }
}

export default Portfolio;