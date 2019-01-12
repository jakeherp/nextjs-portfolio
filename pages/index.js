import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";

import { Button, Container } from "reactstrap";

const Index = () => (
  <BaseLayout>
    <Container>
      <Button color="danger">Danger!</Button>
    </Container>
  </BaseLayout>
);

export default Index;
