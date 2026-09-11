(function(){

    // user Data

    const script = document.currentScript;

    const userId = script?.dataset?.userId

    const theme = "dark"

    const assistantConfig = null

    // load css

    const link = document.createElement("link")

    link.rel = "stylesheet"

    link.href = "http://localhost:5173/assistaant.css"

    document.head.appendChild(link)

    // create PopUp

    const popup = document.createElement("div")

    popup.className = `voxora-popup theme-${theme}`

    popup.innerHTML = `
        <div class="voxora-overlay"></div>

        <div class="voxora-content">

            <div class="voxora-top">

                <div class="voxora-orb-wrap">

                    <div class="voxora-orb-glow"></div>

                    <div class="voxora-orb"></div>
                
                </div>

                <h2 class="voxora-title">Hello! I'm Voxora AI</h2>

                <p class="voxora-sub">
                    Your smart voice assistant.
                    <br />
                    Ask anything about your website.
                </p>

                <div class="voxora-status>
                    Top button to Speak
                </div>

                <div class="voxora-wave">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <!-- User Text -->
                    <div class="voxora-user-text"></div>

                <!-- AI Text -->
                    <div class="voxora-ai-text"></div>


            </div>
        
        </div>
    `;

})();