import React from "react";
import { Button, Icon, Header } from "../lib";

const App = () => {
  return(
    <>
      <div style={{margin: 50, marginBottom: 10}}>
        <h2>Typography Header</h2>
        <div className="mt-3 mb-5">
          <Header as="h1">Header 1</Header>
          <Header as="h2">Header 2</Header>
          <Header as="h3">Header 3</Header>
          <Header as="h4">Header 4</Header>
          <Header as="h5">Header 5</Header>
          <Header as="h6">Header 6</Header>
        </div>
        <h2>Typography Header with sub</h2>
        <div className="mt-3 mb-5">
          <Header.Sub as="h1" headerText="Account Settings" subText="Manage your account settings and set e-mail preferences" />
        </div>
        <h2>Typography Header Icon</h2>
        <div className="mt-3 mb-5">
          <Header.Sub as="h1" headerText="Account Settings" subText="Manage your account settings and set e-mail preferences" icon="cog" iconPosition="center" />
        </div>
        <h2>Icons</h2>
        <div className="h-14 flex flex-wrap content-center">
          <div><Icon icon="academic-cap" size="md" color="gray" /></div>
        </div>
      </div>
      <div style={{margin: 50, marginBottom: 10}}>
        <h2>Fluid Button</h2>
        <Button fluid mb={3}>Fluid</Button>
        <Button fluid labeled labeledIcon="academic-cap" mb={3}>Fluid</Button>
        <Button fluid loading loadingText="Loading..." mb={3}>Fluid</Button>
        <h2>Size Buttons</h2>
        <div className="h-14 flex flex-wrap content-center">
          <div>
            <Button size="xs" mr={5}>Size XS</Button>
          </div>
          <div>
            <Button size="sm" mr={5}>Size SM</Button>
          </div>
          <div>
            <Button size="md" mr={5}>Size MD</Button>
          </div>
          <div>
            <Button size="lg">Size LG</Button>
          </div>
        </div>
        <h2>Loading Button</h2>
        <div className="h-14 flex flex-wrap content-center">
          <div>
            <Button loading loadingText={"Loading..."} mr={5} /> 
          </div>
          <div>
            <Button loading loadingPosition="right" loadingText={"Loading..."} mr={5} />
          </div>
          <div>
            <Button loading loadingPosition="center" />
          </div>
        </div>
        <h2>Coloring Button</h2>
        <div className="h-14 flex flex-wrap content-center">
          <div>
            <Button color="black" mr={5}>Black</Button>
          </div>
          <div>
            <Button color="white" mr={5}>White</Button>
          </div>
          <div>
            <Button color="gray" mr={5}>Gray</Button>
          </div>
          <div>
            <Button color="red" mr={5}>Red</Button>
          </div>
          <div>
            <Button color="blue" mr={5}>Blue</Button>
          </div>
          <div>
            <Button color="yellow" mr={5}>Yellow</Button>
          </div>
          <div>
            <Button color="green" mr={5}>Green</Button>
          </div>
          <div>
            <Button color="indigo" mr={5}>Indigo</Button>
          </div>
          <div>
            <Button color="purple" mr={5}>Purple</Button>
          </div>
          <div>
            <Button color="pink" mr={5}>Pink</Button>
          </div>
        </div>
        <h2>Ghost Button</h2>
        <div className="h-14 flex flex-wrap content-center">
          <div>
            <Button ghost color="black" mr={5}>Black</Button>
          </div>
          <div>
            <Button ghost color="white" mr={5}>White</Button>
          </div>
          <div>
            <Button ghost color="gray" mr={5}>Gray</Button>
          </div>
          <div>
            <Button ghost color="red" mr={5}>Red</Button>
          </div>
          <div>
            <Button ghost color="blue" mr={5}>Blue</Button>
          </div>
          <div>
            <Button ghost color="yellow" mr={5}>Yellow</Button>
          </div>
          <div>
            <Button ghost color="green" mr={5}>Green</Button>
          </div>
          <div>
            <Button ghost color="indigo" mr={5}>Indigo</Button>
          </div>
          <div>
            <Button ghost color="purple" mr={5}>Purple</Button>
          </div>
          <div>
            <Button ghost color="pink" mr={5}>Pink</Button>
          </div>
        </div>
        <h2>Disabled Button</h2>
        <div className="h-14 flex flex-wrap content-center">
          <div>
            <Button disabled mr={5}>Disabled Button</Button>
          </div>
          <div>
            <Button disabled ghost mr={5}>Disabled Button</Button>
          </div>
        </div>
        <h2>Social Button</h2>
        <div className="h-14 flex flex-wrap content-center">
          <div>
            <Button color="facebook" mr={5}>Facebook</Button>
          </div>
          <div>
            <Button color="twitter" mr={5}>Twitter</Button>
          </div>
          <div>
            <Button color="whatsapp" mr={5}>Whatsapp</Button>
          </div>
        </div>
        <h2>Button Icon</h2>
        <div className="h-14 flex flex-wrap content-center">
          <div>
            <Button labeled labeledIcon="academic-cap" mr={5}>Academic Cap Icon</Button>
          </div>
          <div>
            <Button labeled labeledIcon="academic-cap" labeledPosition="right" mr={5}>Academic Cap Icon</Button>
          </div>
        </div>
        <h2>Animate Button</h2>
        <div className="h-14 flex flex-wrap content-center">
          <div>
            <Button animate="ping" mr={5}>Ping</Button>
          </div>
          <div>
            <Button animate="pulse" mr={5}>Pulse</Button>
          </div>
          <div>
            <Button animate="bounce" mr={5}>Bounce</Button>
          </div>
        </div>
        <h2>Border Button</h2>
        <div className="h-14 flex flex-wrap content-center">
          <div>
            <Button ghost border="dotted" mr={5}>Dotted</Button>
          </div>
          <div>
            <Button ghost border="dashed" mr={5}>Dashed</Button>
          </div>
        </div>
        <h2>Rounded Button</h2>
        <div className="h-14 flex flex-wrap content-center">
          <div>
            <Button rounded="none" mr={3}>Rounded None</Button>
          </div>
          <div>
            <Button rounded="xs" mr={3}>Rounded XS</Button>
          </div>
          <div>
            <Button rounded="sm" mr={3}>Rounded SM</Button>
          </div>
          <div>
            <Button rounded="md" mr={3}>Rounded MD</Button>
          </div>
          <div>
            <Button rounded="lg" mr={3}>Rounded LG</Button>
          </div>
          <div>
            <Button rounded="full" mr={3}>Rounded Full</Button>
          </div>
          <div>
            <Button circle mr={5}>Circle</Button>
          </div>
        </div>
        <h2>Group Button</h2>
        <div className="h-14 flex flex-wrap content-center">
          <div>
            <Button.Group>
              <Button size="md" roundedPosition="left">1</Button>
              <Button size="md" rounded="none">2</Button>
              <Button size="md" roundedPosition="right">3</Button>
            </Button.Group>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
