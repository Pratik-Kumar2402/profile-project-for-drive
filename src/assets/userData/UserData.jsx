import React from 'react'
import '../userData/UserData.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faHeart, faThumbsUp, faStar, faEye } from '@fortawesome/free-solid-svg-icons'
const verifyIcon = <FontAwesomeIcon icon={faCircleCheck} style={{color: 'green'}} />
const heartIcon = <FontAwesomeIcon icon={faHeart} style={{color: 'red'}} />
const thumbIcon = <FontAwesomeIcon icon={faThumbsUp} style={{color: 'orange'}} />
const starIcon = <FontAwesomeIcon icon={faStar} style={{color: 'blue'}} />
const viewIcon = <FontAwesomeIcon icon={faEye} style={{color: 'gray'}} />

export default function UserData() {
    return (
        <>
            <div className='userImageSectionContainer'>
                <img className='userImageSection' src="mumbaiBridge.jpeg" alt="" />
            </div>
            <div className="userDataSection">
                <div className='userDataSection1'>
                    <div>
                        <img src="profilePic.jpeg" alt="" />
                    </div>
                    <div>
                        <p>Anuj Gosalia {verifyIcon}</p>
                        <div className="form">
                            <div>
                                <input id='followers' type='button' value={"6482"} />
                                <label htmlFor='followers'>Followers</label>
                            </div>
                            <div>
                                <input id='following' type='button' value={"245"} />
                                <label htmlFor='followers'>Following</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='userDataSection2'>
                    <h3>Co-founder & CEO at Terribly Tiny Tales</h3>
                    <a href="" target='_blank'>https://www.instagram.com/anujgosalia</a>
                    <p>{starIcon} <span>125</span> {thumbIcon} <span>12</span> {viewIcon} <span>57.8K</span> {heartIcon} <span>26.0K</span></p>
                </div>
            </div>
        </>
    )
}
