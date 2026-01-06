// JavaScript for handling popup functionality

// Sign-in popup functions
function openSigninPopup() {
    document.getElementById('popupSigninOverlay').style.display = 'block';
}

function closeSigninPopup() {
    document.getElementById('popupSigninOverlay').style.display = 'none';
}

function submitSignIn() {
    alert("Sign-in submitted!");
    closeSigninPopup();
}

// Sign-up popup functions
function openSignupPopup() {
    document.getElementById('popupSignupOverlay').style.display = 'block';
}

function closeSignupPopup() {
    document.getElementById('popupSignupOverlay').style.display = 'none';
}

function submitSignUp() {
    alert("Sign-up submitted!");
    closeSignupPopup();
}

// Close popups when clicking outside the popup content
window.onclick = function(event) {
    const signinOverlay = document.getElementById('popupSigninOverlay');
    const signupOverlay = document.getElementById('popupSignupOverlay');
    if (event.target === signinOverlay) {
        closeSigninPopup();
    }
    if (event.target === signupOverlay) {
        closeSignupPopup();
    }
};