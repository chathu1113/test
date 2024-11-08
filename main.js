import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.x.x/firebase-auth.js';
import { auth } from './firebase-config.js';

// Login form handling
document.getElementById('loginForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = 'dashboard.html';
  } catch (error) {
    alert('Login failed: ' + error.message);
  }
});

// Logout button handling
if (document.getElementById('logoutButton')) {
  document.getElementById('logoutButton').addEventListener('click', async () => {
    try {
      await signOut(auth);
      window.location.href = 'index.html';
    } catch (error) {
      alert('Logout failed: ' + error.message);
    }
  });
}

// Auth state change observer for dashboard
onAuthStateChanged(auth, (user) => {
  if (!user && window.location.pathname === '/dashboard.html') {
    window.location.href = 'index.html';
  }
});
