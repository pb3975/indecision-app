class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleVisibilityToggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleVisibilityToggle}>
        {this.state.visibility ? 'Hide Details' : 'Show Details'}        
        </button>
        {this.state.visibility && (
            <div>
             <p> Here are your fucking details. </p>
            </div>
        )}
      </div>
    );

    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const app = {
//     title: "Visibility Toggle",
//     details: "Here are some details"
// };

// const appRoot = document.getElementById('app');

// let buttonVal = "Show";

// const buttonClick = () => {
//     if (buttonVal !== "Show") {
//         buttonVal = "Show";
//         app.details = "";
//     }
//     else {
//         buttonVal = "Hide";
//         app.details = "Here are some details";
//     }
//     visible();

// };

// const visible =  () => {
//     const template = (
//       <div>
//         <h1>{app.title}</h1>
//         <button onClick={buttonClick}>{buttonVal}</button>
//         <p> {app.details} </p>
//       </div>
//     );
  
//     ReactDOM.render(template, appRoot);
//   }
//   visible();
