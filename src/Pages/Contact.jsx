import React from 'react'
import HeaderContact from '../Components/Core/Contact/HeaderContact'

const Contact =()=>{
  return (
    <div>
      <HeaderContact/>
      <main classname="mb-4">
            <div classname="container px-4 px-lg-5">
                <div classname="row gx-4 gx-lg-5 justify-content-center">
                    <div classname="col-md-10 col-lg-8 col-xl-7">
                        <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                        <div classname="my-5">
                            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                <div classname="form-floating">
                                    <input classname="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                    <label for="name">Name</label>
                                    <div classname="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                </div>
                                <div classname="form-floating">
                                    <input classname="form-control" id="email" type="email" placeholder="Enter your email..." data-sb-validations="required,email" />
                                    <label for="email">Email address</label>
                                    <div classname="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                    <div classname="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                </div>
                                <div classname="form-floating">
                                    <input classname="form-control" id="phone" type="tel" placeholder="Enter your phone number..." data-sb-validations="required" />
                                    <label for="phone">Phone Number</label>
                                    <div classname="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                </div>
                                <div classname="form-floating">
                                    <textarea classname="form-control" id="message" placeholder="Enter your message here..." style="height: 12rem" data-sb-validations="required"></textarea>
                                    <label for="message">Message</label>
                                    <div classname="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                </div>
                                <br/>
                                <div classname="d-none" id="submitSuccessMessage">
                                    <div classname="text-center mb-3">
                                        <div classname="fw-bolder">Form submission successful!</div>
                                        To activate this form, sign up at
                                        <br/>
                                    </div>
                                </div>
                                <div classname="d-none" id="submitErrorMessage"><div classname="text-center text-danger mb-3">Error sending message!</div></div>
                                <button classname="btn btn-primary text-uppercase disabled" id="submitButton" type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    </div>
  )
}

export default Contact