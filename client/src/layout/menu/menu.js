//import React from 'react';
import React, { useState, useEffect } from 'react';
import TreeView from 'devextreme-react/tree-view';
import './menu.css';
import { dt_menu } from '../../data/menu';

export default function Menu() {

  const [menuId, setMenuId] = useState('');

  // useEffect( () => {
  //   if(menuId) {
  //     setMenuId(menuId) 
  //     alert("useEffect"+menuId);
  //   }  
  // }, [menuId]);

  const handleTreeViewSelectionChange = (e) => {
    const menuData = e.itemData;
    if(menuData.id == menuId) return;
    if(menuData.parentId == undefined || menuData.parentId == null) {
      setMenuId(menuData.id);
      return;
    }
    setMenuId(menuData.id);
    //여기서 업무화면 넣기
    //alert("useState"+menuData.id);
  }

  return (
    <div className="container">
      <div className="left-content">
        <TreeView
          dataStructure="plain"
          dataSource={dt_menu}
          selectionMode="single"
          selectByClick={true}
          onItemSelectionChanged={handleTreeViewSelectionChange}
        />
      </div>
    </div>
  );


}