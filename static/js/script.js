/* =====================================================
   LearnSphere — Main JavaScript
   ===================================================== */

// ====== DATA ======
const coursesData = [
  { id: 1, title: "Python for AI & Machine Learning", instructor: "Dr. Raj Patel", category: "data-science", rating: 4.9, reviews: 2341, students: 12450, price: "Free", level: "Beginner", icon: "fab fa-python", bg: "linear-gradient(135deg,#667eea,#764ba2)", badge: "hot", duration: "42h" },
  { id: 2, title: "React & Next.js 2025 Complete Guide", instructor: "Alex Johnson", category: "programming", rating: 4.8, reviews: 1876, students: 8920, price: "$49", level: "Intermediate", icon: "fab fa-react", bg: "linear-gradient(135deg,#4facfe,#00f2fe)", badge: "popular", duration: "38h" },
  { id: 3, title: "UI/UX Design Masterclass", instructor: "Sarah Chen", category: "design", rating: 4.7, reviews: 1543, students: 6780, price: "$39", level: "Beginner", icon: "fas fa-paint-brush", bg: "linear-gradient(135deg,#f093fb,#f5576c)", badge: "new", duration: "28h" },
  { id: 4, title: "Digital Marketing & SEO 2025", instructor: "Mark Davis", category: "marketing", rating: 4.6, reviews: 987, students: 4320, price: "Free", level: "Beginner", icon: "fas fa-chart-line", bg: "linear-gradient(135deg,#43e97b,#38f9d7)", badge: "free", duration: "22h" },
  { id: 5, title: "Full Stack Node.js & MongoDB", instructor: "Emma Wilson", category: "programming", rating: 4.9, reviews: 2100, students: 9540, price: "$59", level: "Advanced", icon: "fab fa-node-js", bg: "linear-gradient(135deg,#fa709a,#fee140)", badge: "hot", duration: "52h" },
  { id: 6, title: "Business Analytics & Excel", instructor: "Mark Davis", category: "business", rating: 4.5, reviews: 756, students: 3200, price: "Free", level: "Beginner", icon: "fas fa-chart-bar", bg: "linear-gradient(135deg,#a18cd1,#fbc2eb)", badge: "free", duration: "18h" },
  { id: 7, title: "Deep Learning & Neural Networks", instructor: "Dr. Raj Patel", category: "data-science", rating: 4.8, reviews: 1320, students: 5670, price: "$79", level: "Advanced", icon: "fas fa-brain", bg: "linear-gradient(135deg,#0f0c29,#302b63)", badge: "popular", duration: "60h" },
  { id: 8, title: "Figma Design System Mastery", instructor: "Sarah Chen", category: "design", rating: 4.7, reviews: 890, students: 3890, price: "$29", level: "Intermediate", icon: "fas fa-vector-square", bg: "linear-gradient(135deg,#ee9ca7,#ffdde1)", badge: "new", duration: "20h" },
  { id: 9, title: "AWS Cloud Practitioner", instructor: "Tom Reynolds", category: "programming", rating: 4.9, reviews: 3200, students: 15200, price: "$69", level: "Beginner", icon: "fab fa-aws", bg: "linear-gradient(135deg,#f7971e,#ffd200)", badge: "hot", duration: "30h" },
];

