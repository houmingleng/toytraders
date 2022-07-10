import {
    AppstoreOutlined, UserOutlined, RocketOutlined,TeamOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import "./index.css"
import {useNavigate} from "react-router-dom";
const {  Sider} = Layout;

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('Home', 'sub0', <TeamOutlined />, [
        getItem('Home Page', 'home'),
    ]),

    getItem('Profile', 'sub1', <UserOutlined />, [
        getItem('show Profile', 'profile'),

    ]),

    getItem('product display', 'sub2', <AppstoreOutlined />, [
        getItem('all product', 'productdisplay'),
    ]),


    getItem('product update', '/sub3', <RocketOutlined />, [
        getItem('product update one', 'productupdate'),
        getItem('Option 10', '10'),

    ]),
]; // submenu keys of first level

const rootSubmenuKeys = ['sub0','sub1', 'sub2', 'sub3'];


export default function SideMenu(props){
    const [collapsed] = useState(false);
    const [openKeys, setOpenKeys] = useState(['sub1']);
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);

        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);

        }

    };


    const navigate = useNavigate()
    const handleChangePage = (k)=>{
        navigate(k.key)

    }
    return(
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" >Toy Trade</div>
            <Menu
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                style={{
                    width: 210,
                }}
                items={items}
                on onClick={handleChangePage}

            />
        </Sider>
    );
}

