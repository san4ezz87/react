import React from 'react';
import Widget from '../widget/Widget'
import './dashboard.css'

export default class Dashboard extends React.Component {


  render() {
    const {
      citiesList,
      deleteCityFrom
    } = this.props;

    return (
    <div className='dashboard'>
      {citiesList.length > 0 && citiesList.map((item, index) => {

    return  <Widget
            key={item.id + index}
            data={item}
            deleteCity={deleteCityFrom}
          />
      })}
    </div>
    );
  }
}