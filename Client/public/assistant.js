(function(){

    // user Data

    const script = document.currentScript;

    const userId = script?.dataset?.userId

    const theme = "dark"

    let assistantConfig = null

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
    
    document.body.appendChild(button)

    // toggle popup

    let open = false

    button.onclick = ()=>{
        open = !open;
        popup.style.display = open ? "flex":"none";
    }


    // load Assistant

    const loadAssistant = async () => {
        try {
            const res = await fetch(`http://localhost:8000/api/assistant/config/${userId}`)

            const data = await res.json();

            // console.log(data);

            if(data){
                assistantConfig = data.user;
                applyConfig()
                
            }
        } catch (error) {
            console.log("Assistant Load Error:",error);
        }
    }

    const applyConfig = ()=>{
        if(!assistantConfig)return;

        popup.className = `voxora-popup theme-${assistantConfig.theme}`;

        button.className = `voxora-btn theme-${assistantConfig.theme}`;

        const title = popup.querySelector(".voxora-title");

        title.innerHTML = `Hello! I'm ${assistantConfig.assistantName}`;

        const subTitle = popup.querySelector(".voxora-sub")

        subTitle.innerHTML = `Welcome to ${assistantConfig.businessName}.<br />
        Ask anything about your website.`;

    }

    loadAssistant()


    // ==================Speech Recognition===================
    

    // Element


    const status = popup.querySelector(".voxora-status")

    const wave = popup.querySelector(".voxora-wave");

    const userText = popup.querySelector(".voxora-user-text");

    const aiText = popup.querySelector(".voxora-ai-text");

    const mic = popup.querySelector(".voxora-mic");

    // text-speech conversion

    const speak = (text) => {
        window.speechSynthesis.cancel();

    // Show AI response
    aiText.innerText = text;

    status.innerText = "AI Speaking...";

        const speech = new SpeechSynthesisUtterance(text)

        speech.lang = "hi-IN";

        speech.rate = 1;

        speech.pitch = 1;

        speech.volume = 1;

        // Voice end
        speech.onend = () => {
            status.innerText = "Tap button to Speak";

            wave.style.opacity = "0";
        };

        // Start speaking
        window.speechSynthesis.speak(
            speech
        );

    }


    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

    if(SpeechRecognition){
        const recognition = new SpeechRecognition();

        recognition.lang = "en-US";

        recognition.continuous = false;

        recognition.interimResults = false;

        mic.onclick=()=>{
            wave.style.opacity ="1";

            status.innerText ="Listening...";

            userText.innerText = "";

            aiText.innerText = "";

            recognition.start();
        }

        recognition.onresult=(e)=>{
            const text = e.results[0][0].transcript

            userText.innerText = "You: " + text;

            recognition.stop();
        }
    }



})();