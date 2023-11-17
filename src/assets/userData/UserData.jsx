import React from 'react'
import '../userData/UserData.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faHeart, faThumbsUp, faStar, faEye } from '@fortawesome/free-regular-svg-icons'
const verifyIcon = <FontAwesomeIcon icon={faCircleCheck} />
const heartIcon = <FontAwesomeIcon icon={faHeart} />
const thumbIcon = <FontAwesomeIcon icon={faThumbsUp} />
const starIcon = <FontAwesomeIcon icon={faStar} />
const viewIcon = <FontAwesomeIcon icon={faEye} />

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
                        <button>6482</button>
                        <button>245</button>
                    </div>
                </div>
            </div>
            <div className='userDataSection2'>
                <p>Co-founder & CEO at Terribly Tiny Tales</p>
                <a href="" target='_blank'>https://www.instagram.com/anujgosalia</a>
            </div>
        </>
    )
}
