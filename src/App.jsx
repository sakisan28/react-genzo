import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [targetVolume, setTargetVolume] = useState(300)
  const [targetTemp, setTargetTemp] = useState(20)
  const [dilutionRatio, setDilutionRatio] = useState(9)
  const [developerTemp, setDeveloperTemp] = useState(25)
  const [developerVolume, setDeveloperVolume] = useState(30)
  const [waterVolume, setWaterVolume] = useState(270)
  const [waterTemp, setWaterTemp] = useState(19.4)


  function recalculate() {
    const devVolume = targetVolume / (dilutionRatio + 1)
    setDeveloperVolume(devVolume)
    const watVolume = targetVolume - devVolume
    setWaterVolume(watVolume)
    const watTemp = Math.round(((targetVolume * targetTemp - devVolume * developerTemp) / watVolume) * 10) / 10
    setWaterTemp(watTemp)
  }

  return (
    <>
      <div className="rounded outline shadow-lg p-4 m-4 flex flex-col">
        <div className="grid grid-cols-[10rem_auto_4rem] gap-2 m-3">
            <div className="h-10 w-full bg-gradient-to-r from-sky-700 to-sky-200 bg-clip-text text-transparent col-span-3 text-xl font-bold italic">現像液の希釈水の水温の計算</div>
            
            <div className=" italic">ターゲット量</div>
            <input className=" text-right border rounded-lg pr-4" value={targetVolume} onChange={(e) => setTargetVolume(Number(e.target.value))}></input>
            <div>ml</div>

            <div className=" italic">ターゲット温度</div>
            <input className=" text-right border rounded-lg pr-4" value={targetTemp} onChange={(e) => setTargetTemp(Number(e.target.value))}></input>
            <div>℃</div>

            <div className=" italic">現像液の希釈割合 <span className="text-xs">(1:x)</span></div>
            <input className=" text-right border rounded-lg pr-4" value={dilutionRatio} onChange={(e) => setDilutionRatio(Number(e.target.value))}></input>
            <div></div>

            <div className=" italic">現像液の量</div>
            <div className=" text-right rounded-lg pr-4">{developerVolume}</div>
            <div>ml</div>

            <div className=" italic">現像液の温度</div>
            <input className=" text-right border rounded-lg pr-4" value={developerTemp} onChange={(e) => setDeveloperTemp(Number(e.target.value))}></input>
            <div>℃</div>

            <div className=" italic">加える水の量</div>
            <div className=" text-right rounded-lg pr-4">{waterVolume}</div>
            <div>ml</div>

            <div className=" italic">加える水の温度</div>
            <div className=" text-right rounded-lg pr-4">{waterTemp}</div>
            <div>℃</div>

        </div>
        <input type="button" value="再計算" className="self-center bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded" onClick={recalculate}></input>
      </div>


      {false &&
      <div className="flex rounded p-6 outline shadow-lg m-6">
        <div className="grid grid-cols-[11rem_8rem_4rem] gap-2 m-4">
            <div className="h-10 w-full bg-gradient-to-r from-sky-700 to-sky-200 bg-clip-text text-transparent col-span-3 text-xl font-bold italic">保温バケツの計算</div>

            <div className=" italic">水の量</div>
            <input className=" text-right border rounded-lg pr-4" value="300"></input>
            <div>ml</div>
            
            <div className=" italic">ターゲット温度</div>
            <input className=" text-right border rounded-lg pr-4" value="20"></input>
            <div>℃</div>

            <div className=" italic">現在の水の温度</div>
            <input className=" text-right border rounded-lg pr-4" value="25"></input>
            <div>℃</div>

            <div className=" italic">氷の量</div>
            <div className=" text-right rounded-lg pr-4 bg-sky-100">270</div>
            <div>g</div>
        </div>
      </div>
  }
    </>
  )
}

export default App
