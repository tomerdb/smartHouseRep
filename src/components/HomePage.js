import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage(props) {
    return (
        <div className='App row'>
            <div style={{marginTop:'20px'}} className='col-12'>
            {props.rooms.map((e)=>{
                return <Link to={`/room${e.Name}`}><button style={{backgroundColor:e.Color,borderRadius:'12px',padding:'20px 25px',marginLeft:'8px',fontSize:'23px',fontWeight:'bold'}}>{e.Name}</button></Link>
            })}
            </div>
            <div className='col-12'>
        <Link to='/addroom'><button className='homePageButton'></button></Link>
            </div>
        </div>
    )
}
