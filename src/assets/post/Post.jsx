import React from 'react'
import '../post/Post.css'
import data from '../dataset.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
const thumbIcon = <FontAwesomeIcon icon={faThumbsUp} style={{ color: 'orange' }} />


export default function Post() {
    return (
        <>
            <div className='postDiv'>
                {data.posts.map((item) => (
                    <div className='postContent' key={item.id}>
                        <div className='title'>
                            <h2>{item.title}</h2>
                            {thumbIcon}
                        </div>
                        <p> {item.content}</p>
                        <div className='foot'>
                            <span><span className='category'>{item.category}</span> by {item.by}</span>
                            <div>
                                <p> {item.date} • {item.read} • {item.views}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
