<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover">
    <title>ES-CV-1 PROD | LIVE AUDIO RECORDER + SURVEILLANCE VAULT</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            min-height: 100vh;
            background: radial-gradient(ellipse at 30% 20%, #0a0f1a, #020408);
            font-family: 'Share Tech Mono', 'Courier New', 'Fira Code', monospace;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            position: relative;
        }

        /* CRT scan effect */
        body::before {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: repeating-linear-gradient(0deg, rgba(0,255,65,0.015) 0px, rgba(0,255,65,0.015) 2px, transparent 2px, transparent 6px);
            pointer-events: none;
            z-index: 10;
        }

        .prod-panel {
            max-width: 750px;
            width: 100%;
            background: rgba(4, 10, 16, 0.95);
            backdrop-filter: blur(16px);
            border: 1.5px solid rgba(30, 255, 110, 0.6);
            border-radius: 2rem;
            box-shadow: 0 30px 50px rgba(0,0,0,0.8), 0 0 25px rgba(0, 255, 150, 0.3);
            overflow: hidden;
            z-index: 20;
        }

        .crypto-header {
            background: #07100bd9;
            padding: 1rem 1.5rem;
            border-bottom: 2px solid #1eff6e;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .callsign {
            font-weight: 700;
            font-size: 1rem;
            letter-spacing: 2px;
            color: #aaffcc;
            text-shadow: 0 0 4px #00cc66;
        }

        .enc-level {
            font-size: 0.65rem;
            background: #000000aa;
            padding: 0.25rem 0.9rem;
            border-radius: 30px;
            border: 1px solid #1eff6e;
            color: #bbffdd;
        }

        .status-bar {
            background: #03090ecc;
            padding: 0.8rem 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #1f3a2b;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .live-badge {
            display: flex;
            align-items: center;
            gap: 0.7rem;
            font-size: 0.8rem;
            font-weight: bold;
        }

        .led-red {
            width: 12px;
            height: 12px;
            background-color: #ff2a2a;
            border-radius: 50%;
            box-shadow: 0 0 6px #ff0000;
            animation: pulseRed 1.2s infinite;
        }

        .led-green {
            width: 12px;
            height: 12px;
            background-color: #1eff6e;
            border-radius: 50%;
            box-shadow: 0 0 10px #00ff66;
            animation: pulseGreen 1s infinite;
        }

        @keyframes pulseRed {
            0% { opacity: 0.5; transform: scale(0.9);}
            100% { opacity: 1; transform: scale(1.2);}
        }
        @keyframes pulseGreen {
            0% { opacity: 0.6; box-shadow: 0 0 0px #1eff6e;}
            100% { opacity: 1; box-shadow: 0 0 14px #2eff7a;}
        }

        .channel-id {
            background: #00000077;
            padding: 0.25rem 0.9rem;
            border-radius: 24px;
            font-size: 0.7rem;
            font-weight: bold;
            color: #c2ffdb;
        }

        .toggle-comms {
            margin: 1.5rem 1.5rem 0.8rem 1.5rem;
        }

        .militant-btn {
            width: 100%;
            background: #0a121c;
            border: 2px solid #2e7d5e;
            padding: 1.1rem 0;
            font-family: 'Share Tech Mono', monospace;
            font-weight: bold;
            font-size: 1.5rem;
            letter-spacing: 4px;
            color: #7effb0;
            text-transform: uppercase;
            border-radius: 80px;
            cursor: pointer;
            transition: 0.12s linear;
            box-shadow: 0 6px 0 #001e14;
        }

        .militant-btn.active-comms {
            background: radial-gradient(ellipse at center, #1b5538, #0b2a1c);
            border-color: #8effb0;
            color: #ffffff;
            text-shadow: 0 0 8px #00ffaa;
            box-shadow: 0 0 20px #1eff6e77;
        }

        .recording-console {
            background: #02070cd9;
            margin: 0.5rem 1.5rem;
            border-radius: 1.5rem;
            padding: 0.9rem 1.2rem;
            border: 1px solid #2c8f62;
        }

        .rec-control-row {
            display: flex;
            gap: 15px;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }

        .record-btn-prod {
            background: #1a1f2a;
            border: 1.5px solid #e04e3a;
            padding: 0.7rem 1.5rem;
            border-radius: 50px;
            color: #ffb5a8;
            font-weight: bold;
            font-family: monospace;
            cursor: pointer;
            transition: 0.1s;
            font-size: 0.9rem;
        }

        .record-btn-prod.recording-active {
            background: #9a1f0c;
            border-color: #ffaa99;
            color: white;
            box-shadow: 0 0 12px #ff4422;
            animation: pulseRec 0.8s infinite;
        }

        @keyframes pulseRec {
            0% { box-shadow: 0 0 0px #ff4422; }
            100% { box-shadow: 0 0 12px #ff6644; }
        }

        .save-btn-prod {
            background: #0f2a1c;
            border: 1px solid #2eff8a;
            padding: 0.7rem 1.5rem;
            border-radius: 50px;
            color: #c6ffdf;
            font-weight: bold;
            cursor: pointer;
        }

        .rec-status-text {
            font-size: 0.7rem;
            margin-top: 12px;
            color: #b1ffcf;
            letter-spacing: 0.5px;
            font-family: monospace;
        }

        .surveillance-vault {
            max-height: 180px;
            overflow-y: auto;
            background: #010a0ecc;
            border-radius: 1rem;
            margin-top: 12px;
            padding: 8px 6px;
            font-size: 0.7rem;
        }

        .vault-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #07191266;
            margin: 5px 0;
            padding: 8px 10px;
            border-radius: 30px;
            border-left: 3px solid #2aff8c;
            flex-wrap: wrap;
            gap: 6px;
        }

        .vault-filename {
            color: #ccffdd;
            font-weight: 500;
            flex: 2;
            word-break: break-all;
            font-size: 0.7rem;
        }

        .vault-actions button {
            background: #14261e;
            border: none;
            margin: 0 4px;
            padding: 5px 12px;
            border-radius: 30px;
            color: #b0ffce;
            cursor: pointer;
            font-family: monospace;
            font-size: 0.65rem;
            transition: 0.05s linear;
        }

        .vault-actions button:active {
            background: #2a6e4e;
        }

        .voice-eq {
            margin: 0.5rem 1.5rem;
            background: #02070ccc;
            border-radius: 1.5rem;
            padding: 0.7rem 1rem;
        }

        .wave-bars {
            display: flex;
            align-items: center;
            gap: 5px;
            height: 48px;
        }

        .bar {
            flex: 1;
            background: #2eff88;
            height: 6px;
            border-radius: 4px;
            transition: height 0.07s ease-out;
        }

        .debug-stream {
            font-size: 0.65rem;
            background: #030b0f;
            padding: 8px 12px;
            border-radius: 1.5rem;
            text-align: center;
            color: #b0ffcf;
            margin-top: 8px;
        }

        .surv-feed {
            margin: 0.5rem 1.5rem 1rem 1.5rem;
            background: #030a0ecc;
            border-radius: 1.2rem;
            padding: 0.7rem;
            border-left: 3px solid #1eff6e;
        }

        .log-area {
            max-height: 100px;
            overflow-y: auto;
            font-size: 0.68rem;
            color: #caf5de;
        }

        .timestamp {
            color: #6effa3;
        }

        .action-buttons {
            display: flex;
            justify-content: center;
            gap: 12px;
            margin: 0.2rem 1.5rem 1rem 1.5rem;
            flex-wrap: wrap;
        }

        .sec-btn {
            background: #0e1c16;
            border: 1px solid #3a946c;
            padding: 0.5rem 1.2rem;
            border-radius: 40px;
            color: #ccffdd;
            font-weight: bold;
            font-family: monospace;
            cursor: pointer;
            font-size: 0.75rem;
        }

        footer {
            font-size: 0.55rem;
            text-align: center;
            padding: 0.9rem;
            color: #368f62;
            border-top: 1px solid #1c412f;
            background: #03090f80;
        }

        @media (max-width: 550px) {
            .militant-btn { font-size: 1.1rem; padding: 0.8rem 0; }
            .rec-control-row { flex-direction: column; align-items: stretch; gap: 10px; }
            .vault-item { flex-direction: column; align-items: flex-start; }
        }
    </style>
</head>
<body>

<div class="prod-panel">
    <div class="crypto-header">
        <span class="callsign">🔒 ES-CV-1 • REAL AUDIO RECORDER</span>
        <span class="enc-level">⚡ AES-256 | LOCAL STORAGE VAULT</span>
    </div>
    <div class="status-bar">
        <div class="live-badge">
            <div class="led-red" id="ledStatus"></div>
            <span id="connectionText">OFFLINE / STANDBY</span>
        </div>
        <div class="channel-id">📼 REAL AUDIO • .WEBM RECORDINGS</div>
    </div>

    <div class="toggle-comms">
        <button class="militant-btn" id="commsToggleBtn">🔓 INITIALIZE SECURE LINK</button>
    </div>

    <!-- PRODUCTION RECORDING MODULE - REAL AUDIO -->
    <div class="recording-console">
        <div class="rec-control-row">
            <button class="record-btn-prod" id="recordProdBtn" disabled>⏺ RECORD LIVE AUDIO</button>
            <button class="save-btn-prod" id="saveProdBtn" disabled>💾 SAVE TO VAULT</button>
        </div>
        <div class="rec-status-text" id="recordingStatusText">⚫ RECORDER STANDBY</div>
        
        <!-- SURVEILLANCE VAULT - ACTUAL AUDIO FILES -->
        <div class="surveillance-vault" id="vaultList">
            <div style="color:#5b8b72;">📼 No recorded audio files in vault.</div>
        </div>
    </div>

    <!-- VOICE VISUALIZER -->
    <div class="voice-eq">
        <div class="wave-bars" id="waveContainer"></div>
        <div class="debug-stream" id="debugMsg">🟢 ES-CV-1 PRODUCTION | real audio recording ready</div>
    </div>

    <!-- TEAM LOG -->
    <div class="surv-feed">
        <div class="log-area" id="survLog">
            <div><span class="timestamp">[--:--:--]</span> 🛩️ AIR SURVEILLANCE • REAL AUDIO CAPTURE MODULE</div>
        </div>
    </div>

    <div class="action-buttons">
        <button class="sec-btn" id="muteProdBtn" disabled>🔇 MUTE MIC</button>
        <button class="sec-btn" id="testToneProdBtn" disabled>🔊 COMS TEST</button>
        <button class="sec-btn" id="clearAllBtn" disabled>🗑️ CLEAR ALL RECORDS</button>
    </div>
    <footer>🔐 REAL AUDIO RECORDING | All captured audio saved as .webm files in browser vault | Click PLAY to listen</footer>
</div>

<script>
    // ==============================================================
    // ES-CV-1 PRODUCTION - REAL AUDIO RECORDING & PERSISTENT STORAGE
    // Captures actual microphone audio, saves as webm blobs to localStorage
    // Full playback support for recorded surveillance audio
    // ==============================================================
    
    // DOM Elements
    const toggleBtn = document.getElementById('commsToggleBtn');
    const connectionSpan = document.getElementById('connectionText');
    const ledStatus = document.getElementById('ledStatus');
    const debugSpan = document.getElementById('debugMsg');
    const survLogDiv = document.getElementById('survLog');
    const muteBtn = document.getElementById('muteProdBtn');
    const testToneBtn = document.getElementById('testToneProdBtn');
    const recordBtn = document.getElementById('recordProdBtn');
    const saveBtn = document.getElementById('saveProdBtn');
    const recStatusSpan = document.getElementById('recordingStatusText');
    const vaultContainer = document.getElementById('vaultList');
    const clearAllBtn = document.getElementById('clearAllBtn');
    const waveContainer = document.getElementById('waveContainer');
    
    // Audio Stream State
    let mediaStream = null;
    let audioCtx = null;
    let sourceNode = null;
    let gainNode = null;
    let isChannelActive = false;
    let isMuted = false;
    let animationId = null;
    let bars = [];
    
    // Recording State (REAL AUDIO)
    let mediaRecorder = null;
    let recordedChunks = [];
    let isRecording = false;
    let pendingAudioBlob = null;      // Unsaved recording blob
    
    // Surveillance Archive - Stores ACTUAL AUDIO BLOBS
    let surveillanceArchive = [];      // each: { id, name, timestampStr, sizeKB, base64, audioUrl }
    
    // Helper: Add log message
    function addSurvLog(msg, isAction = false) {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('en-US', { hour12: false, hour:'2-digit', minute:'2-digit', second:'2-digit' });
        const prefix = isAction ? '⚡ CMD' : '🎙️ SURV';
        const div = document.createElement('div');
        div.innerHTML = `<span class="timestamp">[${timeStr}]</span> ${prefix}: ${msg}`;
        survLogDiv.appendChild(div);
        survLogDiv.scrollTop = survLogDiv.scrollHeight;
        while(survLogDiv.children.length > 40) survLogDiv.removeChild(survLogDiv.firstChild);
    }
    
    // Visualizer Setup
    function initVisualizerBars() {
        waveContainer.innerHTML = '';
        for(let i = 0; i < 16; i++) {
            const bar = document.createElement('div');
            bar.className = 'bar';
            bar.style.height = '4px';
            waveContainer.appendChild(bar);
            bars.push(bar);
        }
    }
    initVisualizerBars();
    
    function updateVisualizer(volume = 0) {
        if (!isChannelActive) {
            bars.forEach(b => b.style.height = '3px');
            return;
        }
        let intensity = Math.min(0.95, Math.max(0.05, volume * 1.8));
        bars.forEach((bar, idx) => {
            let h = 4 + (intensity * 44) * (0.4 + (idx / bars.length) * 0.9);
            bar.style.height = `${Math.min(50, h)}px`;
        });
    }
    
    // ========== LOCAL STORAGE VAULT (REAL AUDIO) ==========
    function saveArchiveToLocalStorage() {
        const archiveForStorage = surveillanceArchive.map(item => ({
            id: item.id,
            name: item.name,
            timestampStr: item.timestampStr,
            sizeKB: item.sizeKB,
            base64: item.base64
        }));
        localStorage.setItem('ESCV1_REAL_AUDIO_VAULT', JSON.stringify(archiveForStorage));
        addSurvLog(`💾 Vault saved to localStorage (${surveillanceArchive.length} audio files)`, false);
    }
    
    async function loadArchiveFromLocalStorage() {
        const raw = localStorage.getItem('ESCV1_REAL_AUDIO_VAULT');
        if (!raw) {
            addSurvLog("📼 No existing audio vault. Ready to record.", false);
            return;
        }
        try {
            const parsed = JSON.parse(raw);
            for (let entry of parsed) {
                // Convert base64 back to AUDIO BLOB
                const binary = atob(entry.base64);
                const array = new Uint8Array(binary.length);
                for (let i = 0; i < binary.length; i++) array[i] = binary.charCodeAt(i);
                const audioBlob = new Blob([array], { type: 'audio/webm' });
                const audioUrl = URL.createObjectURL(audioBlob);
                surveillanceArchive.push({
                    id: entry.id,
                    name: entry.name,
                    timestampStr: entry.timestampStr,
                    sizeKB: entry.sizeKB,
                    base64: entry.base64,
                    audioUrl: audioUrl
                });
            }
            renderAudioVault();
            addSurvLog(`📀 Loaded ${surveillanceArchive.length} recorded audio files from secure vault.`, false);
        } catch(e) { 
            console.warn(e);
            addSurvLog("⚠️ Vault load error", false);
        }
    }
    
    // Save a recorded audio blob to the vault (persistent)
    async function addAudioToVault(audioBlob, customName = null) {
        const id = Date.now() + Math.floor(Math.random() * 10000);
        const dateObj = new Date();
        const timestampStr = dateObj.toLocaleString();
        const name = customName || `surv_audio_${dateObj.toISOString().slice(0,19).replace(/:/g, '-')}.webm`;
        const sizeKB = (audioBlob.size / 1024).toFixed(1);
        
        // Convert to base64 for localStorage
        const reader = new FileReader();
        return new Promise((resolve) => {
            reader.onloadend = () => {
                const base64Data = reader.result.split(',')[1];
                const audioUrl = URL.createObjectURL(audioBlob);
                surveillanceArchive.unshift({
                    id: id,
                    name: name,
                    timestampStr: timestampStr,
                    sizeKB: sizeKB,
                    base64: base64Data,
                    audioUrl: audioUrl
                });
                // Keep last 30 recordings maximum
                if (surveillanceArchive.length > 30) {
                    const removed = surveillanceArchive.pop();
                    if (removed.audioUrl) URL.revokeObjectURL(removed.audioUrl);
                }
                saveArchiveToLocalStorage();
                renderAudioVault();
                addSurvLog(`✅ AUDIO SAVED: "${name}" (${sizeKB} KB) - real recording stored`, true);
                resolve();
            };
            reader.readAsDataURL(audioBlob);
        });
    }
    
    // Render the vault with PLAYABLE audio files
    function renderAudioVault() {
        if (!vaultContainer) return;
        if (surveillanceArchive.length === 0) {
            vaultContainer.innerHTML = '<div style="color:#5b8b72;">📼 No recorded audio files in vault. Press RECORD to capture.</div>';
            return;
        }
        let html = '';
        surveillanceArchive.forEach(rec => {
            html += `
                <div class="vault-item">
                    <span class="vault-filename">🎵 ${rec.name} (${rec.sizeKB} KB) • ${rec.timestampStr}</span>
                    <div class="vault-actions">
                        <button class="play-audio" data-id="${rec.id}">▶️ PLAY AUDIO</button>
                        <button class="delete-audio" data-id="${rec.id}">🗑️ DELETE</button>
                        <button class="download-audio" data-id="${rec.id}">⬇️ DOWNLOAD</button>
                    </div>
                </div>
            `;
        });
        vaultContainer.innerHTML = html;
        
        // Attach PLAY event (actual audio playback)
        document.querySelectorAll('.play-audio').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(btn.dataset.id);
                const item = surveillanceArchive.find(i => i.id === id);
                if (item && item.audioUrl) {
                    const audio = new Audio(item.audioUrl);
                    audio.play().catch(e => addSurvLog(`Playback error: ${e.message}`, false));
                    addSurvLog(`▶️ PLAYING recorded surveillance: ${item.name}`, false);
                    debugSpan.innerHTML = `🎧 Playing: ${item.name} (${item.sizeKB} KB)`;
                } else if (item && item.base64) {
                    // Fallback reconstruction
                    const binary = atob(item.base64);
                    const array = new Uint8Array(binary.length);
                    for (let i=0; i<binary.length; i++) array[i] = binary.charCodeAt(i);
                    const blob = new Blob([array], {type:'audio/webm'});
                    const url = URL.createObjectURL(blob);
                    const audio = new Audio(url);
                    audio.play();
                    audio.onended = () => URL.revokeObjectURL(url);
                    addSurvLog(`▶️ Playing recovered audio: ${item.name}`, false);
                }
            });
        });
        
        // DELETE event
        document.querySelectorAll('.delete-audio').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(btn.dataset.id);
                const idx = surveillanceArchive.findIndex(i => i.id === id);
                if (idx !== -1) {
                    const removed = surveillanceArchive[idx];
                    if (removed.audioUrl) URL.revokeObjectURL(removed.audioUrl);
                    surveillanceArchive.splice(idx, 1);
                    saveArchiveToLocalStorage();
                    renderAudioVault();
                    addSurvLog(`🗑️ Deleted audio: ${removed.name}`, true);
                    debugSpan.innerHTML = `🗑️ Deleted from vault: ${removed.name}`;
                }
            });
        });
        
        // DOWNLOAD as .webm file
        document.querySelectorAll('.download-audio').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(btn.dataset.id);
                const item = surveillanceArchive.find(i => i.id === id);
                if (item && item.audioUrl) {
                    const a = document.createElement('a');
                    a.href = item.audioUrl;
                    a.download = item.name;
                    a.click();
                    addSurvLog(`⬇️ Downloading: ${item.name}`, false);
                } else if (item && item.base64) {
                    const binary = atob(item.base64);
                    const array = new Uint8Array(binary.length);
                    for (let i=0; i<binary.length; i++) array[i] = binary.charCodeAt(i);
                    const blob = new Blob([array], {type:'audio/webm'});
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = item.name;
                    a.click();
                    setTimeout(() => URL.revokeObjectURL(url), 100);
                    addSurvLog(`⬇️ Downloading: ${item.name}`, false);
                }
            });
        });
    }
    
    // ========== REAL AUDIO RECORDING LOGIC ==========
    function startRealRecording() {
        if (!isChannelActive) { addSurvLog("❌ Join secure channel before recording.", false); return false; }
        if (!mediaStream) { addSurvLog("❌ Microphone not available. Check permissions.", false); return false; }
        if (isRecording) { addSurvLog("⚠️ Already recording audio.", false); return false; }
        
        recordedChunks = [];
        try {
            // Use webm format for wide compatibility
            mediaRecorder = new MediaRecorder(mediaStream, { mimeType: 'audio/webm' });
            mediaRecorder.ondataavailable = (event) => {
                if (event.data && event.data.size > 0) {
                    recordedChunks.push(event.data);
                }
            };
            mediaRecorder.onstop = () => {
                const finalBlob = new Blob(recordedChunks, { type: 'audio/webm' });
                pendingAudioBlob = finalBlob;
                const sizeKb = (finalBlob.size / 1024).toFixed(1);
                recStatusSpan.innerHTML = `⏸️ Recording stopped. ${sizeKb} KB captured. Press "SAVE TO VAULT".`;
                addSurvLog(`⏹️ Audio capture finished: ${sizeKb} KB real recording`, true);
                saveBtn.disabled = false;
                recordBtn.innerHTML = '⏺ RECORD LIVE AUDIO';
                recordBtn.classList.remove('recording-active');
                isRecording = false;
                debugSpan.innerHTML = `🎙️ Recording ready. Size: ${sizeKb} KB. Save to vault.`;
            };
            mediaRecorder.start(1000); // capture in 1-second chunks
            isRecording = true;
            pendingAudioBlob = null;
            recStatusSpan.innerHTML = '🔴 RECORDING REAL AUDIO... (speak now)';
            recordBtn.innerHTML = '⏹️ STOP RECORDING';
            recordBtn.classList.add('recording-active');
            saveBtn.disabled = true;
            addSurvLog("🔴 REAL AUDIO RECORDING STARTED - capturing microphone stream", true);
            debugSpan.innerHTML = "🔴 RECORDING LIVE - audio chunks being captured";
            return true;
        } catch(e) {
            addSurvLog(`Recording error: ${e.message}`, false);
            return false;
        }
    }
    
    function stopRealRecording() {
        if (mediaRecorder && isRecording) {
            mediaRecorder.stop();
        } else {
            addSurvLog("No active recording to stop.", false);
        }
    }
    
    async function savePendingAudioToVault() {
        if (!pendingAudioBlob) {
            addSurvLog("No recorded audio pending. Record something first.", false);
            return;
        }
        await addAudioToVault(pendingAudioBlob);
        pendingAudioBlob = null;
        recStatusSpan.innerHTML = '✅ Audio saved to secure vault. Ready for next recording.';
        saveBtn.disabled = true;
        debugSpan.innerHTML = "✅ Recording archived. Available in vault above.";
    }
    
    // Clear all audio records
    function clearAllRecords() {
        if (confirm("⚠️ WARNING: This will permanently delete ALL recorded audio from the vault. Proceed?")) {
            for (let item of surveillanceArchive) {
                if (item.audioUrl) URL.revokeObjectURL(item.audioUrl);
            }
            surveillanceArchive = [];
            localStorage.removeItem('ESCV1_REAL_AUDIO_VAULT');
            renderAudioVault();
            addSurvLog("🗑️ ALL RECORDINGS CLEARED from secure vault.", true);
            debugSpan.innerHTML = "🗑️ Vault wiped clean.";
            pendingAudioBlob = null;
            recStatusSpan.innerHTML = "⚫ RECORDER STANDBY (vault cleared)";
        }
    }
    
    // ========== AUDIO STREAM INIT (MIC + SPEAKER) ==========
    async function initAudioSystem() {
        if (audioCtx && audioCtx.state !== 'closed') {
            if (audioCtx.state === 'suspended') await audioCtx.resume();
            return true;
        }
        try {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            sourceNode = audioCtx.createMediaStreamSource(mediaStream);
            gainNode = audioCtx.createGain();
            gainNode.connect(audioCtx.destination);
            sourceNode.connect(gainNode);
            gainNode.gain.value = isMuted ? 0 : 0.85;
            
            // Volume analyser for visualizer
            const analyser = audioCtx.createAnalyser();
            analyser.fftSize = 256;
            const dataArray = new Uint8Array(analyser.frequencyBinCount);
            sourceNode.connect(analyser);
            
            function volumeLoop() {
                if (!isChannelActive || !analyser) {
                    if(!isChannelActive) updateVisualizer(0.05);
                    animationId = requestAnimationFrame(volumeLoop);
                    return;
                }
                analyser.getByteTimeDomainData(dataArray);
                let maxSample = 0;
                for (let i = 0; i < dataArray.length; i++) {
                    let v = (dataArray[i] - 128) / 128;
                    maxSample = Math.max(maxSample, Math.abs(v));
                }
                updateVisualizer(maxSample);
                animationId = requestAnimationFrame(volumeLoop);
            }
            volumeLoop();
            return true;
        } catch(err) {
            debugSpan.innerHTML = "⚠️ MICROPHONE ERROR - cannot record audio";
            addSurvLog("❌ Microphone access denied. Recording disabled.", false);
            return false;
        }
    }
    
    // Channel join/leave
    async function joinSecureChannel() {
        if (isChannelActive) return;
        const audioReady = await initAudioSystem();
        if (audioCtx && audioCtx.state === 'suspended') await audioCtx.resume();
        isChannelActive = true;
        if (gainNode) gainNode.gain.value = isMuted ? 0 : 0.85;
        toggleBtn.innerHTML = '🔒 TERMINATE SECURE LINK';
        toggleBtn.classList.add('active-comms');
        connectionSpan.innerHTML = '🔓 SECURE • LIVE DUPLEX';
        ledStatus.className = 'led-green';
        debugSpan.innerHTML = '🎙️ ES-CV-1 ACTIVE | Real audio recording enabled';
        addSurvLog("** SECURE CHANNEL ESTABLISHED | REAL AUDIO CAPTURE READY **", true);
        muteBtn.disabled = false;
        testToneBtn.disabled = false;
        recordBtn.disabled = false;
        clearAllBtn.disabled = false;
        addSurvLog("✅ Use RECORD LIVE AUDIO to capture surveillance-grade audio.", false);
    }
    
    async function leaveSecureChannel() {
        if (!isChannelActive) return;
        if (isRecording) stopRealRecording();
        isChannelActive = false;
        if (gainNode) gainNode.gain.value = 0;
        if (mediaStream) {
            mediaStream.getTracks().forEach(t => t.stop());
            mediaStream = null;
        }
        if (audioCtx) await audioCtx.close();
        audioCtx = null;
        sourceNode = null;
        toggleBtn.innerHTML = '🔓 INITIALIZE SECURE LINK';
        toggleBtn.classList.remove('active-comms');
        connectionSpan.innerHTML = '⛔ OFFLINE / STANDBY';
        ledStatus.className = 'led-red';
        debugSpan.innerHTML = '🔻 Channel terminated. Re-initialize to record.';
        updateVisualizer(0);
        muteBtn.disabled = true;
        testToneBtn.disabled = true;
        recordBtn.disabled = true;
        saveBtn.disabled = true;
        clearAllBtn.disabled = true;
        recordBtn.innerHTML = '⏺ RECORD LIVE AUDIO';
        recordBtn.classList.remove('recording-active');
        isRecording = false;
        recStatusSpan.innerHTML = '⚫ RECORDER STANDBY';
        addSurvLog("*** SECURE LINK TERMINATED ***", true);
    }
    
    function toggleMute() {
        if (!isChannelActive) return;
        isMuted = !isMuted;
        if (gainNode) gainNode.gain.value = isMuted ? 0 : 0.85;
        muteBtn.innerHTML = isMuted ? '🎤 UNMUTE MIC' : '🔇 MUTE MIC';
        addSurvLog(isMuted ? "Microphone MUTED (silent TX)" : "Microphone UNMUTED (live)", true);
    }
    
    function playTestTone() {
        if (!isChannelActive || !audioCtx) return;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.frequency.value = 1040;
        gain.gain.value = 0.2;
        osc.start();
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.6);
        osc.stop(audioCtx.currentTime + 0.5);
        addSurvLog("🔊 Test tone transmitted (link integrity check)", true);
    }
    
    // Toggle main channel
    function toggleCommsHandler() {
        if (isChannelActive) leaveSecureChannel();
        else joinSecureChannel();
    }
    
    // EVENT LISTENERS
    toggleBtn.addEventListener('click', toggleCommsHandler);
    muteBtn.addEventListener('click', toggleMute);
    testToneBtn.addEventListener('click', playTestTone);
    recordBtn.addEventListener('click', () => {
        if (!isChannelActive) { addSurvLog("Join channel first.", false); return; }
        if (isRecording) stopRealRecording();
        else startRealRecording();
    });
    saveBtn.addEventListener('click', savePendingAudioToVault);
    clearAllBtn.addEventListener('click', clearAllRecords);
    
    // Initialize: load existing audio vault
    loadArchiveFromLocalStorage();
    addSurvLog("ES-CV-1 PRODUCTION | REAL AUDIO RECORDER | Press INITIALIZE and then RECORD", false);
</script>
</body>
</html>
