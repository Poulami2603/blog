import React from 'react'
import { Link } from 'react-router-dom'

function HeaderPost() {
  return (
    <div>
        <header class="masthead">
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="post-heading">
                            <h1>Man must explore, and this is exploration at its greatest</h1>
                            <h2 class="subheading">Problems look mighty small from 150 miles up</h2>
                            <span class="meta">
                                Posted by
                                <Link to="#!">Start Bootstrap</Link>
                                on August 24, 2022
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default HeaderPost