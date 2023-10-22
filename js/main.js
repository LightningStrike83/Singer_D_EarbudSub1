(() => {
    console.log ('Javascript is running')

    let hotspots = document.querySelectorAll('.Hotspot')

    let hotspotInfo = [
        {
            title : "Flexible Brand",
            info : "An adaptive and flexible brand to help you express yourself the way you deserve to express yourself!"
        },

        {
            title: "Comfort For Your Ears",
            info: "A rubbery, but soft cushion so your ears can listen to whatever you want with as much comfort as possible!"
        },

        {
            title: "Changing Faceplate",
            info: "The area where we will insert a logo or image based on the source of the theme of the ear bud!",
            image: "images/happy.svg"
        },

        {
            title: "Secure and Charge",
            info: "Safety clips to ensure that the ear bud doesn't slip out of its case and doubles as alternative charger!"
        },

        {
            title: "Snap and Plug",
            info: "Easy to snap in charging port, with charges lasting up to 8 hours!",
            image: "images/battery.svg"
        },

        {
            title: "Hard Exterior",
            info: "Durable shell that protects the components inside from serious damage!"
        },
    ]

    //This is the function the AI gave me
    function loadHotspotInfo() {
        hotspotInfo.forEach((hotspotBox, index) => {
            let hotspotTarget = document.querySelector(`#hotspot-info-${index + 1}`);
            
            let title = document.createElement("h2")
            title.textContent = hotspotBox.title

            let paragraph = document.createElement("p");
            paragraph.textContent = hotspotBox.info;
            
            hotspotTarget.appendChild(paragraph);
            hotspotTarget.appendChild(title);
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
        gsap.to(hoveredSpot, 1, {autoAlpha:0});
        console.log ("Mouse left")
    }

    hotspots.forEach(hotspot => {
        hotspot.addEventListener('mouseover', showHotspot)
        hotspot.addEventListener('mouseout', hideHotspot)
    });
})();

//AI Index

//Prompt: Is this code correct? -Inserted code; will only be providing the snippet that I changed. Everything else went untouched-

//function loadHotspotInfo() {
    //hotspotInfo.forEach((hotspotBox, index) => {
        //let hotspotTarget = document.querySelector(`#hotspot-info-${index+1}`);

        //document.createElement("p")
        //textContent = hotspotBox.info

        //hotspotTarget.appendChild();

    //})
//}

//Reply: In the loadHotspotInfo function, you are not correctly creating and appending paragraphs to your hotspotTarget. You need to create a p element, set its text content, and then append it to the target.

//In your code, you should be defining textContent as a property of the paragraph element, not as a separate variable. Here's the corrected code:

//function loadHotspotInfo() {
    //hotspotInfo.forEach((hotspotBox, index) => {
        //let hotspotTarget = document.querySelector(`#hotspot-info-${index + 1}`);
        
        // Create a new paragraph element
        //let paragraph = document.createElement("p");
        //paragraph.textContent = hotspotBox.info;
        
        // Append the paragraph to the hotspotTarget
        //hotspotTarget.appendChild(paragraph);
    //});
//}