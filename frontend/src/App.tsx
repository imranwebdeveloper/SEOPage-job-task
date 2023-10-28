import EmployeeTable from "./components/EmployeeTable";
import data from "./assets/employee.json";
import store from "./store/redux";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <EmployeeTable employees={data} />
      </Provider>
    </div>
  );
}

export default App;
