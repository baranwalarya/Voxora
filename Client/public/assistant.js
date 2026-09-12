(function(){

    // user Data

    const script = document.currentScript;

    const userId = script?.dataset?.userId

    const theme = "dark"

    const assistantConfig = null

    // load css

    const link = document.createElement("link")

    link.rel = "stylesheet"

    link.href = "http://localhost:5173/assistant.css"

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

                <div class="voxora-status">
                    Tap button to Speak
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
                    <div class="voxora-user-text">
                        
                    </div>

                <!-- AI Text -->
                    <div class="voxora-ai-text">
                        
                    </div>

            </div>

            <div class="voxora-bottom">

                <button class="voxora-mic">
                    <img src="http://localhost:5173/mic.svg" alt="mic" class="voxora-mic-icon"/>
                </button>

            </div>
            
        </div>
    `;

    document.body.appendChild(popup);

    // floating button

    const button = document.createElement("button")

    button.className = `voxora-btn theme-${theme}`

    button.innerHTML = `
        <img src="http://localhost:5173/logo.png"
        alt="logo"
    />`
    

})();