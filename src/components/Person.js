import React, { useRef } from 'react';
import './Person.css'

export default function Person() {
    const firstFocusEl = useRef(null);
    const handleSubmit = (ev) => {
        ev.preventDefault();
        var formData = new FormData(ev.target);
        var object = {};
        formData.forEach(function (value, key) {
            object[key] = value;
        });
        var json = JSON.stringify(object);
        console.log(json); //Вывод json в консоль
        //собираем запрос к серверу
        var xhr = new XMLHttpRequest();
        xhr.open("POST", '/submit', true)
        xhr.setRequestHeader('Content-type', 'application/json: charset=utf-8');
        xhr.send(json); //отправляем объект в формате json
        firstFocusEl.current.focus(); //вставим фокус на первое поле input
    }

    return (
            //рисуем форму
          <form name="person" onSubmit={handleSubmit}>  
            <input type="text" name="name" placeholder="name" ref={firstFocusEl}/><br />
            <input type="text" name="surname" placeholder="surname" /><br />
            <input type="text" name="birthDate" placeholder="birth date" /><br />
            <select name="select" placeholder='(select)'>
                <option value="Star">✭</option>
                <option value="Heart">❤</option>
                <option value="Octagon">Octagon </option>
            </select>
            <button>send</button>
          </form>  
      );
}