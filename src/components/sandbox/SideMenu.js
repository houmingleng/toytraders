import {
    AppstoreOutlined, UserOutlined, RocketOutlined,TeamOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState,useEffect } from 'react';
import "./index.css"
import {useNavigate} from "react-router-dom";
import axios from "axios";
const {  Sider} = Layout;


const rootSubmenuKeys = ['sub0','sub1', 'sub2', 'sub3'];
const icons = {
    "sub0": <TeamOutlined />,
    "sub1":<UserOutlined />,
    "sub2":<AppstoreOutlined />,
    "sub3":<RocketOutlined />

};


export default function SideMenu(){
    const [menu , setmenu] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/page?_embed=children").then(res=>{
            console.log(res)
            setmenu(res.data)
        })
    },[])

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
                items={menu}

                on onClick={handleChangePage}

            />
        </Sider>
    );
}

