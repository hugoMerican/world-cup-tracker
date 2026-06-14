// EDITABLE TEAM DATA
// Change a team name, group, or flag here and the whole page updates automatically.
// Keep the team names matching the picks JSON and the matches array.
const teams = [
  { group: 'A', flag: '🇲🇽', name: 'Mexico' },
  { group: 'A', flag: '🇿🇦', name: 'South Africa' },
  { group: 'A', flag: '🇰🇷', name: 'South Korea' },
  { group: 'A', flag: '🇨🇿', name: 'Czechia' },
  { group: 'B', flag: '🇨🇦', name: 'Canada' },
  { group: 'B', flag: '🇧🇦', name: 'Bosnia and Herzegovina' },
  { group: 'B', flag: '🇶🇦', name: 'Qatar' },
  { group: 'B', flag: '🇨🇭', name: 'Switzerland' },
  { group: 'C', flag: '🇧🇷', name: 'Brazil' },
  { group: 'C', flag: '🇲🇦', name: 'Morocco' },
  { group: 'C', flag: '🇭🇹', name: 'Haiti' },
  { group: 'C', flag: '🏴', name: 'Scotland' },
  { group: 'D', flag: '🇺🇸', name: 'United States' },
  { group: 'D', flag: '🇵🇾', name: 'Paraguay' },
  { group: 'D', flag: '🇦🇺', name: 'Australia' },
  { group: 'D', flag: '🇹🇷', name: 'Turkey' },
  { group: 'E', flag: '🇩🇪', name: 'Germany' },
  { group: 'E', flag: '🇨🇼', name: 'Curacao' },
  { group: 'E', flag: '🇨🇮', name: 'Ivory Coast' },
  { group: 'E', flag: '🇪🇨', name: 'Ecuador' },
  { group: 'F', flag: '🇳🇱', name: 'Netherlands' },
  { group: 'F', flag: '🇯🇵', name: 'Japan' },
  { group: 'F', flag: '🇸🇪', name: 'Sweden' },
  { group: 'F', flag: '🇹🇳', name: 'Tunisia' },
  { group: 'G', flag: '🇧🇪', name: 'Belgium' },
  { group: 'G', flag: '🇪🇬', name: 'Egypt' },
  { group: 'G', flag: '🇮🇷', name: 'Iran' },
  { group: 'G', flag: '🇳🇿', name: 'New Zealand' },
  { group: 'H', flag: '🇪🇸', name: 'Spain' },
  { group: 'H', flag: '🇨🇻', name: 'Cape Verde' },
  { group: 'H', flag: '🇸🇦', name: 'Saudi Arabia' },
  { group: 'H', flag: '🇺🇾', name: 'Uruguay' },
  { group: 'I', flag: '🇫🇷', name: 'France' },
  { group: 'I', flag: '🇸🇳', name: 'Senegal' },
  { group: 'I', flag: '🇮🇶', name: 'Iraq' },
  { group: 'I', flag: '🇳🇴', name: 'Norway' },
  { group: 'J', flag: '🇦🇷', name: 'Argentina' },
  { group: 'J', flag: '🇩🇿', name: 'Algeria' },
  { group: 'J', flag: '🇦🇹', name: 'Austria' },
  { group: 'J', flag: '🇯🇴', name: 'Jordan' },
  { group: 'K', flag: '🇵🇹', name: 'Portugal' },
  { group: 'K', flag: '🇨🇩', name: 'DR Congo' },
  { group: 'K', flag: '🇺🇿', name: 'Uzbekistan' },
  { group: 'K', flag: '🇨🇴', name: 'Colombia' },
  { group: 'L', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', name: 'England' },
  { group: 'L', flag: '🇭🇷', name: 'Croatia' },
  { group: 'L', flag: '🇬🇭', name: 'Ghana' },
  { group: 'L', flag: '🇵🇦', name: 'Panama' }
];

const matches = [
  { id: '66457070', stage: 'Group E', kickoff: '2026-06-14T13:00:00-04:00', home: 'Germany', away: 'Curacao' },
  { id: '66456968', stage: 'Group F', kickoff: '2026-06-14T16:00:00-04:00', home: 'Netherlands', away: 'Japan' },
  { id: '66457072', stage: 'Group E', kickoff: '2026-06-14T19:00:00-04:00', home: 'Ivory Coast', away: 'Ecuador' },
  { id: '66456970', stage: 'Group F', kickoff: '2026-06-14T22:00:00-04:00', home: 'Sweden', away: 'Tunisia' },
  { id: '66456994', stage: 'Group H', kickoff: '2026-06-15T12:00:00-04:00', home: 'Spain', away: 'Cape Verde' },
  { id: '66456982', stage: 'Group G', kickoff: '2026-06-15T15:00:00-04:00', home: 'Belgium', away: 'Egypt' },
  { id: '66456996', stage: 'Group H', kickoff: '2026-06-15T18:00:00-04:00', home: 'Saudi Arabia', away: 'Uruguay' },
  { id: '66456984', stage: 'Group G', kickoff: '2026-06-15T21:00:00-04:00', home: 'Iran', away: 'New Zealand' },
  { id: '66457006', stage: 'Group I', kickoff: '2026-06-16T15:00:00-04:00', home: 'France', away: 'Senegal' },
  { id: '66457008', stage: 'Group I', kickoff: '2026-06-16T18:00:00-04:00', home: 'Iraq', away: 'Norway' },
  { id: '66457018', stage: 'Group J', kickoff: '2026-06-16T21:00:00-04:00', home: 'Argentina', away: 'Algeria' },
  { id: '66457020', stage: 'Group J', kickoff: '2026-06-17T00:00:00-04:00', home: 'Austria', away: 'Jordan' },
  { id: '66457030', stage: 'Group K', kickoff: '2026-06-17T13:00:00-04:00', home: 'Portugal', away: 'DR Congo' },
  { id: '66457042', stage: 'Group L', kickoff: '2026-06-17T16:00:00-04:00', home: 'England', away: 'Croatia' },
  { id: '66457044', stage: 'Group L', kickoff: '2026-06-17T19:00:00-04:00', home: 'Ghana', away: 'Panama' },
  { id: '66457032', stage: 'Group K', kickoff: '2026-06-17T22:00:00-04:00', home: 'Uzbekistan', away: 'Colombia' },
  { id: '66456910', stage: 'Group A', kickoff: '2026-06-18T12:00:00-04:00', home: 'Czechia', away: 'South Africa' },
  { id: '66456922', stage: 'Group B', kickoff: '2026-06-18T15:00:00-04:00', home: 'Switzerland', away: 'Bosnia and Herzegovina' },
  { id: '66456920', stage: 'Group B', kickoff: '2026-06-18T18:00:00-04:00', home: 'Canada', away: 'Qatar' },
  { id: '66456908', stage: 'Group A', kickoff: '2026-06-18T21:00:00-04:00', home: 'Mexico', away: 'South Korea' },
  { id: '66456944', stage: 'Group D', kickoff: '2026-06-19T15:00:00-04:00', home: 'United States', away: 'Australia' },
  { id: '66456934', stage: 'Group C', kickoff: '2026-06-19T18:00:00-04:00', home: 'Scotland', away: 'Morocco' },
  { id: '66456932', stage: 'Group C', kickoff: '2026-06-19T20:30:00-04:00', home: 'Brazil', away: 'Haiti' },
  { id: '66456946', stage: 'Group D', kickoff: '2026-06-19T23:00:00-04:00', home: 'Turkey', away: 'Paraguay' },
  { id: '66456972', stage: 'Group F', kickoff: '2026-06-20T13:00:00-04:00', home: 'Netherlands', away: 'Sweden' },
  { id: '66457074', stage: 'Group E', kickoff: '2026-06-20T16:00:00-04:00', home: 'Germany', away: 'Ivory Coast' },
  { id: '66457076', stage: 'Group E', kickoff: '2026-06-20T20:00:00-04:00', home: 'Ecuador', away: 'Curacao' },
  { id: '66456974', stage: 'Group F', kickoff: '2026-06-21T00:00:00-04:00', home: 'Tunisia', away: 'Japan' },
  { id: '66456998', stage: 'Group H', kickoff: '2026-06-21T12:00:00-04:00', home: 'Spain', away: 'Saudi Arabia' },
  { id: '66456986', stage: 'Group G', kickoff: '2026-06-21T15:00:00-04:00', home: 'Belgium', away: 'Iran' },
  { id: '66457000', stage: 'Group H', kickoff: '2026-06-21T18:00:00-04:00', home: 'Uruguay', away: 'Cape Verde' },
  { id: '66456988', stage: 'Group G', kickoff: '2026-06-21T21:00:00-04:00', home: 'New Zealand', away: 'Egypt' },
  { id: '66457022', stage: 'Group J', kickoff: '2026-06-22T13:00:00-04:00', home: 'Argentina', away: 'Austria' },
  { id: '66457010', stage: 'Group I', kickoff: '2026-06-22T17:00:00-04:00', home: 'France', away: 'Iraq' },
  { id: '66457012', stage: 'Group I', kickoff: '2026-06-22T20:00:00-04:00', home: 'Norway', away: 'Senegal' },
  { id: '66457024', stage: 'Group J', kickoff: '2026-06-22T23:00:00-04:00', home: 'Jordan', away: 'Algeria' },
  { id: '66457034', stage: 'Group K', kickoff: '2026-06-23T13:00:00-04:00', home: 'Portugal', away: 'Uzbekistan' },
  { id: '66457046', stage: 'Group L', kickoff: '2026-06-23T16:00:00-04:00', home: 'England', away: 'Ghana' },
  { id: '66457048', stage: 'Group L', kickoff: '2026-06-23T19:00:00-04:00', home: 'Panama', away: 'Croatia' },
  { id: '66457036', stage: 'Group K', kickoff: '2026-06-23T22:00:00-04:00', home: 'Colombia', away: 'DR Congo' },
  { id: '66456924', stage: 'Group B', kickoff: '2026-06-24T15:00:00-04:00', home: 'Switzerland', away: 'Canada' },
  { id: '66456926', stage: 'Group B', kickoff: '2026-06-24T15:00:00-04:00', home: 'Bosnia and Herzegovina', away: 'Qatar' },
  { id: '66456936', stage: 'Group C', kickoff: '2026-06-24T18:00:00-04:00', home: 'Scotland', away: 'Brazil' },
  { id: '66456938', stage: 'Group C', kickoff: '2026-06-24T18:00:00-04:00', home: 'Morocco', away: 'Haiti' },
  { id: '66456912', stage: 'Group A', kickoff: '2026-06-24T21:00:00-04:00', home: 'Czechia', away: 'Mexico' },
  { id: '66456914', stage: 'Group A', kickoff: '2026-06-24T21:00:00-04:00', home: 'South Africa', away: 'South Korea' },
  { id: '66457078', stage: 'Group E', kickoff: '2026-06-25T16:00:00-04:00', home: 'Ecuador', away: 'Germany' },
  { id: '66457080', stage: 'Group E', kickoff: '2026-06-25T16:00:00-04:00', home: 'Curacao', away: 'Ivory Coast' },
  { id: '66456976', stage: 'Group F', kickoff: '2026-06-25T19:00:00-04:00', home: 'Tunisia', away: 'Netherlands' },
  { id: '66456978', stage: 'Group F', kickoff: '2026-06-25T19:00:00-04:00', home: 'Japan', away: 'Sweden' },
  { id: '66456948', stage: 'Group D', kickoff: '2026-06-25T22:00:00-04:00', home: 'Turkey', away: 'United States' },
  { id: '66456950', stage: 'Group D', kickoff: '2026-06-25T22:00:00-04:00', home: 'Paraguay', away: 'Australia' },
  { id: '66457014', stage: 'Group I', kickoff: '2026-06-26T15:00:00-04:00', home: 'Norway', away: 'France' },
  { id: '66457016', stage: 'Group I', kickoff: '2026-06-26T15:00:00-04:00', home: 'Senegal', away: 'Iraq' },
  { id: '66457002', stage: 'Group H', kickoff: '2026-06-26T20:00:00-04:00', home: 'Uruguay', away: 'Spain' },
  { id: '66457004', stage: 'Group H', kickoff: '2026-06-26T20:00:00-04:00', home: 'Cape Verde', away: 'Saudi Arabia' },
  { id: '66456990', stage: 'Group G', kickoff: '2026-06-26T23:00:00-04:00', home: 'New Zealand', away: 'Belgium' },
  { id: '66456992', stage: 'Group G', kickoff: '2026-06-26T23:00:00-04:00', home: 'Egypt', away: 'Iran' },
  { id: '66457050', stage: 'Group L', kickoff: '2026-06-27T17:00:00-04:00', home: 'Panama', away: 'England' },
  { id: '66457052', stage: 'Group L', kickoff: '2026-06-27T17:00:00-04:00', home: 'Croatia', away: 'Ghana' },
  { id: '66457038', stage: 'Group K', kickoff: '2026-06-27T19:30:00-04:00', home: 'Colombia', away: 'Portugal' },
  { id: '66457040', stage: 'Group K', kickoff: '2026-06-27T19:30:00-04:00', home: 'DR Congo', away: 'Uzbekistan' },
  { id: '66457026', stage: 'Group J', kickoff: '2026-06-27T22:00:00-04:00', home: 'Jordan', away: 'Argentina' },
  { id: '66457028', stage: 'Group J', kickoff: '2026-06-27T22:00:00-04:00', home: 'Algeria', away: 'Austria' }
];

const picksJsonUrl = './sample-picks.json';
const validStatuses = ['Alive', 'Eliminated', 'Winner'];
let picks = [];

const searchInput = document.querySelector('#searchInput');
const statusFilter = document.querySelector('#statusFilter');
const tableArea = document.querySelector('#tableArea');
const bars = document.querySelector('#bars');
const toast = document.querySelector('#toast');
const nextMatchCard = document.querySelector('#nextMatchCard');

async function loadPicksFromJson() {
  try {
    const response = await fetch(picksJsonUrl, { cache: 'no-store' });

    if (!response.ok) {
      throw new Error('Could not load picks JSON');
    }

    const payload = await response.json();
    const importedPicks = Array.isArray(payload) ? payload : payload.picks;

    if (!Array.isArray(importedPicks)) {
      throw new Error('Invalid picks JSON format');
    }

    picks = importedPicks
      .map(normalizePick)
      .filter(pick => pick.friend && pick.team);

    render();
  } catch (error) {
    tableArea.innerHTML = `
      <div class="empty">
        Could not load picks from sample-picks.json. Make sure you are running the site through a local server.
      </div>
    `;
    console.error(error);
  }
}


function getTeam(teamName) {
  return teams.find(team => team.name === teamName) || { name: teamName, flag: '🏳️', group: '?' };
}

function normalizeStatus(status) {
  return validStatuses.includes(status) ? status : 'Alive';
}

function normalizePick(pick) {
  return {
    id: pick.id || crypto.randomUUID(),
    friend: String(pick.friend || '').trim(),
    team: String(pick.team || '').trim(),
    status: normalizeStatus(pick.status),
    updatedAt: pick.updatedAt || new Date().toISOString()
  };
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove('show'), 1800);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}


