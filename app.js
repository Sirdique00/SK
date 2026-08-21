const SUPABASE_URL = 'https://htaqrrgfuuuzlwvexpuu.supabase.co'
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_tLfFWZCmT--yqKWy2COJDQ_pj5tGS2v'
const { createClient } = window.supabase
const sb = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)

const LOGO_DATA = 'data:image/webp;base64,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'
document.getElementById('brandLogo').src = LOGO_DATA

const panels = [...document.querySelectorAll('.panel')]
const toast = document.getElementById('toast')
let signupEmail = ''
let forgotEmail = ''
let resetToken = ''
let signupCountdown = null
let resetCountdown = null

function showPanel(id) {
  panels.forEach((p) => p.classList.toggle('active', p.id === id))
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
function notify(message, type = 'error') {
  toast.textContent = message
  toast.className = `toast show ${type}`
  clearTimeout(notify.timer)
  notify.timer = setTimeout(() => toast.classList.remove('show'), 4300)
}
function setBusy(form, busy) { form.querySelectorAll('button').forEach((b) => b.disabled = busy) }
function validEmail(value) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) }
function startTimer(elementId, seconds, resendId, resendTextId) {
  const element = document.getElementById(elementId)
  const resend = document.getElementById(resendId)
  const text = document.getElementById(resendTextId)
  resend.classList.add('hidden')
  clearInterval(elementId === 'signupTimer' ? signupCountdown : resetCountdown)
  let left = seconds
  const tick = () => {
    const min = String(Math.floor(left / 60)).padStart(2, '0')
    const sec = String(left % 60).padStart(2, '0')
    element.textContent = `${min}:${sec}`
    if (left <= 0) {
      clearInterval(elementId === 'signupTimer' ? signupCountdown : resetCountdown)
      resend.classList.remove('hidden')
      if (text) text.textContent = 'The code has expired. You can request a new code now.'
      return
    }
    if (text) text.textContent = `Resend becomes available after the current code expires (${min}:${sec}).`
    left -= 1
  }
  tick()
  const timer = setInterval(tick, 1000)
  if (elementId === 'signupTimer') signupCountdown = timer
  else resetCountdown = timer
}
async function invoke(name, body) {
  const { data, error } = await sb.functions.invoke(name, { body })
  if (error) {
    let message = error.message || 'Request failed.'
    try { if (error.context) { const text = await error.context.text(); const parsed = JSON.parse(text); message = parsed.error || message } } catch (_) {}
    throw new Error(message)
  }
  if (data?.error) throw new Error(data.error)
  return data
}

for (const button of document.querySelectorAll('[data-show]')) button.addEventListener('click', () => showPanel(button.dataset.show))
for (const button of document.querySelectorAll('[data-toggle]')) button.addEventListener('click', () => { const input = document.getElementById(button.dataset.toggle); input.type = input.type === 'password' ? 'text' : 'password' })

document.getElementById('signupForm').addEventListener('submit', async (event) => {
  event.preventDefault(); const form = event.currentTarget; setBusy(form, true)
  const name = document.getElementById('signupName').value.trim(); const email = document.getElementById('signupEmail').value.trim().toLowerCase(); const password = document.getElementById('signupPassword').value; const confirm = document.getElementById('signupConfirm').value
  if (name.length < 2 || !validEmail(email) || password.length < 8 || password !== confirm || !document.getElementById('terms').checked) { notify('Check your name, email, password, confirmation and agreement.'); setBusy(form, false); return }
  try { await invoke('request-signup-code', { full_name: name, email, password }); signupEmail = email; document.getElementById('verifyEmailLabel').textContent = email; showPanel('verifyPanel'); startTimer('signupTimer', 120, 'signupResend', 'signupResendText'); notify('Verification code sent. Check your email.', 'success') } catch (error) { notify(error.message) } finally { setBusy(form, false) }
})

document.getElementById('verifyForm').addEventListener('submit', async (event) => {
  event.preventDefault(); const form = event.currentTarget; setBusy(form, true); const code = document.getElementById('signupCode').value.trim()
  try { await invoke('verify-signup-code', { email: signupEmail, code }); clearInterval(signupCountdown); document.getElementById('loginEmail').value = signupEmail; showPanel('loginPanel'); notify('Email verified. Your account is now active. You can login with your email and password.', 'success') } catch (error) { notify(error.message) } finally { setBusy(form, false) }
})

