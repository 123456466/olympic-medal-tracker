import { useState } from 'react'
import './App.css'

const App = () => {
    const SAMPLE = []

    const [medals, setMedals] = useState(SAMPLE)

    const [newCountry, setNewContry] = useState(''),
    [newGold, setNewGold] = useState(''),
    [newSilver, setNewSilver] = useState(''),
    [newBronze, setNewBronze] = useState('');

    const handleSubmit = (element) => {
        element.preventDefault();

        if(!newCountry.trim()){
            return alert('국가를 입력 해주세요.')
        }else if(!newGold.trim() || !newSilver.trim() || !newBronze.trim()){
            return alert('메달 수를 입력 해주세요.')
        }

        setMedals([...medals, {id: crypto.randomUUID(), country: newCountry, gold: newGold, silver: newSilver, bronze: newBronze}]);
        setNewContry('');
        setNewGold('');
        setNewSilver('');
        setNewBronze('');
    }

    const countryChange = (element) => {
        setNewContry(element.target.value);
    },
    goldChange = (element) => {
        setNewGold(element.target.value);
    },
    silverChange = (element) => {
        setNewSilver(element.target.value);
    },
    bronzeChange = (element) => {
        setNewBronze(element.target.value);
    }

    return (
        <main>
            <header>2024 올림픽 메달</header>
            <form className='AddList' onSubmit={handleSubmit}>
                <div className='SetCountry'>
                    <p>국가명</p>
                    <input type='text' value={newCountry} onChange={countryChange}/>
                </div>
                <div className='SetGold'>
                    <p>금메달</p>
                    <input type='number' value={newGold} onChange={goldChange}/>
                </div>
                <div className='SetSilver'>
                    <p>은메달</p>
                    <input type='number' value={newSilver} onChange={silverChange}/>
                </div>
                <div className='SetBronze'>
                    <p>동메달</p>
                    <input type='number' value={newBronze} onChange={bronzeChange}/>
                </div>
                <button className='CreateListButton'>추가하기</button>
                <button className='AmendListButton'>수정하기</button>
            </form>
            <ul className='ShowList'>
                <div className='TopList'>
                    <p>국가명</p>
                    <p>금메달</p>
                    <p>은메달</p>
                    <p>동메달</p>
                    <p>　</p>
                </div>
                {medals.map((medalList) => (
                    <div key={medalList.id}>
                        <p>{medalList.country}</p>
                        <p>{medalList.gold}</p>
                        <p>{medalList.silver}</p>
                        <p>{medalList.bronze}</p>
                        <p>　</p>
                    </div>
                ))}
            </ul>
        </main>
    )
}

export default App