const chatbotResponses = {
  "what courses do you recommend": "Great question! Based on trending topics, I'd recommend:\n🐍 Python for AI & ML — perfect for beginners\n⚛️ React & Next.js — if you love frontend\n📊 Digital Marketing — great for growth careers\n\nWhat are your interests?",
  "how does ai learning work": "LearnSphere uses AI to personalize your learning journey! 🤖\n\n✅ It analyzes your progress\n✅ Adapts difficulty to your pace\n✅ Recommends next courses\n✅ I can answer questions 24/7\n\nPretty cool, right?",
  "help me navigate": "Of course! Here's a quick guide:\n🏠 Home — Explore the platform\n📚 Courses — Browse all 200+ courses\n📊 Dashboard — Track your progress\n👤 Profile — Update your settings\n\nWhere would you like to go?",
  "what is the best programming course": "For programming, our top picks are:\n1. 🐍 Python for AI & ML (4.9⭐) — Most popular!\n2. ⚛️ React & Next.js (4.8⭐) — Frontend favorite\n3. 🟢 Node.js & MongoDB (4.9⭐) — Full stack powerhouse\n\nWhich one interests you?",
  "is this course good for beginners": "Yes! Most of our courses are designed to be beginner-friendly. 😊\n\nWe recommend starting with the free Python or Marketing course to get familiar with the platform. You can always upgrade to advanced courses later!",
  "what is machine learning": "Machine Learning (ML) is a branch of AI that enables computers to learn from data without being explicitly programmed! 🤖\n\nKey concepts:\n📊 Data → Algorithm → Model → Predictions\n\nOur Python for AI & ML course covers this perfectly!",
  "explain variables in python": "Variables in Python are like containers that store data! 📦\n\n```python\nname = 'Alice'  # String\nage = 25        # Integer\npi = 3.14       # Float\nis_student = True  # Boolean\n```\n\nNo need to declare types — Python figures it out!",
  "what is a function in python": "A function in Python is a reusable block of code! ⚡\n\n```python\ndef greet(name):\n    return f'Hello, {name}!'\n\nresult = greet('Alice')\nprint(result)  # Hello, Alice!\n```\n\nFunctions help organize and reuse code efficiently.",
  "how do i reset my password": "To reset your password:\n1. Go to the Login page\n2. Click 'Forgot password?'\n3. Enter your email address\n4. Check your inbox for a reset link\n5. Create a new password\n\nNeed more help? Email support@learnsphere.ai 📧",
  "how do i get a refund": "We offer a 30-day money-back guarantee! 💰\n\nTo request a refund:\n1. Go to your Purchase History\n2. Click on the course\n3. Select 'Request Refund'\n4. Refunds process in 3-5 business days\n\nOr email us: billing@learnsphere.ai",
  "how do i download my certificate": "Congrats on completing a course! 🎉\n\nTo download your certificate:\n1. Go to your Dashboard\n2. Click 'Completed' tab\n3. Click the 📜 certificate icon\n4. Download as PDF\n\nYou can also share it directly to LinkedIn!",
  "how do i change my password": "To change your password:\n1. Go to Profile → Security tab\n2. Enter your current password\n3. Type your new password\n4. Confirm the new password\n5. Click 'Update Password'\n\nMake sure it's at least 8 characters! 🔒",
  "how do i approve a course": "To approve a course as admin:\n1. Go to Admin Panel\n2. Click 'Course Approvals' tab\n3. Review the submitted course\n4. Click Preview to watch content\n5. Click 'Approve' or 'Reject'\n\nApproved courses go live immediately!",
  "how do i improve my course rating": "Great question! Tips to boost your rating:\n⭐ Add high-quality video content\n📝 Include detailed course notes\n💬 Respond to student questions quickly\n🔄 Update content regularly\n🎯 Add practice exercises\n\nStudent satisfaction = better ratings!",
  "tips for engaging course content": "Here are proven engagement tips:\n🎬 Keep videos under 10 minutes\n📊 Include quizzes after each module\n💻 Add hands-on projects\n🗣️ Use real-world examples\n🎯 Set clear learning objectives\n\nEngaged students give better reviews!",
  "what should i learn next": "Based on your progress, I recommend:\n🚀 Since you're doing Python AI, try Deep Learning next!\n\nOr explore:\n📐 System Design\n☁️ AWS Cloud\n🐳 Docker & DevOps\n\nWould you like a detailed learning path?",
  "default": "Thanks for asking! I'm Aria, your AI learning assistant. I can help you:\n📚 Find the right courses\n💡 Explain programming concepts\n🧭 Navigate the platform\n❓ Answer platform questions\n\nWhat would you like to know?"
};

// ====== INIT ======
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initChatbot();
  initAccordion();
  initTabs();

  const page = document.body.className;
  if (page.includes('page-home')) initHomePage();
  if (page.includes('page-courses')) initCoursesPage();
  if (page.includes('page-auth')) initAuthForms();
  if (page.includes('page-dashboard')) initDashboard();
  if (page.includes('page-player')) initPlayer();
  if (page.includes('page-profile') || document.querySelector('.profile-layout')) initProfile();
  if (document.getElementById('adminChart') || document.getElementById('revenueChart') || document.getElementById('enrollChart')) initCharts();

  animateProgressBars();
});

