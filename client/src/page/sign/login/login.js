import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import './login.css';
import * as Util from '../../../comm/util.js'

import Form, { Item, GroupItem, Label } from 'devextreme-react/form';
import { Button } from 'devextreme-react/button';
import notify from 'devextreme/ui/notify';

function Login() {

    const [id, setId] = useState(null);
    const [password, setPassword] = useState(null);

    const setLogin = async (i_id, i_pw) => {
        const data = {
            user_id : i_id,
            user_password : i_pw
        }
        await axios.post("http://localhost:8080/api/login", data)
            .then((response)=> {
                console.log(response);
                //여기서 user_name 이 있으면 로그인 성공
                //없으면 Id와 pw 을 입력하세요 라는 문구 띄우기


            })
            .catch((error)=> {
                console.log(error);
            })
    }

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
        onValueChanged: (e) => {
            setId(e.value);
        },
    };

    const pwEditOption = {
        showClearButton : true,
        defaultValue : "",
        placeholder : "Enter Password",
        mode:"password",
        onValueChanged: (e) => {
            setPassword(e.value);
        },
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
                <Form labelMode={'outside'} elementAttr={{id: 'form'}} >
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
        console.log(buttonText);

        if(buttonText == "Login"){
            var i_id = id;
            var i_pw = password;
            console.log(i_id);
            console.log(i_pw);

            if(Util.gfnIsNull(i_id) == true){
                notify("id를 입력하세요.");
                return;
            } 
            if(Util.gfnIsNull(i_pw) == true){
                notify("password를 입력하세요.");
                return;
            } 
            setLogin(i_id, i_pw);

        } else if(buttonText == "Join"){
            notify("회원가입 페이지로 이동");

        }
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
