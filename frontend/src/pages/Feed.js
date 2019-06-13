
import React, { Component } from 'react';
import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {

    render(){

        return(
            
            <section id="post-list">

                <article>

                    <header>

                        <div className="user-info">

                            <span>Felipe Alves</span>
                            <span className="plae">Rio do Sul</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>

                    <img src="http://localhost:3030/files/wallpaper.jpg" alt="" />

                    <footer>

                          <div className="actions">

                            <img src={like} alt="" />
                            <img src={comment} alt="" />
                            <img src={send} alt="" />
                          </div>

                          <strong>837 curtidas</strong>

                          <p>

                            Post só o filé aqui, pense!
                            <span>#SóOShow #VaiDarBom #Correria #CursoJS</span>
                          </p>

                    </footer>
                </article>
            </section>
        )
    }
}

export default Feed;
