import React, { useState, useRef } from 'react';

function Gena() {
    const inputRef = useRef();
    const [users, setUsers] = useState({});



    function handleClick(person, count) {
        users[person] === undefined ?
            setUsers({ ...users, [person]: users[person] = count })
            :
            setUsers({ ...users, [person]: users[person] + count })
    }



    function checkText(text) {
        let arrText = text.split(' ');

        let count = 0;
        let people = [];

        // ИЩЕМ СОВПАДЕНИЯ
        // arrText.filter(item => item === ':apple:'? count++ : false);

        // ПРОВЕРЯЕМ РЕГУЛЯРНЫМ ВЫРАЖЕНИЕМ
        // arrText.filter(item => {
        //     if(/^<@[a-zA-Z0-9_]*>/.test(item)) return person.push(item.replace(/<|@|>/gi, ''))
        // })

        arrText.map(item => {
            if (/^<@[a-zA-Z0-9_]*>/.test(item)) return people.push(item.replace(/<|@|>/gi, ''));
            if (item === ':apple:') count++;
        })

        people.map(item => handleClick(item, count))
    }

    console.log(users)

    return (
        <div className="container">
            <div className="wrap">
                <input type="text" className="input" placeholder="Share" ref={inputRef} />
                <button className="btn" onClick={() => checkText(inputRef.current.value)}>Gena</button>
            </div>
        </div>
    )
}
export { Gena }