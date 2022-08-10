import React from 'react'
import './footer.css'
import {BsInstagram} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"

const Footer = () => {
  return (
    <section id="footer">
        <div className="container footer_container">
            <div className="footer_top">
              <div className="footer_top1">
                <ul className='footer_list1'>
                  <li><h5> <a href="#"> PROMOTIONS </a> </h5></li>
                  <li><h5> <a href="#"> SIGN UP FOR EMAIL </a> </h5></li>
                  <li><h5> <a href="#"> BECOME A MEMBER </a></h5></li>
                  <li><h5> <a href="#"> SEND US FEEDBACK </a> </h5></li>
                </ul>
              </div>
              <div className="footer_top2">
                  <ul className='footer_list2'>
                    <li><h5> <a href="#"> GET HELP </a> </h5></li>
                    <li><p> <a href=""> Order Status </a></p></li>
                    <li><p> <a href=""> Shopping snd Delivery </a></p></li>
                    <li><p> <a href=""> Payment Options </a></p></li>
                    <li><p> <a href=""> Contact Us </a></p></li>
                  </ul>
              </div>
              <div className="footer_top3">
                  <ul className='footer_list3'>
                    <li><h5> <a href="#"> ABOUT sFh </a> </h5></li>
                    <li><p> <a href=""> News </a></p></li>
                    <li><p> <a href=""> Careers </a></p></li>
                    <li><p> <a href=""> Investors </a></p></li>
                    <li><p> <a href=""> Sustainability </a></p></li>
                  </ul>
              </div>
              <div className="footer_top4">
                  <ul className='footer_socials'>
                    <li><a href="https://www.instagram.com/utibeabasiukeme/" target='_blank'> <BsInstagram/></a></li>
                    <li><a href="https://web.facebook.com/utibeabasi.ukeme.9/" target='_blank'> <BsFacebook/></a></li>
                    <li><a href="https://twitter.com" target='_blank'> <BsTwitter/></a></li>
                  </ul>
              </div>
            </div>
            <div className="footer_bottom">
              <div className="footer_general">
                <div className="footer_wrapper">
                  <div className="footer_bottom1">
                    <ul className='footer_list4'>
                      <li><a href="#"><p className='list_anchor1'> Nigeria </p></a></li>
                      <li> <p> © 2022 sFh, Inc. All Rights Reserved </p> </li>
                    </ul>
                  </div>
                  <div className="footer_bottom2">
                    <ul  className='footer_list5'>
                      <li><a href="#"><p>Guides</p></a></li>
                      <li><a href="#"><p>Terms of Sale</p></a></li>
                      <li><a href="#"><p>Terms of Use</p></a></li>
                      <li><a href="#"><p>sFh Privacy Policy</p></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Footer