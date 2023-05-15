import React from 'react';
import TreeView from 'devextreme-react/tree-view';
import '../css/menu.css';
import { dt_menu } from '../../data/menu';

class Menu extends React.Component {
    constructor(props) {
      super(props);
      this.handleTreeViewSelectionChange = this.handleTreeViewSelectionChange.bind(this);
    }
  
    render() {
      return (
        <div className="container">
          <div className="left-content">
            <TreeView
              dataSource={dt_menu}
              selectionMode="single"
              selectByClick={true}
              onItemSelectionChanged={this.handleTreeViewSelectionChange}
            />
          </div>
          </div>
      );
    }
  
    handleTreeViewSelectionChange(e) {
      const countryData = e.itemData;
      if (countryData.cities) {
        this.setState({
          tabPanelIndex: 0,
          countryData: e.itemData,
          citiesData: countryData.cities,
        });
      }
    }
  }

  
  export default Menu;