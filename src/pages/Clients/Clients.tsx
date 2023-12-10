import { Link } from "react-router-dom";

import { ClientsWrapper, ClientsContainer } from "./styles";

function Clients() {
  return (
    <ClientsWrapper>
      <h1>Clients</h1>
      <ClientsContainer>
        <Link to={"/clients/fender"}>Fender</Link>
        <Link to={"/clients/gipson"}>Gipson</Link>
        <Link to={"/clients/ibanez"}>Ibanez</Link>
      </ClientsContainer>
    </ClientsWrapper>
  );
}

export default Clients;
