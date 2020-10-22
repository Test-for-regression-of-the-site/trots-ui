import styled from 'styled-components';
import { useState } from 'react';
import fetch from 'isomorphic-unfetch';

const StyledForm = styled.div`
    display: flex;
    justify-content: center;
    margin: 0px;

    form {
        width: 100%;
    }
`

const StyledFormComponents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .select-form {
        display: flex;
        flex-direction: column;
        align-items: start;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: -0.02em;

        color: #111111;
    }

    select {
        padding: 10px;
    }

    .form-control {
        width: 100%;
        margin-top: 20px;
        margin-bottom: 40px;
        cursor: pointer;
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
        cursor: pointer;
    }

    .chooeRadio input {
        margin: 0px, 20px, 0px, 20px
    }

    .addLinks {
        display: flex;
        flex-direction: column;
        align-items: start;
        margin-right: 77px;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: -0.02em;

        color: #111111;
    }

    .addLinks textarea {
        width: 400px;
        height: 350px;
        margin-top: 20px;
        margin-bottom: 40px;
        resize: none;

        background: #FFFFFF;
        border: 1px solid #C1C7CB;
        box-sizing: border-box;
        border-radius: 4px;
    }

    .sendForm {
        width: 150px;
        height: 50px;

        margin-top: 40px;

        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: -0.02em;

        color: #111111;
        outline: none;
        border: none;
        background: #FFC925;
        border-radius: 4px;
        cursor: pointer;
    }
`

const StyledFormFilds = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 80%;
`

const StyledFieldTrotlink = styled.div`
    .fieldChooseTtotlink {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        width: 100%;
    }

    .fieldChooseTtotlink div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        height: 60px;

        background: #FFFFFF;
        border: 1px solid rgba(17, 17, 17, 0.8);
        box-sizing: border-box;
        border-radius: 4px 0px 0px 4px;

        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: -0.02em;
        cursor: pointer;

        color: rgba(17, 17, 17, 0.8);
    }

    .addTrotlingOptins input {
        height: 30px;
        margin-top: 20px;
    }
`

const FormStartTest = ({ status }) => {
    const [currentValue, setValue] = useState({
        links: '',
        paralel:'',
        typetest: '',
        trotling: {
            simulate: false,
            Kbps: null, 
            downloadKbps: null,
            uploadKbps: null
        }
    });

    const [currentStatisTrot, setTrit] = useState(false)

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
            [name]: +value
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

    function handleTrotling(bolean) {
        setTrit(bolean)
    }

    function handleChangeTrotling(event) {
        const target = event.currentTarget;
        const value =  target.value;
        const name = target.name;
        setValue({
            ...currentValue,
            trotling: 
                {
                    ...currentValue.trotling,
                    simulate: true,
                    [name]: value
                }
        });
    }

    function handleSubmit(event) {

        const time = new Date().getTime();

        fetch('http://127.0.0.1:1234/tasks', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                timeCreate: time,
                links: currentValue.links,
                parallel: currentValue.paralel,
                testType: currentValue.typetest,
                trotling: currentValue.trotling
            })
        }).then(res => {
            if(res.status == 200) {
                window.location.assign('/pageTest/viewReports');
            }
        });
        console.log({
            timeCreate: time,
            links: currentValue.links,
            parallel: currentValue.paralel,
            testType: currentValue.typetest,
            trotling: currentValue.trotling
        })

        event.preventDefault();
        setValue({
            links: '',
            paralel:'',
            typetest: '',
            trotling: {
                simulate: false,
                Kbps: null, 
                downloadKbps: null,
                uploadKbps: null
            }
        });

    }
    return(
        <StyledForm>
            <form onSubmit={handleSubmit}>
                <StyledFormComponents>
                    <StyledFormFilds>
                        <div>
                            <label className="addLinks">
                                Ссылки для тестирования
                                <textarea 
                                type="text" 
                                value={currentValue.links} 
                                name="links" 
                                onChange={handleChangeLinks} />
                            </label>
                        </div>
                        <div>
                            <label className="select-form">
                                Количество параллельных запусков
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
                                Тип устройства
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
                            <StyledFieldTrotlink>
                                <div className="nameFieldTrotlink">Тротлинг</div>
                                <div className="fieldChooseTtotlink">
                                    <div onClick={() => handleTrotling(false)}>
                                        Не имитировать
                                    </div>
                                    <div onClick={() => handleTrotling(true)}>
                                        Имитировать
                                    </div>
                                </div>
                                {currentStatisTrot && 
                                    <label className="addTrotlingOptins">
                                        <input type="text" placeholder="Kbps" name="Kbps" onChange={handleChangeTrotling} />
                                        <input type="text" placeholder="downloadKbps" name="downloadKbps" onChange={handleChangeTrotling} />
                                        <input type="text" placeholder="uploadKbps" name="uploadKbps" onChange={handleChangeTrotling} />
                                    </label>}
                            </StyledFieldTrotlink>
                        </div>
                    </StyledFormFilds>
                    <input className="sendForm" type="submit" value="Отправить" disabled={!status}/>
                </StyledFormComponents>
            </form>
        </StyledForm>
    )
}

export default FormStartTest;