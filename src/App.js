import logo from "./logo.svg";
import "./App.css";
import PersonList from "./components/PersonList";
import PersonDetails from "./components/PersonDetails";
import ErrorBoundary from "./errorboundary/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <PersonDetails />
        <PersonList />
      </ErrorBoundary>
    </div>
  );
}

export default App;