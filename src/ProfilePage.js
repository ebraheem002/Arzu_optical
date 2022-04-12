import React from "react";
function ProfilePage(){
    return(
        <div className="ProfleContainer">
            <div className="Right-p-side">
                <div className="The-profile-pic">
                <img src="https://picsum.photos/200" />
                </div>
                <div className="pInfo">
                <div className="infoDiv profileName"> 
                    <span className="eachinfo"> محمد خضير</span>
                </div>
                <div className="infoDiv phoneNumber">
                 رقم الهاتف :  
                    <span className="eachinfo">07701213138</span>
                </div>
                <div className="infoDiv addres">
                   العنوان : 
                    <span className="eachinfo"> الموصل </span>
                </div>
            </div>
            
                
                </div>
        </div>
    )
}

export default ProfilePage