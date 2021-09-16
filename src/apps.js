var juego1 ={
    name: "Minecraft",
    img: "../../src/img/1.jpg",
    description :"Prepare for an adventure of limitless possibilities as you build, mine, battle mobs, and explore the ever-changing Minecraft landscape."
};

var juego2 ={
    name: "Valorant",
    img: "../../src/img/2.jpg",
    description :"Prepare for an adventure of limitless possibilities as you build, mine, battle mobs, and explore the ever-changing Minecraft landscape."
};

var juego3 ={
    name: "God of War",
    img: "../../src/img/3.jpg",
    description :"Prepare for an adventure of limitless possibilities as you build, mine, battle mobs, and explore the ever-changing Minecraft landscape."
};

var juego4 ={
    name: "Assasins Creed",
    img: "../../src/img/4.jpg",
    description :"Prepare for an adventure of limitless possibilities as you build, mine, battle mobs, and explore the ever-changing Minecraft landscape."
};

var juego5 ={
    name: "Rocket League",
    img: "../../src/img/5.jpg",
    description :"Prepare for an adventure of limitless possibilities as you build, mine, battle mobs, and explore the ever-changing Minecraft landscape."
};

var juego6 ={
    name: "Sims",
    img: "../../src/img/6.jpg",
    description :"Prepare for an adventure of limitless possibilities as you build, mine, battle mobs, and explore the ever-changing Minecraft landscape."
};
var juego7 ={
    name: "Mario Kart",
    img: "../../src/img/7.jpg",
    description :"Prepare for an adventure of limitless possibilities as you build, mine, battle mobs, and explore the ever-changing Minecraft landscape."
};

var juego8 ={
    name: "Resistence 3",
    img: "../../src/img/8.jpg",
    description :"Prepare for an adventure of limitless possibilities as you build, mine, battle mobs, and explore the ever-changing Minecraft landscape."
};

var juego9 ={
    name: "Destiny",
    img: "../../src/img/9.jpg",
    description :"Prepare for an adventure of limitless possibilities as you build, mine, battle mobs, and explore the ever-changing Minecraft landscape."
};


class Game extends React.Component{
    render(){
        return(
         <div class = "gameBox"> 
            <div  class="col">
    <div id="col" class="card shadow-sm">
      <img class="bd-placeholder-img card-img-top" width="100%" height="225"  preserveAspectRatio="xMidYMid slice" src = {this.props.img}></img>
      <div class="card-body">
        <h2 class="gameTitle">{this.props.name}</h2>
        <p class="card-text">{this.props.description}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>  
        );   
    }
}




class ReactElements extends React.Component{
    render(){
        return(
            <div>
                <Game name={juego1.name} img={juego1.img} description={juego1.description}/>
                <Game name={juego2.name} img={juego2.img} description={juego2.description}/>
                <Game name={juego3.name} img={juego3.img} description={juego3.description}/>
                <Game name={juego4.name} img={juego4.img} description={juego4.description}/>
                <Game name={juego5.name} img={juego5.img} description={juego5.description}/>
                <Game name={juego6.name} img={juego6.img} description={juego6.description}/>
                <Game name={juego7.name} img={juego7.img} description={juego7.description}/>
                <Game name={juego8.name} img={juego8.img} description={juego8.description}/>
                <Game name={juego9.name} img={juego9.img} description={juego9.description}/>
            </div>
        );   
    }
}

var appRoot = document.getElementById('react');

ReactDOM.render(<ReactElements/>,appRoot);