import React, { useState } from 'react';
import { Select, Button } from 'antd';

import 'antd/lib/select/style/index.css';
import 'antd/lib/button/style/index.css';
import 'antd/lib/grid/style/index.css';
import './Rsvp.css';

const { Option } = Select;

const data = ['Karine', 'Milena', 'Veselin', 'Pepi', 'Evelin', 'Aivar', 'Karin', 'Jaan', 'Erki', 'Angeli', 'Marko', 'Helena K-J', 'Ragnar', 'Grete', 'Ainika', 'Ilmar', 'Regina', 'Enn', 'Kristina', 'Raido', 'Tarvi', 'Diana', 'Kristel', 'Mati', 'Kati', 'Marek', 'Tiina',
  'Jeoren', 'Jesse', 'Rosalin', 'Kristjan', 'Merle', 'Helena L', 'Armen', 'Stanislav', 'Efkan', 'Nina', 'Arda', 'Luca', 'Irina', 'Lubomir', 'Dilyana', 'Helen', 'Rain', 'Gregor', 'Eva-Liisa', 'Maria', 'Goncalo', 'Lusi', 'Borislav',
  'Oliver', 'Andre', 'Marten', 'Elizabeth', 'Katarina', 'Cvetomir', 'Ani'];

const Rsvp = () => {
  const [selected, setSelected] = useState('');
  const [guests, setGuests] = useState(data);
  const [coming, setComing] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!coming.includes(selected) && selected.trim().length) {
      setComing([...coming, selected]);
      setSelected('');
    }
    setGuests(guests.filter(el => el !== selected));
    return true;
  };

  return (
    <div className="rsvp tangerine">
      <h3 className="">In order to participate, please add your name bellow</h3>
      <form onSubmit={handleSubmit} className="tabgerine">
        <Select
          size="large"
          className="select-name"
          showSearch
          value={selected}
          placeholder="Add your name"
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          onSelect={val => setSelected(val)}
        >
          {guests.map(val => <Option key={val} value={val} className="tangerine">{val}</Option>)}
        </Select>
        <Button size="large" htmlType="submit" className="tangerine confirm-rsvp">Confirm</Button>
      </form>
      <div className="confirmed">
        <h3>Confirmed:</h3>
        <p>
          {coming.map((name, index) => {
            const isLast = index === coming.length - 1;
            return (<span key={name} className="">{`${name}${isLast ? '' : ', '}`}</span>);
          })}
        </p>
      </div>
    </div>
  );
};

export default Rsvp;
