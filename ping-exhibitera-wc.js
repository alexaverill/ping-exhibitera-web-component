class PingExhibitera extends HTMLElement {
  constructor() {
    super();
  }
  async pingExhibitera() {
    let messageBody = {
        currentInteraction:false,
        group:"Group",
        helperAddress:"",
        
    }
    let data = await fetch("", {
      method: "POST",
    });
  }
  connectedCallback() {}
}
customElements.define("ping-exhibitera-wc", PingExhibitera);
