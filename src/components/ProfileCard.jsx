import ImageJeremy from "../images/image-jeremy.png"

export function ProfileCard(){
    return(
        <div className="profile-card-container">
            <div className="profile-card-top">
                <img src={ImageJeremy} alt="jeremy-profile"/>
                <p>Report for</p>
                <h2>Jeremy Robson</h2>
            </div>
            <div className="profile-card-bottom">
                <span>Daily</span>
                <span className="profle-card-weekly">Weekly</span>
                <span>Monthly</span>
            </div>
        </div>
    )
}