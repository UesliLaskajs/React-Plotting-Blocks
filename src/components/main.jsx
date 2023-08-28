import './main.css'
const Main=(prop)=>{
    return(
        <div className="main">
            <div className="childreen">{prop.children}</div>
        </div>
    )
}

export default Main;