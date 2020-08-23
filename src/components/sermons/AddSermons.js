import {useState,useRef,useContext,useEffect} from "react"
import {v4} from "uuid"
import {GlobalContext }from "../../context/MainContext"

function AddSermons(){
    const [title,setTitle]=useState("")
    const [author,setAuthor]=useState("")
    const [date,setDate]=useState("")
    const [message,setMessage]=useState("");
    const [succees,setSuccess]=useState("");
    const [error,setError]=useState("")
    const btn=useRef(null)
    const form=useRef(null)
  const {sermons,sendData}=useContext(GlobalContext)
    console.log('pefert',sermons)
    
    const handleSubmit=e=>{
        e.preventDefault();
        
        btn.current.disable=true
        if(date.length===0){
            setError("Please enter date")
            setTimeout(()=>setError(""),3000)
        }else if(date.trim().length>5 && message.trim().length>5 && title.trim().length> 5 && author.trim().length>5){
    //send to server
    const data={sermon_id:v4(),title, date, message,author}
    sendData(data)
            $.ajax({
        type:"POST",
        url:"./server/sermons/sermon.php?addSermon=true",
        data,
        dataType:"json"
    })
    .then(res=>{
  if(res.status==200){
      setSuccess(res.msg);
      sendData(data)
      setTimeout(()=>setSuccess(""),3000) 
      //clear form and state
      setTimeout(()=>{
        form.current.reset();
        btn.current.disable=false;
        setMessage("")
        setMessage("")
        setTitle("")
        setAuthor("")
    
    },
        3000)
    
  }else{
    setError(res.msg);
    setTimeout(()=>setError(""),3000) 
  }
    })
    .catch(err=>console.error(err));

        }
       
        console.log(title.trim().length,author.trim().length,date.trim().length,message.trim().length)
    }
    return(
        <div className="row">
            <div className="col-md-6 col-sm-12">
            <form className="form p-3 m-3" onSubmit={handleSubmit}  ref={form}>
            <p className="text-center alert alert-info p-3">Sermons/Words from pastor section.</p>
            <div className="form-group">
                <label className="label">Title</label>
                <input type="text" 
                placeholder="Enter "
                onChange={(e)=> e.target.value.length !==0 ? setTitle(e.target.value.trim()) : setTitle("")} required  className="form-control"/>
            </div>
            <div className="form-group">
                <label className="label">Pastor/Author</label>
                <input type="text" 
                placeholder="Enter "
                onChange={(e)=> e.target.value.length !==0 ? setAuthor(e.target.value.trim()) : setAuthor("")} required className="form-control date"/>
            </div>
            <div className="form-group">
                <label className="label">Date</label>
                <input type="date"
                 onChange={(e)=>setDate(e.target.value)} className="form-control"/>
            </div>
            <div className="form-group">
                <label className="label"></label>
                <textarea className="form-control"
                placeholder="Enter message " rows={4} cols={50}value={message} required 
                onChange={(e)=> e.target.value.trim().length !==0 ? setMessage(e.target.value) : setMessage("")}/>
            </div>
               <p className="text-danger">{error}</p>
            <p className="text-success">{succees}</p>
            <input type="submit" ref={btn} className="btn btn-block btn-primary"/>
        </form>
            </div>
            <div className="col-md-6 col-sm-12">
             {sermons.map(sermon=><Sermons key={sermon.sermon_id} {...sermon}/>)}
            </div>
            </div>
            
            
        
    )
}
export default AddSermons;


const Sermons=({title, message,date,f})=>(
    <div className="card">
        <h5 className="text-center">{title}</h5> 
        <span  className="text-danger float-right" onClick={f}>Delete</span>
        {message.split("  ").map((msg,i)=>{
            return(<p key={i}>{msg}</p>)
        })}
        <small>{new Date(date).toLocaleDateString()}</small>
        <hr className="divider"/>
        

    </div>
)