function formatMatchTime(kickoff) {
  return new Date(kickoff).toLocaleString([], {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  });
}

function getRelevantUpcomingMatch() {
  const activePickedTeams = new Set(
    picks
      .filter(pick => pick.status !== 'Eliminated')
      .map(pick => pick.team)
  );

  if (!activePickedTeams.size) return null;

  const now = new Date();
  return matches
    .filter(match => new Date(match.kickoff) > now)
    .filter(match => activePickedTeams.has(match.home) || activePickedTeams.has(match.away))
    .sort((a, b) => new Date(a.kickoff) - new Date(b.kickoff))[0] || null;
}

function renderNextMatch() {
  if (!nextMatchCard) return;

  if (!picks.length) {
    nextMatchCard.innerHTML = '<div class="empty">Import picks first, then this card will show the next upcoming match involving one of those picked teams.</div>';
    return;
  }

  const match = getRelevantUpcomingMatch();
  if (!match) {
    nextMatchCard.innerHTML = '<div class="empty">No upcoming match found for active picks in the bundled local schedule. Add that team’s fixture to the matches array, or later replace the array with API data.</div>';
    return;
  }

  const home = getTeam(match.home);
  const away = getTeam(match.away);
  const involvedPicks = picks.filter(pick =>
    pick.status !== 'Eliminated' && [match.home, match.away].includes(pick.team)
  );
  const watchers = involvedPicks
    .map(pick => `<strong>${escapeHtml(pick.friend)}</strong> picked ${escapeHtml(pick.team)}`)
    .join(' · ');

  nextMatchCard.innerHTML = `
    <div class="match-card">
      <div class="match-team">
        <span>${home.flag} Group ${escapeHtml(home.group)}</span>
        <strong>${escapeHtml(match.home)}</strong>
      </div>
      <div class="match-vs">VS</div>
      <div class="match-team right">
        <span>Group ${escapeHtml(away.group)} ${away.flag}</span>
        <strong>${escapeHtml(match.away)}</strong>
      </div>
    </div>
    <div class="match-details">
      <div class="match-meta">${escapeHtml(match.stage)} · ${escapeHtml(formatMatchTime(match.kickoff))}</div>
      <div class="match-watchers">${watchers}</div>
    </div>
  `;
}

