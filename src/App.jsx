import './App.css'

const App = () =>{
    return (
        <main>
            <header>2024 올림픽 메달</header>
            <from className='AddList'>
                <div className='SetCountry'>
                    <p>국가명</p>
                    <input></input>
                </div>
                <div className='SetGold'>
                <p>금메달</p>
                <input></input>
                </div>
                <div className='SetSilver'>
                <p>은메달</p>
                <input></input>
                </div>
                <div className='SetBronze'>
                <p>동메달</p>
                <input></input>
                </div>
                <button className='createListButton'>추가하기</button>
                <button className='AmendListButton'>수정하기</button>
            </from>
            <div className='ShowList'>
                <div className='List'>
                    <p>국가명</p>
                    <p>금메달</p>
                    <p>은메달</p>
                    <p>동메달</p>
                    <p>　</p>
                </div>
            </div>
        </main>
    )
}

export default App