import React, { useState } from 'react';
import { Layout} from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined
} from '@ant-design/icons';
const {  Header, Avatar} = Layout;


export default function TopHeader(){
    const [collapsed,setCollapsed] = useState(false);




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

                <span>welcome</span>
    

            </div>
        </Header>

    )
}