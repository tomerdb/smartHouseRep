import React,{useState} from 'react'
import AddProduct from './AddProduct'
import {Link} from 'react-router-dom'

export default function Room(props) {
    const [Flag, setFlag] = useState(false)
    const [Red, setRed] = useState('red')
    const [Green, setGreen] = useState('green')
    const show = () => {
        if(props.flag==true){
            return <AddProduct ChangeFlag={props.Changeflag} type={props.type} product={props.product} name={props.name} product2={props.product2}/>
        }
    }
    

    return (
        <div className='row'>
            <div style={{marginTop:'30px',textAlign:'left'}} className='roomHead col-12'>
           <h4 className="roomHead">Room Name:  {props.name}</h4>
           <h4 className="roomHead">Room Type:  {props.type}</h4>
            </div>
            <div style={{marginTop:'50px'}} className='roomButtons col-12'>

           {props.product2.map((e,index)=>{
               if(e.name==props.name){
                   return <button onClick={()=>{props.color(index)}} style={{backgroundColor:props.product2[index].color,padding:'10px 40px',fontWeight:'bold',marginLeft:'7px',marginTop:'10px'}}>{e.select}</button>
                }
            })}
            </div>
            <div className='col-12' style={{marginTop:'50px'}}>
            <button className='col-12' style={{padding:'8px 25px',marginBottom:'10px'}} className="btn btn-primary" onClick={()=>{props.Changeflag()}}>Add Product</button>
           {show()}
           </div>
           <div className='col-12'>
           <Link to='/' className='btn btn-secondary' style={{padding:'8px 25px',marginTop:'70px'}}>Back</Link>
           </div>
        </div>
    )
}
