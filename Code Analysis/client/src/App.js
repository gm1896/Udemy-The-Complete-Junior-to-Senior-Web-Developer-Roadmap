import React, { Component } from 'react';
import Navigation from './components/Navigation/navigation';
import Logo from './components/Logo/logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Signin from './components/Signin/Signin.js';
import Register from './components/Register/Register.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import './App.css';
import Particles from 'react-particles-js';


const particlesOptions = {
    particles: {
            number: {
              value:200,
              density: {
                enable:true,
                value_area: 800,
              }

            }
    }
}


const initalState  = {
      input:'',
      imageUrl:'',
      boxes:[],
      route: 'signin',
      isSignedIn: false,
      user: {
        id:'',
        name:'',
        email:'',
        entries:0,
        joined:''
      }
}



class App extends Component {
  constructor(){
    super();
    this.state = initalState;
  }

  loadUser = (data) => {
    this.setState({user: {
        id:data.id,
        name:data.name,
        email:data.email,
        entries:data.entries,
        joined:data.joined
    }})
  }



  calculateFaceLocations = (data) => {
    return data.outputs[0].data.regions.map(face => {
      const clarifaiFace = face.region_info.bounding_box;
      const image = document.getElementById('inputimage');
      const width = Number(image.width);
      const height = Number(image.height);
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width -(clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
    }
    });
   
  }

  displayFaceBoxes = (boxes) => {
    console.log(boxes);
    this.setState({boxes:boxes});
  }


  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  // onButtonSubmit = () => {
  //   this.setState({imageUrl:this.state.input})
  //   fetch('https://quiet-depths-99123.herokuapp.com/imageurl',{
  //       method:'post',
  //       headers: {'Content-Type':'application/json'},
  //       body: JSON.stringify({
  //         input:this.state.input
  //       })
  //     })
  //   .then(response => response.json())
  //   .then(response => {
  //     if(response){
  //       fetch('https://quiet-depths-99123.herokuapp.com/image',{
  //       method:'put',
  //       headers: {'Content-Type':'application/json'},
  //       body: JSON.stringify({
  //         id:this.state.user.id
  //       })
  //     })
  //       .then(response =>response.json())
  //       .then(count => {
  //         this.setState(Object.assign(this.state.user, {entries:count}))
  //       })
  //       .catch(console.log)

  //       }
  //     this.displayFaceBox(this.calculateFaceLocation(response))
  //     })
  //   .catch(err => console.log(err));
  // }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
      fetch('http://localhost:3000/imageurl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: this.state.input
        })
      })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count}))
            })
            .catch(console.log)

        }
        console.log(response)
        this.displayFaceBoxes(this.calculateFaceLocations(response))
      })
      .catch(err => console.log(err));
  }



  onRouteChange = (route) => {
    if(route === 'signout'){
      this.setState(initalState)
    }else if (route === 'home'){
      this.setState({isSignedIn:true})
    }
      this.setState({route:route})
    
  }

  render() {
    const {isSignedIn,imageUrl,route,boxes} = this.state;

    return (
      <div className="App">
            <Particles className='particles'
                params={particlesOptions} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {  route === 'home'
         ? <div> 
              <Logo />
              <Rank name={this.state.user.name} entries={this.state.user.entries} />
              <ImageLinkForm 
              onInputChange={this.onInputChange} 
              onButtonSubmit={this.onButtonSubmit} 
              />
              <FaceRecognition boxes={boxes}imageUrl={imageUrl} />
            </div>
            :(route === 'signin' 
              ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              :<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>)
            
             
          }      
      </div>
    );
 }
}
export default App;
