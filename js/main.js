(() => {
    console.log ('Javascript is running')

    let hotspots = document.querySelectorAll('.Hotspot')

    let hotspotInfo = [
        {
            info : "An adaptive and flexible brand to help you express yourself the way you deserve to express yourself!"
        },

        {
            info: "A rubbery, but soft cushion so your ears can listen to whatever you want with as much comfort as possible!"
        },

        {
            info: "The area where we will insert a logo or image based on the source of the theme of the ear bud!"
        },

        {
            info: "Safety clips to ensure that the ear bud doesn't slip out of its case and doubles as alternative charger!"
        },

        {
            info: "Safety clips to ensure that the ear bud doesn't slip out of its case and doubles as alternative charger!"
        },

        {
            info: "Durable shell that protects the components inside from serious damage!"
        },
    ]

    function loadHotspotInfo() {
        hotspotInfo.forEach((hotspotBox, index) => {
            let hotspotTarget = document.querySelector(`#hotspot-info-${index + 1}`);
            
            // Create a new paragraph element
            let paragraph = document.createElement("p");
            paragraph.textContent = hotspotBox.info;
            
            // Append the paragraph to the hotspotTarget
            hotspotTarget.appendChild(paragraph);
        });
    }

    loadHotspotInfo();

    function showHotspot(e) {
        let hoveredSpot = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`)
        gsap.to(hoveredSpot, 1, {autoAlpha:1});
        console.log ("Mouse enter")
    }

    function hideHotspot(e) {
        let hoveredSpot = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`)
        gsap.to(hoveredSpot, 0.5, {autoAlpha:0});
        console.log ("Mouse left")
    }

    hotspots.forEach(hotspot => {
        hotspot.addEventListener('mouseover', showHotspot)
        hotspot.addEventListener('mouseout', hideHotspot)
    });
})();