function renderStats() {
  const total = picks.length;
  const counts = countByTeam(picks);
  const unique = Object.keys(counts).length;
  const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];

  document.querySelector('#totalPicks').textContent = total;
  document.querySelector('#uniqueTeams').textContent = unique;
  document.querySelector('#topTeam').textContent = top ? `${getTeam(top[0]).flag} ${top[0]}` : '—';
}

function countByTeam(list) {
  return list.reduce((acc, pick) => {
    acc[pick.team] = (acc[pick.team] || 0) + 1;
    return acc;
  }, {});
}

function renderBars() {
  const counts = Object.entries(countByTeam(picks)).sort((a, b) => b[1] - a[1]);
  if (!counts.length) {
    bars.innerHTML = '<div class="empty">No picks yet. Import a JSON file below to get started.</div>';
    return;
  }

  const max = Math.max(...counts.map(([, count]) => count));
  bars.innerHTML = counts.map(([teamName, count]) => {
    const team = getTeam(teamName);
    const width = Math.round((count / max) * 100);
    return `
      <div class="bar-row">
        <div class="bar-top"><span>${team.flag} ${escapeHtml(teamName)}</span><span>${count}</span></div>
        <div class="bar-shell"><div class="bar-fill" style="width: ${width}%"></div></div>
      </div>
    `;
  }).join('');
}

