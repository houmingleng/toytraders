/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Redirect({to}) {
    const navigate = useNavigate()
    useEffect(() => {
        navigate(to,{replace:true})   
    })
    return null
}
