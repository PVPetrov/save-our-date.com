import React, { useState, useEffect } from 'react';
import { Select, Button } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { upadteGuest, getGuests } from '../actions/guests';

import 'antd/lib/select/style/index.css';
import 'antd/lib/button/style/index.css';
import 'antd/lib/grid/style/index.css';
import './Rsvp.css';

const { Option } = Select;

// const data = ['Karine', 'Milena', 'Veselin', 'Pepi', 'Evelin', 'Aivar', 'Karin', 'Jaan', 'Erki', 'Angeli', 'Marko', 'Helena K-J', 'Ragnar', 'Grete', 'Ainika', 'Ilmar', 'Regina', 'Enn', 'Kristina', 'Raido', 'Tarvi', 'Diana', 'Kristel', 'Mati', 'Kati', 'Marek', 'Tiina',
//   'Jeoren', 'Jesse', 'Rosalin', 'Kristjan', 'Merle', 'Helena L', 'Armen', 'Stanislav', 'Efkan', 'Nina', 'Arda', 'Luca', 'Irina', 'Lubomir', 'Dilyana', 'Helen', 'Rain', 'Gregor', 'Eva-Liisa', 'Maria', 'Goncalo', 'Lusi', 'Borislav',
//   'Oliver', 'Andre', 'Marten', 'Elizabeth', 'Katarina', 'Cvetomir', 'Ani'];

const Rsvp = ({ guests: { all = [], loading = false }, getGuests, upadteGuest }) => {
  useEffect(() => {
    getGuests();
  }, []);

  const [selected, setSelected] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selected.id && all.filter(g => selected.id === g.id).length) {
      upadteGuest(selected);
    } else {
      console.log('message "select your name first"', selected);
    }
    setSelected({});
  };

  return (
    <div className="rsvp tangerine size-x">
      <h2 className="">In order to participate, please add your name bellow</h2>
      <form onSubmit={handleSubmit} className="tabgerine">
        <Select
          size="large"
          className="select-name"
          showSearch
          value={selected.name}
          placeholder="Select your name"
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          onSelect={val => setSelected(all.find(g => g.id === val))}
        >
          {all.filter(g => g.coming === false).map(val => <Option key={val.id} value={val.id} className="tangerine">{val.name}</Option>)}
        </Select>
        <Button size="large" htmlType="submit" className="tangerine confirm-rsvp">Confirm</Button>
      </form>
      <div className="confirmed">
        <h2>Confirmed:</h2>
        <h3>
          {all.filter(g => g.coming === true).map((guest, index) => {
            const isLast = index === all.filter(g => g.coming === true).length - 1;
            return (<span key={guest.id} className="">{`${guest.name}${isLast ? '' : ', '}`}</span>);
          })}
        </h3>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  guests: state.guests
});

const mapDispatchToProps = {
  getGuests,
  upadteGuest
};

Rsvp.propTypes = {
  guests: PropTypes.shape({
    all: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
  getGuests: PropTypes.func.isRequired,
  upadteGuest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Rsvp);
