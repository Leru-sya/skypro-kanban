import Card from "../Card/Card"
import { CardsColumn, ColumnP, ColumnTitle, MainColumn } from "./Column.styled"

function Column({ title, cardList }) {
    return (

        <MainColumn>
            {/* здесь был маинколомн и просто коломн,на что влияет? */}

            <ColumnTitle>
                <ColumnP>{title}</ColumnP>

            </ColumnTitle>

            <CardsColumn>
                {cardList.map((item) => (
                    <Card name={item.title} theme={item.theme} date={item.date} key={item.id} />
                ))}
            </CardsColumn>
        </MainColumn>
    )
}
export default Column