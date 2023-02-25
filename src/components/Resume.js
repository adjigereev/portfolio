import React, { Fragment } from 'react'
import { SiCodechef, SiHackerrank } from 'react-icons/si';

function Resume() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 bg-dark slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">Adjigereeev Djamal</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">Опыт</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Vector labs</h4>
                                <h6 className="blue-label px-2 py-1">Сентебрь 2021 - Декабрь 2021</h6>
                                <p className="m-0">Стажировка - backend разработчик</p>
                                <p>Стек во время стажировки: <br></br>Nodejs , Express, MongoDB, Postgressql</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Intense It</h4>
                                <h6 className="blue-label px-2 py-1">декабрь 2022 - Май 2022</h6>
                                <p className="m-0">Курс frontend разработчик</p>
                                <p>Стек во время обучения: <br></br> React, JS , Html, Css</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">mediann dev</h4>
                                <h6 className="blue-label px-2 py-1">Август 2022 - по настоящее</h6>
                                <p className="m-0"> frontend разработчик</p>
                                <p>Рабочий стек : <br></br> React, JS , Html, Css, Next js, React Native, TS</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        
                        <h4 className="ff-jose ls-2">Образования</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">СПО</h4>
                                <h6 className="blue-label px-2 py-1">2017 - 2021</h6>
                                <p className="m-0">Аграрно-Экономеческий колледж</p>
                                <p>г.Хасавюрт</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Дагестанский государственный университет</h4>
                                <h6 className="blue-label px-2 py-1">2021 - 2024</h6>
                                <p className="m-0">Специальность</p>
                                <p>Информационные системы и программирование</p>
                            </li>
                        </ul>

                    </div>
                </div>

                <hr></hr>
               
                
            </div>
        </div>
    </Fragment>
  )
}

export default Resume