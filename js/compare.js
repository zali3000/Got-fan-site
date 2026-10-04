document.addEventListener('DOMContentLoaded', () => {
  const data = {
    world:{label:'The Realm',got:{title:'GAME OF THRONES',text:'A fractured Seven Kingdoms shaped by the War of the Five Kings, the return of dragons and the threat beyond the Wall.'},hotd:{title:'HOUSE OF THE DRAGON',text:'A Targaryen-dominated realm where succession, bloodline and the Dance of the Dragons reshape the political order.'}},
    power:{label:'Power & Rule',got:{title:'IRON THRONE',text:'Power is contested through rival claims, alliances, military campaigns and control of King’s Landing.'},hotd:{title:'TARGARYEN SUCCESSION',text:'The succession crisis centers on competing claims to the Targaryen throne and the loyalties of the realm.'}},
    dragons:{label:'Dragons',got:{title:'THREE DRAGONS',text:'Daenerys’s Drogon, Rhaegal and Viserion mark the return of dragons as a major force in Westerosi politics and war.'},hotd:{title:'DRAGON DYNASTY',text:'A much larger generation of Targaryen dragons makes dragonriders central to the civil conflict.'}},
    houses:{label:'Great Houses',got:{title:'RIVAL KINGDOMS',text:'Stark, Lannister, Targaryen, Baratheon, Greyjoy, Tyrell, Martell, Arryn and Tully interests collide.'},hotd:{title:'TARGARYEN & VELARYON POWER',text:'Targaryen succession is closely tied to houses including Hightower and Velaryon.'}},
    story:{label:'Central Conflict',got:{title:'THE IRON THRONE',text:'The saga follows competing claims, personal loyalties, war and the struggle to determine Westeros’s future.'},hotd:{title:'THE DANCE OF THE DRAGONS',text:'A dynastic succession dispute becomes a civil war between rival Targaryen factions.'}}
  };
  const grid = document.getElementById('comparisonGrid');
  const tabs = [...document.querySelectorAll('.comparison-tab')];
  if (!grid || !tabs.length) return;
  const render = topic => {
    const d = data[topic];
    grid.innerHTML = `<div class="comparison-side got-side"><span class="comparison-era">${d.label}</span><h2>${d.got.title}</h2><p>${d.got.text}</p><a href="got/index.html">EXPLORE GOT →</a></div><div class="comparison-divider"><span>VS</span></div><div class="comparison-side hotd-side"><span class="comparison-era">${d.label}</span><h2>${d.hotd.title}</h2><p>${d.hotd.text}</p><a href="hotd/index.html">EXPLORE HOTD →</a></div>`;
  };
  const activate = (tab, moveFocus = false) => {
    tabs.forEach(x => { x.classList.toggle('active', x === tab); x.setAttribute('aria-selected', x === tab ? 'true' : 'false'); x.tabIndex = x === tab ? 0 : -1; });
    render(tab.dataset.topic);
    if (moveFocus) tab.focus();
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab));
    tab.addEventListener('keydown', e => {
      if (!['ArrowRight','ArrowLeft','Home','End'].includes(e.key)) return;
      e.preventDefault();
      let next = index;
      if (e.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (e.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (e.key === 'Home') next = 0;
      if (e.key === 'End') next = tabs.length - 1;
      activate(tabs[next], true);
    });
  });
  activate(tabs.find(t => t.getAttribute('aria-selected') === 'true') || tabs[0]);
});
