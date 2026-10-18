
// Update for index.html - Add StackBlitz/CodeSandbox Integration
// This script assumes the existence of the modal elements in index.html

function openDemoModal(title, url, npmPackage = null) {
    document.getElementById('demoTitle').textContent = title;
    document.getElementById('demoIframe').src = url;
    document.getElementById('demoIframeDark').src = url;
    
    // Add StackBlitz button if package exists
    const modalHeader = document.querySelector('#demoModal .flex.space-x-2');
    let stackBlitzBtn = document.getElementById('stackBlitzBtn');
    
    if (npmPackage) {
        if (!stackBlitzBtn) {
            stackBlitzBtn = document.createElement('button');
            stackBlitzBtn.id = 'stackBlitzBtn';
            stackBlitzBtn.className = 'bg-rose-600 px-3 py-1 rounded text-xs text-white';
            stackBlitzBtn.textContent = 'Edit in StackBlitz';
            modalHeader.insertBefore(stackBlitzBtn, modalHeader.firstChild);
        }
        stackBlitzBtn.onclick = () => {
            // StackBlitz SDK or URL pattern
            window.open(`https://stackblitz.com/edit/npm-${npmPackage}?file=index.js`, '_blank');
        };
        stackBlitzBtn.classList.remove('hidden');
    } else if (stackBlitzBtn) {
        stackBlitzBtn.classList.add('hidden');
    }
    
    demoModal.classList.remove('hidden');
}
