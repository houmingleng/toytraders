import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Redirect from "../components/sandbox/Redirect";
import ProductDisplay from "./ProductsDisplay/ProductDisplay";
import ProductUpdate from "./ProductsDisplay/ProductUpdate";
import Profile from "./ProductsDisplay/Profile";
import Home from "./Home/Home";
import { Layout} from 'antd';
import SideMenu from "../components/sandbox/SideMenu";
import TopHeader from "../components/sandbox/TopHeader";
import Login from "./Login/Login";

const {  Content} = Layout;


export default function ProductsDisplay(){

    function AuthComponent({children}){
        const isLogin = localStorage.getItem("token")
        return isLogin?children:<Redirect to="/login"/>
    }

    return(
        <div>
            <Layout>
                <SideMenu/>

                <Layout className="site-layout">

                    <TopHeader/>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >

                            <Routes>
                                <Route path="/login" element={<Login/>}  />}
                                <Route path="/home" element={<AuthComponent><Home/></AuthComponent> }   />}
                                <Route path="/productDisplay" element={<ProductDisplay/>}   />}
                                <Route path = "/profile" element = {<AuthComponent><Profile/></AuthComponent> }/>}
                                <Route path="/productUpdate" element ={<AuthComponent><ProductUpdate/></AuthComponent>} />}
                                <Route path="/" element={<Redirect to = "/login"/>} />}
                            </Routes>

                    </Content>
                </Layout>
            </Layout>


        </div>
    )
}