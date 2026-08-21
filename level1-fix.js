(() => {
  const verifyForm = document.getElementById('verifyForm')
  const verifyPanel = document.getElementById('verifyPanel')
  const resend = document.getElementById('signupResend')
  if (!verifyForm || !verifyPanel || !resend) return

  const codeLabel = verifyForm.querySelector('label')
  const emailWrap = document.createElement('label')
  emailWrap.innerHTML = 'Email<input id="verifySignupEmail" type="email" autocomplete="email" required />'
  codeLabel.parentNode.insertBefore(emailWrap, codeLabel)

  const emailInput = document.getElementById('verifySignupEmail')
  const label = document.getElementById('verifyEmailLabel')
  const timer = document.getElementById('signupTimer')
  const helper = document.getElementById('signupResendText')
  let timerId = null
  let statusTimer = null

  function show(id) {
    document.querySelectorAll('.panel').forEach(p => p.classList.toggle('active', p.id === id))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  function toast(message, type = 'error') {
    const el = document.getElementById('toast')
    el.textContent = message
    el.className = `toast show ${type}`
    clearTimeout(toast.t)
    toast.t = setTimeout(() => el.classList.remove('show'), 4300)
  }
  function runTimer(seconds) {
    clearInterval(timerId)
    resend.classList.add('hidden')
    resend.disabled = true
    let left = Math.max(0, Number(seconds) || 0)
    const tick = () => {
      const m = String(Math.floor(left / 60)).padStart(2, '0')
      const s = String(left % 60).padStart(2, '0')
      timer.textContent = `${m}:${s}`
      if (left <= 0) {
        clearInterval(timerId)
        resend.disabled = false
        resend.classList.remove('hidden')
        helper.textContent = 'The code has expired. You can request a new code now.'
        return
      }
      helper.textContent = `Resend becomes available after the current code expires (${m}:${s}).`
      left -= 1
    }
    tick()
    timerId = setInterval(tick, 1000)
  }
  async function syncActiveCode() {
    const email = emailInput.value.trim().toLowerCase()
    if (!/^\S+@\S+\.\S+$/.test(email)) return
    clearTimeout(statusTimer)
    statusTimer = setTimeout(async () => {
      try {
        const { data, error } = await sb.functions.invoke('request-signup-code', { body: { email, check_only: true } })
        if (error) throw error
        if (data?.error) throw new Error(data.error)
        if (data?.already_active) runTimer(data.expires_in)
        else { clearInterval(timerId); timer.textContent = '00:00'; resend.disabled = false; resend.classList.remove('hidden'); helper.textContent = 'No active code. You can request a new code now.' }
      } catch (_) {
        // Do not reveal whether an arbitrary email is registered from this status check.
      }
    }, 250)
  }

  emailInput.addEventListener('input', syncActiveCode)
  emailInput.addEventListener('blur', syncActiveCode)

  verifyForm.addEventListener('submit', async (event) => {
    event.preventDefault()
    event.stopImmediatePropagation()
    const email = emailInput.value.trim().toLowerCase()
    const code = document.getElementById('signupCode').value.trim()
    if (!/^\S+@\S+\.\S+$/.test(email) || !/^\d{6}$/.test(code)) {
      toast('Enter the email used for Sign Up and the 6-digit code.')
      return
    }
    const buttons = verifyForm.querySelectorAll('button')
    buttons.forEach(b => b.disabled = true)
    try {
      const { data, error } = await sb.functions.invoke('verify-signup-code', { body: { email, code } })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      clearInterval(timerId)
      document.getElementById('loginEmail').value = email
      show('loginPanel')
      toast('Email verified. Your account is now active. You can login with your email and password.', 'success')
    } catch (error) {
      let message = error?.message || 'Verification failed.'
      try { if (error?.context) { const t = await error.context.text(); const p = JSON.parse(t); message = p.error || message } } catch (_) {}
      toast(message)
    } finally {
      buttons.forEach(b => b.disabled = false)
    }
  }, true)

  resend.addEventListener('click', async (event) => {
    event.preventDefault()
    event.stopImmediatePropagation()
    const email = emailInput.value.trim().toLowerCase()
    if (!/^\S+@\S+\.\S+$/.test(email)) { toast('Enter the email used for Sign Up first.'); return }
    resend.disabled = true
    try {
      const { data, error } = await sb.functions.invoke('request-signup-code', { body: { email } })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      runTimer(data.expires_in || 120)
      toast('A new verification code has been sent.', 'success')
    } catch (error) {
      let message = error?.message || 'Could not resend the code.'
      try { if (error?.context) { const t = await error.context.text(); const p = JSON.parse(t); message = p.error || message } } catch (_) {}
      toast(message)
      resend.disabled = false
    }
  }, true)

  const sync = () => {
    const text = label?.textContent?.trim()
    if (text && /^\S+@\S+\.\S+$/.test(text)) {
      emailInput.value = text.toLowerCase()
      syncActiveCode()
    }
  }
  if (label) new MutationObserver(sync).observe(label, { childList: true, characterData: true, subtree: true })
  sync()
})();
