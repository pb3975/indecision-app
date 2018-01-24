const app = {
    title: "Visibility Toggle",
    details: "Here are some details"
};

const appRoot = document.getElementById('app');

let buttonVal = "Show";

const buttonClick = () => {
    if (buttonVal !== "Show") {
        buttonVal = "Show";
        app.details = "";
    }
    else {
        buttonVal = "Hide";
        app.details = "Here are some details";
    }
    visible();

};

const visible =  () => {
    const template = (
      <div>
        <h1>{app.title}</h1>
        <button onClick={buttonClick}>{buttonVal}</button>
        <p> {app.details} </p>
      </div>
    );
  
    ReactDOM.render(template, appRoot);
  }
  visible();
