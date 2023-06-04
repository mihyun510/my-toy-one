import React, { Fragment, useState } from 'react';
import Drawer from 'devextreme-react/drawer';
import { Toolbar, Item } from 'devextreme-react/toolbar';
import HTMLReactParser from 'html-react-parser';
import Menu  from '../menu/menu.js';
import './frame.css';

function Frame() {

  const [opened, setOened] = useState(true);
  const [openedStateMode, setOpenedStateMode] = useState('shrink');
  const [revealMode, setRevealMode] = useState('slide');
  const [position, setPosition] = useState('left');

  const userName = () => {
    return (<>
              <div id="user_name">kim mi hyun</div>
            </>);
  }

  const userImg = () => {
    return (<>
              <div id="user_img"><img src='' alt='img'/></div>
            </>);
  }

  // function onOutsideClick() {}

  return (
    <Fragment>
      <Toolbar id='toolbar' >
        <Item 
          widget='dxButton'
          location='before'
          options= {{
            icon: 'menu',
            onClick: () => { setOened(!opened) }
          }}
        />
        <Item 
          widget='dxButton'
          location='before'
          options={{
            icon: 'home',
            onClick: () => { alert('go home !!') },
          }}
        />
        <Item 
          widget='dxTextBox'
          location='after'
          options={{
            //icon: 'Search',
            //placeholder:"Search",
            label:"Search",
            labelMode:"floating",
            onEnterKey: () => { alert('go serach !!') },
          }}
        />
        <Item 
          widget='dxButton'
          location='after'
          options={{
            icon: 'bell',
            onClick: () => { alert('bell!!') },
          }}
        />
        <Item 
          //widget: 'dxButton',
          location='after'
          render={userImg}
          //   icon: 'home',
          //   onClick: () => { alert('go home !!') },
          // },
        />
        <Item 
          //widget: 'dxButton',
          location='after'
          render={userName}
          //   icon: 'home',
          //   onClick: () => { alert('go home !!') },
          // },
        />
      </Toolbar>
      <Drawer
          opened={opened}
          openedStateMode={openedStateMode}
          position={position}
          revealMode={revealMode}
          component={Menu}
          //closeOnOutsideClick={onOutsideClick}
          height={'100%'}>
          <div id="content" className="rignt-contents">
            {HTMLReactParser("안녕하세요")}
          </div>
      </Drawer>
  </Fragment>
  );
}

export default Frame;