import { getLinks } from "@src/lib/api";
import "@src/styles/index.css";
import { createEffect, createSignal } from "solid-js";

const Popup = () => {
  
  const [links, setLinks] = createSignal([]);
  
  createEffect(async () => {
    const links = await getLinks()
    setLinks(links)
  });

  return (
    <div>
      {links().map((link) => (
        <div class="link">
          {link.url}
        </div>
      ))}
    </div>
  );
};

export default Popup;
