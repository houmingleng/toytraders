import React, {useState, useEffect, useRef } from "react";
import { Button, Form, Input, Select ,Steps, Upload} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './ProductUpdate.css'
import axios from "axios";
const { Step } = Steps;
const {Option} = Select;




export default function ProductUpdate() {
    const [current, setCurrent] = useState(0);
    const [newprice, setNewprice] = useState(0);
    const [categoryList, setCategoryList] = useState([]);
    const [productsList, setProductsList] = useState([]);
    const productsFrom = useRef(null)
    const [formstate , setformstate] = useState([])



    const handleNext = () => {
        if (current === 0) {
            productsFrom.current.validateFields().then(res => {
                setformstate(res)
                setCurrent(current + 1)
            }).catch(error => {
                console.log(error)
            })
        }
        if(current ===1){
            productsList.map(item=>{
                if(item.name === formstate.productname){
                    setNewprice(1)
                }
            })
            setCurrent(current + 1)
        }
         if(current === 2){
             console.log(newprice)
             productsFrom.current.validateFields().then(res => {
                 setformstate(res)
                 setCurrent(current + 1)
             }).catch(error => {
                 console.log(error)
             })
        }
    }

    const handleprevious = ()=>{setCurrent(current-1) }

    useEffect(()=>{
        axios.get("http://localhost:8000/categories").then(res=>{
            setCategoryList(res.data)
        })
    },[])
    useEffect(()=>{
        axios.get("http://localhost:8000/products").then(res=>{
            setProductsList(res.data);
        })
    },[])

    return(
        <div>
            <Steps current={current}>
                <Step title="product information update" description="name, collections." />
                <Step title="product picture"  description="submit the picture" />
                <Step title="new product" description="submit the price." />
                <Step title="submit the change" description="submit." />
            </Steps>
        <div >
            <div className={current === 0 ? ' ' : 'hidden'} style={{marginTop:"30px"}}  >

                <Form
                    name="basic"
                    labelCol={{
                        span: 5,
                    }}
                    wrapperCol={{
                        span: 9,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    ref={productsFrom}
                    autoComplete="off"
                >
                    <Form.Item
                        label="product name"
                        name="productname"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your product name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="product categories"
                        name="categories"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your product name!',
                            },
                        ]}
                    >
                        <Select>
                            {categoryList.map(item=> <Option value = {item.id} key={item.id}>{item.name}</Option>  )}
                        </Select>
                    </Form.Item>

                </Form>

            </div>
            <div className={current===1 ? ' ':'hidden'}>


            </div>
            <div className={current===2 && newprice === 0 ? ' ':'hidden'}>
                <Form.Item
                    label="sell price"
                    name="sellprice"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your sell price!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="lease price"
                    name="leaseprice"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your lease price!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

            </div>
            <div className={current===3 ? '  ':'hidden'}>


            </div>
    </div>
            <div style={{marginTop:"300px"}}>
                {
                    current ===3 && <span><Button type="primary">submit all</Button></span>
                }
                {
                    current<3  && <Button type="primary" onClick={handleNext}>next</Button>
                }
                {
                    current>0 && <Button onClick={handleprevious}>back</Button>
                }


            </div>
        </div>
    )
}