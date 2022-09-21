import React, {useEffect, useState} from 'react';
import axios from "axios";
import altAvatar from '../../../../img/avatar.jpg';

import {useDispatch, useSelector} from "react-redux";
import "./editProfile.css";
import EditProfileEdit from "./EditProfileComponents/EditProfileEdit";
import EditProfileContact from "./EditProfileComponents/EditProfileContact";
import EditProfilePassword from "./EditProfileComponents/EditProfilePassword";
import EditProfileAccount from "./EditProfileComponents/EditProfileAccount";
import {setHiddenFooter} from "../../../../redux/reducers/app";
import {setUser} from "../../../../redux/reducers/user";

const EditProfile = () => {
    const user = useSelector(s => s.user.user);
    const dispatch = useDispatch();
    const id = useSelector(s => s.user.id);
    const [editSection, setEditSection] = useState(localStorage.getItem('editSection') ? localStorage.getItem('editSection') : 'profile');
    const [editSelect, setEditSelect] = useState('');
    const [loading, setLoading] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const [message, setMessage] = useState('');
    const addProfileImage = () =>{
        const data = new FormData();
        data.append('username', user.username);
        data.append('profile_image', profileImage, profileImage.name);
        if (profileImage){
            setLoading('profileImage');
            axios.put(`https://kyzmat24.com/api/users/update/${id}`, data)
                .then((response)=>{
                    console.log(response);
                    setMessage('Изменения сохранены');
                    dispatch(setUser(id));
                }).catch((error)=>{
                console.log(error.response)
                    setMessage("Произошла ошибка");

            }).finally(()=>{
                setLoading(false)
            })
        }
    };

    useEffect(()=>{
        dispatch(setHiddenFooter(false))
    }, []);
    return (
        <>
            <div className="container">
                <div className="top_margin">
                    <div className="avatars space-x-20 mb-30">
                        <div id="profile-container">
                            <img id="profileImage" src={user && user.profile_image ? user.profile_image: altAvatar}
                                 alt="Avatar" className="avatar avatar-lg border-0"/>
                        </div>
                        <div className="space-x-10 d-flex">
                            {
                                user && user.profile_image
                                    ? <>
                                        <div id="boxUpload">
                                            <button
                                                onClick={()=>{
                                                addProfileImage()
                                                }}
                                                className="btn btn-dark">
                                                Поменять фото</button>
                                            <input type="file"
                                                    required
                                                   onChange={(e)=>{
                                                       setProfileImage(e.target.files[0])
                                                   }}
                                                 />
                                        </div>
                                        {/*<button className="btn btn-white"> Удалить фото</button>*/}
                                    </>
                                    : <div id="boxUpload">
                                        <button
                                            onClick={()=>{
                                                addProfileImage()
                                            }}
                                            className="btn btn-dark">
                                            Добавить фото</button>
                                        <input  type="file" required
                                                onChange={(e)=>{
                                                    setProfileImage(e.target.files[0])
                                                }} />
                                    </div>
                            }
                        </div>
                    </div>
                    <div className="box edit_box col-lg-9 space-y-30">
                        <div className="row sm:space-y-20">
                            <div className="col-lg-6 account-info">

                                <button className={
                                    editSection === 'profile' ?
                                        'editProfile-select-btns-button editProfile-select-btns-button-active' :
                                        'editProfile-select-btns-button'
                                }
                                        onClick={() => {
                                            setEditSection('profile');
                                            localStorage.setItem('editSection', 'profile')
                                        }}
                                >Редактировать профиль
                                </button>
                                <button className={
                                    editSection === 'contact' ?
                                        'editProfile-select-btns-button editProfile-select-btns-button-active' :
                                        'editProfile-select-btns-button'
                                }
                                        onClick={() => {
                                            setEditSection('contact');
                                            localStorage.setItem('editSection', 'contact')
                                        }}
                                >Контакты
                                </button>
                                <button className={
                                    editSection === 'account' ?
                                        'editProfile-select-btns-button editProfile-select-btns-button-active' :
                                        'editProfile-select-btns-button'
                                }
                                        onClick={() => {
                                            setEditSection('account');
                                            localStorage.setItem('editSection', 'account')
                                        }}
                                >Настройки аккаунта
                                </button>
                                <button className={
                                    editSection === 'password' ?
                                        'editProfile-select-btns-button editProfile-select-btns-button-active' :
                                        'editProfile-select-btns-button'
                                }
                                        onClick={() => {
                                            setEditSection('password');
                                            localStorage.setItem('editSection', 'password')
                                        }}
                                >Изменить/сбросить пароль
                                </button>

                            </div>
                            {
                                editSection === 'profile' ?
                                    <EditProfileEdit loading={loading} setLoading={setLoading} editSelect={editSelect} setEditSelect={setEditSelect}/> :
                                    editSection === 'contact' ?
                                        <EditProfileContact loading={loading} setLoading={setLoading} editSelect={editSelect} setEditSelect={setEditSelect}/> :
                                        editSection === 'password' ?
                                            <EditProfilePassword loading={loading} setLoading={setLoading} editSelect={editSelect} setEditSelect={setEditSelect}/> :
                                            editSection === 'account' ?
                                                <EditProfileAccount loading={loading} setLoading={setLoading} editSelect={editSelect}
                                                                    setEditSelect={setEditSelect}/> :
                                                <p>Другие настройки</p>
                            }

                        </div>
                        <div className="hr"> </div>

                    </div>
                </div>

                {/*<div className="editProfile-row">*/}
                {/*    <div className="editProfile-select-btns">*/}
                {/*        <button className={*/}
                {/*            editSection === 'profile' ?*/}
                {/*                'editProfile-select-btns-button editProfile-select-btns-button-active' :*/}
                {/*                'editProfile-select-btns-button'*/}
                {/*        }*/}
                {/*                onClick={() => {*/}
                {/*                    setEditSection('profile');*/}
                {/*                    localStorage.setItem('editSection', 'profile')*/}
                {/*                }}*/}
                {/*        >Редактировать профиль*/}
                {/*        </button>*/}
                {/*        <button className={*/}
                {/*            editSection === 'contact' ?*/}
                {/*                'editProfile-select-btns-button editProfile-select-btns-button-active' :*/}
                {/*                'editProfile-select-btns-button'*/}
                {/*        }*/}
                {/*                onClick={() => {*/}
                {/*                    setEditSection('contact');*/}
                {/*                    localStorage.setItem('editSection', 'contact')*/}
                {/*                }}*/}
                {/*        >Контакты*/}
                {/*        </button>*/}
                {/*        <button className={*/}
                {/*            editSection === 'account' ?*/}
                {/*                'editProfile-select-btns-button editProfile-select-btns-button-active' :*/}
                {/*                'editProfile-select-btns-button'*/}
                {/*        }*/}
                {/*                onClick={() => {*/}
                {/*                    setEditSection('account');*/}
                {/*                    localStorage.setItem('editSection', 'account')*/}
                {/*                }}*/}
                {/*        >Настройки аккаунта*/}
                {/*        </button>*/}
                {/*        <button className={*/}
                {/*            editSection === 'password' ?*/}
                {/*                'editProfile-select-btns-button editProfile-select-btns-button-active' :*/}
                {/*                'editProfile-select-btns-button'*/}
                {/*        }*/}
                {/*                onClick={() => {*/}
                {/*                    setEditSection('password');*/}
                {/*                    localStorage.setItem('editSection', 'password')*/}
                {/*                }}*/}
                {/*        >Изменить/сбросить пароль*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*    <div className="editProfile-forms">*/}
                {/*        {*/}
                {/*            editSection === 'profile' ?*/}
                {/*                <EditProfileEdit loading={loading} setLoading={setLoading} editSelect={editSelect} setEditSelect={setEditSelect}/> :*/}
                {/*                editSection === 'contact' ?*/}
                {/*                    <EditProfileContact loading={loading} setLoading={setLoading} editSelect={editSelect} setEditSelect={setEditSelect}/> :*/}
                {/*                    editSection === 'password' ?*/}
                {/*                        <EditProfilePassword loading={loading} setLoading={setLoading} editSelect={editSelect} setEditSelect={setEditSelect}/> :*/}
                {/*                        editSection === 'account' ?*/}
                {/*                            <EditProfileAccount loading={loading} setLoading={setLoading} editSelect={editSelect}*/}
                {/*                                                setEditSelect={setEditSelect}/> :*/}
                {/*                            <p>Другие настройки</p>*/}
                {/*        }*/}

                {/*    </div>*/}
                {/*</div>*/}

            </div>
        </>
    );
};

export default EditProfile;