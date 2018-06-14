import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import shopData from './data';
import AutoComplete from 'react-autocomplete';

class App extends Component {
  render() {
    const shopDetail = ({ match }) => {
      const shopKey = match.params.shop;
      const shop = shopData[shopKey];
      return (
        <div id={shopKey} className="item">
          <h1>{shop.chtName}</h1>
          <p>{shop.bnhName}: <a href={`tel:${shop.tel}`}>{shop.tel}</a></p>
          <div className="menu">
            <img src={shop.menuSrc} />
          </div>
        </div>
      );
    };
    return (
      <Router>
        <div>
          <nav className="navigator">
            <ul>
              {Object.keys(shopData).map(shopKey => (
                <li><Link to={'/' + shopKey}>{shopData[shopKey].chtName}</Link></li>
              ))}
            </ul>
          </nav>
          <div className="stage">
            <AutoComplete
              getItemValue={(item) => item.label}
              items={[
                { label: 'apple' },
                { label: 'banana' },
                { label: 'pear' }
              ]}
              renderItem={(item, isHighlighted) =>
                <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                  {item.label}
                </div>
              }
              // value={value}
              // onChange={(e) => value = e.target.value}
              // onSelect={(val) => value = val}
            />
            <Route path="/:shop" component={shopDetail} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
