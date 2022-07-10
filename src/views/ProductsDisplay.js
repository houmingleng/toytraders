import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import ProductDisplay from "./ProductsDisplay/ProductDisplay";
import ProductUpdate from "./ProductsDisplay/ProductUpdate";
import Profile from "./ProductsDisplay/Profile";
import Home from "./Home/Home";
import { Layout} from 'antd';
import SideMenu from "../components/sandbox/SideMenu";
import TopHeader from "../components/sandbox/TopHeader";

const {  Content} = Layout;


export default function ProductsDisplay(){
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
                                <Route path="/home" element={<Home/>}   />
                                <Route path="/productDisplay" element={<ProductDisplay/>}   />
                                <Route path = "/profile" element = {<Profile/>}/>
                                <Route path="/productUpdate" element ={<ProductUpdate/>} />
                                <Route path="/" element={<Navigate to = "/home"/>} />
                            </Routes>

                    </Content>
                </Layout>
            </Layout>


        </div>
    )
}