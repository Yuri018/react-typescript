import { Link } from "react-router-dom";

import { ClientsWrapper, ClientsContainer } from "./styles";

function Clients() {
  return (
    <ClientsWrapper>
      <h1>Clients</h1>
      <ClientsContainer>
        <Link to={"fender"}>Fender</Link>
        <Link to={"gipson"}>Gipson</Link>
        <Link to={"ibanez"}>Ibanez</Link>
      </ClientsContainer>
    </ClientsWrapper>
  );
}

export default Clients;
