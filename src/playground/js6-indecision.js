console.log("App.js is running still!");

const app = {
  title: "Indecision App",
  subTitle: "Put your life in the hands of a computer",
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderOptionArray();
  }
};

const onReset = () => {
  app.options = [];
  renderOptionArray();
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  console.log(randomNum)
  const option = app.options[randomNum];
  alert(option);
}

const appRoot = document.getElementById("app");

const numbers = [55, 101, 1000];

const renderOptionArray = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onReset}>Reset options</button>
      <ol>{
        app.options.map((option) => <li key={option}>{option}</li>)
      }
        </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderOptionArray();
