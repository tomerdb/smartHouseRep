import React,{useState} from 'react'
import {Link} from 'react-router-dom'

export default function AddRoom(props) {
    const [RoomName, setRoomName] = useState('');
    const [RoomColor, setRoomColor] = useState('white');
    const [Select, setSelect] = useState('')

    const valid = () => {
        if(Select===''||Select==='Choose New Room'||RoomName===''){
            alert('ERROR')
        }
        else{
            props.add(RoomName,RoomColor,Select,`/room${RoomName}`)
        }
    }
    return (
        <div>
            <form style={{marginTop:'50px'}}>
            <select className="select" onChange={(e)=>{setSelect(e.target.value)}}>
                <option>Choose New Room</option>
                <option>BedRoom</option>
                <option>Bathroom/toilet</option>
                <option>Kitchen</option>
            </select><br/>
            <input style={{padding:'5px 41px'}} type='text' maxLength='5' placeholder='         Room Name' onChange={(e)=>{setRoomName(e.target.value)}}/><br/>
            <input style={{padding:'5px 41px'}} type='text' placeholder='         Room Color' onChange={(e)=>{setRoomColor(e.target.value)}}/><br/>
            <Link to='/'><button style={{padding:'4px 94px'}} className="btn btn-primary" onClick={()=>{valid()}}>AddRoom</button></Link>
            </form>
        </div>
    )
}
