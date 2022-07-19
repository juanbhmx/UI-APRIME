import Screen from '../assets/img/tl.jpg'
import Description from './_Description';
import { User, Grid } from "@nextui-org/react";

function SideNav() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-auto colorsidenav sticky-top d-flex align-items-start'>
                        <div className='d-flex flex-sm-column flex-row flex-nowrap colorsidenav align-items-center sticky-top'>
                            <div className='d-flex perfiluser'>
                            <Grid.Container gap={2}>
                                <Grid>
                                    <User
                                        bordered
                                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                                        color="error"
                                    />
                                </Grid>
                            </Grid.Container>
                            </div>
                            <ul className='nav nav-pills nav-flush flex-sm-column colorsidenav flex-row flex-nowrap mb-auto mx-auto text-center justify-content-between w-100 px-3 align-items-center'>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link py-3 px-2' title='' data-bs-toggle='tooltip' data-bs-placement='right' data-bs-original-title='Home'>
                                        <i className="bi bi-search fs-1"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' className='nav-link py-3 px-2' title='' data-bs-toggle='tooltip' data-bs-placement='right' data-bs-original-title='Dashboard'>
                                        <i className="bi bi-house-door fs-1"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' className='nav-link py-3 px-2' title='' data-bs-toggle='tooltip' data-bs-placement='right' data-bs-original-title='Orders'>
                                        <i className="bi bi-bag fs-1"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' className='nav-link py-3 px-2' title='' data-bs-toggle='tooltip' data-bs-placement='right' data-bs-original-title='Products'>
                                        <i className="bi bi-tv fs-1"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' className='nav-link py-3 px-2' title='' data-bs-toggle='tooltip' data-bs-placement='right' data-bs-original-title='Customers'>
                                        <i className="bi bi-film fs-1"></i>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className='col-sm p-0 min-vh-100 principal'>
                        <div className='subchild d-flex align-items-start'>
                            <p className='position text-info'>#1 in the US&nbsp;
                                <i class="bi bi-patch-check-fill text-info"></i></p>
                            <h5>AMAZON ORIGINAL</h5>
                            <h1 className='titulo'>THE TERMINAL LIST</h1>
                            <div className='linetwo d-flex align-items-center'>
                                <p class="bi bi-star-fill letrasblancas"></p>
                                <p class="bi bi-star-fill letrasblancas"></p>
                                <p class="bi bi-star-fill letrasblancas"></p>
                                <p class="bi bi-star letrasblancas"></p>
                                <p class="bi bi-star letrasblancas">
                                </p>&nbsp;&nbsp;
                                <p className='letrasblancas'>6.8k</p>&nbsp;&nbsp;
                                &nbsp;&nbsp;
                                <p className='letrasblancas'>1 season 2022</p>&nbsp;&nbsp;
                                <p class="badge bg-secondary letrasblancas">18+</p>&nbsp;&nbsp;
                                <p className='letrasblancas'>Suspense • Drama</p>
                            </div>
                            <div className='description col-md-8'>
                                <p className='letrasblancas lh-sm text-start'>Season 1 Navy SEAL Commander James Reece turns to
                                    vengance as he investigates the mysterious forces behind th...
                                </p>
                            </div>
                            <div className='footer d-flex'>
                                <p class="bi bi-patch-check-fill text-info"></p>
                                <p className='letrasblancas'> &nbsp; Included with Prime</p>
                            </div>
                            <Description />
                        </div>
                        <div className='secundario'>
                            <img className='img-fluid' src={Screen} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SideNav;