import React from "react";
import { storiesOf } from "@storybook/react";

import { TestComponent } from "../src/components";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  return <TestComponent />;
});
