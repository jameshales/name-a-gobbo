const grammar = tracery.createGrammar(nameGrammar);
grammar.addModifiers(baseEngModifiers);

function generateNames() {
  const nodes = []
  for (let i = 0; i < 20; i++) {
    const name = grammar.flatten("#name#")
    nodes.push($("<li></li>").text(name))
  }
  $(".card ul").empty().append(nodes)
}

$(document).ready(function() {
  generateNames()
})
