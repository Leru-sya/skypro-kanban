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
                    id={item.id}
                    name={item.title} 
                    theme={item.theme} 
                    date={item.date} 
                    key={item.id} />
                ))}
            </CardsColumn>
        </MainColumn>
    )
}
export default Column