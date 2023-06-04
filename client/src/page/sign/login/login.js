import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";
import './login.css';
import Form, { Item, GroupItem, Label } from 'devextreme-react/form';
import { Button } from 'devextreme-react/button';
import notify from 'devextreme/ui/notify';

function Login() {

    
    const joinHtml = () => {
        return (<>
                    <Link to={{ pathname: `/join`}} >
                        <div id="user_name" className="static01">Find ID/Password</div>
                    </Link>
                </>);
    };

    const idEditOption = {
        showClearButton : true,
        defaultValue : "",
        placeholder : "Enter ID",

    };

    const pwEditOption = {
        showClearButton : true,
        defaultValue : "",
        placeholder : "Enter Password",
        mode:"password",
    };

    const checkBoxOptions = {
        text: 'ID 저장하기',
        value: false,
        onValueChanged: (e) => {
            //여기서 쿠키 생성
        },
    };


    return (
        <Fragment>
            <div className='outer_div'>
                <div className='login_static'>Login</div>
                <Form labelMode={'outside'} >
                    <GroupItem colCount={1}>
                        <Item dataField="user_id" editorType="dxTextBox" editorOptions={idEditOption} >
                            <Label text="ID" />
                        </Item>
                        <Item dataField="user_pw" editorType="dxTextBox" editorOptions={pwEditOption} >
                        <Label text="Password" />
                        </Item>
                    </GroupItem>
                </Form>
                <div className='middle_div'>
                    <Form>
                        <GroupItem colCount={2}>
                            <Item location='before' editorType="dxCheckBox" editorOptions={checkBoxOptions} />
                            <Item location='after' render={joinHtml} />
                        </GroupItem>
                    </Form>
                </div>
                <div className='bottom_div'>
                    <Button
                    width={'100%'}
                    text="Login"
                    type="success"
                    stylingMode="contained"
                    elementAttr={{class: 'btn_login'}}
                    onClick={onClick}
                    />
                    <Button
                    width={'100%'}
                    text="Join"
                    type="default"
                    stylingMode="contained"
                    onClick={onClick}
                    />
                </div>
            </div>
        </Fragment>
    );
    
    function onClick(e) {
        const buttonText = e.component.option('text');
        notify(buttonText);
    }

    // function onContentReady(e){
    //     //쿠키체크 > 아이디 저장 체크되어있으면 값 넣어주기
    //     if(getCookie("loginId")){
    //         //console.log("getCookie(loginId): ", getCookie("loginId"));
    //         $("#login_id_textBox").dxTextBox("instance").option('value',getCookie("loginId"));
    //         $("#chk_save_id").dxCheckBox("instance").option("value",true);
    //         $("#login_pw_textBox").dxTextBox("instance").focus();
    //     }else{
    //         $("#chk_save_id").dxCheckBox("instance").option("value",false);
    //         $("#login_id_textBox").dxTextBox("instance").focus();
    //     }   
    // }
}

export default Login;
