import React, {Component} from 'react';
import Post from './Post/Post';

const post = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "Smithy Smith",
    desc: "Sed semper risus est, a porta nibh vestibulum sed. Donec porttitor quis turpis ut congue. Nam convallis malesuada urna eget bibendum. Etiam non leo sit amet nibh ullamcorper sagittis. Pellentesque eleifend dapibus ultrices. Nam sagittis, arcu vel hendrerit feugiat, sem elit posuere nisi, vel convallis tortor tellus id sapien. Mauris ac condimentum nisl.",
    img: "https://source.unsplash.com/1600x900/?nature,water"
  },
  {
    id: 2,
    title: "gravida ut quam. ",
    author: "Smithy",
    desc: "Sed semper risus est, a porta nibh vestibulum sed. Donec porttitor quis turpis ut congue. Nam convallis malesuada urna eget bibendum. Etiam non leo sit amet nibh ullamcorper sagittis. Pellentesque eleifend dapibus ultrices. Nam sagittis, arcu vel hendrerit feugiat, sem elit posuere nisi, vel convallis tortor tellus id sapien. Mauris ac condimentum nisl.",
    img: "https://source.unsplash.com/1600x900/?nature,water"
  },
  {
    id: 3,
    title: "Cras est lacus, tincidunt a cursus quis, gravida ut quam. ",
    author: "Smithy Smith",
    desc: "Sed semper risus est, a porta nibh vestibulum sed. Donec porttitor quis turpis ut congue. Nam convallis malesuada urna eget bibendum. Etiam non leo sit amet nibh ullamcorper sagittis. Pellentesque eleifend dapibus ultrices. Nam sagittis, arcu vel hendrerit feugiat, sem elit posuere nisi, vel convallis tortor tellus id sapien. Mauris ac condimentum nisl.",
    img: "https://source.unsplash.com/1600x900/?nature,water"
  }
]

class App extends Component {
  state = { 
  card: post
   }

 removeHandler = (removeCard) => {
  const oldCards = [...this.state.card];
  oldCards.splice(removeCard, 1);
  this.setState({card:oldCards});
 };
  render() {
   
    const postList = this.state.card.map((card, index) =>{
     
      return (
        <Post 
        key={card.id}
        title = {card.title} 
        author={card.author}
        desc={card.desc} 
        img = {card.img}
        click = {this.removeHandler.bind(this, index)}
        />
    
      );
    });
 
    return (

      <div className="newPost">{postList}</div>
      )
    
  }
}

export default App;