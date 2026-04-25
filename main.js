const isGitHubPages = window.location.hostname.endsWith('github.io')

if (isGitHubPages) {
  const [repoName] = window.location.pathname.split('/').filter(Boolean)
  const basePath = repoName ? `/${repoName}/` : '/'

  const stylesheet = document.createElement('link')
  stylesheet.rel = 'stylesheet'
  stylesheet.href = `${basePath}assets/index.css`
  document.head.appendChild(stylesheet)

  import(`${basePath}assets/index.js`).catch(() => {
    const root = document.getElementById('root')

    if (!root) return

    root.innerHTML =
      '<p style="padding:16px;font-family:system-ui,sans-serif;">App bundle not found. Run the GitHub Pages deploy workflow and refresh.</p>'
  })
} else {
  import('/src/main.jsx')
}
