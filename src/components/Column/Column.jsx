import Card from "../Card/Card"

function Column({title}){
    return(
        <div className="main__column column">
        <div className="column__title">
            <p>{title}</p>
        </div>
        <div className="cards">
           <Card name={'Название задачи'} theme={'Web Design'} date={'26.12.23'}/>
           <Card name={'Название задачи'} theme={'Research'} date={'01.01.23'}/>
        </div>
    </div>
    )
}
export default Column