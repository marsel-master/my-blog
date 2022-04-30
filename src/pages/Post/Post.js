import React from "react";

const Post = () =>{
    return(
        <div className="w3-col l12 s12">
            <div className="w3-card-4 w3-margin w3-white">
                <h1 className="title">Почему IT-специалисты делают паузу в карьере и как после этого вернуться на работу</h1>
                <div className="mainFlex">
                    <div className="leftFlex">
                        <p className="largeFont">В этом тексте я решу эту задачу в общем виде при помощи конечного автомата</p>
                    </div>
                    <div className="rightFlex">
                        <img className="img" src="https://habrastorage.org/getpro/habr/upload_files/8fb/672/07e/8fb67207ed13a0eb9244c1376ab39660.jpg" alt="mountain"/>
                    </div>
                </div>
                <hr className="line"/>
                <h4 className="leftMargin">Оставить комментарий*</h4>
                <div className="commentFlex">
                    <input className="input:focus commentWidth" type="text" placeholder="Введите ваше имя"/>
                    <textarea className="textarea:focus commentWidth" placeholder="Внесите комментарий"/>
                    <button className="btn">Отправить</button>
                </div>
                <hr className="line"/>
                <div className="colFlex">
                    <h4 className="leftMargin">Все комментарии*</h4>
                    <div className="colFlex">
                        <div className="rowFlex">
                            <div className="commentSectionDetails">
                                <span className="italicFont">Jane Doe</span>
                                <span className="italicFont">10.10.2010</span>
                            </div>
                            <div className="commentSectionContent">
                                <span className="commentSectionBorder">Так как у меня нормального опыта не было делать игры полноценные на sdl2, то я использовал разные виды кода, которые как я думал, что они правильные. </span>
                            </div>
                        </div>
                        <div className="rowFlex">
                            <div className="commentSectionDetails">
                                <span className="italicFont">John Doe</span>
                                <span className="italicFont">12.10.2013</span>
                            </div>
                            <div className="commentSectionContent">
                                <span className="commentSectionBorder">Но поработав на работе и изучая код, я увидел что есть помимо того что я знаю (я про очереди сообщений), есть ещё mqueue. И только потом я додумался, что можно с помощью очередей сообщений отправлять из одного потока в другой что-нибудь. Вот пример как выглядела реализация</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;