import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { Top } from "../components/Pages/Top";
import { User } from "../components/Pages/Users";
import { DefaultLayout } from "../components/templetes/DefaultLayout";
import { HeaderOnly } from "../components/templetes/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route exact path="/users">
          <HeaderOnly>
            <User />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
