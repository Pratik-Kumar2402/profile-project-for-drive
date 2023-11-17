import React from 'react'
import data from '../dataset.json';

export default function Post() {
    return (
        <>
            <div className='post'>
                {data.posts.map((item) => (
                    <div className='postContent' key={item.id}>
                        <p> {item.title}</p>
                        <p> {item.content}</p>
                        <p> {item.by}</p>
                        <p> {item.date}</p>
                        <p> {item.read}</p>
                        <p> {item.views}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
