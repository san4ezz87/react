import React from 'react';
import PropTypes from 'prop-types';
import './widget.css'
import cloud from '../../assets/icons/cloud.svg';
import celsius from '../../assets/icons/celsius.svg';
import add from '../../assets/icons/add.svg';
import sun from '../../assets/icons/sun.svg';
import snow from '../../assets/icons/snow.svg';

export default class Widget extends React.Component {

  onDeleteButtonClick(e) {
    this.props.deleteCity(this.props.data);
  }

  render() {
    const {
      name,
      temperature,
      wind,
      pressure,
      sky
    } = this.props.data;

    let iconSky;
    switch (sky) {
      case 1:
        iconSky = snow;
        break;
      case 2:
        iconSky = sun;
        break;
      default:
        iconSky = cloud;
    }

    return (
      <div className='widget'>
        <div className='widget__row'>
          <div className='widget__name'>
            {name}
          </div>
        </div>

        <div className='widget__row'>
          <div className='widget__icon-wrap'>
            <img className='widget__icon' src={iconSky} alt=""/>
          </div>
          <div className='widget__temperature'>
            <span>
              {temperature > 0  && <img className='widget__sign' src={add} alt=""/>}
            </span>
            <span>
              {temperature}
            </span>
            <img
              className='widget__celsius'src={celsius} alt=""/>
          </div>
        </div>
        <div className='widget__add-info'>
          <span>Ветер :</span> {wind} м/с
        </div>
        <div className='widget__add-info'>
          <span>Давление :</span> {pressure} мм
        </div>
        <button
          className='widget__close'
          onClick={this.onDeleteButtonClick.bind(this)}
        ></button>
      </div>
    );
  }
}

Widget.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    sky: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
    pressure: PropTypes.number.isRequired,
  })
}

