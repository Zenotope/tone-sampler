import logo from './logo.svg';
import * as Tone from 'tone'
import './App.css';

// document.querySelector('button')?.addEventListener('click', async () => {
// 	await Tone.start()
// 	console.log('audio is ready')
// })

const sampler = new Tone.Sampler({
	urls: {
    A1: "A1.mp3",
		A2: "A2.mp3",
    
	},
	baseUrl: "https://tonejs.github.io/audio/casio/",
	}).toDestination();

  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["C3", "Db3", "D3", "D3"], 0.5);
  })

  // "C3": "C3.mp3",
  //   "Db3": "C#3.mp3",
  //   "D3": "D3.mp3",
  //   "Eb3": "D#3.aif",
  //   "E3": "E3.aif",


function App() {
  return (
    <div className="App">
     <p>test</p>
    <button>start</button>
    </div>
  );
}

export default App;
