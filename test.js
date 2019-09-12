Blockly.Blocks['my_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("just for fun");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['my_block'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'print("Hello hell")\n';
  return code;
};
