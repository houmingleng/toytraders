import React, { useState } from 'react';
import {Button, Layout} from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined
} from '@ant-design/icons';
import {useNavigate} from "react-router-dom";
const {  Header, Avatar} = Layout;




export default function TopHeader(){
    const [collapsed,setCollapsed] = useState(false);
     const navigate = useNavigate()

    function jsondeliver(){
        if(localStorage === null){
            return JSON.parse(localStorage.getItem("token"))
        }else{
            navigate("/login")
        }
    }

    function logout(){
        localStorage.removeItem("token")
          navigate("/login")
    }
    const username = jsondeliver.username
    return(

        <Header
            className="site-layout-background"
            style={{
                padding: '0 16px',
            }}
        >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
            })}

            <div style = {
                {float:"right"}
            }>

                <span>welcome {username }</span>
                <Button onClick={logout}>log out</Button>

            </div>
        </Header>

    )
}