import styled from 'styled-components';
import { useState } from 'react';
import fetch from 'isomorphic-unfetch';

const StyledForm = styled.div`
    display: flex;
    justify-content: center;
    padding: 40px;
    margin: 0px;
`

const StyledFormComponents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .select-form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    select {
        padding: 10px;
    }

    .form-control {
        width: 400px;
        margin-top: 40px;
        margin-bottom: 40px;
    }

    .radio {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .chooeRadio {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 400px;
        margin-top: 40px;
        margin-bottom: 40px;
    }

    .chooeRadio input {
        margin: 0px, 20px, 0px, 20px
    }

    .addLinks {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .addLinks textarea {
        width: 400px;
        height: 200px;
        margin-top: 40px;
        margin-bottom: 40px;
        resize: none;
    }

    .sendForm {
        width: 150px;
        height: 50px;
    }
`

const FormStartTest = () => {

    const [currentValue, setValue] = useState({
        links: '',
        paralel:'',
        typetest: ''
    });

    function handleChangeLinks(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
        setValue({...currentValue,
            [name]: value.split(',')
        });
    }

    function handleChangeParalel(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
        setValue({
            ...currentValue,
            [name]: value
        });
    }

    function radioChange(event) {
        const target = event.currentTarget;
        const value =  target.value;
        const name = target.name;
        setValue({
            ...currentValue,
            [name]: value
        });
    }

    function handleSubmit(event) {

        const time = new Date().getTime();

        fetch('http://192.168.1.4:2020/startTest', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                time: time,
                links: currentValue.links,
                paralel: currentValue.paralel,
                typetest: currentValue.typetest
            })
        });
        event.preventDefault();
        setValue({
            links: '',
            paralel:'',
            typetest: ''
        });
    }
    return(
        <StyledForm>
            <form onSubmit={handleSubmit}>
                <StyledFormComponents>
                    <label className="select-form">
                        Введите количество паралельных запусков:
                        <select value={currentValue.paralel} onChange={handleChangeParalel} name="paralel" className="form-control">
                            <option value="select">Введите количество</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </label>
                    <label className="radio">
                        Выбирите тип устройства
                        <div className="chooeRadio">
                            <input type="radio"
                                value="mobile"
                                name="typetest"
                                checked={currentValue.typetest === "mobile"}
                                onChange={radioChange}
                            />Mobile

                            <input type="radio"
                                value="desktop"
                                name="typetest"
                                checked={currentValue.typetest === "desktop"}
                                onChange={radioChange}
                            />Desktop
                        </div>
                    </label>
                    <label className="addLinks">
                        Введите ссылки:
                        <textarea 
                        type="text" 
                        value={currentValue.links} 
                        name="links" 
                        onChange={handleChangeLinks} />
                    </label>
                    <input className="sendForm" type="submit" value="Отправить" />
                </StyledFormComponents>
            </form>
        </StyledForm>
    )
}

export default FormStartTest;