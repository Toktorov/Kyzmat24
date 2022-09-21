import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux";
import {setStatus} from "../../redux/reducers/item";

const UserHeader = () => {
    const id = useSelector(s => s.user.id);
    const [showBurgerMenu, setShowBurgerMenu] = useState(false);

    const burgerMenuFunc = () =>{
   setShowBurgerMenu(!showBurgerMenu)
    };
    return (
            <>
                <div className="bg-dark py-10">
                    <div className="container">
                        <div
                            className="text-center
						d-flex
						justify-content-between
						space-x-10
						align-items-center">
                            <div className="space-x-10 d-flex align-items-center">
                                {/*<lottie-player*/}
                                {/*    src="https://assets6.lottiefiles.com/private_files/lf30_kqshlcsx.json"*/}
                                {/*    background="transparent"*/}
                                {/*    speed="2"*/}
                                {/*    style="width: 50px; height: 50px"*/}
                                {/*    loop*/}
                                {/*    autoplay></lottie-player>*/}
                                <p className="color_white">
                                    Теперь доступна
                                    {/*<span style="color: rgb(0, 255, 170)">тёмная тема </span>*/}
                                </p>
                            </div>

                            <div className="mode_switcher space-x-10">
                                <a href="Home1.html#" className="light d-flex align-items-center is_active">
                                    <i className="ri-sun-fill"></i>
                                </a>
                                <a href="Home1.html#" className="dark d-flex align-items-center">
                                    <i className="ri-moon-fill"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <header className="header__1 js-header " id="header">
                    <div className="container">
                        <div className="wrapper js-header-wrapper">
                            <div className="header__logo">
                                <Link to={"/"}
                                      onClick={()=>{
                                          localStorage.removeItem('editSection')
                                      }}
                                      className="h4_09" >
                                    Kyzmat24
                                </Link>
                            </div>

                            {
                                id ? <>
                                    <div className={showBurgerMenu ? 'header__mobile' : 'header__menu'}>
                                        <ul className="d-flex space-x-20">
                                            <li className="has_popup">
                                                <Link  to={'/user/orders/'} className="color_black"
                                                      onClick={()=>{
                                                          localStorage.removeItem('editSection')
                                                      }}
                                                >Заказы</Link>
                                            </li>
                                            <li>
                                                <Link to={'/user/tasks/'} className="color_black" >Мои заказы</Link>
                                            </li>
                                            <li>
                                                <Link to={'/user'}
                                                      onClick={()=>{
                                                          localStorage.removeItem('editSection')
                                                      }}
                                                      className="color_black" > Профиль</Link>
                                            </li>

                                           </ul>
                                    </div>

                                    <div
                                        onClick={()=>{
                                        burgerMenuFunc();
                                        }}
                                        className="header__burger js-header-burger"> </div>

                                    {/*<div className="header__mobile js-header-mobile">*/}
                                    {/*    <div className="header__mobile__menu space-y-40">*/}
                                    {/*        <ul className="d-flex space-y-20">*/}
                                    {/*            <li><a className="color_black" href="Marketplace.html"> Marketplace</a></li>*/}
                                    {/*            <li><a className="color_black" href="Collections.html"> Collections</a></li>*/}
                                    {/*            <li><a className="color_black" href="Profile.html"> Profile</a></li>*/}
                                    {/*            <li><a className="color_black" href="Creators.html"> Creators</a></li>*/}

                                    {/*        </ul>*/}
                                    {/*        <div className="space-y-20">*/}
                                    {/*            <div className="header__search in_mobile w-full">*/}
                                    {/*                <input type="text" placeholder="Search"/>*/}
                                    {/*                <button className="header__result">*/}
                                    {/*                    <i className="ri-search-line"></i>*/}
                                    {/*                </button>*/}
                                    {/*            </div>*/}
                                    {/*            <a className="btn btn-grad btn-sm" href="Connect-wallet.html">Connect*/}
                                    {/*                wallet</a>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </>: ''
                            }

                        </div>
                    </div>
                </header>





            </>


    );
};

export default UserHeader;