// ====== THEME ======
function initTheme() {
  const saved = localStorage.getItem('ls-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);

  document.querySelectorAll('#themeToggle, #darkModeToggle').forEach(el => {
    if (el.type === 'checkbox') {
      el.checked = saved === 'dark';
      el.addEventListener('change', () => toggleTheme());
    } else {
      el.addEventListener('click', () => toggleTheme());
    }
  });
}
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('ls-theme', next);
  updateThemeIcon(next);
}
function updateThemeIcon(theme) {
  document.querySelectorAll('#themeToggle').forEach(btn => {
    const icon = btn.querySelector('i');
    if (icon) icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  });
}

// ====== NAVBAR ======
function initNavbar() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
  }
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// ====== HOME PAGE ======
function initHomePage() {
  const grid = document.getElementById('homeCoursesGrid');
  if (!grid) return;
  const featured = coursesData.slice(0, 6);
  grid.innerHTML = featured.map(renderCourseCard).join('');
}

function renderCourseCard(course) {
  const badgeMap = { hot: '<span class="course-badge hot">🔥 Hot</span>', popular: '<span class="course-badge">⭐ Popular</span>', new: '<span class="course-badge">✨ New</span>', free: '<span class="course-badge free">Free</span>' };
  return `
    <div class="course-card" onclick="window.location.href='course-detail.html'">
      <div class="course-card-img" style="background:${course.bg}">
        <i class="${course.icon}" style="color:white;opacity:0.9"></i>
        ${badgeMap[course.badge] || ''}
      </div>
      <div class="course-card-body">
        <div class="course-cat">${course.category.replace('-', ' ')}</div>
        <h3>${course.title}</h3>
        <p class="course-instructor">by ${course.instructor}</p>
        <div class="course-meta">
          <div class="course-rating">
            <span class="stars">${'★'.repeat(Math.floor(course.rating))}${course.rating % 1 >= 0.5 ? '½' : ''}</span>
            <strong>${course.rating}</strong>
            <span class="course-count">(${course.reviews.toLocaleString()})</span>
          </div>
          <span style="font-size:0.78rem;color:var(--text-muted)">${course.duration}</span>
        </div>
      </div>
      <div class="course-card-footer">
        <span class="course-price ${course.price === 'Free' ? 'free' : ''}">${course.price}</span>
        <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); window.location.href='course-detail.html'">Enroll</button>
      </div>
    </div>
  `;
}

// ====== COURSES PAGE ======
let currentFilter = 'all';
let currentSearch = '';

function initCoursesPage() {
  renderCourses();
  const searchInput = document.getElementById('courseSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.toLowerCase();
      renderCourses();
    });
  }
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.cat;
      renderCourses();
    });
  });
}

