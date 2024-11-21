function showDetail(title, description) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('detail-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('detail-modal').style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('detail-modal')) {
        closeModal();
    }
}
