import React, { Component } from 'react'
import Tour from '../Tour/Tour';
import './TourList.scss';
import { tourData } from '../../tourData'

export default class TourList extends Component {
    state = {
        tours: tourData
    };

    handleDelete = (id) => {
        console.log(id);
        const {tours} = this.state;
        const sortedTours = tours.filter(tour => tour.id !== id);
        this.setState({
            tours: sortedTours
        })
    }
    render() {
        const { tours } = this.state;
        
        return (
            <section className="tourlist">
                {tours.map(tour => {
                    return <Tour key={tour.id} tour={tour} handleDelete={this.handleDelete} />;
                })}
            </section>
        )
    }
}