function renderCourses() {
  const grid = document.getElementById('coursesGrid');
  const noResults = document.getElementById('noResults');
  const resultsInfo = document.getElementById('resultsInfo');
  if (!grid) return;

  const filtered = coursesData.filter(c => {
    const matchesCat = currentFilter === 'all' || c.category === currentFilter;
    const matchesSearch = !currentSearch ||
      c.title.toLowerCase().includes(currentSearch) ||
      c.instructor.toLowerCase().includes(currentSearch) ||
      c.category.toLowerCase().includes(currentSearch);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noResults.classList.remove('hidden');
    resultsInfo.textContent = 'No courses found';
  } else {
    noResults.classList.add('hidden');
    resultsInfo.textContent = `Showing ${filtered.length} course${filtered.length !== 1 ? 's' : ''}`;
    grid.innerHTML = filtered.map(renderCourseCard).join('');
  }
}

window.resetFilters = function() {
  currentFilter = 'all';
  currentSearch = '';
  const search = document.getElementById('courseSearch');
  if (search) search.value = '';
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  const allBtn = document.querySelector('[data-cat="all"]');
  if (allBtn) allBtn.classList.add('active');
  renderCourses();
};

// ====== AUTH FORMS ======
function initAuthForms() {
  // Password toggles
  document.querySelectorAll('.toggle-pw').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const input = document.getElementById(targetId);
      if (!input) return;
      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      btn.querySelector('i').className = isPassword ? 'fas fa-eye-slash' : 'fas fa-eye';
    });
  });

  // Login form
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      const email = document.getElementById('loginEmail');
      const password = document.getElementById('loginPassword');

      clearErrors(['emailError', 'pwError']);

      if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
        showError('emailError', 'Please enter a valid email address');
        valid = false;
      }
      if (!password.value || password.value.length < 6) {
        showError('pwError', 'Password must be at least 6 characters');
        valid = false;
      }
      if (valid) {
        const btn = loginForm.querySelector('button[type="submit"]');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing in...';
        btn.disabled = true;
        setTimeout(() => { window.location.href = 'dashboard-student.html'; }, 1500);
      }
    });
  }

  // Register form
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    // Password strength
    const regPw = document.getElementById('regPassword');
    if (regPw) {
      regPw.addEventListener('input', () => {
        updatePwStrength(regPw.value);
      });
    }
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      const name = document.getElementById('regName');
      const email = document.getElementById('regEmail');
      const pw = document.getElementById('regPassword');
      const confirm = document.getElementById('regConfirm');
      const terms = document.getElementById('agreeTerms');

      clearErrors(['nameError', 'regEmailError', 'regPwError', 'confirmError']);

      if (!name.value || name.value.trim().length < 2) { showError('nameError', 'Please enter your full name'); valid = false; }
      if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) { showError('regEmailError', 'Please enter a valid email'); valid = false; }
      if (!pw.value || pw.value.length < 8) { showError('regPwError', 'Password must be at least 8 characters'); valid = false; }
      if (pw.value !== confirm.value) { showError('confirmError', 'Passwords do not match'); valid = false; }
      if (!terms.checked) { alert('Please agree to the Terms & Privacy Policy'); valid = false; }

      if (valid) {
        const btn = registerForm.querySelector('button[type="submit"]');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating account...';
        btn.disabled = true;
        setTimeout(() => { window.location.href = 'dashboard-student.html'; }, 1500);
      }
    });
  }

  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
      btn.style.background = 'var(--success)';
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
        btn.style.background = '';
        btn.disabled = false;
        contactForm.reset();
      }, 3000);
    });
  }

  // Profile forms
  const profileForm = document.getElementById('profileForm');
  if (profileForm) {
    profileForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = profileForm.querySelector('button[type="submit"]');
      btn.innerHTML = '<i class="fas fa-check"></i> Saved!';
      setTimeout(() => { btn.innerHTML = 'Save Changes <i class="fas fa-save"></i>'; }, 2000);
    });
  }
}

function updatePwStrength(pw) {
  const bar = document.querySelector('#pwStrength .pw-bar');
  if (!bar) return;
  let strength = 0;
  if (pw.length >= 8) strength++;
  if (/[A-Z]/.test(pw)) strength++;
  if (/[0-9]/.test(pw)) strength++;
  if (/[!@#$%^&*]/.test(pw)) strength++;
  const widths = ['0%', '25%', '50%', '75%', '100%'];
  const colors = ['#ef4444', '#ef4444', '#f59e0b', '#10b981', '#10b981'];
  bar.style.width = widths[strength];
  bar.style.background = colors[strength];
}

function showError(id, msg) {
  const el = document.getElementById(id);
  if (el) el.textContent = msg;
}
function clearErrors(ids) {
  ids.forEach(id => { const el = document.getElementById(id); if (el) el.textContent = ''; });
}

// ====== ACCORDION ======
function initAccordion() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const isOpen = header.classList.contains('open');
      // Close siblings
      const accordion = header.closest('.accordion');
      if (accordion) {
        accordion.querySelectorAll('.accordion-header').forEach(h => {
          h.classList.remove('open');
          if (h.nextElementSibling) h.nextElementSibling.classList.remove('open');
        });
      }
      if (!isOpen) {
        header.classList.add('open');
        if (body) body.classList.add('open');
      }
    });
  });

  // Open first accordion by default
  const firstHeader = document.querySelector('.accordion-header');
  if (firstHeader) {
    firstHeader.classList.add('open');
    const firstBody = firstHeader.nextElementSibling;
    if (firstBody) firstBody.classList.add('open');
  }

  // FAQ Search
  const faqSearch = document.getElementById('faqSearch');
  if (faqSearch) {
    faqSearch.addEventListener('input', () => {
      const query = faqSearch.value.toLowerCase();
      document.querySelectorAll('#faqAccordion .accordion-item').forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? '' : 'none';
      });
    });
  }
}

