import React from 'react'
import { Link } from 'react-router-dom'
import HeaderHome from '../Components/Core/Home/HeaderHome'

function Home() {
  return (
    <>
    <HeaderHome/>
    <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                    <div className="post-preview">
                        <Link to="post.html">
                            <h2 className="post-title">Man must explore, and this is exploration at its greatest</h2>
                            <h3 className="post-subtitle">Problems look mighty small from 150 miles up</h3>
                        </Link>
                        <p className="post-meta">
                            Posted by
                            <Link to="#!">Start Bootstrap</Link>
                            on September 24, 2022
                        </p>
                    </div>
                    
                    <hr className="my-4" />
                    
                    <div className="post-preview">
                        <Link to="post.html"><h2 className="post-title">I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.</h2></Link>
                        <p className="post-meta">
                            Posted by
                            <Link to="#!">Start Bootstrap</Link>
                            on September 18, 2022
                        </p>
                    </div>
                   
                    <hr className="my-4" />
                    
                    <div className="post-preview">
                        <Link to="/post">
                            <h2 className="post-title">Science has not yet mastered prophecy</h2>
                            <h3 className="post-subtitle">We predict too much for the next year and yet far too little for the next ten.</h3>
                        </Link>
                        <p className="post-meta">
                            Posted by
                            <Link to="#!">Start Bootstrap</Link>
                            on August 24, 2022
                        </p>
                    </div>
                    
                    <hr className="my-4" />
                  
                    <div className="post-preview">
                        <Link to="post.html">
                            <h2 className="post-title">Failure is not an option</h2>
                            <h3 className="post-subtitle">Many say exploration is part of our destiny, but it’s actually our duty to future generations.</h3>
                        </Link>
                        <p className="post-meta">
                            Posted by
                            <Link to="#!">Start Bootstrap</Link>
                            on July 8, 2022
                        </p>
                    </div>
                   
                    <hr className="my-4" />
                  
                    <div className="d-flex justify-content-end mb-4"><Link className="btn btn-primary text-uppercase" to="#!">Older Posts →</Link></div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Home