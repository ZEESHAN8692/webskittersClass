import Button from "@/src/components/Button";
import Card from "@/src/components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <h1>Hello </h1>
    <Button label="Click me !" size="lg" variant="primary"/>
    <br />
    <Button label="Click me !" size="md" variant="secondary"/>
    <br />
    <Button label="Click me !" size="sm" variant="danger"/>

    <br /><br />


    <div className="CardContainer">
    <Card variant="primaryCard" title="Primary Card" desceription="This is a primary card" />
    <br /><br />
    <Card variant="secondaryCard" title="Secondary Card" desceription="This is a secondary card" />
    </div>



    
    </>
  );
}
