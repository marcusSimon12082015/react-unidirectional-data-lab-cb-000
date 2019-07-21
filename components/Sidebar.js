'use strict'

import React from 'react';
import SidebarItem from './SidebarItem';

export default class Sidebar extends React.Component {
  handleClick(index, ev) {
    ev.preventDefault();
    this.props.onSelect(0);
  }
  render() {
    const { files, selectedFileIndex, onAdd } = this.props;
    let sidebarItems = '';
     if (files.length > 0){
       sidebarItems = files.map((file,i) =>
         <SidebarItem key={i} file={file} isSelected={selectedFileIndex === i ? true : false} onClick={this.handleClick} />)
     }
    return (
      <ul className="sidebar">
      {sidebarItems}
      </ul>
    );
  }
}
