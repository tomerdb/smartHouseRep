import React,{useState} from 'react'

export default function AddProduct(props) {
const [Product, setProduct] = useState('')
    const valid1 = () =>{

        var counter2 = props.product2.map((e)=>{
            var counter2 = 0;
            if(e.name==props.name&&e.select=='Stereo'){
                counter2++
            }
            return counter2
        })
        var counter = props.product2.map((e)=>{
            var counter = 0;
            if(e.name==props.name){
                counter++
            }
            return counter
        })
        var Newcounter2=counter2.reduce((a, b) => a + b, 0)
        var Newcounter=counter.reduce((a, b) => a + b, 0)
        if(Product!='' && Product!='Choose Product'){
            if(Newcounter2<1&&Newcounter<5){
    
                props.product(Product,props.name,'red')
                props.ChangeFlag()
            }
            else if(Newcounter2==1&&Newcounter<5&&Product!='Stereo'){
                props.product(Product,props.name,'red')
                props.ChangeFlag()
            }
            
            else{
                alert('Error')
                props.ChangeFlag()
            }
        }
        else{
            alert('Error')
            props.ChangeFlag()
        }
    }


 const show = ()=>{
        if(props.type=='Bathroom/toilet'){
            return<div>
            <select className='select' onChange={(e)=>{setProduct(e.target.value)}}>
            <option>Choose Product</option>
            <option>Heater</option>
            <option>Ac</option>
            <option>Stereo</option>
            <option>Light</option>
            </select>
            <button style={{padding:'11px 25px',marginBottom:'4px'}} className="btn btn-primary" onClick={()=>{valid1()}}>Add</button>
            </div>
        }
        else{
            return <div>
            <select className='select' onChange={(e)=>{setProduct(e.target.value)}}>
            <option>Choose Product</option>
            <option>Ac</option>
            <option>Stereo</option>
            <option>Light</option>
            </select>
            <button style={{padding:'10px 30px',marginBottom:'4px'}} className="btn btn-primary" onClick={()=>{valid1()}}>Add</button>
            </div>
        }   
     }
    
    return (
        <div>
            {show()}
        </div>
    )
}
