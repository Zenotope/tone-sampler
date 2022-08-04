import logo from './logo.svg';
import * as Tone from 'tone'
import './App.css';



document.querySelector('button')?.addEventListener('click', async () => {
	await Tone.start()
	console.log('audio is ready')
})
		
const sampler = new Tone.Sampler({
	urls: {
		C3: "C3.mp3",
	},
	baseUrl: "./src/piano/",
	onload: () => {
		sampler.triggerAttackRelease(["C3"], 0.5);
	}
}).toDestination();

console.log(sampler)
const sampler2 = new Tone.Sampler({
	urls: {
		A1: "A1.mp3",
		A2: "A2.mp3",
	},
	baseUrl: "https://tonejs.github.io/audio/casio/",
	onload: () => {
		sampler2.triggerAttackRelease(["C1", "E1", "G1", "B1"], 0.5);
	}
}).toDestination();

  console.log(sampler)
  console.log(sampler2)
 
  // const sampler = new Tone.Sampler({
  //   urls: {
  //     A1: "A1.mp3",
  //     A2: "A2.mp3",
  //   },
  //   baseUrl: "https://tonejs.github.io/audio/casio/",
  //   onload: () => {
  //     sampler.triggerAttackRelease(["C1", "E1", "G1", "B1"], 0.5);
  //   }
  // }).toDestination();

  // console.log(sampler2)

function App() {
  return (
    <div className="App">
     <p>test</p>
    <button>start</button>
    </div>
  );
}

export default App;