// ====== TABS ======
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const container = btn.closest('.player-tabs, .profile-settings-panel, .auth-form-container');
      if (!container) return;
      const tabId = btn.dataset.tab;
      container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      container.querySelectorAll('.tab-content').forEach(t => { t.classList.remove('active'); t.classList.add('hidden'); });
      btn.classList.add('active');
      const content = document.getElementById(`tab-${tabId}`);
      if (content) { content.classList.remove('hidden'); content.classList.add('active'); }
    });
  });
}

// ====== ADMIN TABS ======
window.showAdminTab = function(tabId) {
  document.querySelectorAll('.admin-tab').forEach(t => { t.classList.remove('active'); t.classList.add('hidden'); });
  document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
  const tab = document.getElementById(`admin-${tabId}`);
  if (tab) { tab.classList.remove('hidden'); tab.classList.add('active'); }
  const btn = document.getElementById(`tab-btn-${tabId}`);
  if (btn) btn.classList.add('active');
  if (tabId === 'analytics') setTimeout(() => initRevenueChart(), 100);
};

// ====== CHATBOT ======
function initChatbot() {
  const toggle = document.getElementById('chatbotToggle');
  const window_ = document.getElementById('chatbotWindow');
  const closeBtn = document.getElementById('closeChatbot');
  const sendBtn = document.getElementById('sendChat');
  const input = document.getElementById('chatInput');
  const iconOpen = document.getElementById('chatIconOpen');
  const iconClose = document.getElementById('chatIconClose');

  if (!toggle || !window_) return;

  toggle.addEventListener('click', () => {
    const isOpen = window_.classList.contains('open');
    if (isOpen) { closeChatbot(); } else { openChatbot(); }
  });
  if (closeBtn) closeBtn.addEventListener('click', closeChatbot);

  function openChatbot() {
    window_.classList.add('open');
    if (iconOpen) iconOpen.style.display = 'none';
    if (iconClose) iconClose.style.display = 'block';
    const badge = toggle.querySelector('.chat-badge');
    if (badge) badge.remove();
  }
  function closeChatbot() {
    window_.classList.remove('open');
    if (iconOpen) iconOpen.style.display = 'block';
    if (iconClose) iconClose.style.display = 'none';
  }

  // Send message
  function sendMessage() {
    const text = input ? input.value.trim() : '';
    if (!text) return;
    addMessage(text, 'user');
    if (input) input.value = '';
    showTyping();
    setTimeout(() => {
      removeTyping();
      const response = getBotResponse(text);
      addMessage(response, 'bot');
    }, 1000 + Math.random() * 800);
  }

  if (sendBtn) sendBtn.addEventListener('click', sendMessage);
  if (input) {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage();
    });
  }

  // Suggestion buttons
  document.querySelectorAll('.suggestion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const question = btn.dataset.q;
      addMessage(question, 'user');
      showTyping();
      setTimeout(() => {
        removeTyping();
        addMessage(getBotResponse(question), 'bot');
      }, 1000);
    });
  });
}

