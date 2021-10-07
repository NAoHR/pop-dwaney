const TopTitle = (props) =>{
    return (
        <div className="toptitle">
            <h1 className="title">Pop Dwaney johansohn</h1>
            <h1 className="title" id="counter">{props.nowNumber}</h1>
        </div>
    )
}
export default TopTitle;