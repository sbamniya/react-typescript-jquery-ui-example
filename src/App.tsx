import * as React from 'react';
import './App.css';
declare const $: any;

const getElements = (numberOfEle: number) =>{
  const items = [];
  for (let i = 0; i < numberOfEle; ++i) {
    items.push({id: i, name: 'Item - '+ i});
  }
  return items;
}

class App extends React.Component<{}, {
  item: any[];
}> {
  constructor(props: {}){
    super(props);
    this.state = {
      item: getElements(5)
    }
  }
  public componentDidMount(){
    $( "#sortable" ).sortable();
  }
  public addMore = () =>{
    const item = getElements(this.state.item.length + 5);
    this.setState({
      item
    });
    $( "#sortable" ).sortable('refresh'); 
  }
  public getOrder = () => {
    const itemOrder = $('#sortable').sortable("toArray");
    alert(JSON.stringify(itemOrder))
    for (let i = 0; i < itemOrder.length; i++) {
        alert("Position: " + i + " ID: " + itemOrder[i]);
    }
  }
  public render() {
    return (
      <div className="App">
        <ul id="sortable">
          {
            this.state.item.map((item:any, index:number)=>(
              <li key={index} className="ui-state-default" data-index={item.id}>{item.name}</li>
            ))
          }
        </ul>
        <button className="order-get">Order</button>
        <br />
        <button className="order-get" onClick={this.addMore}>Add 5 More..</button>
      </div>
    );
  }
}

export default App;