document.getElementById('signupResend').addEventListener('click', async () => {
  const email = signupEmail; const name = document.getElementById('signupName').value.trim(); const password = document.getElementById('signupPassword').value
  const button = document.getElementById('signupResend'); button.disabled = true
  try { await invoke('request-signup-code', { full_name: name, email, password }); startTimer('signupTimer', 120, 'signupResend', 'signupResendText'); notify('A new verification code has been sent.', 'success') } catch (error) { notify(error.message); button.disabled = false }
})

document.getElementById('loginForm').addEventListener('submit', async (event) => {
  event.preventDefault(); const form = event.currentTarget; setBusy(form, true); const email = document.getElementById('loginEmail').value.trim().toLowerCase(); const password = document.getElementById('loginPassword').value
  try {
    const { data, error } = await sb.auth.signInWithPassword({ email, password })
    if (error) throw error
    if (!data.user?.email_confirmed_at) { await sb.auth.signOut(); throw new Error('Please verify your email before logging in.') }
    document.getElementById('accountEmail').textContent = data.user.email || email; document.getElementById('accountId').textContent = data.user.id; showPanel('accountPanel'); notify('Login successful.', 'success')
  } catch (error) { notify(error.message || 'Login failed.') } finally { setBusy(form, false) }
})

document.getElementById('forgotForm').addEventListener('submit', async (event) => {
  event.preventDefault(); const form = event.currentTarget; setBusy(form, true); forgotEmail = document.getElementById('forgotEmail').value.trim().toLowerCase()
  try { await invoke('request-password-reset', { email: forgotEmail }); document.getElementById('resetEmailLabel').textContent = forgotEmail; showPanel('resetVerifyPanel'); startTimer('resetTimer', 120, 'resetResend', null); notify('If the email is registered, a 7-digit reset code has been sent.', 'success') } catch (error) { notify(error.message) } finally { setBusy(form, false) }
})

document.getElementById('resetResend').addEventListener('click', async () => {
  const button = document.getElementById('resetResend'); button.disabled = true
  try { await invoke('request-password-reset', { email: forgotEmail }); startTimer('resetTimer', 120, 'resetResend', null); notify('A new reset code has been sent.', 'success') } catch (error) { notify(error.message); button.disabled = false }
})

document.getElementById('resetVerifyForm').addEventListener('submit', async (event) => {
  event.preventDefault(); const form = event.currentTarget; setBusy(form, true); const code = document.getElementById('resetCode').value.trim()
  try { const data = await invoke('verify-password-reset', { email: forgotEmail, code }); resetToken = data.reset_token; clearInterval(resetCountdown); showPanel('changePasswordPanel'); notify('Code verified. Set your new password.', 'success') } catch (error) { notify(error.message) } finally { setBusy(form, false) }
})

document.getElementById('changePasswordForm').addEventListener('submit', async (event) => {
  event.preventDefault(); const form = event.currentTarget; setBusy(form, true); const password = document.getElementById('newPassword').value; const confirm = document.getElementById('newPasswordConfirm').value
  if (password.length < 8 || password !== confirm) { notify('Password must be at least 8 characters and both fields must match.'); setBusy(form, false); return }
  try { await invoke('complete-password-reset', { email: forgotEmail, reset_token: resetToken, password }); resetToken = ''; document.getElementById('loginEmail').value = forgotEmail; showPanel('loginPanel'); notify('Password changed successfully. The old password no longer works.', 'success') } catch (error) { notify(error.message) } finally { setBusy(form, false) }
})

document.getElementById('logoutButton').addEventListener('click', async () => { await sb.auth.signOut(); showPanel('welcomePanel'); notify('You have been logged out.', 'success') })

sb.auth.getSession().then(({ data }) => {
  const user = data.session?.user
  if (user?.email_confirmed_at) { document.getElementById('accountEmail').textContent = user.email || ''; document.getElementById('accountId').textContent = user.id; showPanel('accountPanel') }
})
