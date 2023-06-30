import React, { Fragment } from 'react'
import { GrPrevious, GrNext } from 'react-icons/gr';
import { BsLaptop } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

function MyWork() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">Проекты</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-4 text-center my-2">      
                        <div id="carouselExampleControls1" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/news.png" className="d-block w-100" alt="..."/>
                                </div>
                                {/* <div className="carousel-item">
                                <img src="../portfolio-images/w-02.png" className="d-block w-100" alt="..."/>
                                </div> */}
                                {/* <div className="carousel-item">
                                <img src="../portfolio-images/w-03.png" className="d-block w-100" alt="..."/>
                                </div> */}
                            </div>
                            {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button> */}
                        </div>
                            <h5 className="ff-jose my-1">Новосной блок</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://react-redux-mu-murex.vercel.app/" 
                                className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" 
                                target="_blank"><BsLaptop/> Превью</a>
                                {/* <a href="https://github.com/Yagnik-Gohil/Weather"
                                 className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"
                                  target="_blank"><AiFillGithub/> Source Code</a> */}
                            </div>

                    </div>
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls2" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/gamestore.png" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button> */}
                        </div>
                        <div>
                            <h5 className="ff-jose my-1">Магазин игр</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://react-redux-gamestore.vercel.app/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><BsLaptop/>Превью</a>
                                {/* <a href="https://github.com/Yagnik-Gohil/MovieHunt" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub/> Source Code</a> */}
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls3" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/react-block.png" className="d-block w-100" alt="..."/>
                                </div>
                                {/* <div className="carousel-item">
                                <img src="../portfolio-images/n-02.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/n-03.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/n-04.png" className="d-block w-100" alt="..."/>
                                </div> */}
                            </div>
                            {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button> */}
                        </div>
                            <h5 className="ff-jose my-1">Блог</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://react-blog-dun.vercel.app/blog"
                                 className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" 
                                 target="_blank"><BsLaptop/> Превью</a>

                            </div>
                        
                    </div>
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls4" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/l.png" className="d-block w-100" alt="..."/>
                                </div>
                                {/* <div className="carousel-item">
                                <img src="../portfolio-images/solo-02.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/solo-03.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/solo-04.png" className="d-block w-100" alt="..."/>
                                </div> */}
                            </div>
                            {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button> */}
                        </div>
                            <h5 className="ff-jose my-1">games </h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://games-gules-zeta.vercel.app/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><BsLaptop/> Превью</a>
                                {/* <a href="https://github.com/Yagnik-Gohil/Solo" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub/> Source Code</a> */}
                            </div>
                        
                    </div>
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls5" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/w.png" className="d-block w-100" alt="..."/>
                                </div>
                                {/* <div className="carousel-item">
                                <img src="../portfolio-images/resume-2.jpg" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/resume-3.jpg" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/resume-4.jpg" className="d-block w-100" alt="..."/>
                                </div> */}
                            </div>
                            {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button> */}
                        </div>
                            <h5 className="ff-jose my-1">Прогноз погоды</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://weatherapp-one-vert.vercel.app/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><BsLaptop/> Превью</a>
                                {/* <a href="https://github.com/Yagnik-Gohil/Resume-Builder" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub/> Source Code</a> */}
                            </div>
                        
                    </div>
                    <div className="col-md-4 text-center my-2">   
                        <div id="carouselExampleControls6" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/r.png" className="d-block w-100" alt="..."/>
                                </div>
                                {/* <div className="carousel-item">
                                <img src="../portfolio-images/tour-02.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/tour-03.jpg" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/tour-04.jpg" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/tour-05.jpg" className="d-block w-100" alt="..."/>
                                </div> */}
                            </div>
                            {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls6" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls6" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button> */}
                        </div>
                            <h5 className="ff-jose my-1">Сайт ресторана</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://layoutsecond.vercel.app/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><BsLaptop/> Превью</a>
                                {/* <a href="https://github.com/Yagnik-Gohil/Natours" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub/> Source Code</a> */}
                            </div>
                        
                    </div>
                    <div className="col-md-4 text-center my-2">   
                        <div id="carouselExampleControls6" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/u.png" className="d-block w-100" alt="..."/>
                                </div>
                                {/* <div className="carousel-item">
                                <img src="../portfolio-images/tour-02.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/tour-03.jpg" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/tour-04.jpg" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/tour-05.jpg" className="d-block w-100" alt="..."/>
                                </div> */}
                            </div>
                            {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls6" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls6" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button> */}
                        </div>
                            <h5 className="ff-jose my-1">Сайт</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://layoutfirst.vercel.app/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><BsLaptop/> Превью</a>
                                {/* <a href="https://github.com/Yagnik-Gohil/Natours" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub/> Source Code</a> */}
                            </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default MyWork