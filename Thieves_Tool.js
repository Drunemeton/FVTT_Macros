let flavor = "<h3>Is attempting to use his Thieves’ Tools…</h3>";
let formula = "1d20 + @abilities.dex.mod + @prof";
new Roll(formula, token.actor.getRollData()).roll().toMessage({
  speaker: ChatMessage.getSpeaker({
    actor: this.actor,
  }),
  flavor: flavor,
});
