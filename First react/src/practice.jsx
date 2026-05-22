import { useEffect, useState} from 'react'
import React from 'react'

const Practice = () => {
    const [info, setinfo] = useState([
        {
    title: "Hey",
    desc: "I am a good todo"
    },
    {
    title: "Hey Another todo",
    desc: "I am a good todo too"
    },
    {
    title: "Hey I am grocery todo",
    desc: "I am a good todo but I am grocery todo"
    },
    ])
return (
        <>
            {info.map((item) => {
                return (
                    <div key={item.title}>
                        <div className="todo">{item.title}</div>
                        <div className="todo">{item.desc}</div>
                    </div>
                )
            })}
        </>
    )
}


export default Practice
