import Employee from "./components/Employee"

function App() {

  
  return (
    <div>
    <h1 className="center">Employee Directory</h1>
    <Employee name="Alice Johnson" position="Software Engineer" age={30} />
    <Employee name="Bob Smith" position="Project Manager" />
    <Employee age={25} />
    <Employee />
  </div>
  )
}

export default App
