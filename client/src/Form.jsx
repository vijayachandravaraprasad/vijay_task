import React from "react";


 export default   function Sampleform (){
    const resForm =()=>{
        
    }
    return (
        <div className="formPage">
            <fieldset>
            <legend> sample data: </legend>
                <form onSubmit={resForm}><br />
                <div>
                <label>name:</label>    
                <input type="text" name="name"/>
                <br /><br />
                <label>password:</label>    
                <input type="password" name="password"/>
                <br /><br />
                <button className="btnForm">Submit</button>
                </div>
                
                
                </form>
            </fieldset>
                
            
        </div>
    )
}
