const transparentBlue = new THREE.MeshBasicMaterial({color: 0x6262E3, opacity: 0.5});


const toMakeBlue = [...document.querySelectorAll(".makeBlue")];
const drumPieceToScale = [...document.querySelectorAll(".drumPiece")];



toMakeBlue.forEach(drum => {
    drum.setAttribute('material', {
        color: '#6262E3',
        opacity: 0.5
    })
})

drumPieceToScale.forEach(obj => {
    obj.setAttribute('scale', {
        x: 0.2,
        y: 0.2,
        z: 0.2
    })
})
