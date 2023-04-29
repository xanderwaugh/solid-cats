import { StartClient } from "solid-start/entry-client";
// import { mount } from "solid-start/entry-client";
// mount(() => <StartClient />, document);
import { hydrate } from "solid-js/web";
hydrate(() => <StartClient />, document);
