import { Link, useParams } from "react-router-dom"
import { AppRoutes } from "../../lib/appRoutes"
import { deleteCard } from "../../api"
import { useUser } from "../../hooks/useUser"
import { Calendar } from "../Calendar/Calendar"
import { useState } from "react"

export const HeaderPopBrowse = ({ item }) => {

  return (<div className="pop-browse__top-block">
    <h3 className="pop-browse__ttl">Название задачи:{item.title}</h3>
    <div className="categories__theme theme-top _orange _active-category">
      <p className="_orange">Web Design</p>
    </div>
  </div>)
}
export const PopBrowse = ({ item, setCards, handleCloseModal }) => {
  const { userData } = useUser();
  const handleLogin = async (e) => {
    try {
      e.preventDefault()
      await deleteCard({ token: userData.token, id: item._id }).then((data) => {
        setCards(data.tasks)
        handleCloseModal()
      })
    } catch (error) {
      console.log(error.message)
    }

  }

  const modalForm = item

  const [modalData, setModalData] = useState(modalForm);
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setModalData({
      ...modalData,
      [name]: value,
    });
  };

  const handleCalendarChange =(value) =>{
    setModalData({
      ...modalData,
      date: value,
    });}
  return (<>
    <div className="pop-browse__status status">
      <p className="status__p subttl">Статус</p>
      <div className="status__themes">
        <div className="status__theme _hide">
          <p>{item.status}</p>
        </div>
        <div className="status__theme _gray">
          <p className="_gray">Нужно сделать</p>
        </div>
        <div className="status__theme _hide">
          <p>В работе</p>
        </div>
        <div className="status__theme _hide">
          <p>Тестирование</p>
        </div>
        <div className="status__theme _hide">
          <p>Готово</p>
        </div>
      </div>
    </div>
    <div className="pop-browse__wrap">
      <form
        className="pop-browse__form form-browse"
        id="formBrowseCard"
        action="#"
      >
        <div className="form-browse__block">
          <label htmlFor="textArea01" className="subttl">
            Описание задачи
          </label>
          <textarea
            className="form-browse__area"
            name="description"
            id="textArea01"
            readOnly=""
            placeholder="Введите описание задачи..."
            defaultValue={modalData.description}
            onChange={handleInputChange}
          />
        </div>
      </form>
      <Calendar selected={new Date(modalData.date)} setSelected={handleCalendarChange} />
    </div>
    {/* <div className="theme-down__categories theme-down">
      <p className="categories__p subttl">Категория</p>
      <div className="categories__theme _orange _active-category">
        <p className="_orange">Web Design</p>
      </div>
    </div> */}
    <div className="pop-browse__btn-browse ">
      <div className="btn-group">
        <button className="btn-browse__edit _btn-bor _hover03">
          <a href="#">Редактировать задачу</a>
        </button>
        <button
          className="btn-edit__delete _btn-bor _hover03"
          id="btnDelete"
          onClick={handleLogin}
        >
          Удалить задачу
        </button>
      </div>
      <button className="btn-browse__close _btn-bg _hover01" onClick={handleCloseModal}>
        Закрыть
      </button>
    </div>
  </>)
}