/* Turnstile is mandatory for registration. No direct Firebase signup fallback. */
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  let loading = null, widget = null, token = '', busy = false, generation = 0;
  const visible = () => !$('registerView').classList.contains('hidden');
  function controls() {
    $('rgBtn').disabled = busy || !token;
    $('registrationRetry').disabled = busy;
  }
  function status(message, retry = false) {
    $('registrationSecurityStatus').textContent = message;
    $('registrationRetry').hidden = !retry;
    controls();
  }
  function load() {
    if (window.turnstile) return Promise.resolve();
    if (loading) return loading;
    loading = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      let settled = false;
      const finish = error => {
        if (settled) return;
        settled = true; clearTimeout(timer);
        if (error) { script.remove(); loading = null; reject(error); }
        else resolve();
      };
      const timer = setTimeout(() => finish(new Error('Security check timed out.')), 15000);
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true;
      script.onload = () => finish(window.turnstile ? null : new Error('Security check unavailable.'));
      script.onerror = () => finish(new Error('Security check could not load.'));
      document.head.appendChild(script);
    });
    return loading;
  }
  function unmount() {
    generation++; token = '';
    if (widget !== null && window.turnstile) window.turnstile.remove(widget);
    widget = null;
    $('registrationTurnstile').replaceChildren();
    controls();
  }
  async function mount() {
    unmount();
    if (!visible()) return;
    const current = generation;
    status('Loading security check…');
    try {
      await load();
      if (current !== generation || !visible()) return;
      widget = window.turnstile.render($('registrationTurnstile'), {
        sitekey: window.DUCK_REGISTRATION_CONFIG.siteKey,
        action: 'register',
        theme: document.documentElement.dataset.duckTheme === 'dark' ? 'dark' : 'light',
        size: $('registrationTurnstile').getBoundingClientRect().width < 300 ? 'compact' : 'flexible', appearance: 'always',
        'response-field': false,
        callback(value) {
          if (current !== generation) return;
          token = value; status('Security check complete.');
        },
        'expired-callback'() {
          if (current !== generation) return;
          token = ''; status('Security check expired. Please try it again.', true);
        },
        'timeout-callback'() {
          if (current !== generation) return;
          token = ''; status('Security check timed out. Please try it again.', true);
        },
        'error-callback'() {
          if (current !== generation) return;
          token = ''; status('Could not complete the security check. Check your connection or content blocker, then retry.', true);
          return true;
        }
      });
      if (!token) status('Complete the security check to create your account.');
    } catch (_) {
      if (current === generation) status('Could not load the security check. Check your connection or content blocker, then retry.', true);
    }
  }
  async function register({ email, password, name }) {
    if (!token) throw new Error('Complete the security check before creating your account.');
    const endpoint = window.DUCK_REGISTRATION_CONFIG.endpoint;
    if (!endpoint || !endpoint.startsWith('https://')) throw new Error('Registration is temporarily unavailable. Please try again later.');
    const submittedToken = token; token = ''; controls();
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 30000);
    try {
      const response = await fetch(endpoint, {
        method: 'POST', credentials: 'omit', signal: controller.signal,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name, token: submittedToken })
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        const messages = {
          'invalid-input': 'Check your name, email and password (6–128 characters).',
          'verification-failed': 'The security check expired or could not be verified. Please complete a new check.',
          'account-exists': 'An account already uses that email. Sign in or reset its password.',
          'password-policy': 'Your password does not meet the account security policy. Use a longer password with uppercase and lowercase letters, a number and a symbol.',
          'rate-limited': 'Registration is busy. Please wait a few minutes and try again.',
          'unavailable': 'Registration is temporarily unavailable. Please try again later.'
        };
        throw new Error(messages[data.code] || 'Registration is temporarily unavailable. Please try again later.');
      }
      if (data.created !== true || typeof data.uid !== 'string') throw new Error('Could not confirm registration. Try signing in before registering again.');
      return data;
    } catch (error) {
      if (error.name === 'AbortError' || error instanceof TypeError) {
        throw new Error('Could not confirm registration. Check your connection, then try signing in with this email before registering again.');
      }
      throw error;
    } finally { clearTimeout(timer); }
  }
  $('registrationRetry').addEventListener('click', mount);
  new MutationObserver(() => {
    if (visible() && !busy) mount();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-duck-theme'] });
  window.DuckRegistration = { mount, unmount, register, hasToken: () => !!token, setBusy(value) { busy = !!value; controls(); } };
  controls();
})();