function getFilteredPicks() {
  const query = searchInput.value.trim().toLowerCase();
  const status = statusFilter.value;
  return picks.filter(pick => {
    const matchesQuery = !query || [pick.friend, pick.team]
      .some(value => String(value || '').toLowerCase().includes(query));
    const matchesStatus = status === 'All' || pick.status === status;
    return matchesQuery && matchesStatus;
  });
}

function renderStatusOptions(currentStatus) {
  return validStatuses.map(status => `
    <option value="${status}" ${status === currentStatus ? 'selected' : ''}>${status}</option>
  `).join('');
}

function renderTable() {
  const rows = getFilteredPicks();
  if (!rows.length) {
    tableArea.innerHTML = '<div class="empty">No matching picks. Import a JSON file below to populate the list.</div>';
    return;
  }

  tableArea.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Friend</th>
          <th>Pick</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(pick => {
          const team = getTeam(pick.team);
          return `
            <tr>
              <td><strong>${escapeHtml(pick.friend)}</strong></td>
              <td><span class="team-pill">${team.flag} ${escapeHtml(pick.team)}</span></td>
              <td>
                <select class="status-select ${pick.status.toLowerCase()}" data-action="status" data-id="${escapeHtml(pick.id)}">
                  ${renderStatusOptions(pick.status)}
                </select>
              </td>
              <td>
                <div class="actions">
                  <button class="icon-btn" data-action="delete" data-id="${escapeHtml(pick.id)}" type="button">Delete</button>
                </div>
              </td>
            </tr>
          `;
        }).join('')}
      </tbody>
    </table>
  `;
}

function render() {
  renderNextMatch();
  renderStats();
  renderBars();
  renderTable();
}

function updatePickStatus(id, status) {
  const pick = picks.find(item => item.id === id);
  if (!pick) return;
  pick.status = normalizeStatus(status);
  pick.updatedAt = new Date().toISOString();
  render();
  showToast('Status updated');
}

function deletePick(id) {
  const pick = picks.find(item => item.id === id);
  if (!pick) return;
  const confirmed = confirm(`Delete ${pick.friend}'s pick?`);
  if (!confirmed) return;
  picks = picks.filter(item => item.id !== id);
  render();
  showToast('Pick deleted');
}