function addMessage(text, type) {
  const container = document.getElementById('chatMessages');
  if (!container) return;
  const div = document.createElement('div');
  div.className = `msg ${type}-msg`;
  const formattedText = text.replace(/\n/g, '<br>');
  div.innerHTML = `<div class="msg-bubble">${formattedText}</div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function showTyping() {
  const container = document.getElementById('chatMessages');
  if (!container) return;
  const div = document.createElement('div');
  div.className = 'msg bot-msg typing-msg';
  div.innerHTML = '<div class="msg-bubble"><div class="typing-indicator"><span></span><span></span><span></span></div></div>';
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function removeTyping() {
  const typing = document.querySelector('.typing-msg');
  if (typing) typing.remove();
}

function getBotResponse(input) {
  const lower = input.toLowerCase();
  for (const key in chatbotResponses) {
    if (key !== 'default' && lower.includes(key)) {
      return chatbotResponses[key];
    }
  }
  // Fuzzy match keywords
  const keywords = {
    'course': chatbotResponses['what courses do you recommend'],
    'python': chatbotResponses['explain variables in python'],
    'ml': chatbotResponses['what is machine learning'],
    'machine learn': chatbotResponses['what is machine learning'],
    'certif': chatbotResponses['how do i download my certificate'],
    'password': chatbotResponses['how do i reset my password'],
    'refund': chatbotResponses['how do i get a refund'],
    'recommend': chatbotResponses['what courses do you recommend'],
    'next': chatbotResponses['what should i learn next'],
    'ai': chatbotResponses['how does ai learning work'],
    'navigate': chatbotResponses['help me navigate'],
    'help': chatbotResponses['help me navigate'],
  };
  for (const kw in keywords) {
    if (lower.includes(kw)) return keywords[kw];
  }
  return chatbotResponses['default'];
}

// ====== DASHBOARD ======
function initDashboard() {
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('dashSidebar');
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('mobile-open');
    });
  }

  const notifBtn = document.getElementById('notifBtn');
  const notifPanel = document.getElementById('notifPanel');
  if (notifBtn && notifPanel) {
    notifBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      notifPanel.classList.toggle('hidden');
    });
    document.addEventListener('click', () => { notifPanel.classList.add('hidden'); });
  }
}

// ====== PLAYER ======
function initPlayer() {
  let currentLesson = 0;
  const lessons = document.querySelectorAll('.lesson-item');
  const lessonTitle = document.getElementById('currentLessonTitle');
  const lessonCounter = document.getElementById('lessonCounter');
  const sidebarClose = document.getElementById('sidebarClose');
  const sidebar = document.getElementById('playerSidebar');

  if (sidebarClose && sidebar) {
    sidebarClose.addEventListener('click', () => sidebar.classList.remove('open'));
  }

  lessons.forEach((item, index) => {
    item.addEventListener('click', () => {
      lessons.forEach(l => l.classList.remove('active'));
      item.classList.add('active');
      currentLesson = index;
      if (lessonTitle) lessonTitle.textContent = item.dataset.title || `Lesson ${index + 1}`;
      if (lessonCounter) lessonCounter.textContent = `Lesson ${index + 1} of ${lessons.length}`;
      if (sidebar) sidebar.classList.remove('open');
    });
  });

  const prevBtn = document.getElementById('prevLesson');
  const nextBtn = document.getElementById('nextLesson');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentLesson > 0) { currentLesson--; lessons[currentLesson].click(); }
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentLesson < lessons.length - 1) { currentLesson++; lessons[currentLesson].click(); }
    });
  }

  const playBtn = document.getElementById('playBtn');
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      const placeholder = document.getElementById('videoPlaceholder');
      if (placeholder) {
        placeholder.innerHTML = `
          <div class="vp-content" style="padding:20px">
            <i class="fas fa-video" style="font-size:3rem;margin-bottom:16px;opacity:0.5"></i>
            <h3 style="color:white;margin-bottom:8px">${lessonTitle ? lessonTitle.textContent : 'Lesson'}</h3>
            <p style="color:rgba(255,255,255,0.5);margin-bottom:16px">Video playing...</p>
            <div style="width:80%;height:6px;background:rgba(255,255,255,0.2);border-radius:3px;margin:0 auto">
              <div id="videoProgress" style="width:0%;height:100%;background:var(--grad);border-radius:3px;transition:width 0.5s"></div>
            </div>
          </div>
        `;
        let progress = 0;
        const interval = setInterval(() => {
          progress += 2;
          const bar = document.getElementById('videoProgress');
          if (bar) bar.style.width = progress + '%';
          if (progress >= 100) clearInterval(interval);
        }, 200);
      }
    });
  }
}

// ====== NOTES ======
window.saveNotes = function() {
  const notes = document.getElementById('notesArea');
  if (notes) localStorage.setItem('ls-notes', notes.value);
  const msg = document.getElementById('notesSaved');
  if (msg) {
    msg.classList.remove('hidden');
    setTimeout(() => msg.classList.add('hidden'), 2000);
  }
};

// Load saved notes
const savedNotes = localStorage.getItem('ls-notes');
const notesArea = document.getElementById('notesArea');
if (notesArea && savedNotes) notesArea.value = savedNotes;

// ====== PROFILE ======
function initProfile() {
  const avatarInput = document.getElementById('avatarInput');
  const avatarPreview = document.getElementById('avatarPreview');
  if (avatarInput && avatarPreview) {
    avatarInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        avatarPreview.innerHTML = `<img src="${ev.target.result}" alt="avatar"/>`;
      };
      reader.readAsDataURL(file);
    });
  }

  // Security form
  const secForm = document.getElementById('securityForm');
  if (secForm) {
    secForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = secForm.querySelector('button[type="submit"]');
      btn.innerHTML = '<i class="fas fa-check"></i> Password Updated!';
      setTimeout(() => { btn.innerHTML = 'Update Password'; secForm.reset(); }, 2000);
    });
    const newPw = document.getElementById('newpw');
    if (newPw) newPw.addEventListener('input', () => updatePwStrength(newPw.value));
  }

  // Dark mode toggle in preferences
  const dmToggle = document.getElementById('darkModeToggle');
  if (dmToggle) {
    const current = document.documentElement.getAttribute('data-theme');
    dmToggle.checked = current === 'dark';
    dmToggle.addEventListener('change', () => toggleTheme());
  }

  // Password toggles
  document.querySelectorAll('.toggle-pw').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.getElementById(btn.dataset.target);
      if (!input) return;
      input.type = input.type === 'password' ? 'text' : 'password';
      btn.querySelector('i').className = input.type === 'password' ? 'fas fa-eye' : 'fas fa-eye-slash';
    });
  });
}

// ====== CHARTS ======
function initCharts() {
  // Enroll chart (instructor dashboard)
  const enrollCtx = document.getElementById('enrollChart');
  if (enrollCtx && typeof Chart !== 'undefined') {
    new Chart(enrollCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'New Enrollments',
          data: [820, 932, 901, 1134, 1290, 1330, 1520, 1802, 1920, 2100, 1980, 2340],
          borderColor: '#4f46e5', backgroundColor: 'rgba(79,70,229,0.08)',
          borderWidth: 2, fill: true, tension: 0.4,
          pointBackgroundColor: '#4f46e5', pointRadius: 4,
        }]
      },
      options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' } }, x: { grid: { display: false } } } }
    });
  }

  // Admin overview chart
  const adminCtx = document.getElementById('adminChart');
  if (adminCtx && typeof Chart !== 'undefined') {
    new Chart(adminCtx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          { label: 'Students', data: [3200, 3800, 4100, 4600, 5200, 5800, 6400, 7100, 7800, 8500, 9200, 10000], backgroundColor: 'rgba(79,70,229,0.7)', borderRadius: 6 },
          { label: 'Revenue ($K)', data: [8, 12, 15, 18, 22, 28, 32, 38, 44, 52, 60, 70], backgroundColor: 'rgba(139,92,246,0.5)', borderRadius: 6 }
        ]
      },
      options: { responsive: true, plugins: { legend: { position: 'top' } }, scales: { y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' } }, x: { grid: { display: false } } } }
    });
  }
}

function initRevenueChart() {
  const ctx = document.getElementById('revenueChart');
  if (!ctx || typeof Chart === 'undefined' || ctx._chart) return;
  ctx._chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Python AI', 'Deep Learning', 'React', 'Design', 'Marketing', 'Others'],
      datasets: [{ data: [35, 25, 18, 12, 6, 4], backgroundColor: ['#4f46e5','#8b5cf6','#06b6d4','#f093fb','#43e97b','#f59e0b'], borderWidth: 0, hoverOffset: 4 }]
    },
    options: { responsive: true, plugins: { legend: { position: 'right' } } }
  });
}

// ====== PROGRESS BARS ======
function animateProgressBars() {
  const bars = document.querySelectorAll('.prog-fill[data-prog]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const target = parseInt(bar.dataset.prog);
        setTimeout(() => { bar.style.width = target + '%'; }, 100);
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.1 });
  bars.forEach(bar => { bar.style.width = '0%'; observer.observe(bar); });
}

// ====== SCROLL ANIMATIONS ======
const animObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.benefit-card, .testimonial-card, .course-card, .stat-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  animObserver.observe(el);
});
