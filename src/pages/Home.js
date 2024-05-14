import React,{useContext, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';

import { ThemeContext } from "../context/ThemeContext";
import BanerLogoSlider from './../components/Home/BanerLogoSlider';
import CategoriesSlider from './../components/Home/CategoriesSlider';
import TeamSlider from './../components/Home/TeamSlider';
import PartnershipSlider from './../components/Home/PartnershipSlider';
import RecentProjectsSlider from './../components/Home/RecentProjectsSlider';
import TestimonialSlider from './../components/Home/TestimonialSlider';
import StoryBlog from './../components/Home/StoryBlog';
import CounterBlog from './../components/Home/CounterBlog';
import NewsSlider from './../components/Home/NewsSlider';
import UpdateBlog from './../components/Home/UpdateBlog';
import DonateModal from './../components/Modal/DonateModal';



//images
import main from './../assets/images/main-slider/pic1.png';
import { IMAGES } from '../constant/theme';

const Home = () => {
    const modalRef = useRef();
    const { changeBackground, changePrimaryColor } = useContext(ThemeContext);
    useEffect(() => {
        changeBackground({ value: "default", label: "default" });
        changePrimaryColor("color-skin-1");
    }, []);
    
    return(
        <>
            <div className="page-content bg-white">	
                <div className="banner-one">
                    <div className="container">
                        <div className="row banner-inner">
                            <div className="col-lg-8 col-md-7">
                                <div className="banner-content">
                                    <h5 className="sub-title text-primary">Your Software Development Partner</h5>
                                    <h1 className="title">
                                        Welcome to Pixel Burst<br />Coding Labs<br />
                                        Your Gateway to Innovative E-commerce and Business Solutions!
                                    </h1>
                                    <p>At Pixel Burst Coding Labs, we specialize in crafting cutting-edge web
                                        applications designed to transform your e-commerce and business operations.
                                        Our team of expert developers and designers are passionate about
                                        pushing the boundaries of technology to create seamless, scalable,
                                        and secure web solutions that drive growth and enhance user experience.</p>
                                    <Link to={"/about-us"} className="btn btn-secondary btnhover2 m-r15">Learn More <i className="flaticon-right-arrows ms-3 scale1"></i></Link>
                                    <Link to={"#"} className="btn btn-success"  onClick={() => {modalRef.current.handleModalOpen(); }}
                                        data-bs-target="#modalDonate">Donate
                                    </Link>
                                    
                                    
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-5">
                                <div className="banner-media">
                                    <img src={main} className="main-img" alt="" />
                                    <div className="dz-media">
                                        <img src={IMAGES.Shape} className="main-img" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dz-shape">
                            <img src={IMAGES.Shape1} className="shape-1 move-2" alt="shape" />
                            <img src={IMAGES.Shape2} className="shape-2 move-2" alt="shape" />
                            <img src={IMAGES.Shape1} className="shape-3 move-2" alt="shape" />
                            <img src={IMAGES.Shape2} className="shape-4 move-2" alt="shape" />
                        </div>
                    </div>
                </div>

                {/*Categories*/}
                <div className="content-inner-3 section-pattren1">
                    <div className="container">
                        <div className="section-head text-center wow fadeInUp" data-wow-delay="0.2s">
                            <h5 className="sub-title">CATEGORIES</h5>
                            <h2 className="title">Explore Our Featured Categories</h2>
                            <p>Dive into a world of innovation and creativity with Pixel Burst Coding Labs!
                                Our featured categories offer something for everyone:</p>
                        </div>
                        <CategoriesSlider />    
                    </div>
                    <img src={IMAGES.Shape1} className="shape-1" alt="shape" />
                    <img src={IMAGES.Shape2} className="shape-2" alt="shape" />
                    <img src={IMAGES.Shape3} className="shape-3" alt="shape" />
                    <img src={IMAGES.Shape5} className="shape-4" alt="shape" />
                    <img src={IMAGES.Shape6} className="shape-5" alt="shape" />
                </div> 
                
                {/*Team Slider*/}
                <section className="content-inner-3 section-pattren1">
                    <div className="container">
                        <div className="section-head text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="sub-title">TEAM MEMBERS</h6>
                            <h2 className="title">Meet Our Dynamic Team</h2>
                            <p>We pull in the best talent the world has to offer.</p>
                        </div>
                        <TeamSlider />    
                    </div> 
                    <img src={IMAGES.Shape1} className="shape-1 move-1" alt="shape"/>
                    <img src={IMAGES.Shape2} className="shape-4 move-2" alt="shape"/>
                    <img src={IMAGES.Shape3} className="shape-6 move-1" alt="shape"/>
                    <img src={IMAGES.Shape5} className="shape-2 rotating" alt="shape"/>
                    <img src={IMAGES.Shape6} className="shape-5 rotating" alt="shape"/>
                    <img src={IMAGES.Shape6} className="shape-3 rotating" alt="shape"/>
                </section> 
                

                <section className="content-inner-3">
                    <div className="container">
                       
                    </div>
                </section>
                
                <section className="clients-wrapper wow fadeInUp" data-wow-delay="0.2s">
                    <div className="container">
                        
                    </div>
                </section>
                <section className="content-inner-3 overflow-hidden section-pattren1">
                    <div className="container">
                        <div className="section-head text-center wow fadeInUp" data-wow-delay="0.2s">
                            <h2>Recent Projects</h2>
                            <p>At Pixel Burst Coding Now Labs, innovation and technology meet to
                                create cutting-edge solutions that propel the digital frontier
                                forward. Our commitment to excellence and creativity is evident
                                in our portfolio of recent projects, each designed to challenge
                                the status quo and introduce novel functionalities in various
                                tech domains. </p>
                        </div>
                        <RecentProjectsSlider />
                    </div>
                </section>
                            
                <div className="call-action style-1 content-inner-1">
                    <div className="container">
                        <UpdateBlog />
                    </div>
                </div>
            </div>

            {/* Modals */}
            {/* <Modal className="modal fade modal-wrapper" id="modalDonate" show={donateModal} onHide={setDonateModal} centered> 
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Choose a donation amount</h5>
                        <button type="button" className="btn-close" onClick={()=>setDonateModal(false)}><i className="flaticon-close"></i></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={(e)=>FormSubmit(e)}>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="tag-donate style-1">
                                        <div className="donate-categories">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    $500
                                                </label>
                                            </div>
                                        </div>
                                        <div className="donate-categories">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked  />
                                                <label className="form-check-label" htmlFo="flexRadioDefault2">
                                                    $1000
                                                </label>
                                            </div>
                                        </div>
                                        <div className="donate-categories">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" defaultChecked />
                                                <label className="form-check-label" htmlFo="flexRadioDefault3">
                                                    $2000
                                                </label>
                                            </div>
                                        </div>
                                        <div className="donate-categories">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" defaultChecked />
                                                <label className="form-check-label" htmlFo="flexRadioDefault4">
                                                    $5000
                                                </label>
                                            </div>
                                        </div>
                                        <p>Most Donors donate approx <span>$1000</span> to this Fundraiser</p>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="form-label">Other Amount</label>
                                        <div className="input-group">
                                            <input type="number" className="form-control"  placeholder="Other Amount" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="form-label">Name</label>
                                        <div className="input-group">
                                            <input name="dzName" required="" type="text" className="form-control" placeholder="Jakob Bothman" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="form-label">Email address</label>
                                        <div className="input-group">
                                            <input name="dzEmail" required type="text" className="form-control" placeholder="info@mail.com" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="form-label">Phone Number</label>
                                        <div className="input-group">
                                            <input type="number" className="form-control" placeholder="Phone Number" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="form-label">Address</label>
                                        <div className="input-group">
                                            <input required type="text" className="form-control" placeholder="Address" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="form-label">Pancard</label>
                                        <div className="input-group">
                                            <input type="number" className="form-control" placeholder="Pancard" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group mb-0 text-center">
                                        <button name="submit" type="submit" value="Submit" className="btn btn-primary btn-block">Proceed To Pay</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>                
            </Modal> */}
            <DonateModal 
                ref={modalRef}
            />
        </>
    )
}
export default Home;