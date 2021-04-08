import React, { useState, useRef } from 'react';

function Gena2() {
    const inputRef = useRef();
    const [users, setUsers] = useState({});
    console.log(users)


    function addToUsers(obj) {
        const { name } = obj;
        const { countApple } = obj;

        users[name] === undefined ?
            setUsers((users) => {
                return (
                    { ...users, [name]: countApple }
                )
            }) :
            setUsers((users) => {
                return (
                    { ...users, [name]: users[name] + countApple }
                )
            })
    }


    function checkText(text) {
        let arrText = text.split(' ');
        let people = [];

        arrText.forEach(item => {
            if (/^<@[a-zA-Z0-9_]*>/.test(item)) {
                let user = item.replace(/<|@|>/gi, '');
                people = [
                    ...people,
                    {
                        name: user,
                        countApple: 0
                    }
                ];
            }
            else if (item === ':apple:') {
                people.map(item =>
                    item.countApple = item.countApple + 1
                )
            };
        })

        people.map(item => addToUsers(item));
        inputRef.current.value = '';
    }


    return (
        <div className="container">
            <div className="wrap">
                <input type="text" className="input" placeholder="Share" ref={inputRef} />
                <button className="btn" onClick={() => checkText(inputRef.current.value)}>Gena</button>
                <ul>
                    {Object.keys(users).map(item =>
                        <li key={item}>
                            У пользователя {item} : {users[item]} шт. </li>
                    )}
                </ul>
            </div>
            <div className='description'>
                <h4>Варианты сообщений:</h4>
                <p>- {`<@dmitry> <@anatoliy> `}:apple: :apple: - мы только что отправили Дмитрийю и Анатолию по два яблока.</p>
                <p>- дарю яблоки другу диме{` <@dmitry>`} :apple: :apple: :pear: - Пользователь Дмитрий получит 2 яблока. Поскольку у нас нету бонусов в виде :pear: этот символ будет игнорироваться</p>
            </div>
        </div>
    )
}
export { Gena2 }