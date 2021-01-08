import React, { Component } from 'react'
import './Tour.scss'


class Tour extends Component {
    state = {
        showInfo: false
    }  
    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }
    render() {
        const { tour, handleDelete } = this.props;
        return (
           <article className="tour">
             <div className="img-container">
               <img src={tour.img} alt="" />
               <span onClick={() => {handleDelete(tour.id)}} className="close-btn"><i className="fas fa-window-close"></i></span> 
             </div>
             <div className="tour-info">
               <h3>{tour.city}</h3>
               <h4>{tour.name}</h4>
               <h5>
                 info{" "}
                 <span onClick={this.handleInfo}>
                   <i className="fas fa-caret-square-down"></i>
                 </span>
               </h5>
               {this.state.showInfo && <p>{tour.info}</p>}
             </div>
           </article>
        );
    }
}

export default Tour
