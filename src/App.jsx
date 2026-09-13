import "./App.css";
import Card from "./components/common/Card";
import Table from "./components/common/Table";
import Button from "./components/ui/Button";
import StrawberryImage from "./assets/images/strawberryMatcha.png";
import CoConutImage from "./assets/images/coconutMatcha.png";

function App() {
  return (
    <>
      <div className="flex gap-4">
        <Button
          text="Primary"
          variant="primary"
          onClick={() => alert("hello")}
        />
        <Button
          text="Secondary"
          variant="secondary"
          onClick={() => alert("Hi, I am Secondary")}
        />
        <Button text="Danger" variant="danger" disabled={true} />
      </div>

      <div>
        <Card
          title="ٍStrawberry Matcha"
          description="cold fresh drink"
          image={StrawberryImage}
        />
        <Card
          title="Coconut Matcha"
          description="cold fresh drink"
          image={CoConutImage}
        >
          <p>our most popular drink</p>
          <p>most loved by customers</p>
        </Card>
      </div>
      <div>
        <Table
          columns={["Name", "Age", "City"]}
          data={[
            { name: "John", age: 30, city: "New York" },
            { name: "Jane", age: 25, city: "Los Angeles" },
            { name: "Mike", age: 35, city: "Chicago" },
            { name: "Emily", age: 28, city: "Houston" },
            { name: "David", age: 32, city: "Phoenix" },
          ]}
          striped={true}
        />

        <Table
          columns={["Product", "Price", "Count"]}
          data={[
            { product: "Laptop", price: "$100", count: 5 },
            { product: "Phone", price: "$500", count: 10 },
            { product: "Tablet", price: "$300", count: 7 },
          ]}
          striped={false}
        />
      </div>
    </>
  );
}

export default App;