tableArea.addEventListener('change', event => {
  const control = event.target.closest('[data-action="status"]');
  if (!control) return;
  updatePickStatus(control.dataset.id, control.value);
});

tableArea.addEventListener('click', event => {
  const button = event.target.closest('[data-action="delete"]');
  if (!button) return;
  deletePick(button.dataset.id);
});

searchInput.addEventListener('input', renderTable);
statusFilter.addEventListener('change', renderTable);

document.querySelector('#exportBtn').addEventListener('click', () => {
  const payload = {
    exportedAt: new Date().toISOString(),
    app: 'World Cup Picks',
    version: 4,
    picks: picks.map(normalizePick)
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `world-cup-picks-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
  showToast('JSON exported');
});

document.querySelector('#importBtn').addEventListener('click', () => {
  document.querySelector('#importFile').click();
});

document.querySelector('#importFile').addEventListener('change', async event => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    const text = await file.text();
    const payload = JSON.parse(text);
    const importedPicks = Array.isArray(payload) ? payload : payload.picks;
    if (!Array.isArray(importedPicks)) throw new Error('Invalid file format');
    picks = importedPicks.map(normalizePick).filter(pick => pick.friend && pick.team);
    render();
    showToast('JSON imported');
  } catch (error) {
    alert('Could not import that file. Make sure it is a valid export JSON.');
  } finally {
    event.target.value = '';
  }
});

document.querySelector('#clearBtn').addEventListener('click', () => {
  if (!picks.length) return;
  const confirmed = confirm('Clear every saved pick on this device?');
  if (!confirmed) return;
  picks = [];
  render();
  showToast('All picks cleared');
});

loadPicksFromJson();
