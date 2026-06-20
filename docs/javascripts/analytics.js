document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('analytics-stats');
  if (!container) return;

  try {
    const response = await fetch('https://api.settlers.top/analytics');
    if (!response.ok) throw new Error('API error');

    const data = await response.json();

    const hexes = document.getElementById('stat-hexes');
    const users = document.getElementById('stat-users');
    const clans = document.getElementById('stat-clans');

    if (hexes && typeof data.hexes === 'number') {
      hexes.textContent = data.hexes.toLocaleString('en-US');
    }
    if (users && typeof data.users === 'number') {
      users.textContent = data.users.toLocaleString('en-US');
    }
    if (clans && typeof data.clans === 'number') {
      clans.textContent = data.clans.toLocaleString('en-US');
    }

    container.hidden = false;
  } catch {
    container.hidden = true;
  }
});
