import { useState } from "react";
import { createTasks } from "../../api";
import { useUser } from "../../hooks/useUser";
import { Calendar } from "../Calendar/Calendar";

function PopNewCard({ addCard }) {

  const [selected, setSelected] = useState();
  const { userData } = useUser();
  const modalForm = {
    title: '',
    description: '',
    topic: '',
    status: "Без статуса",
    
  }
  const [modalData, setModalData] = useState(modalForm);
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setModalData({
      ...modalData,
      [name]: value,
    });
  };
  const handelSubmit = async (e) => {
    try {
      e.preventDefault()
      await createTasks({ token: userData.token, tasks: modalData }).then((data) => {
        addCard(data.tasks)
      })
    } catch (error) {
      console.log(error.message)
    }

  }
  return (
    <>
      <div className="pop-new-card__wrap">
        <form
          className="pop-new-card__form form-new"
          id="formNewCard"
          action="#"
        >
          <div className="form-new__block">
            <label htmlFor="formTitle" className="subttl">
              Название задачи
            </label>
            <input
              className="form-new__input"
              type="text"
              name="title"
              id="formTitle"
              placeholder="Введите название задачи..."
              autoFocus=""
              onChange={handleInputChange}
            />
          </div>
          <div className="form-new__block">
            <label htmlFor="textArea" className="subttl">
              Описание задачи
            </label>
            <textarea
              className="form-new__area"
              name="description"
              id="textArea"
              placeholder="Введите описание задачи..."
              onChange={handleInputChange}
            />
          </div>
        </form>
        
          <Calendar selected={selected} setSelected={setSelected}/>
        
      </div>
      <div className="pop-new-card__categories categories">
        <p className="categories__p subttl">Категория</p>
        <div className="categories__themes">
          <div className="status__theme _orange" style={modalData.topic === "Web Design" ? { color: '#FF6D00', border: '1px solid #FF6D00' } : {}} >
            <input type="radio" id="radio1" name="topic" onChange={handleInputChange} value="Web Design" className="hidden" />
            <label htmlFor="radio1">Web Design</label>
          </div>

          <div className="status__theme _green" style={modalData.topic === "Research" ? { color: '#06B16E', border: '1px solid #06B16E' } : {}} >
            <input type="radio" id="radio2" name="topic" onChange={handleInputChange} value="Research" className="hidden" />
            <label htmlFor="radio2">Research</label>
          </div>

          <div className="status__theme _purple" style={modalData.topic === "Copywriting" ? { color: '#9A48F1', border: '1px solid #9A48F1' } : {}} >
            <input type="radio" id="radio3" name="topic" onChange={handleInputChange} value="Copywriting" className="hidden" />
            <label htmlFor="radio3">Copywriting</label>
          </div>
        </div>
      </div>
      <button className="form-new__create _hover01" id="btnCreate" onClick={handelSubmit}>
        Создать задачу
      </button>
    </>
  )
}
export default PopNewCard