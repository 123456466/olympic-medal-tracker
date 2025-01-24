import { useState } from 'react'
import './App.css'

const App = () => {
    const SAMPLE = []

    const [medals, setMedals] = useState(SAMPLE)

    const [newCountry, setNewCountry] = useState(''),
        [newGold, setNewGold] = useState(''),
        [newSilver, setNewSilver] = useState(''),
        [newBronze, setNewBronze] = useState('');

    const handleSubmit = (element) => {
        element.preventDefault();

        if (!newCountry.trim()) {
            return alert('국가를 입력 해주세요.')
        } else if (!newGold.trim() || !newSilver.trim() || !newBronze.trim()) {
            return alert('메달 수를 입력 해주세요.')
        } else if (newGold < 0 || newSilver < 0 || newBronze < 0) {
            return alert('숫자가 너무 낮습니다!')
        } else if (medals.map((List) => (List.country)).includes(newCountry)) {
            return alert('이미 존재하는 국가입니다.')
        }

        setMedals([...medals, {
            id: crypto.randomUUID(),
            country: newCountry,
            gold: newGold,
            silver: newSilver,
            bronze: newBronze
        }]);
        setNewCountry('');
        setNewGold('');
        setNewSilver('');
        setNewBronze('');
    }

    const countryChange = (element) => {
        setNewCountry(element.target.value);
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

    const amendList = (element) => {
        element.preventDefault()

        if (!medals.find(({ country }) => country === newCountry)) {
            return alert('국가가 존재하지 않습니다.');

        } else if (!newGold.trim() || !newSilver.trim() || !newBronze.trim()) {
            return alert('메달 수를 입력 해주세요.');

        } else if (newGold < 0 || newSilver < 0 || newBronze < 0) {
            return alert('숫자가 너무 낮습니다!');

        } else {
            const addMedal = medals.map((list) => {
                return (list.country === newCountry) ? { ...list, gold: newGold, silver: newSilver, bronze: newBronze } : list
            })
            setMedals(addMedal)
            setNewCountry('');
            setNewGold('');
            setNewSilver('');
            setNewBronze('');
        }
    }

    return (
        <main>
            <header>2024 올림픽 메달</header>
            <form className='AddList'>
                <div>
                    <p>국가명</p>
                    <input type='text' value={newCountry} onChange={countryChange} />
                </div>
                <div>
                    <p>금메달</p>
                    <input type='number' value={newGold} onChange={goldChange} />
                </div>
                <div>
                    <p>은메달</p>
                    <input type='number' value={newSilver} onChange={silverChange} />
                </div>
                <div>
                    <p>동메달</p>
                    <input type='number' value={newBronze} onChange={bronzeChange} />
                </div>
                <button className='ListButton' onClick={handleSubmit}>추가하기</button>
                <button className='ListButton' onClick={amendList}>수정하기</button>
            </form>

            <ul className='ShowList'>
                <div className='TopList'>
                    <p className='ListContents'>국가명</p>
                    <p className='ListContents'>금메달</p>
                    <p className='ListContents'>은메달</p>
                    <p className='ListContents'>동메달</p>
                    <p className='ListContents'>　</p>
                </div>
                {medals.map((medalList) => (
                    <div key={medalList.id} className='List'>
                        <p className='ListContents'>{medalList.country}</p>
                        <p className='ListContents'>{medalList.gold}</p>
                        <p className='ListContents'>{medalList.silver}</p>
                        <p className='ListContents'>{medalList.bronze}</p>
                        <button className='Delete'>Delete</button>
                    </div>
                ))}
            </ul>
        </main>
    )
}

export default App