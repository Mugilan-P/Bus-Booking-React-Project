import { color } from '@mui/system'
import './profile.css'
function Profile()
{
    return(
        <div >

            <div className="card p-3">

                <div className=" align-items-center">

                    <div className="image">
                <img src="https://i.pinimg.com/236x/8b/84/6f/8b846fefdc265bc26e7480e7ddc01225.jpg" className="rounded" style={{width:"155"}}/ >
                </div>

                <div className="ml-3 w-100">
                    
                   <h4 >Name:</h4>
                   <h6  style={{color:"blue"}}>Nagarjun</h6>
                   <span>Job:</span><br/>
                   <span style={{color:"blue"}} >Manager</span>

                   <div cclassNamelass="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">

                    <div className="d-flex flex-column">

                        <span className="articles">Busses Booked:</span>
                        <span className="number1" style={{color:"blue"}}>30</span>
                        
                    </div>

                    <div className="d-flex flex-column">

                        <span className="followers">email:</span>
                        <span className="number2" style={{color:"blue"}}>naga@gmail.com</span>
                        
                    </div>


                    <div className="d-flex flex-column">

                        <span className="rating">Rating given:</span>
                        <span className="number3" style={{color:"blue"}}>8.9</span>
                        
                    </div>
                       
                   </div>


                   <div className="button mt-2 d-flex flex-row align-items-center">

                    {/* <button className="btn btn-sm btn-outline-primary w-100">Chat</button> */}
                    <button className="btn btn-sm btn-primary  ml-2">Edit Profile</button>

                       
                   </div>


                </div>

                    
                </div>
                
            </div>
             
         </div>
    )
}
export default Profile