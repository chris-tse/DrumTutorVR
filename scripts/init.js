const transparentBlue = new THREE.MeshBasicMaterial({color: 0x6262E3, opacity: 0.5});

const toMakeBlue = [...document.querySelectorAll(".makeBlue")];

toMakeBlue.forEach(drum => {
    drum.setAttribute('material', {
        color: '#6262E3',
        opacity: 0.5
    })
})