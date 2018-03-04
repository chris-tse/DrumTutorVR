AFRAME.registerComponent('transparent-blue', {
  schema: {
    color: {default: '#6262E3'},
    opacity: {default: 0.5}
  },
  init: function() {
    this.material = new THREE.ShaderMaterial(data);
    this.update();
  }
})