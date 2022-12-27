import Typewriter from "typewriter-effect";
import Favicon from '../componentes/Favicon.png'
import Keyner from '../img/ko.jpg'
import Arduino from '../img/Arduino-logo.png'
import luna from '../img/luna.jpg'
import atardecer from '../img/atardecer.jpg'
import Linked from '../img/linked.svg'
import Facebook from '../img/facebook.svg'
import Instagram from '../img/instagram.svg'
import Github from '../img/githu.svg'
import Kairos from '../img/logo-kairos-2.svg'


export const Body = () => {
    return (<>
        {/* 
          como hacer un menos de wikipedia
        <a href='#ultimo'>
            <p>quien soy ?</p>
            </a>
        <h1 id='ultimo'>hello people como ta ?</h1> */}
        <Nav />
        <div className=''>
            <Contenedor />
        </div>


    </>)
}


const Nav = () => {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <img src={Favicon} className="mx-2 rounded" alt='logo' />
                <a class="navbar-brand" href="#">Portafolio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto px-2">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Desarrollo Web</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Emprendimiento</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Ruta-Experiencia</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled">Acerca de</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </>)
}

const Contenedor = () => {
    return (<>
        <Presentacion />
        <Carrusel />
    </>)
}

const Presentacion = () => {
    return (<>
        <div className='row'>
            <div className='col-md-6 p-5 row grid'>
                <div className='col-md-6 col-sm-12 text-center'>
                    <img src={Keyner} alt='No t la foto :/' className='img-fluid rounded-circle border border-secondary' width={'200px'} />
                </div>
                <div className='col-md-6 mt-5 text-center'>

                    <h2 className='H'>My nomre es :</h2>
                    <h3>Keyner oswaldo de la hoz hincpie</h3>

                    {/* <h2 className='H'>My nomre es <br/><span className='typed'></span></h2> */}
                </div>
            </div>
            <div className='col-ms-12 col-md-6 col-lg-6 col-xl-6 text-center'>
                {/* <h1 className='K'>Conocimientos en diferentes areas como :</h1>
                <h3>Arduino</h3> */}
                <h1 className='K'>Conocimientos en diferentes areas como : </h1>
                <h2 className="K T">
                    <Typewriter
                    
                        options={{
                            strings: [
                                'Arduino',
                                'Corte Laser',
                                'Diseño Laser',
                                'Diseño 3D',
                                'Impresion 3D',
                                'Programacion Basica'
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    </h2>
                <div className="App">
                    {/* <Typewriter

                        onInit={(typewriter) => {

                            typewriter

                                .typeString("GeeksForGeeks")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("keyner")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("oswaldo")
                                .pauseFor(1000)
                                .deleteAll()
                                .start();
                        }}
                    /> */}
                </div>
            </div>
        </div>
        <div className='con rounded '>
            <div className='container mt-3 p-0'>
                <Servicios />
            </div>
        </div>
    </>)
}

const Servicios = () => {
    return (<div className='text-center'>
        <div>
            <h2>Servicios</h2>
            <p className='px-5 mx-auto col-md-6'>Cuento con un gran amplio recorrido de aprendizaje, gracias a eso tengo conocimientos en varias areas algunas de estas son :</p>
        </div>
        <div className='p d-grid' >
            <Dato name='Arduino' />
            <Dato name='Corte Laser' />
            <Dato name='Diseño 3D' />
            <Dato name='Programacion Basica' />
            <Dato name='Diseño Laser' />
            <Dato name='Imprecion 3D' />
        </div>
    </div>)
}

const Dato = ({ name }) => {
    return (<>
        <div className='row veo p-1 ma' id='K'>
            <div className=' veo col-md-4 d-flex align-items-center justify-content-center'>
                <img src={Arduino} alt="logo de Arduino" className='img-fluid bg-white rounded-circle' />
            </div>
            <div className='veo col-md-8 px-2'>
                <h4>{name}</h4>
                <p>Plataforma en la cual e desarrollados varios proyectos como estos</p>
            </div>
        </div>
    </>)
}

const Carrusel = () => {
    return (<div>
        <div id="carouselExampleCaptions" className="carro carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={luna} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={atardecer} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                {/* <div className="carousel-item">
                    <img src={luna} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                </div> */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    </div>)
}

export const Pie = () => {
    return (<>
        <footer className="site-footer bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>Acerca de</h6>
                        <p className="text-justify">Hola soy <i>KEYNER DE LA HOZ</i> actualmente tengo 17 años y cuento con un largo recorrido de aprendizzaje, entre los cuales tengo conocimientos en diferentes lenguajes de programacioncomo son: C++, Javascrip, C#, Kotlin manejos de lenguaje de marcado como lo es HTML, lenguaje de diseño como lo es CSS y conocimiento en bibliotecas como lo es React, Bootstrap entre otras....</p>
                    </div>

                    <div className="col-xs-6 col-md-3 p-1">
                        <h6>Categories</h6>
                        <ul className="footer-links">
                            <li><a href="http://scanfcode.com/category/c-language/" className='nav-link'>Arduino</a></li>
                            <li><a href="http://scanfcode.com/category/android/" className='nav-link'>Diseño Laser</a></li>
                            <li><a href="http://scanfcode.com/category/front-end-development/" className='nav-link'>Corte Laser</a></li>
                            <li><a href="http://scanfcode.com/category/back-end-development/" className='nav-link'>Diseño 3D</a></li>
                            <li><a href="http://scanfcode.com/category/java-programming-language/" className='nav-link'>Impresión 3D</a></li>
                            <li><a href="http://scanfcode.com/category/templates/" className='nav-link'>Programacion en diferentes lenguajes</a></li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Mas contemido:</h6>
                        <ul className="footer-links">
                            <li><a href="http://scanfcode.com/about/" className='nav-link'>Desarrollo Web</a></li>
                            <li><a href="http://scanfcode.com/contact/" className='nav-link'>Emprendimiento</a></li>
                            <li><a href="http://scanfcode.com/contribute-at-scanfcode/" className='nav-link'>Ruta Aprendizaje</a></li>
                            <li><a href="http://scanfcode.com/sitemap/" className='nav-link'>Experiencia</a></li>
                            <li><a href="http://scanfcode.com/privacy-policy/" className='nav-link'>Proyectos</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Ko &copy; 2023 Todos los derechos reservados por
                            <a className='nav-link' href="#"> Keyner Oswaldo Dela hoz Hincapie</a>.
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><a className="facebook" href="#"><i className="fa fa-facebook">
                                <img src={Facebook} alt=".." />
                            </i></a></li>
                            <li><a className="twitter" href="#"><i className="fa fa-twitter">
                                <img src={Github} alt=".." />
                            </i></a></li>
                            <li><a className="dribbble" href="#"><i className="fa fa-dribbble">
                                <img src={Instagram} alt=".." />
                            </i></a></li>
                            <li><a className="linkedin" href="#"><i className="fa fa-linkedin">
                                <img src={Linked} alt=".." />
                            </i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>)
}
