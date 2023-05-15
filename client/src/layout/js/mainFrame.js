import React from 'react';
import Drawer from 'devextreme-react/drawer';
import Toolbar from 'devextreme-react/toolbar';
import HTMLReactParser from 'html-react-parser';
import Menu  from './menu.js';
import '../css/mainFrame.css';

//import { dt_menu } from '../data/menu';

class MainFrame extends React.Component {
    constructor() {
        super();
    
        this.state = {
          opened: true,
          openedStateMode: 'shrink',
          revealMode: 'slide',
          position: 'left',
        };
    
        this.toolbarItems = [{
          widget: 'dxButton',
          location: 'before',
          options: {
            icon: 'menu',
            onClick: () => this.setState({ opened: !this.state.opened }),
          },
        }];
    
        this.onOpenedStateModeChanged = this.onOpenedStateModeChanged.bind(this);
        this.onRevealModeChanged = this.onRevealModeChanged.bind(this);
        this.onPositionChanged = this.onPositionChanged.bind(this);
        this.onPositionChanged = this.onPositionChanged.bind(this);
        this.onOutsideClick = this.onOutsideClick.bind(this);
    }

    onOpenedStateModeChanged({ value }) {
    this.setState({ openedStateMode: value });
    }

    onRevealModeChanged({ value }) {
    this.setState({ revealMode: value });
    }

    onPositionChanged({ value }) {
    this.setState({ position: value });
    }

    onOutsideClick() {
    this.setState({ opened: false });
    }

    render() {
        const { opened, openedStateMode, position, revealMode } = this.state;
    
        return (
          <React.Fragment>
            <Toolbar items={this.toolbarItems } />
            <Drawer
                opened={opened}
                openedStateMode={openedStateMode}
                position={position}
                revealMode={revealMode}
                component={Menu}
                closeOnOutsideClick={this.onOutsideClick}
                height={400}>
                <div id="content" className="rignt-contents">
                  {HTMLReactParser("안녕하세요")}
                </div>
            </Drawer>
        </React.Fragment>
        );
    }
}

  
  export default MainFrame;