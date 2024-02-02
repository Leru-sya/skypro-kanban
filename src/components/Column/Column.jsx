import Card from "../Card/Card"
import { CardsColumn, ColumnP, ColumnTitle, MainColumn } from "./Column.styled"

function Column({ title, cardList }) {
    return (

        <MainColumn>
            

            <ColumnTitle>
                <ColumnP>{title}</ColumnP>

            </ColumnTitle>

            <CardsColumn>
                {cardList.map((item) => (
                    <Card 
                    id={item._id}
                    name={item.title} 
                    topic={item.topic} 
                    date={item.date} 
                    key={item._id} />
                ))}
            </CardsColumn>
        </MainColumn>
    )
}
export default Column