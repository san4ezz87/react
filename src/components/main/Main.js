import React from 'react';
import DashBoard from '../dashboard/Dashboard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Typeahead } from 'react-bootstrap-typeahead';

import add from '../../assets/icons/add.svg';

import 'rc-slider/assets/index.css';
import './main.css';

import * as Actions from '../../actions/actions';

import  Range from 'rc-slider';
const createSliderWithTooltip = Range.createSliderWithTooltip;
const RangeWithTooltip = createSliderWithTooltip(Range);

class Main extends React.Component {
  componentDidMount() {

  }

  addToDashBoard() {
    const {
      citiesSelect,
      citiesOnDashBoard
    } = this.props;

    const cityIndex = citiesOnDashBoard.findIndex(city => city.id === citiesSelect.id);
    if (cityIndex > -1) {
      return;
    }

    this.props.actions.addToDashBoard(citiesSelect)
  }

  onSelectedItem(selected) {
    const [elem] = selected;
    this.props.actions.addToSelect(elem);
  }

  render() {
    const {
      cities,
      filteredCities,
      citiesSelect
    } = this.props;

    const rangeProps = [{
      borderColor: '#000',
      backgroundColor: '#000',
      width: '9px',
      height: '14px',
      boxShadow: 'none',
      borderRadius: '10px'
    }]

    return (
      <div className='main'>

        <div className='main__controls'>
          <div className='main__range'>
            {/*<Slider/>*/}
            <div className='main__range-title'>Где сейчас теплее, чем: </div>
            <RangeWithTooltip
              min={-40}
              max={40}
              step={5}
              count={0}
              tipProps={{placement: 'bottom'}}
              handleStyle={rangeProps}
              onChange={(value) => {
                this.props.actions.setRageValue(value);
              }}
            />
          </div>

          <div className='main__input'>
            <div
              className='main__typeahead'
            >
              <Typeahead
                onChange={this.onSelectedItem.bind(this)}
                placeholder='Начните вводить город'
                onInputChange={(value) => {
                  if (!value.trim()) {
                    this.props.actions.cleanCitiesWeather()
                    return;
                  }
                  this.props.actions.getCitiesWeather(value);
                }}
                options={cities}

                labelKey="name"
              ></Typeahead>
            </div>

            <div className='main__button-wrap'>
              <button
                type='button'
                className='main__button btn btn-default'
                disabled={!citiesSelect}
                onClick={this.addToDashBoard.bind(this)}
              >
                <img src={add} alt=""/>
              </button>
            </div>
          </div>

        </div>
        <DashBoard
          citiesList={filteredCities}
          deleteCityFrom={this.props.actions.deleteFromDashBoard}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {
    rangeValue,
    citiesSelect,
    citiesOnDashBoard
  } = state;
  return {
    cities: state.cities,
    citiesOnDashBoard: citiesOnDashBoard,
    citiesSelect: citiesSelect,
    filteredCities: citiesOnDashBoard.filter(item => item.temperature > rangeValue),
    rangeValue: rangeValue
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
