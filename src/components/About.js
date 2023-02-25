import React, { Fragment } from 'react'

function About() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center about-image"> 

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div>
                            <h1 className="font-big text-red slide-in-top">Обо мне </h1>
                            <hr></hr>
                            <p className='slide-in-bottom'>Full stack developer
                            </p>
                            <p className='slide-in-bottom'>
                                Занимаюсь веб разработкой на профессиоанльном более 2-х лет <br></br>
                              
                            </p>
                            <p className='slide-in-bottom'>
                                Работаю Full stack веб-разработчиком<br></br>
                                Технологии с которыми работаю  : <span className="text-red ls-2">React , TS , Node js <br></br>
                                 Sql, Express, Tailwindcss, Html, Css, Js, Bootstrap, Next </span>
                            </p>
                            <p className='slide-in-bottom'>
                               
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-fluid" src="../images/nomad-amico.png" alt="..."></img>
                    </div>



                </div>
            </div>

            
        </div>
    </Fragment>
  )
}

export default About