import IconEllipsis from "../images/icon-ellipsis.svg";

export function Card(props){
    return(
        <div className="card-container">
            <div className={`card-container-top ${props.color}`}>
                <img src={props.image} alt="IconWork"/>
            </div>
            <div className="card-container-bottom">
                <div className="card-container-bottom-title">
                    <span>{props.title}</span>
                    <img src={IconEllipsis} alt="IconEllipsis"/>
                </div>
                <div className="card-container-bottom-hours">{props.current}hrs</div>
                <div className="card-container-bottom-week">Last Week - {props.previous}hrs</div>
            </div>
        </div>
    )
}