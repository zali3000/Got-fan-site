/* House cards are data-driven so every GOT/HOTD house uses the same card markup and existing CSS. */

function renderHouseCards(){
 const grid=document.querySelector('.page-houses .house-grid');
 if(!grid)return;
 const era=document.body.classList.contains('hotd-theme')?'hotd':'got';
 const cards=HOUSE_CARD_DATA[era]||[];
 grid.innerHTML=cards.map(card=>{
   const attrs=[`data-house="${card.id}"`];
   if(card.category)attrs.push(`data-category="${card.category}"`);
   if(card.faction)attrs.push(`data-faction="${card.faction}"`);
   attrs.push('data-search-item=""',`id="house-house-${card.id}"`);
   const inner=card.innerHTML.replace('__HOUSE_IMAGE__',card.image);
   return `<article class="house-card tilt-card" ${attrs.join(' ')}>${inner}</article>`;
 }).join('');
}
renderHouseCards();
function renderGotDragonsPage() {
  if (!document.body.classList.contains("page-dragons") || !document.body.classList.contains("got-theme")) return;
  const row = document.querySelector(".dragons-page .dragon-row");
  if (!row || !Array.isArray(DRAGON_CARD_DATA.got.dragons)) return;

  row.innerHTML = DRAGON_CARD_DATA.got.dragons.map(dragon => `
    <article class="dragon-card" data-color="${dragon.color}" data-search-item="" id="${dragon.id}">
      <div class="dragon-photo">
        <img alt="${dragon.name}" decoding="async" height="520" loading="lazy" src="${dragon.image}" width="780" />
      </div>
      <div class="dragon-flame"></div>
      <h3>${dragon.name}</h3>
      <span class="rider">Rider: ${dragon.rider}</span>
      <p class="desc">${dragon.description}</p>
      <span class="card-detail-hint">VIEW DETAILS <span>↗</span></span>
    </article>
  `).join("");
}

function renderHotdDragonCards() {
  if (!document.body.classList.contains("hotd-theme")) return;
  const characterGrid = document.querySelector(".character-grid");
  if (!characterGrid || document.getElementById("hotd-character-dragons")) return;

  const section = document.createElement("section");
  section.id = "hotd-character-dragons";
  section.className = "character-dragons-section";
  section.innerHTML = `
    <div class="section-head">
      <h2>Dragons of the Dance</h2>
      <p>Explore the dragons connected to the Targaryen civil war. Dragon cards appear here only on the House of the Dragon character page.</p>
    </div>
    <div class="dragon-row character-dragon-row">
      ${DRAGON_CARD_DATA.hotd.dragons.map(dragon => `
        <article class="dragon-card" data-faction="${dragon.faction}" data-search-item="" id="${dragon.id}">
          <div class="dragon-photo">
            <img alt="${dragon.name}" decoding="async" height="520" loading="lazy" src="${dragon.image}" width="780" />
          </div>
          <div class="dragon-flame"></div>
          <h3>${dragon.name}</h3>
          <span class="rider">Rider: ${dragon.rider}</span>
          <p class="desc">${dragon.description}</p>
          <span class="card-detail-hint">VIEW DETAILS <span>↗</span></span>
        </article>
      `).join("")}
    </div>
  `;
  characterGrid.closest("section")?.after(section);
}

function renderHotdDragonsPage() {
  if (!document.body.classList.contains("hotd-theme") || !document.body.classList.contains("page-dragons")) return;
  const grid = document.getElementById("hotd-dragon-grid");
  if (!grid || !Array.isArray(DRAGON_CARD_DATA.hotd.dragons)) return;

  grid.innerHTML = DRAGON_CARD_DATA.hotd.dragons.map(dragon => `
    <article class="dragon-card" data-faction="${dragon.faction}" data-search-item="" id="${dragon.id}">
      <div class="dragon-photo">
        <img alt="${dragon.name}" decoding="async" height="520" loading="lazy" src="${dragon.image}" width="780" />
      </div>
      <div class="dragon-flame"></div>
      <h3>${dragon.name}</h3>
      <span class="rider">Rider: ${dragon.rider}</span>
      <p class="desc">${dragon.description}</p>
      <span class="card-detail-hint">VIEW DETAILS <span>↗</span></span>
    </article>
  `).join("");
}

function renderCharacterCards() {
  const grid = document.querySelector(".character-grid");
  if (!grid) return;

  const era = document.body.classList.contains("hotd-theme") ? "hotd" : "got";
  const cards = CHARACTER_CARD_DATA[era] || [];

  grid.innerHTML = cards.map(card => {
    const attrs = [
      `data-search-item=""`,
      `id="${card.id}"`
    ];

    if (card.category) attrs.push(`data-category="${card.category}"`);
    if (card.faction) attrs.push(`data-faction="${card.faction}"`);

    const classes = card.unified
      ? "character-card flip-card unified-card"
      : "character-card flip-card";

    return `
      <article class="${classes}" ${attrs.join(" ")}>
        <div class="flip-card-inner">
          <div class="flip-face front">
            <div class="character-photo">
              <img
                alt="${card.alt}"
                decoding="async"
                height="${card.height}"
                loading="lazy"
                src="${card.image}"
                width="${card.width}"
              />
            </div>
            <span class="char-emblem">${card.emblem}</span>
            <h3>${card.name}</h3>
            <p class="char-title">${card.role}</p>
            <span class="flip-hint">tap / hover to flip</span>
          </div>

          <div class="flip-face back">
            <h3>${card.name}</h3>
            <span class="char-title">${card.backRole}</span>
            <p>${card.description}</p>
          </div>
        </div>

        <span class="card-detail-hint">
          VIEW DETAILS
          <span>↗</span>
        </span>
      </article>
    `;
  }).join("");
}



function renderCityCards(era) {
  const grid = document.querySelector('.unified-city-grid');
  if (!grid || !CITY_CARD_DATA?.[era]?.cities) return;
  grid.innerHTML = CITY_CARD_DATA[era].cities.map(city => `
    <article class="city-card unified-city tilt-card" data-city="${city.id.replace(/^city-/, '')}" data-search-item="" id="${city.id}">
      <div class="city-photo image-slot">
        <img alt="${city.name.replace(/"/g, '&quot;')}" decoding="async" loading="lazy" src="${city.image}">
      </div>
      <div class="city-card-content">
        <h3>${city.name}</h3>
        <p>${city.description}</p>
      </div>
      <span class="card-detail-hint">VIEW DETAILS <span>↗</span></span>
    </article>`).join('');
}

// Chronicle and Storyline archive cards — kept in chronological order and editable like the other archive data.
const archiveEscapeHTML=s=>String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');

function renderArchiveTimeline(){
  const host=document.querySelector('.timeline-data-render[data-archive-era][data-archive-page]');
  if(!host)return;
  const era=host.dataset.archiveEra;
  const page=host.dataset.archivePage;
  if(page!=='chronicle') return;
  const source=CHRONICLE_CARD_DATA;
  const events=source?.[era]?.events||[];
  host.innerHTML=events.map((event,index)=>{
    const reverse=index%2===1?' reverse':'';
    const period=event.period;
    return `<div class="timeline-item reveal${reverse}"><div class="timeline-dot"></div><div class="timeline-card" data-search-item id="${archiveEscapeHTML(page+'-'+event.id)}"><div class="timeline-photo image-slot"><img alt="${archiveEscapeHTML(event.title)}" decoding="async" height="675" loading="lazy" src="${archiveEscapeHTML(event.image)}" width="1200"/></div><span class="timeline-year">${archiveEscapeHTML(period)}</span><h3>${archiveEscapeHTML(event.title)}</h3><p>${archiveEscapeHTML(event.summary)}</p><span class="card-detail-hint">VIEW DETAILS <span>↗</span></span></div></div>`;
  }).join('');
  host.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
}

document.addEventListener("DOMContentLoaded",()=>{
  // Render Chronicle first so archive pages remain populated even if another optional initializer fails.
  try { renderArchiveTimeline(); } catch (error) { console.error("Archive timeline render failed:", error); }

  const currentEra = location.pathname.includes('/hotd/') ? 'hotd' : location.pathname.includes('/got/') ? 'got' : null;
  if (currentEra && document.querySelector('.unified-city-grid')) renderCityCards(currentEra);

 renderCharacterCards();
 renderGotDragonsPage();
 renderHotdDragonsPage();
 attachTilt(".tilt-card",".tilt-card-inner",8);
 attachFlip(".flip-card");
 attachReveal(".reveal");
 const theme=document.body.classList.contains("hotd-theme")?"rgba(138, 31, 31, ":"rgba(217, 98, 43, "; startEmbers(theme);
 initArchiveFiltering(); initCardSorting(); initProfiles(); initFavorites(); initDetailCards(); initWesterosMap();
 // Final URL-driven card opener. It runs after initDetailCards has attached click handlers.
 setTimeout(()=>{
   const params=new URLSearchParams(location.search);
   const requested=(params.get("open")||location.hash.replace(/^#/,"")).trim().toLowerCase();
   if(!requested)return;
   const target=document.getElementById(requested) || [...document.querySelectorAll("[data-search-item]")].find(card=>{
     const id=(card.id||"").toLowerCase();
     const title=(card.querySelector("h1,h2,h3,h4,.title,.name,.city-name,.dragon-name")?.textContent||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
     const short=requested.replace(/^[^-]+-/,'');
     return id===requested || title===requested || title===short;
   });
   if(target){
     target.scrollIntoView({block:"center",behavior:"auto"});
     target.click();
     if(params.has("open")){
       const clean=new URL(location.href); clean.searchParams.delete("open");
       history.replaceState(null,"",clean.pathname+clean.hash);
     }
   }
 },250);
});
function attachTilt(selector,innerSelector,maxTilt){document.querySelectorAll(selector).forEach(card=>{const inner=card.querySelector(innerSelector)||card;card.addEventListener("mousemove",e=>{if(window.matchMedia("(hover: none)").matches)return;const r=card.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;inner.style.transform=`rotateX(${-(y-r.height/2)/(r.height/2)*maxTilt}deg) rotateY(${(x-r.width/2)/(r.width/2)*maxTilt}deg) scale(1.02)`});card.addEventListener("mouseleave",()=>inner.style.transform="rotateX(0deg) rotateY(0deg) scale(1)")})}
function attachFlip(selector){document.querySelectorAll(selector).forEach(card=>card.addEventListener("click",()=>{if(window.matchMedia("(hover: none)").matches)card.classList.toggle("flipped")}))}
function attachReveal(selector){const items=document.querySelectorAll(selector);if(!items.length)return;const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in-view");obs.unobserve(e.target)}}),{threshold:.15});items.forEach(i=>obs.observe(i))}
function startEmbers(color){const canvas=document.getElementById("embers");if(!canvas||matchMedia("(prefers-reduced-motion: reduce)").matches)return;const ctx=canvas.getContext("2d");let w,h,particles=[];const resize=()=>{w=canvas.width=innerWidth;h=canvas.height=innerHeight};addEventListener("resize",resize);resize();const count=matchMedia("(max-width:720px)").matches?18:42;for(let i=0;i<count;i++)particles.push({x:Math.random()*w,y:Math.random()*h,r:Math.random()*2+.5,speed:Math.random()*.6+.2,drift:(Math.random()-.5)*.4,a:Math.random()*.5+.2});function loop(){ctx.clearRect(0,0,w,h);particles.forEach(p=>{p.y-=p.speed;p.x+=p.drift;if(p.y<-10){p.y=h+20;p.x=Math.random()*w}ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`${color}${p.a})`;ctx.fill()});requestAnimationFrame(loop)}loop()}
function initCardSorting(){
 const hosts=[
  ...document.querySelectorAll('.page-houses .house-grid'),
  ...document.querySelectorAll('.page-characters .character-grid'),
  ...document.querySelectorAll('.page-dragons .dragon-row, .dragons-page .dragon-row'),
  ...document.querySelectorAll('.unified-city-grid')
 ].filter((host,i,all)=>host && all.indexOf(host)===i);
 if(!hosts.length)return;
 const titleFor=card=>(card.querySelector('h1,h2,h3,h4,.name,.city-name,.dragon-name')?.textContent||'').trim();
 hosts.forEach(host=>{
   if(host.previousElementSibling?.classList.contains('card-explorer-toolbar'))return;
   const toolbar=document.createElement('div');
   toolbar.className='card-explorer-toolbar';
   toolbar.innerHTML=`<div class="card-explorer-label"><span>ARCHIVE EXPLORER</span><b>Sort entries</b></div><label class="card-sort-label"><span class="sr-only">Sort entries</span><select class="card-sort-select" aria-label="Sort entries"><option value="default">Featured order</option><option value="az">Name A–Z</option><option value="za">Name Z–A</option></select></label>`;
   host.parentNode.insertBefore(toolbar,host);
   const select=toolbar.querySelector('select');
   [...host.children].forEach((card,index)=>{if(!card.dataset.order)card.dataset.order=String(index);});
   const params=new URLSearchParams(location.search);
   const requestedSort=params.get('sort');
   if(['default','az','za'].includes(requestedSort)) select.value=requestedSort;
   const applySort=()=>{
     const cards=[...host.children];
     if(select.value==='default')cards.sort((a,b)=>(Number(a.dataset.order||0)-Number(b.dataset.order||0)));
     if(select.value==='az')cards.sort((a,b)=>titleFor(a).localeCompare(titleFor(b),undefined,{sensitivity:'base'}));
     if(select.value==='za')cards.sort((a,b)=>titleFor(b).localeCompare(titleFor(a),undefined,{sensitivity:'base'}));
     cards.forEach(card=>host.appendChild(card));
   };
   applySort();
   select.addEventListener('change',()=>{
     applySort();
     const url=new URL(location.href);
     if(select.value==='default')url.searchParams.delete('sort'); else url.searchParams.set('sort',select.value);
     history.replaceState(null,'',url.pathname+(url.search?url.search:'')+url.hash);
   });
 });
}

function initArchiveFiltering(){
 const inputs=[...document.querySelectorAll('[data-search]')];
 const groups=[...document.querySelectorAll('[data-filter-group]')];
 const items=[...document.querySelectorAll('[data-search-item]')];
 if(!items.length)return;
 const empty=document.querySelector('.filter-empty');
 const FAVORITES_KEY='westeros-favorites-v1';
 const params=new URLSearchParams(location.search);
 const state={query:params.get('q')||'',filters:{},favoritesOnly:params.get('favorites')==='1'};
 const readFavorites=()=>{try{return JSON.parse(localStorage.getItem(FAVORITES_KEY)||'{}')||{};}catch(e){return {};}};
 const pageKey=()=>{
   const path=location.pathname.replace(/\\/g,'/');
   const parts=path.split('/').filter(Boolean);
   const era=parts.includes('hotd')?'hotd':'got';
   return era+'|'+(parts[parts.length-1]||'index.html');
 };
 const keyFor=item=>pageKey()+'|'+(item.id||item.dataset.searchItemId||item.querySelector('h1,h2,h3,h4,.title,.name')?.textContent||'item').trim().toLowerCase().replace(/[^a-z0-9]+/g,'-');
 const categoryFor=(item,target)=>{
   const direct=item.dataset.category||item.dataset[target]||item.dataset.faction||item.dataset.color;
   if(direct)return direct.toLowerCase();
   if(target==='house')return (item.querySelector('.region')?.textContent||'').trim().toLowerCase().replace(/\s+/g,'-');
   return '';
 };
 const syncURL=()=>{
   const url=new URL(location.href);
   if(state.query) url.searchParams.set('q',state.query); else url.searchParams.delete('q');
   if(state.favoritesOnly) url.searchParams.set('favorites','1'); else url.searchParams.delete('favorites');
   Object.entries(state.filters).forEach(([target,val])=>{ if(val&&val!=='all') url.searchParams.set(target,val); else url.searchParams.delete(target); });
   history.replaceState(null,'',url.pathname+(url.search?url.search:'')+url.hash);
 };
 const apply=()=>{
   const q=state.query.toLowerCase();
   const favorites=state.favoritesOnly?readFavorites():null;
   let shown=0;
   items.forEach(item=>{
     let ok=!q||item.innerText.toLowerCase().includes(q);
     for(const [target,val] of Object.entries(state.filters)){if(val!=='all'&&categoryFor(item,target)!==val){ok=false;break;}}
     if(state.favoritesOnly && !favorites[keyFor(item)])ok=false;
     item.style.display=ok?'':'none';
     if(ok)shown++;
   });
   if(empty)empty.style.display=shown?'none':'block';
   groups.forEach(g=>{const c=g.querySelector('[data-filter-count]');if(c)c.textContent=`${shown} ${shown===1?'result':'results'}`;});
 };
 inputs.forEach(input=>{ input.value=state.query; input.addEventListener('input',()=>{state.query=input.value.trim();apply();syncURL();}); });
 groups.forEach(group=>{
   const target=group.dataset.filterGroup;
   const requested=params.get(target);
   state.filters[target]=requested||'all';
   group.querySelectorAll('[data-filter]').forEach(button=>{
     if(button.dataset.filter.toLowerCase()===state.filters[target]) button.classList.add('active');
     button.addEventListener('click',()=>{
       group.querySelectorAll('[data-filter]').forEach(x=>x.classList.remove('active'));
       button.classList.add('active');
       state.filters[target]=button.dataset.filter.toLowerCase();
       apply(); syncURL();
     });
   });
 });
 document.addEventListener('westeros:favorites-filter',e=>{state.favoritesOnly=!!e.detail?.active;apply();syncURL();});
 document.addEventListener('westeros:favorites-changed',apply);
 apply();
}
function initProfiles(){
 const modal=document.querySelector('.profile-modal');
 if(!modal)return;
 const title=modal.querySelector('[data-profile-title]'), role=modal.querySelector('[data-profile-role]'), text=modal.querySelector('[data-profile-text]');
 let lastTrigger=null;
 const close=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');lastTrigger?.focus();lastTrigger=null;};
 const trapFocus=e=>{if(e.key!=='Tab'||!modal.classList.contains('open'))return;const focusables=[...modal.querySelectorAll('button,a,input,select,textarea,[tabindex]:not([tabindex="-1"])')].filter(x=>!x.disabled);if(!focusables.length)return;const first=focusables[0],last=focusables[focusables.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}};
 document.querySelectorAll('.profile-trigger').forEach(btn=>btn.addEventListener('click',e=>{
   e.stopPropagation(); const card=btn.closest('.character-card');
   if(!card)return; lastTrigger=btn; title.textContent=card.querySelector('.flip-face.back h3')?.textContent||''; role.textContent=card.querySelector('.flip-face.back .char-title')?.textContent||''; text.textContent=card.querySelector('.flip-face.back p')?.textContent||''; modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); requestAnimationFrame(()=>modal.querySelector('.profile-close')?.focus());
 }));
 modal.querySelector('.profile-close')?.addEventListener('click',close); modal.addEventListener('click',e=>{if(e.target===modal)close()}); document.addEventListener('keydown',e=>{if(e.key==='Escape')close();trapFocus(e)});
}

// Responsive universal navigation — one controller for all site headers.
function initResponsiveMobileNavigation(){
 const headers=[...document.querySelectorAll('.home-header')];
 headers.forEach(header=>{
   const nav=header.querySelector('.home-nav');
   const tools=header.querySelector('.home-tools');
   if(!nav||!tools)return;

   let menu=header.querySelector('.home-menu-btn');
   if(!menu){
     menu=document.createElement('button');
     menu.type='button';
     menu.className='home-menu-btn';
     menu.innerHTML='<span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span>';
     tools.appendChild(menu);
   }
   menu.setAttribute('aria-label','Open navigation menu');
   menu.setAttribute('aria-expanded','false');

   let mobile=header.querySelector('.mobile-home-nav');
   if(!mobile){
     mobile=document.createElement('nav');
     mobile.className='mobile-home-nav';
     mobile.setAttribute('aria-label','Mobile navigation');
     nav.querySelectorAll('a').forEach(link=>mobile.appendChild(link.cloneNode(true)));
     header.appendChild(mobile);
   }
   mobile.hidden=true;
   mobile.id = mobile.id || 'mobile-main-nav';
   menu.setAttribute('aria-controls', mobile.id);

   const close=(restoreFocus=false)=>{
     mobile.classList.remove('open');
     mobile.hidden=true;
     menu.setAttribute('aria-expanded','false');
     menu.setAttribute('aria-label','Open navigation menu');
     if(restoreFocus && window.matchMedia('(max-width:900px)').matches) menu.focus();
   };
   const open=()=>{
     mobile.hidden=false;
     mobile.classList.add('open');
     menu.setAttribute('aria-expanded','true');
     menu.setAttribute('aria-label','Close navigation menu');
   };

   if(menu.dataset.bound==='true')return;
   menu.dataset.bound='true';
   menu.addEventListener('click',e=>{
     e.stopPropagation();
     mobile.classList.contains('open') ? close() : open();
   });
   mobile.addEventListener('click',e=>{
     if(e.target.closest('a'))close();
   });
   document.addEventListener('click',e=>{
     if(window.matchMedia('(max-width:900px)').matches && mobile.classList.contains('open') && !header.contains(e.target)) close();
   });
   document.addEventListener('keydown',e=>{
     if(e.key==='Escape' && mobile.classList.contains('open')){
       close(true);
     }
   });
   window.addEventListener('resize',()=>{
     if(!window.matchMedia('(max-width:900px)').matches)close();
   });
 });
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',initResponsiveMobileNavigation);
else initResponsiveMobileNavigation();

// Graceful image fallback: archive entries without a supplied asset should never
// expose a broken-image icon. The original image remains the source of truth;
// the fallback only changes presentation when the browser cannot load it.
(function initImageFallbacks(){
  const handle=e=>{
    const img=e.target;
    if(!(img instanceof HTMLImageElement) || img.dataset.imageFallbackHandled==='true') return;
    img.dataset.imageFallbackHandled='true';
    const host=img.closest('.dragon-photo,.house-photo,.character-photo,.city-photo,.detail-image-wrap,.map-info-image');
    if(!host) return;
    host.classList.add('image-unavailable');
    host.setAttribute('data-image-status','ARCHIVE IMAGE UNAVAILABLE');
    img.hidden=true;
  };
  window.addEventListener('error',handle,true);
})();

// Unified Westeros navigation, era-aware search and mobile menu
(function(){
 // Mobile navigation is initialized by initResponsiveMobileNavigation().
 // Keep this legacy block free of a second click handler so the hamburger
 // cannot toggle twice.
 const searchBtn=document.querySelector('.home-search-btn');
 let panel=document.querySelector('.home-search-panel');
 if(!searchBtn)return;

 if(!panel){
   panel=document.createElement('div'); panel.className='home-search-panel'; panel.hidden=true;
   panel.innerHTML='<div class="search-box"><button type="button" class="search-close" aria-label="Close search">×</button><label for="homeSearch">SEARCH WESTEROS</label><input id="homeSearch" type="search" placeholder="Search houses, characters, dragons, cities..." autocomplete="off"><div id="homeSearchResults"></div></div>';
   document.body.appendChild(panel);
 }
 const close=panel.querySelector('.search-close'), input=panel.querySelector('#homeSearch'), results=panel.querySelector('#homeSearchResults');
 const isMainHome=document.body.classList.contains('westeros-home') || document.body.classList.contains('main-home');
 const era=document.body.classList.contains('hotd-theme')?'hotd':document.body.classList.contains('got-theme')?'got':null;

 // Search index. The main Westeros homepage gets both eras; an era page gets only its own era.
 const searchData={
   got:[
    ['House Stark','House','got/houses.html'],['House Reed','House','got/houses.html'],['House Florent','House','got/houses.html'],['House Hightower','House','got/houses.html'],['House Tarly','House','got/houses.html'],['House Dayne','House','got/houses.html'],['House Royce','House','got/houses.html'],['House Bracken','House','got/houses.html'],['House Blackwood','House','got/houses.html'],['House Frey','House','got/houses.html'],['House Karstark','House','got/houses.html'],['House Mormont','House','got/houses.html'],['House Bolton','House','got/houses.html'],['House Lannister','House','got/houses.html'],['House Targaryen','House','got/houses.html'],['House Baratheon','House','got/houses.html'],['House Greyjoy','House','got/houses.html'],['House Tyrell','House','got/houses.html'],['House Martell','House','got/houses.html'],['House Arryn','House','got/houses.html'],['House Tully','House','got/houses.html'],
    ['Jon Snow','Character','got/characters.html'],['Daenerys Targaryen','Character','got/characters.html'],['Tyrion Lannister','Character','got/characters.html'],['Arya Stark','Character','got/characters.html'],['Sansa Stark','Character','got/characters.html'],['Cersei Lannister','Character','got/characters.html'],['Jaime Lannister','Character','got/characters.html'],['Bran Stark','Character','got/characters.html'],['Ned Stark','Character','got/characters.html'],['Catelyn Stark','Character','got/characters.html'],['Robb Stark','Character','got/characters.html'],['Theon Greyjoy','Character','got/characters.html'],['Brienne of Tarth','Character','got/characters.html'],['Sandor Clegane','Character','got/characters.html'],['Jorah Mormont','Character','got/characters.html'],['Varys','Character','got/characters.html'],['Petyr Baelish','Character','got/characters.html'],['Samwell Tarly','Character','got/characters.html'],['Davos Seaworth','Character','got/characters.html'],['Melisandre','Character','got/characters.html'],['Gendry','Character','got/characters.html'],['Grey Worm','Character','got/characters.html'],['Missandei','Character','got/characters.html'],['Tormund Giantsbane','Character','got/characters.html'],
    ['Drogon','Dragon','got/dragons.html'],['Rhaegal','Dragon','got/dragons.html'],['Viserion','Dragon','got/dragons.html'],
    ["King's Landing",'City','got/cities.html'],['Winterfell','City','got/cities.html'],['Braavos','City','got/cities.html'],['Dragonstone','City','got/cities.html'],['Highgarden','City','got/cities.html'],['Castle Black','City','got/cities.html'],['Meereen','City','got/cities.html'],['Sunspear','City','got/cities.html'],
    ['The Chronicle','Chronicle','got/chronicle.html']
   ],
   hotd:[
    ['House Targaryen','House','hotd/houses.html'],['House Swann','House','hotd/houses.html'],['House Royce','House','hotd/houses.html'],['House Darklyn','House','hotd/houses.html'],['House Massey','House','hotd/houses.html'],['House Westerling','House','hotd/houses.html'],['House Cole','House','hotd/houses.html'],['House Mooton','House','hotd/houses.html'],['House Beesbury','House','hotd/houses.html'],['House Celtigar','House','hotd/houses.html'],['House Bracken','House','hotd/houses.html'],['House Blackwood','House','hotd/houses.html'],['House Baratheon','House','hotd/houses.html'],['House Arryn','House','hotd/houses.html'],['House Stark','House','hotd/houses.html'],['House Hightower','House','hotd/houses.html'],['House Velaryon','House','hotd/houses.html'],['House Strong','House','hotd/houses.html'],
    ['Rhaenyra Targaryen','Character','hotd/characters.html'],['Daemon Targaryen','Character','hotd/characters.html'],['King Viserys I','Character','hotd/characters.html'],['Alicent Hightower','Character','hotd/characters.html'],['Aegon II Targaryen','Character','hotd/characters.html'],['Aemond Targaryen','Character','hotd/characters.html'],['Otto Hightower','Character','hotd/characters.html'],['Corlys Velaryon','Character','hotd/characters.html'],['Rhaenys Targaryen','Character','hotd/characters.html'],['Criston Cole','Character','hotd/characters.html'],['Helaena Targaryen','Character','hotd/characters.html'],['Jacaerys Velaryon','Character','hotd/characters.html'],['Lucerys Velaryon','Character','hotd/characters.html'],['Baela Targaryen','Character','hotd/characters.html'],['Rhaena Targaryen','Character','hotd/characters.html'],['Laena Velaryon','Character','hotd/characters.html'],['Harwin Strong','Character','hotd/characters.html'],['Larys Strong','Character','hotd/characters.html'],['Mysaria','Character','hotd/characters.html'],['Vaemond Velaryon','Character','hotd/characters.html'],['Ser Erryk Cargyll','Character','hotd/characters.html'],['Ser Arryk Cargyll','Character','hotd/characters.html'],['Hugh Hammer','Character','hotd/characters.html'],['Ulf the White','Character','hotd/characters.html'],['Addam of Hull','Character','hotd/characters.html'],['Alyn of Hull','Character','hotd/characters.html'],
    ['Syrax','Dragon','hotd/dragons.html'],['Caraxes','Dragon','hotd/dragons.html'],['Vhagar','Dragon','hotd/dragons.html'],['Meleys','Dragon','hotd/dragons.html'],['Sunfyre','Dragon','hotd/dragons.html'],['Dreamfyre','Dragon','hotd/dragons.html'],
    ["King’s Landing",'City','hotd/cities.html'],['Dragonstone','City','hotd/cities.html'],['Driftmark','City','hotd/cities.html'],['Oldtown','City','hotd/cities.html'],['Harrenhal','City','hotd/cities.html'],["Storm’s End",'City','hotd/cities.html'],
    ['The Chronicle','Chronicle','hotd/chronicle.html']
   ]
 };
 const uniqueSearchEntries=list=>{const seen=new Set();return list.filter(item=>{const key=[item[0],item[1],item[2],item[3]||''].join('|').toLowerCase();if(seen.has(key))return false;seen.add(key);return true;});};
 const searchEntries=isMainHome
   ? [...searchData.got.map(x=>[...x,'GAME OF THRONES']),...searchData.hotd.map(x=>[...x,'HOUSE OF THE DRAGON'])]
   : (era?searchData[era]:[]);
 const data=uniqueSearchEntries(searchEntries).map(item=>{
   if(isMainHome) return item;
   const copy=[...item];
   const prefix=era + '/';
   if(typeof copy[2]==='string' && copy[2].startsWith(prefix)) copy[2]=copy[2].slice(prefix.length);
   return copy;
 });
 const open=()=>{panel.hidden=false;setTimeout(()=>input?.focus(),40)};
 const shut=()=>{panel.hidden=true;if(input)input.value='';if(results)results.innerHTML='';};
 searchBtn.addEventListener('click',open); close?.addEventListener('click',shut); panel.addEventListener('click',e=>{if(e.target===panel)shut()});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){shut();document.querySelectorAll('.mobile-home-nav.open').forEach(menu=>{menu.classList.remove('open');menu.hidden=true;});document.querySelectorAll('.home-menu-btn[aria-expanded="true"]').forEach(btn=>{btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-label','Open navigation menu');});}});
 input?.addEventListener('input',()=>{
   const q=input.value.toLowerCase().trim(); if(!results)return;
   if(!q){results.innerHTML='';return;}
   const matches=data.filter(item=>item[0].toLowerCase().includes(q) || item[1].toLowerCase().includes(q));
   results.innerHTML=matches.length?matches.map(item=>{
     const badge=item[3]?`<small>${item[3]}</small>`:'';
     const slug=item[0].toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
     let target=item[2];
     if(!isMainHome) target=target.replace(/^got\//,'').replace(/^hotd\//,'');
     const hashable=!['chronicle'].includes(item[1].toLowerCase()); const href=hashable?`${target}#${item[1].toLowerCase()}-${slug}`:target; return `<a class="home-search-result" href="${href}"><span><strong>${item[0]}</strong>${badge}</span><em>${item[1]}</em></a>`;
   }).join(''):'<div class="home-search-result no-result">No matching result found.</div>';
 });
})();


/* Random Discovery — choose a real archive entry and open it. */
function initRandomDiscovery(){
 const tools=document.querySelector('.home-tools');
 if(!tools || tools.querySelector('[data-random-discovery]'))return;
 const button=document.createElement('button');
 button.type='button';
 button.className='random-discovery-btn';
 button.dataset.randomDiscovery='';
 button.setAttribute('aria-label','Discover something random');
 button.title='Discover something random';
 button.innerHTML='<span aria-hidden="true">⚔</span><b>RANDOM</b>';
 const slug=s=>String(s||'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
 const targetId=(name,type)=>{
   if(type==='House') return 'house-house-'+slug(String(name).replace(/^house\s+/i,''));
   const prefix={Character:'character-',Dragon:'dragon-',City:'city-'}[type];
   return prefix ? prefix+slug(name) : '';
 };
 const archiveIndex={
   got:[
    ['House Stark','House','got/houses.html'],['House Lannister','House','got/houses.html'],['House Targaryen','House','got/houses.html'],['House Baratheon','House','got/houses.html'],['House Greyjoy','House','got/houses.html'],['House Tyrell','House','got/houses.html'],['House Martell','House','got/houses.html'],['House Arryn','House','got/houses.html'],['House Tully','House','got/houses.html'],
    ['Jon Snow','Character','got/characters.html'],['Daenerys Targaryen','Character','got/characters.html'],['Tyrion Lannister','Character','got/characters.html'],['Arya Stark','Character','got/characters.html'],['Sansa Stark','Character','got/characters.html'],['Cersei Lannister','Character','got/characters.html'],['Jaime Lannister','Character','got/characters.html'],['Bran Stark','Character','got/characters.html'],['Ned Stark','Character','got/characters.html'],['Catelyn Stark','Character','got/characters.html'],['Robb Stark','Character','got/characters.html'],['Theon Greyjoy','Character','got/characters.html'],['Brienne of Tarth','Character','got/characters.html'],['Sandor Clegane','Character','got/characters.html'],['Jorah Mormont','Character','got/characters.html'],['Varys','Character','got/characters.html'],['Petyr Baelish','Character','got/characters.html'],['Samwell Tarly','Character','got/characters.html'],['Davos Seaworth','Character','got/characters.html'],['Melisandre','Character','got/characters.html'],['Gendry','Character','got/characters.html'],['Grey Worm','Character','got/characters.html'],['Missandei','Character','got/characters.html'],['Tormund Giantsbane','Character','got/characters.html'],
    ['Drogon','Dragon','got/dragons.html'],['Rhaegal','Dragon','got/dragons.html'],['Viserion','Dragon','got/dragons.html'],
    ["King's Landing",'City','got/cities.html'],['Winterfell','City','got/cities.html'],['Braavos','City','got/cities.html'],['Dragonstone','City','got/cities.html'],['Highgarden','City','got/cities.html'],['Castle Black','City','got/cities.html'],['Meereen','City','got/cities.html'],['Sunspear','City','got/cities.html']
   ],
   hotd:[
    ['House Targaryen','House','hotd/houses.html'],['House Hightower','House','hotd/houses.html'],['House Velaryon','House','hotd/houses.html'],['House Strong','House','hotd/houses.html'],
    ['Rhaenyra Targaryen','Character','hotd/characters.html'],['Daemon Targaryen','Character','hotd/characters.html'],['King Viserys I','Character','hotd/characters.html'],['Alicent Hightower','Character','hotd/characters.html'],['Aegon II Targaryen','Character','hotd/characters.html'],['Aemond Targaryen','Character','hotd/characters.html'],['Otto Hightower','Character','hotd/characters.html'],['Corlys Velaryon','Character','hotd/characters.html'],['Rhaenys Targaryen','Character','hotd/characters.html'],['Criston Cole','Character','hotd/characters.html'],['Helaena Targaryen','Character','hotd/characters.html'],['Jacaerys Velaryon','Character','hotd/characters.html'],['Lucerys Velaryon','Character','hotd/characters.html'],['Baela Targaryen','Character','hotd/characters.html'],['Rhaena Targaryen','Character','hotd/characters.html'],['Laena Velaryon','Character','hotd/characters.html'],['Harwin Strong','Character','hotd/characters.html'],['Larys Strong','Character','hotd/characters.html'],['Mysaria','Character','hotd/characters.html'],['Vaemond Velaryon','Character','hotd/characters.html'],['Ser Erryk Cargyll','Character','hotd/characters.html'],['Ser Arryk Cargyll','Character','hotd/characters.html'],['Hugh Hammer','Character','hotd/characters.html'],['Ulf the White','Character','hotd/characters.html'],['Addam of Hull','Character','hotd/characters.html'],['Alyn of Hull','Character','hotd/characters.html'],
    ['Syrax','Dragon','hotd/dragons.html'],['Caraxes','Dragon','hotd/dragons.html'],['Vhagar','Dragon','hotd/dragons.html'],['Meleys','Dragon','hotd/dragons.html'],['Sunfyre','Dragon','hotd/dragons.html'],['Dreamfyre','Dragon','hotd/dragons.html'],
    ["King's Landing",'City','hotd/cities.html'],['Dragonstone','City','hotd/cities.html'],['Driftmark','City','hotd/cities.html'],['Oldtown','City','hotd/cities.html'],['Harrenhal','City','hotd/cities.html'],["Storm's End",'City','hotd/cities.html']
   ]
 };
 const currentEra=document.body.classList.contains('hotd-theme')?'hotd':document.body.classList.contains('got-theme')?'got':null;
 const currentPage=(location.pathname.split('/').pop()||'index.html').toLowerCase();
 button.addEventListener('click',()=>{
   const pool=currentEra ? archiveIndex[currentEra] : [...archiveIndex.got,...archiveIndex.hotd];
   if(!pool.length)return;
   const [name,type,path]=pool[Math.floor(Math.random()*pool.length)];
   const id=targetId(name,type);
   // Same-page result: open the card directly on the first click.
   if(id && currentEra && path.startsWith(currentEra+'/') && path.slice(currentEra.length+1).toLowerCase()===currentPage){
     const target=document.getElementById(id);
     if(target){ target.scrollIntoView({block:'center',behavior:'auto'}); target.click(); return; }
   }
   // Cross-page result: construct the destination from the site root.
   const root=new URL(currentEra ? '../' : './',location.href);
   const destination=new URL(path,root);
   if(id) destination.searchParams.set('open',id);
   window.location.assign(destination.href);
 });
 tools.insertBefore(button,tools.firstChild);
}
document.addEventListener('DOMContentLoaded',initRandomDiscovery);

/* Universal card detail viewer + richer archive details. */
function initFavorites(){
 const items=[...document.querySelectorAll('[data-search-item]')];
 if(!items.length)return;
 const KEY='westeros-favorites-v1';
 let saved={};
 try{saved=JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(e){saved={}};
 const pageKey=()=>{
   const path=location.pathname.replace(/\\/g,'/');
   const parts=path.split('/').filter(Boolean);
   const era=parts.includes('hotd')?'hotd':'got';
   return era+'|'+(parts[parts.length-1]||'index.html');
 };
 const keyFor=item=>pageKey()+'|'+(item.id||item.dataset.searchItemId||item.querySelector('h1,h2,h3,h4,.title,.name')?.textContent||'item').trim().toLowerCase().replace(/[^a-z0-9]+/g,'-');
 const isFav=item=>!!saved[keyFor(item)];
 const write=()=>{try{localStorage.setItem(KEY,JSON.stringify(saved))}catch(e){}};
 const updateButtons=()=>items.forEach(item=>{const b=item.querySelector('[data-favorite-button]');if(!b)return;const on=isFav(item);b.classList.toggle('is-favorite',on);b.setAttribute('aria-pressed',String(on));b.setAttribute('aria-label',on?'Remove from favorites':'Add to favorites');b.title=on?'Remove from favorites':'Add to favorites';b.textContent=on?'★':'☆';});
 items.forEach(item=>{
   if(item.querySelector('[data-favorite-button]'))return;
   const b=document.createElement('button'); b.type='button'; b.className='favorite-button'; b.dataset.favoriteButton=''; b.textContent='☆'; b.title='Add to favorites'; b.setAttribute('aria-pressed','false');
   b.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();const k=keyFor(item);if(saved[k])delete saved[k];else saved[k]=true;write();updateButtons();item.classList.toggle('is-favorite-card',!!saved[k]);document.dispatchEvent(new CustomEvent('westeros:favorites-changed'));});
   item.appendChild(b);
 });
 const filterHost=document.querySelector('.archive-filters');
 if(filterHost && !filterHost.querySelector('[data-favorites-filter]')){
   const b=document.createElement('button');b.type='button';b.className='filter-btn favorites-filter';b.dataset.favoritesFilter='';b.setAttribute('aria-pressed','false');b.textContent='☆ FAVORITES';
   filterHost.appendChild(b);
   let active=false;
   b.addEventListener('click',()=>{active=!active;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));document.dispatchEvent(new CustomEvent('westeros:favorites-filter',{detail:{active}}));});
 }
 updateButtons();
}
function initDetailCards(){
 const cards=[...document.querySelectorAll('.westeros-page [data-search-item], [data-search-item]')];
 if(!cards.length)return;
 

let modal=document.querySelector('.detail-modal');
 if(!modal){
   modal=document.createElement('div'); modal.className='detail-modal'; modal.hidden=true;
   modal.innerHTML='<div class="detail-backdrop"></div><div class="detail-dialog" role="dialog" aria-modal="true" aria-labelledby="detailModalTitle"><div class="detail-actions"><button class="detail-share" type="button" aria-label="Copy link to this entry">COPY LINK</button><button class="detail-close" type="button" aria-label="Close">×</button></div><div class="detail-content"></div></div>'; modal.setAttribute('aria-hidden','true');
   document.body.appendChild(modal);
 }
 const content=modal.querySelector('.detail-content');
 let detailTrigger=null;
 const close=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('detail-open');detailTrigger?.focus();detailTrigger=null;setTimeout(()=>modal.hidden=true,180);};
 const shareButton=modal.querySelector('.detail-share');
 const updateShareButton=()=>{if(shareButton){shareButton.textContent='COPY LINK';shareButton.disabled=false;}};
 const trapDetailFocus=e=>{if(e.key!=='Tab'||!modal.classList.contains('open'))return;const f=[...modal.querySelectorAll('button,a,input,select,textarea,[tabindex]:not([tabindex="-1"])')].filter(x=>!x.disabled);if(!f.length)return;const first=f[0],last=f[f.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}};
 const normalize=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
 const cardTitle=card=>card.querySelector('h1,h2,h3,h4,.title,.name,.city-name,.dragon-name')?.textContent?.trim() || card.innerText.trim().split('\n')[0] || '';
 const pageInfo=()=>{
   const path=location.pathname.toLowerCase();
   const era=path.includes('/hotd/')?'hotd':path.includes('/got/')?'got':null;
   const page=(path.split('/').pop()||'index.html').replace(/\.html$/,'')||'index';
   return {era,page};
 };
 const escapeHTML=s=>String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');

 const CHARACTER_PROFILES={
  "got/characters/jon-snow":{house:"Stark",role:"King in the North",known:"Jon Snow",profile:"A reluctant leader whose identity, loyalty and sense of duty place him at the center of the struggle for the North and the war against the dead.",traits:"Duty • Loyalty • Leadership • Resilience",importance:"Jon connects the political conflict of Westeros with the existential threat beyond the Wall. His choices repeatedly force him to choose between personal loyalty and the survival of the realm."},
  "got/characters/daenerys-targaryen":{house:"Targaryen",role:"Mother of Dragons",known:"Daenerys Stormborn",profile:"An exiled princess who grows into a powerful queen, building an army and returning to Westeros with three dragons and a claim to the Iron Throne.",traits:"Ambition • Compassion • Power • Determination",importance:"Daenerys represents the return of Targaryen power and dragons. Her journey also explores how the desire to liberate others can become complicated when absolute power is within reach."},
  "got/characters/tyrion-lannister":{house:"Lannister",role:"Hand of the Queen",known:"The Imp",profile:"A politically gifted survivor who relies on intelligence, wit and an understanding of people rather than physical strength.",traits:"Intelligence • Wit • Strategy • Adaptability",importance:"Tyrion repeatedly influences major events through counsel and political strategy, proving that power in Westeros is not always won with a sword."},
  "got/characters/arya-stark":{house:"Stark",role:"No One",known:"Arya Stark",profile:"A Stark daughter whose journey through war, disguise and the Faceless Men transforms her into a highly capable survivor while preserving her fierce sense of identity.",traits:"Courage • Independence • Stealth • Determination",importance:"Arya shows the personal cost of the Stark family’s destruction and the lengths one survivor can go to reclaim agency and justice."},
  "got/characters/sansa-stark":{house:"Stark",role:"Lady of Winterfell",known:"Sansa of Winterfell",profile:"A survivor of court politics who learns patience, observation and diplomacy before becoming a confident political leader.",traits:"Patience • Diplomacy • Intelligence • Resolve",importance:"Sansa’s story turns vulnerability into political strength and demonstrates that understanding power can be as important as wielding it."},
  "got/characters/cersei-lannister":{house:"Lannister",role:"Queen of the Seven Kingdoms",known:"Cersei Lannister",profile:"A fiercely protective queen who uses political calculation, alliances and fear to defend her family and maintain her grip on power.",traits:"Ambition • Ruthlessness • Loyalty • Political Skill",importance:"Cersei embodies the dangerous relationship between family loyalty and political power, repeatedly choosing control even when the cost is isolation."},
  "got/characters/jaime-lannister":{house:"Lannister",role:"The Kingslayer",known:"The Kingslayer",profile:"A celebrated knight whose reputation hides a difficult struggle between love, loyalty, duty and the kind of man he wants to become.",traits:"Swordsmanship • Loyalty • Honor • Conflict",importance:"Jaime’s journey challenges the difference between reputation and character, gradually revealing the person beneath the Kingslayer title."},
  "got/characters/bran-stark":{house:"Stark",role:"The Three-Eyed Raven",known:"Bran the Broken",profile:"A Stark who loses the life he knew and becomes a keeper of memory and ancient knowledge with an unusual view of Westeros’s past and future.",traits:"Memory • Vision • Knowledge • Mystery",importance:"Bran represents the connection between history and destiny. His transformation makes knowledge itself a form of power."},
  "hotd/characters/rhaenyra-targaryen":{house:"Targaryen",role:"Princess / Queen claimant",known:"The Realm’s Delight",faction:"BLACK",profile:"Named heir by Viserys I, Rhaenyra spends her life defending her right to succeed her father as the realm fractures around her claim.",traits:"Determination • Defiance • Family • Authority",importance:"Rhaenyra is the central figure of the succession crisis. Her claim turns a family disagreement into a civil war that reshapes the Targaryen dynasty."},
  "hotd/characters/daemon-targaryen":{house:"Targaryen",role:"Prince / Warrior",known:"The Rogue Prince",faction:"BLACK",profile:"Viserys’s younger brother, a formidable warrior whose ambition, impulsiveness and loyalty make him one of the most unpredictable figures in the Dance.",traits:"Ambition • Combat • Impulsiveness • Loyalty",importance:"Daemon brings military strength and volatility to Rhaenyra’s side, making his personal choices closely connected to the wider succession struggle."},
  "hotd/characters/king-viserys-i":{house:"Targaryen",role:"King of the Seven Kingdoms",known:"Viserys I Targaryen",faction:"ROYAL",profile:"A king who values peace and family unity, but whose unresolved succession leaves the realm vulnerable to division after his death.",traits:"Peace • Family • Tradition • Diplomacy",importance:"Viserys’s decision to name Rhaenyra heir becomes the foundation of the conflict. His failure to secure that succession is one of the war’s defining causes."},
  "hotd/characters/alicent-hightower":{house:"Hightower",role:"Queen / Green leader",known:"Queen Alicent",faction:"GREEN",profile:"Once Rhaenyra’s close companion, Alicent becomes queen and gradually turns into one of the strongest defenders of her children’s claim to the throne.",traits:"Devotion • Fear • Politics • Resolve",importance:"Alicent transforms a personal relationship into a political divide, becoming one of the principal forces behind the Green faction."},
  "hotd/characters/aegon-ii-targaryen":{house:"Targaryen",role:"King of the Seven Kingdoms",known:"Aegon II Targaryen",faction:"GREEN",profile:"Crowned by the Greens after Viserys’s death, Aegon becomes the rival claimant whose coronation makes peaceful compromise far more difficult.",traits:"Privilege • Conflict • Survival • Power",importance:"Aegon’s coronation creates the direct rival claim at the heart of the Dance and gives the Greens a crowned monarch around whom they can rally."},
  "hotd/characters/aemond-targaryen":{house:"Targaryen",role:"Prince / Dragonrider",known:"Aemond One-Eye",faction:"GREEN",profile:"A formidable Targaryen warrior who rides Vhagar and carries a long-running rivalry with Rhaenyra’s family into the civil war.",traits:"Discipline • Pride • Combat • Vengeance",importance:"Aemond’s actions repeatedly turn political tension into personal bloodshed, making him one of the war’s most consequential military figures."},
  "hotd/characters/otto-hightower":{house:"Hightower",role:"Hand of the King",known:"Ser Otto Hightower",faction:"GREEN",profile:"An experienced political strategist who views succession through the lens of royal stability and his family’s security.",traits:"Strategy • Influence • Patience • Ambition",importance:"Otto demonstrates how decisions made inside the royal court can shape events far beyond the throne room."},
  "hotd/characters/corlys-velaryon":{house:"Velaryon",role:"Lord of the Tides",known:"The Sea Snake",faction:"BLACK",profile:"A legendary seafarer who builds House Velaryon into a major maritime power and seeks a stronger place for his family within the royal succession.",traits:"Ambition • Seamanship • Wealth • Leadership",importance:"Corlys brings ships, wealth and military reach to the Black cause, giving the succession struggle a powerful naval dimension."},
  "hotd/characters/rhaenys-targaryen":{house:"Targaryen",role:"Princess / Dragonrider",known:"The Queen Who Never Was",faction:"BLACK",profile:"A Targaryen princess who was once passed over for the throne and carries a personal understanding of the uncertainty surrounding succession.",traits:"Pride • Wisdom • Restraint • Courage",importance:"Rhaenys represents the memory of an earlier succession decision and brings experience, caution and immense symbolic weight to Rhaenyra’s cause."},
  "hotd/characters/criston-cole":{house:"Cole",role:"Lord Commander of the Kingsguard",known:"Ser Criston Cole",faction:"GREEN",profile:"A skilled knight whose personal history with Rhaenyra becomes tangled with resentment, pride and political allegiance.",traits:"Swordsmanship • Pride • Loyalty • Resentment",importance:"Criston shows how personal conflict can become political fuel, eventually turning a private grievance into a major military commitment."},
  "got/characters/ned-stark":{house:"Stark",role:"Lord of Winterfell",known:"Ned Stark",profile:"The honorable lord of Winterfell and father of the Stark children. Ned becomes Hand of the King and discovers that the politics of the capital are far more dangerous than the battles he knows in the North.",traits:"Duty • Honor • Family • Justice",importance:"Ned’s investigation into the royal succession exposes the danger surrounding the Stark family and sets the opening political crisis of the series in motion."},
  "got/characters/catelyn-stark":{house:"Stark",role:"Lady of Winterfell",known:"Catelyn Stark",profile:"A Tully of Riverrun who becomes Lady of Winterfell and a determined protector of her children. Catelyn moves between the North and Riverlands as war tears apart the alliances holding her family together.",traits:"Family • Loyalty • Resolve • Diplomacy",importance:"Catelyn is one of the central political and personal figures of the Stark story, repeatedly making difficult choices to protect her children."},
  "got/characters/robb-stark":{house:"Stark",role:"King in the North",known:"Robb Stark",profile:"Ned’s eldest son, Robb is proclaimed King in the North after his father’s death. His early military victories establish him as a serious force, while his political decisions strain the alliances needed to sustain his war.",traits:"Leadership • Honor • Strategy • Loyalty",importance:"Robb’s campaign demonstrates how battlefield success can be undermined by marriage alliances, oaths and the competing interests of powerful houses."},
  "got/characters/theon-greyjoy":{house:"Greyjoy",role:"Prince of Winterfell",known:"Theon Greyjoy",profile:"The heir of House Greyjoy is raised alongside the Stark children but struggles with his divided identity. His attempt to prove himself to his birth family leads to choices that permanently damage his relationship with the Starks.",traits:"Identity • Pride • Guilt • Redemption",importance:"Theon’s story explores divided loyalty and the long process of rebuilding trust after betrayal."},
  "got/characters/brienne-of-tarth":{house:"Tarth",role:"Knight of the Seven Kingdoms",known:"Brienne of Tarth",profile:"A warrior from Tarth who dedicates herself to the oaths she makes. Brienne challenges expectations about who can be a knight while forming important bonds with Jaime Lannister and the Stark family.",traits:"Honor • Courage • Loyalty • Perseverance",importance:"Brienne represents the ideal of service and knighthood while showing how difficult it can be to live by a strict code in a cynical political world."},
  "got/characters/sandor-clegane":{house:"Clegane",role:"The Hound",known:"Sandor Clegane",profile:"A feared warrior who serves the royal court before abandoning the life of a sworn fighter. His journeys with Arya and later other companions reveal a more complicated man beneath his reputation.",traits:"Combat • Cynicism • Protection • Survival",importance:"The Hound provides a perspective on the brutality of Westeros while repeatedly showing unexpected compassion toward vulnerable people."},
  "got/characters/jorah-mormont":{house:"Mormont",role:"Exiled Knight",known:"Jorah Mormont",profile:"A disgraced knight who becomes one of Daenerys Targaryen’s most persistent advisers and protectors. Jorah’s loyalty is complicated by his past actions and his feelings for Daenerys.",traits:"Loyalty • Experience • Regret • Protection",importance:"Jorah connects Daenerys’s exile to the wider politics of Westeros and remains an important source of military and political advice."},
  "got/characters/varys":{house:"None",role:"Master of Whisperers",known:"Varys",profile:"A master of intelligence who builds networks of informants across the Seven Kingdoms. Varys presents himself as a servant of the realm while carefully navigating competing claims to power.",traits:"Information • Patience • Secrecy • Politics",importance:"Varys demonstrates that information can be as valuable as armies in the struggle for the Iron Throne."},
  "got/characters/petyr-baelish":{house:"Baelish",role:"Lord of Harrenhal",known:"Petyr Baelish",profile:"Known as Littlefinger, Petyr rises from a minor position through financial skill, manipulation and carefully chosen alliances. He repeatedly turns political uncertainty into opportunities for himself.",traits:"Ambition • Finance • Manipulation • Strategy",importance:"Petyr’s rise illustrates how a person without a great ancestral army can still influence the political order through information and alliances."},
  "got/characters/samwell-tarly":{house:"Tarly",role:"Brother of the Night’s Watch",known:"Samwell Tarly",profile:"A bookish young man who joins the Night’s Watch and gradually finds courage in ways he never expected. Sam’s knowledge becomes especially important as the threat beyond the Wall grows.",traits:"Knowledge • Compassion • Courage • Learning",importance:"Sam shows that scholarship and historical knowledge can be crucial weapons when ordinary military strength is not enough."},
  "got/characters/davos-seaworth":{house:"Seaworth",role:"The Onion Knight",known:"Davos Seaworth",profile:"A former smuggler who becomes a trusted adviser and skilled negotiator. Davos serves several leaders while maintaining a strong personal sense of loyalty and practical judgment.",traits:"Loyalty • Diplomacy • Practicality • Honesty",importance:"Davos acts as a grounded political voice, often connecting rulers to the human consequences of their decisions."},
  "got/characters/melisandre":{house:"None",role:"Red Priestess",known:"Melisandre",profile:"A priestess devoted to the Lord of Light whose visions and interpretation of prophecy influence major political and military decisions. Her certainty about destiny often brings her into conflict with others.",traits:"Faith • Prophecy • Influence • Conviction",importance:"Melisandre represents the role of religion and prophecy in the political conflicts of Westeros."},
  "got/characters/gendry":{house:"Baratheon",role:"Baratheon Heir",known:"Gendry",profile:"A blacksmith who discovers his royal parentage and becomes important to several competing factions. His life changes when his connection to Robert Baratheon becomes politically useful.",traits:"Craftsmanship • Survival • Loyalty • Lineage",importance:"Gendry’s identity shows how hidden ancestry can become politically significant in a kingdom obsessed with bloodlines."},
  "got/characters/grey-worm":{house:"None",role:"Commander of the Unsullied",known:"Grey Worm",profile:"A disciplined soldier who rises to command Daenerys’s Unsullied forces. Grey Worm balances military duty with a growing personal life and loyalty to Daenerys.",traits:"Discipline • Loyalty • Leadership • Duty",importance:"Grey Worm is central to Daenerys’s military strength and represents the transformation of the Unsullied from an enslaved force into a loyal army."},
  "got/characters/missandei":{house:"None",role:"Queen’s Adviser",known:"Missandei",profile:"A multilingual interpreter who becomes one of Daenerys’s closest advisers and friends. Missandei moves from slavery to a position of influence beside the Targaryen queen.",traits:"Empathy • Language • Loyalty • Diplomacy",importance:"Missandei provides counsel grounded in communication and compassion while sharing Daenerys’s transformation from exile to ruler."},
  "got/characters/tormund-giantsbane":{house:"Free Folk",role:"Free Folk Warrior",known:"Tormund Giantsbane",profile:"A charismatic Free Folk leader who becomes an ally of Jon Snow after years of hostility between the peoples north and south of the Wall.",traits:"Courage • Humor • Loyalty • Warrior Spirit",importance:"Tormund helps bridge the divide between the Free Folk and the Night’s Watch and becomes an important ally in the war against the dead."},
  "hotd/characters/helaena-targaryen":{house:"Targaryen",role:"Princess of the Realm",known:"Helaena Targaryen",faction:"GREEN",profile:"Aegon II’s sister and wife whose quiet manner and strange prophetic observations make her one of the most distinctive members of the royal family.",traits:"Prophecy • Family • Gentleness • Insight",importance:"Helaena becomes a tragic figure caught between the political ambitions of her family and the personal cost of the succession war."},
  "hotd/characters/jacaerys-velaryon":{house:"Velaryon",role:"Prince of Dragonstone",known:"Jacaerys Velaryon",faction:"BLACK",profile:"Rhaenyra’s eldest son and heir. Jacaerys is sent across Westeros to secure support for his mother’s claim and proves himself capable of diplomacy and dragonriding.",traits:"Duty • Diplomacy • Courage • Responsibility",importance:"Jacaerys becomes one of the most important young representatives of Rhaenyra’s faction during the opening stages of the Dance."},
  "hotd/characters/lucerys-velaryon":{house:"Velaryon",role:"Prince of Driftmark",known:"Lucerys Velaryon",faction:"BLACK",profile:"Rhaenyra’s second son and a dragonrider who is sent to Storm’s End to seek support. His encounter with Aemond becomes one of the events that escalates the conflict.",traits:"Family • Courage • Youth • Duty",importance:"Lucerys’s fate turns the succession dispute into a much more personal and violent war between the two branches of the family."},
  "hotd/characters/baela-targaryen":{house:"Targaryen",role:"Dragonrider of House Targaryen",known:"Baela Targaryen",faction:"BLACK",profile:"Daemon Targaryen’s daughter and a dragonrider raised within the Targaryen family’s increasingly dangerous succession struggle.",traits:"Independence • Courage • Family • Dragonriding",importance:"Baela represents the next generation of Targaryen dragonriders and becomes involved in the defense of her family’s claim."},
  "hotd/characters/rhaena-targaryen":{house:"Targaryen",role:"Lady of House Targaryen",known:"Rhaena Targaryen",faction:"BLACK",profile:"Daemon’s daughter and Baela’s twin, Rhaena grows up surrounded by dragons and the expectations placed on the Targaryen family.",traits:"Patience • Family • Determination • Heritage",importance:"Rhaena’s story shows the pressure placed on Targaryen children to live up to a family identity built around dragons and succession."},
  "hotd/characters/laena-velaryon":{house:"Velaryon",role:"Lady of Driftmark",known:"Laena Velaryon",faction:"BLACK",profile:"The daughter of Corlys and Rhaenys Velaryon and a dragonrider who marries Daemon Targaryen. Her life links the Velaryon family to the Targaryen succession struggle.",traits:"Family • Dragonriding • Ambition • Heritage",importance:"Laena strengthens the connection between the Velaryons and Targaryens and becomes part of Daemon’s family before the Dance fully erupts."},
  "hotd/characters/harwin-strong":{house:"Strong",role:"Commander of the City Watch",known:"Harwin Strong",faction:"BLACK",profile:"A powerful warrior and commander of the City Watch whose close relationship with Rhaenyra has major consequences for the royal family.",traits:"Strength • Loyalty • Secrecy • Protection",importance:"Harwin’s connection to Rhaenyra becomes one of the most sensitive personal issues surrounding the legitimacy of her children."},
  "hotd/characters/larys-strong":{house:"Strong",role:"Lord of Harrenhal",known:"Larys Strong",faction:"GREEN",profile:"The younger son of Lyonel Strong who builds influence through secrets, informants and carefully chosen acts of political violence.",traits:"Secrets • Ambition • Manipulation • Patience",importance:"Larys demonstrates how information and covert action can shape the succession crisis even without commanding a great army."},
  "hotd/characters/mysaria":{house:"None",role:"The White Worm",known:"Mysaria",faction:"OTHER",profile:"A former slave who builds an extensive network of informants in King’s Landing. Mysaria operates outside the great houses while becoming deeply connected to the politics of the capital.",traits:"Information • Survival • Independence • Strategy",importance:"Mysaria shows how people outside the noble families can still influence events through information and political networks."},
  "hotd/characters/vaemond-velaryon":{house:"Velaryon",role:"Velaryon Claimant",known:"Vaemond Velaryon",faction:"GREEN",profile:"A senior member of House Velaryon who challenges the succession of Rhaenyra’s sons to Driftmark. His dispute brings questions of inheritance and legitimacy directly before the royal court.",traits:"Pride • Lineage • Law • Ambition",importance:"Vaemond’s challenge exposes the tension between bloodline, political loyalty and the legal claims surrounding Driftmark."},
  "hotd/characters/ser-erryk-cargyll":{house:"Cargyll",role:"Kingsguard Knight",known:"Ser Erryk Cargyll",faction:"BLACK",profile:"One of the twin Cargyll brothers of the Kingsguard. Erryk ultimately sides with Rhaenyra after becoming disillusioned with the Green succession.",traits:"Honor • Loyalty • Duty • Conscience",importance:"Erryk illustrates how the civil war divides institutions that were expected to serve the crown rather than a faction."},
  "hotd/characters/ser-arryk-cargyll":{house:"Cargyll",role:"Kingsguard Knight",known:"Ser Arryk Cargyll",faction:"GREEN",profile:"Erryk’s twin brother, who remains aligned with Aegon II. The brothers’ opposing loyalties embody the personal cost of the Targaryen civil war.",traits:"Duty • Loyalty • Conflict • Brotherhood",importance:"Arryk’s story highlights how the Dance divides even families and sworn brothers who once served side by side."},
  "hotd/characters/hugh-hammer":{house:"None",role:"Dragonseed",known:"Hugh Hammer",faction:"BLACK",profile:"A common-born man of uncertain parentage who claims Targaryen blood and becomes a dragonrider during the Dance.",traits:"Ambition • Courage • Power • Uncertainty",importance:"Hugh demonstrates how the war expands the traditional boundaries of Targaryen power by allowing people of uncertain birth to become dragonriders."},
  "hotd/characters/ulf-the-white":{house:"None",role:"Dragonseed",known:"Ulf the White",faction:"BLACK",profile:"A common-born man who claims Targaryen ancestry and becomes a dragonrider after the call for dragonseeds.",traits:"Ambition • Opportunism • Heritage • Power",importance:"Ulf’s rise shows the political and military consequences of finding new riders for the many riderless dragons of the Targaryen dynasty."},
  "hotd/characters/addam-of-hull":{house:"Velaryon",role:"Dragonseed / Sailor",known:"Addam of Hull",faction:"BLACK",profile:"A skilled sailor from Hull who becomes a dragonrider and earns the trust of Rhaenyra’s faction. His rise is closely connected to the Velaryon family.",traits:"Loyalty • Skill • Courage • Humility",importance:"Addam becomes an example of a common-born dragonrider whose loyalty and ability earn him a place among the most important figures of the war."},
  "hotd/characters/alyn-of-hull":{house:"Velaryon",role:"Velaryon Sailor",known:"Alyn of Hull",faction:"BLACK",profile:"A talented sailor from Hull and brother of Addam whose service connects him to the powerful Velaryon naval tradition.",traits:"Seamanship • Loyalty • Family • Ambition",importance:"Alyn’s career demonstrates the continuing importance of House Velaryon’s fleet and the role of talented common-born sailors in its history."},

  "got/characters/stannis-baratheon":{house:"Baratheon",role:"Claimant to the Iron Throne",known:"Stannis Baratheon",profile:"A stern and uncompromising Baratheon who believes the law of succession gives him the strongest claim to the Iron Throne.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A stern and uncompromising Baratheon who believes the law of succession gives him the strongest claim to the Iron Throne. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/renly-baratheon":{house:"Baratheon",role:"King claimant",known:"Renly Baratheon",profile:"The youngest Baratheon brother, charismatic and politically popular, who builds a powerful coalition around his claim to the throne.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"The youngest Baratheon brother, charismatic and politically popular, who builds a powerful coalition around his claim to the throne. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/margaery-tyrell":{house:"None",role:"Queen of the Seven Kingdoms",known:"Margaery Tyrell",profile:"A politically astute Tyrell who understands court life, public image and the value of alliances in King’s Landing.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A politically astute Tyrell who understands court life, public image and the value of alliances in King’s Landing. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/olenna-tyrell":{house:"None",role:"Queen of Thorns",known:"Olenna Tyrell",profile:"The sharp-tongued matriarch of House Tyrell who uses experience, wit and family strategy to navigate royal politics.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"The sharp-tongued matriarch of House Tyrell who uses experience, wit and family strategy to navigate royal politics. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/bronn":{house:"None",role:"Sellsword / Knight",known:"Bronn",profile:"A practical fighter who turns skill with a sword into wealth and influence by choosing opportunities that reward his loyalty.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A practical fighter who turns skill with a sword into wealth and influence by choosing opportunities that reward his loyalty. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/ramsay-bolton":{house:"None",role:"Warden of the North",known:"Ramsay Bolton",profile:"A ruthless Bolton who uses fear and cruelty to seize control in the North during the struggle for Winterfell.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A ruthless Bolton who uses fear and cruelty to seize control in the North during the struggle for Winterfell. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/ygritte":{house:"None",role:"Free Folk warrior",known:"Ygritte",profile:"A fierce Free Folk archer whose relationship with Jon Snow gives him a personal connection to the people beyond the Wall.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A fierce Free Folk archer whose relationship with Jon Snow gives him a personal connection to the people beyond the Wall. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/gilly":{house:"None",role:"Craster’s daughter / Survivor",known:"Gilly",profile:"A young woman who escapes Craster’s abusive household and becomes an important companion to Samwell Tarly.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A young woman who escapes Craster’s abusive household and becomes an important companion to Samwell Tarly. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/beric-dondarrion":{house:"None",role:"Lord / Brotherhood leader",known:"Beric Dondarrion",profile:"A knight repeatedly returned to life who leads the Brotherhood Without Banners and becomes part of the fight against the dead.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A knight repeatedly returned to life who leads the Brotherhood Without Banners and becomes part of the fight against the dead. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/thoros-of-myr":{house:"None",role:"Red Priest",known:"Thoros of Myr",profile:"A former warrior-priest whose faith and ability to revive the dead make him an important member of the Brotherhood.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A former warrior-priest whose faith and ability to revive the dead make him an important member of the Brotherhood. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/daario-naharis":{house:"None",role:"Mercenary captain",known:"Daario Naharis",profile:"A charismatic sellsword who joins Daenerys in Slaver’s Bay and becomes one of her trusted military commanders.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A charismatic sellsword who joins Daenerys in Slaver’s Bay and becomes one of her trusted military commanders. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/khal-drogo":{house:"Targaryen",role:"Dothraki khal",known:"Khal Drogo",profile:"A powerful Dothraki warlord whose marriage to Daenerys changes her position and begins a chain of events leading to the birth of her dragons.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A powerful Dothraki warlord whose marriage to Daenerys changes her position and begins a chain of events leading to the birth of her dragons. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/alys-rivers":{house:"None",role:"Healer / Mystic of Harrenhal",known:"Alys Rivers",profile:"A mysterious woman at Harrenhal who becomes closely connected to Daemon Targaryen and the supernatural atmosphere surrounding the castle.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A mysterious woman at Harrenhal who becomes closely connected to Daemon Targaryen and the supernatural atmosphere surrounding the castle. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/simon-strong":{house:"None",role:"Castellan of Harrenhal",known:"Simon Strong",profile:"The aging castellan of Harrenhal who must survive the shifting loyalties and dangers brought to the castle during the Dance.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"The aging castellan of Harrenhal who must survive the shifting loyalties and dangers brought to the castle during the Dance. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/oscar-tully":{house:"None",role:"Lord of Riverrun",known:"Oscar Tully",faction:"BLACK",profile:"A young Tully who inherits leadership during the Dance and is forced to make difficult decisions as the Riverlands become a major battlefield.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A young Tully who inherits leadership during the Dance and is forced to make difficult decisions as the Riverlands become a major battlefield. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/cregan-stark":{house:"Stark",role:"Lord of Winterfell",known:"Cregan Stark",faction:"BLACK",profile:"The powerful Lord of Winterfell whose arrival near the end of the Dance brings northern strength and a strong sense of duty to the conflict.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"The powerful Lord of Winterfell whose arrival near the end of the Dance brings northern strength and a strong sense of duty to the conflict. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/dalton-greyjoy":{house:"None",role:"Lord Reaper of Pyke",known:"Dalton Greyjoy",profile:"A young and aggressive Greyjoy lord whose naval raids add another dimension to the wider turmoil of the Dance.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A young and aggressive Greyjoy lord whose naval raids add another dimension to the wider turmoil of the Dance. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/jason-lannister":{house:"Lannister",role:"Lord of Casterly Rock",known:"Jason Lannister",faction:"GREEN",profile:"A proud Lannister lord who supports the Green cause and seeks military influence during the succession crisis.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A proud Lannister lord who supports the Green cause and seeks military influence during the succession crisis. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/tyland-lannister":{house:"Lannister",role:"Master of Ships / Master of Coin",known:"Tyland Lannister",faction:"GREEN",profile:"A Lannister statesman who serves the royal government and becomes involved in the Greens’ wartime administration.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A Lannister statesman who serves the royal government and becomes involved in the Greens’ wartime administration. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/jasper-wylde":{house:"None",role:"Master of Laws",known:"Jasper Wylde",faction:"GREEN",profile:"A member of Viserys’s Small Council who becomes a prominent supporter of the Green government after the succession crisis.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A member of Viserys’s Small Council who becomes a prominent supporter of the Green government after the succession crisis. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/lyman-beesbury":{house:"None",role:"Master of Coin",known:"Lyman Beesbury",faction:"BLACK",profile:"An elderly councillor who supports Rhaenyra’s succession and openly challenges the decision to crown Aegon.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"An elderly councillor who supports Rhaenyra’s succession and openly challenges the decision to crown Aegon. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/mellos":{house:"None",role:"Grand Maester",known:"Mellos",faction:"GREEN",profile:"A senior maester of the royal court whose medical and political advice reflects the difficult role of the Citadel during the Targaryen civil war.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A senior maester of the royal court whose medical and political advice reflects the difficult role of the Citadel during the Targaryen civil war. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/forrest-frey":{house:"None",role:"Lord of the Crossing",known:"Forrest Frey",profile:"A member of House Frey whose family controls the strategically important crossings of the Trident during the Dance.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A member of House Frey whose family controls the strategically important crossings of the Trident during the Dance. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/benjicot-blackwood":{house:"None",role:"Lord of Raventree Hall",known:"Benjicot-Blackwood",faction:"BLACK",profile:"A young Blackwood commander who becomes an important Riverlands supporter of Rhaenyra and a rival of House Bracken.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A young Blackwood commander who becomes an important Riverlands supporter of Rhaenyra and a rival of House Bracken. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/tywin-lannister":{house:"Lannister",role:"Hand of the King / Lord of Casterly Rock",known:"Tywin Lannister",profile:"A formidable Lannister patriarch who combines political calculation, military authority and family ambition to shape the wars around the Iron Throne.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A formidable Lannister patriarch who combines political calculation, military authority and family ambition to shape the wars around the Iron Throne. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/loras-tyrell":{house:"Lannister",role:"Knight of the Kingsguard",known:"Loras Tyrell",profile:"A renowned Tyrell knight whose skill in tournaments and battle makes him an important member of his family\u2019s political network.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A renowned Tyrell knight whose skill in tournaments and battle makes him an important member of his family\u2019s political network. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/garlan-tyrell":{house:"Lannister",role:"Lord of Brightwater Keep",known:"Garlan Tyrell",profile:"A capable Tyrell warrior and older brother of Loras and Margaery who contributes military strength to House Tyrell.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A capable Tyrell warrior and older brother of Loras and Margaery who contributes military strength to House Tyrell. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/hodor":{house:"Lannister",role:"Stablehand of Winterfell",known:"Hodor",profile:"A gentle giant from Winterfell whose loyalty to Bran makes him an important companion during the journey beyond the Wall.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A gentle giant from Winterfell whose loyalty to Bran makes him an important companion during the journey beyond the Wall. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/jaqen-h-ghar":{house:"Lannister",role:"Faceless Man",known:"Jaqen H\u2019ghar",profile:"A mysterious assassin who introduces Arya to the Faceless Men and their demanding philosophy of identity and death.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A mysterious assassin who introduces Arya to the Faceless Men and their demanding philosophy of identity and death. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/syrio-forel":{house:"Lannister",role:"First Sword of Braavos",known:"Syrio Forel",profile:"Arya\u2019s fencing instructor in King\u2019s Landing who teaches her to see combat as a discipline of movement, awareness and patience.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"Arya\u2019s fencing instructor in King\u2019s Landing who teaches her to see combat as a discipline of movement, awareness and patience. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/roose-bolton":{house:"Lannister",role:"Lord of the Dreadfort",known:"Roose Bolton",profile:"A calculating northern lord whose quiet manner hides a willingness to change allegiance when it benefits House Bolton.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A calculating northern lord whose quiet manner hides a willingness to change allegiance when it benefits House Bolton. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/walder-frey":{house:"Lannister",role:"Lord of the Crossing",known:"Walder Frey",profile:"The elderly lord of the Twins whose control of the crossings gives House Frey significant leverage during the War of the Five Kings.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"The elderly lord of the Twins whose control of the crossings gives House Frey significant leverage during the War of the Five Kings. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/qyburn":{house:"Lannister",role:"Former Maester / Royal adviser",known:"Qyburn",profile:"A disgraced former maester who uses unconventional experiments and political service to regain influence in King\u2019s Landing.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A disgraced former maester who uses unconventional experiments and political service to regain influence in King\u2019s Landing. This character adds another perspective to the political, military, or personal history of the era."},
  "got/characters/mace-tyrell":{house:"Lannister",role:"Lord of Highgarden",known:"Mace Tyrell",profile:"The head of House Tyrell during the later wars, balancing family interests, royal alliances and the military power of the Reach.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"The head of House Tyrell during the later wars, balancing family interests, royal alliances and the military power of the Reach. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/lyonel-strong":{house:"Various",role:"Master of Laws / Hand of the King",known:"Lyonel Strong",profile:"A respected lord and Hand of the King whose service is closely tied to Viserys\u2019s court and the fortunes of House Strong.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A respected lord and Hand of the King whose service is closely tied to Viserys\u2019s court and the fortunes of House Strong. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/harrold-westerling":{house:"Various",role:"Lord Commander of the Kingsguard",known:"Harrold Westerling",profile:"A veteran Kingsguard knight who serves the royal family during the early succession crisis and represents the old guard of the crown.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A veteran Kingsguard knight who serves the royal family during the early succession crisis and represents the old guard of the crown. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/joffrey-lonmouth":{house:"Various",role:"Knight / Companion of Laenor Velaryon",known:"Joffrey Lonmouth",profile:"A knight closely associated with Laenor Velaryon whose presence becomes part of the complicated relationships surrounding the Velaryon marriage.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A knight closely associated with Laenor Velaryon whose presence becomes part of the complicated relationships surrounding the Velaryon marriage. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/borros-baratheon":{house:"Various",role:"Lord of Storm\u2019s End",known:"Borros Baratheon",profile:"The Baratheon lord whose decision over Rhaenyra and Aegon\u2019s competing claims becomes important to the wider war.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"The Baratheon lord whose decision over Rhaenyra and Aegon\u2019s competing claims becomes important to the wider war. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/orwyle":{house:"Various",role:"Grand Maester",known:"Orwyle",profile:"A senior maester who serves the royal court and becomes involved in the Greens\u2019 government during the Dance.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A senior maester who serves the royal court and becomes involved in the Greens\u2019 government during the Dance. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/rickard-thorne":{house:"Various",role:"Kingsguard knight",known:"Rickard Thorne",profile:"A Kingsguard officer whose duties place him directly inside the dangerous royal succession struggle.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A Kingsguard officer whose duties place him directly inside the dangerous royal succession struggle. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/lorent-marbrand":{house:"Various",role:"Kingsguard knight",known:"Lorent Marbrand",profile:"A sworn sword of the Kingsguard whose service reflects the military and political pressures surrounding the royal family.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A sworn sword of the Kingsguard whose service reflects the military and political pressures surrounding the royal family. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/steffon-darklyn":{house:"Various",role:"Kingsguard knight",known:"Steffon Darklyn",profile:"A knight whose allegiance shifts toward Rhaenyra and whose service connects the Kingsguard to the Black cause.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A knight whose allegiance shifts toward Rhaenyra and whose service connects the Kingsguard to the Black cause. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/erryk-cargyll":{house:"Various",role:"Kingsguard knight",known:"Erryk Cargyll",profile:"A Kingsguard twin whose loyalty places him on Rhaenyra\u2019s side after the succession crisis divides the royal household.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"A Kingsguard twin whose loyalty places him on Rhaenyra\u2019s side after the succession crisis divides the royal household. This character adds another perspective to the political, military, or personal history of the era."},
  "hotd/characters/arryk-cargyll":{house:"Various",role:"Kingsguard knight",known:"Arryk Cargyll",profile:"Erryk\u2019s twin brother, whose service to Aegon places the brothers on opposite sides of the Dance.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"Erryk\u2019s twin brother, whose service to Aegon places the brothers on opposite sides of the Dance. This character adds another perspective to the political, military, or personal history of the era."},

  "got/characters/podrick-payne":{house:"Various",role:"Squire to Tyrion / Knight",known:"Podrick Payne",profile:"A loyal young squire who grows from an uncertain servant into a capable and dependable fighter.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"Podrick’s quiet loyalty and growth show how ordinary people can become important companions in the wars of Westeros."},
  "got/characters/shae":{house:"Various",role:"Companion of Tyrion Lannister",known:"Shae",profile:"A woman whose relationship with Tyrion becomes entangled with court politics, secrecy, jealousy and survival.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"Shae’s story shows the personal risks created when private relationships become exposed to the ruthless politics of King’s Landing."},
  "got/characters/jeor-mormont":{house:"Various",role:"Lord Commander of the Night’s Watch",known:"Jeor Mormont",profile:"The veteran Lord Commander who recognizes the growing danger beyond the Wall and prepares the Watch for a threat few in the south understand.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"Jeor gives Jon a model of duty and leadership while pushing the Night’s Watch toward confronting the rising supernatural threat."},
  "got/characters/alliser-thorne":{house:"Various",role:"Master-at-Arms of the Night’s Watch",known:"Alliser Thorne",profile:"A stern and antagonistic officer at Castle Black whose distrust of Jon creates repeated conflict inside the Night’s Watch.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"Thorne represents the internal divisions of the Watch at a time when unity is increasingly necessary."},
  "got/characters/balon-greyjoy":{house:"Various",role:"Lord of the Iron Islands",known:"Balon Greyjoy",profile:"The stubborn ruler of the Iron Islands who seeks independence for the Greyjoys and launches his own campaign during the War of the Five Kings.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"Balon opens another front in the wider war and establishes the political ambitions of the Greyjoy family."},
  "got/characters/euron-greyjoy":{house:"Various",role:"King of the Iron Islands",known:"Euron Greyjoy",profile:"A ruthless Greyjoy who returns from exile and uses ambition, violence and political manipulation to seize control of the Iron Islands.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"Euron becomes a major naval and political force late in the conflict, changing the balance around the Iron Throne."},
  "got/characters/yara-greyjoy":{house:"Various",role:"Captain / Heir of the Iron Islands",known:"Yara Greyjoy",profile:"A skilled sailor and warrior who challenges the traditional expectations placed on the Greyjoy heir and fights for her family’s future.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"Yara provides the Greyjoy story with a determined leader whose loyalty survives repeated political upheaval."},
  "got/characters/tommen-baratheon":{house:"Various",role:"King of the Seven Kingdoms",known:"Tommen Baratheon",profile:"A young king placed on the throne while stronger political figures around him compete for influence over the realm.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"Tommen illustrates how the crown can belong to a child while the real struggle for power happens around him."},
  "got/characters/myrcella-baratheon":{house:"Various",role:"Princess of the Seven Kingdoms",known:"Myrcella Baratheon",profile:"A princess caught between the politics of King’s Landing and the Martell court after being sent to Dorne as part of a political arrangement.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"Myrcella’s story connects the royal family to Dorne and demonstrates the personal cost of political alliances."},
  "got/characters/the-night-king":{house:"White Walkers",role:"Leader of the White Walkers",known:"The Night King",profile:"The supernatural leader of the army of the dead, whose advance turns the long-dismissed threat beyond the Wall into an existential war.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"The Night King transforms the story from a struggle for political power into a fight for the survival of the living."},
  "hotd/characters/aegon-the-younger":{house:"Various",role:"Prince / Son of Rhaenyra",known:"Aegon the Younger",profile:"A young Targaryen prince whose family becomes central to the succession struggle and the survival of Rhaenyra’s line.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"Aegon’s place in the Targaryen succession connects the Dance to the dynasty that follows the civil war."},
  "hotd/characters/viserys-targaryen":{house:"Various",role:"Prince / Son of Rhaenyra",known:"Viserys Targaryen",faction:"BLACK",profile:"Rhaenyra’s younger son whose separation from his family during the war becomes part of the uncertainty surrounding the Targaryen succession.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"Viserys represents the vulnerability of the royal children whose futures are shaped by the civil war."},
  "hotd/characters/jeyne-arryn":{house:"Various",role:"Lady of the Eyrie",known:"Jeyne Arryn",faction:"BLACK",profile:"The powerful ruler of the Vale who must decide how the Arryns will respond to the competing Targaryen claims.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"Jeyne demonstrates the importance of regional rulers whose support can determine the strength of either faction."},
  "hotd/characters/rhaena-targaryen":{house:"Various",role:"Princess / Dragonkeeper",known:"Rhaena Targaryen",faction:"BLACK",profile:"A young Targaryen princess whose life is shaped by her family’s losses and the struggle to preserve the dynasty.",traits:"Leadership • Strategy • Loyalty • Determination",importance:"Rhaena provides a personal view of the cost of the Dance for the younger generation of Targaryens."},
};
const CHARACTER_RELATIONS={
 "got/characters/jon-snow":[['Arya Stark','Character','got/characters.html#arya-stark'],['Sansa Stark','Character','got/characters.html#sansa-stark'],['Bran Stark','Character','got/characters.html#bran-stark'],['Daenerys Targaryen','Character','got/characters.html#daenerys-targaryen'],['Rhaegal','Dragon','got/dragons.html#rhaegal'],['House Stark','House','got/houses.html#stark'],['Winterfell','Location','got/cities.html#winterfell']],
 "got/characters/daenerys-targaryen":[['Jon Snow','Character','got/characters.html#jon-snow'],['Tyrion Lannister','Character','got/characters.html#tyrion-lannister'],['Cersei Lannister','Character','got/characters.html#cersei-lannister'],['Drogon','Dragon','got/dragons.html#drogon'],['Rhaegal','Dragon','got/dragons.html#rhaegal'],['Viserion','Dragon','got/dragons.html#viserion'],['House Targaryen','House','got/houses.html#targaryen'],['King’s Landing','Location','got/cities.html#kings-landing']],
 "got/characters/tyrion-lannister":[['Cersei Lannister','Character','got/characters.html#cersei-lannister'],['Jaime Lannister','Character','got/characters.html#jaime-lannister'],['Daenerys Targaryen','Character','got/characters.html#daenerys-targaryen'],['Jon Snow','Character','got/characters.html#jon-snow'],['House Lannister','House','got/houses.html#lannister'],['King’s Landing','Location','got/cities.html#kings-landing']],
 "got/characters/arya-stark":[['Jon Snow','Character','got/characters.html#jon-snow'],['Sansa Stark','Character','got/characters.html#sansa-stark'],['Bran Stark','Character','got/characters.html#bran-stark'],['Cersei Lannister','Character','got/characters.html#cersei-lannister'],['House Stark','House','got/houses.html#stark'],['Winterfell','Location','got/cities.html#winterfell']],
 "got/characters/sansa-stark":[['Jon Snow','Character','got/characters.html#jon-snow'],['Arya Stark','Character','got/characters.html#arya-stark'],['Bran Stark','Character','got/characters.html#bran-stark'],['Petyr Baelish','Character','got/characters.html#petyr-baelish'],['House Stark','House','got/houses.html#stark'],['Winterfell','Location','got/cities.html#winterfell']],
 "got/characters/cersei-lannister":[['Jaime Lannister','Character','got/characters.html#jaime-lannister'],['Tyrion Lannister','Character','got/characters.html#tyrion-lannister'],['Sansa Stark','Character','got/characters.html#sansa-stark'],['Daenerys Targaryen','Character','got/characters.html#daenerys-targaryen'],['House Lannister','House','got/houses.html#lannister'],['King’s Landing','Location','got/cities.html#kings-landing']],
 "got/characters/jaime-lannister":[['Cersei Lannister','Character','got/characters.html#cersei-lannister'],['Tyrion Lannister','Character','got/characters.html#tyrion-lannister'],['Brienne of Tarth','Character','got/characters.html#brienne-of-tarth'],['Jon Snow','Character','got/characters.html#jon-snow'],['House Lannister','House','got/houses.html#lannister'],['King’s Landing','Location','got/cities.html#kings-landing']],
 "got/characters/bran-stark":[['Jon Snow','Character','got/characters.html#jon-snow'],['Arya Stark','Character','got/characters.html#arya-stark'],['Sansa Stark','Character','got/characters.html#sansa-stark'],['Theon Greyjoy','Character','got/characters.html#theon-greyjoy'],['House Stark','House','got/houses.html#stark'],['Winterfell','Location','got/cities.html#winterfell']],
 "hotd/characters/rhaenyra-targaryen":[['Daemon Targaryen','Character','characters.html#daemon-targaryen'],['King Viserys I','Character','characters.html#king-viserys-i'],['Alicent Hightower','Character','characters.html#alicent-hightower'],['Jacaerys Velaryon','Character','characters.html#jacaerys-velaryon'],['Rhaenys Targaryen','Character','characters.html#rhaenys-targaryen'],['Syrax','Dragon','dragons.html#syrax'],['House Targaryen','House','houses.html#targaryen']],
 "hotd/characters/daemon-targaryen":[['Rhaenyra Targaryen','Character','characters.html#rhaenyra-targaryen'],['King Viserys I','Character','characters.html#king-viserys-i'],['Alicent Hightower','Character','characters.html#alicent-hightower'],['Corlys Velaryon','Character','characters.html#corlys-velaryon'],['Aemond Targaryen','Character','characters.html#aemond-targaryen'],['Caraxes','Dragon','dragons.html#caraxes'],['House Targaryen','House','houses.html#targaryen']],
 "hotd/characters/king-viserys-i":[['Rhaenyra Targaryen','Character','characters.html#rhaenyra-targaryen'],['Daemon Targaryen','Character','characters.html#daemon-targaryen'],['Alicent Hightower','Character','characters.html#alicent-hightower'],['Aegon II Targaryen','Character','characters.html#aegon-ii-targaryen'],['Otto Hightower','Character','characters.html#otto-hightower'],['House Targaryen','House','houses.html#targaryen'],['King’s Landing','Location','cities.html#kings-landing']],
 "hotd/characters/alicent-hightower":[['Rhaenyra Targaryen','Character','characters.html#rhaenyra-targaryen'],['Otto Hightower','Character','characters.html#otto-hightower'],['Aegon II Targaryen','Character','characters.html#aegon-ii-targaryen'],['Aemond Targaryen','Character','characters.html#aemond-targaryen'],['Helaena Targaryen','Character','characters.html#helaena-targaryen'],['House Hightower','House','houses.html#hightower'],['Oldtown','Location','cities.html#oldtown']],
 "hotd/characters/aegon-ii-targaryen":[['Alicent Hightower','Character','characters.html#alicent-hightower'],['Aemond Targaryen','Character','characters.html#aemond-targaryen'],['Rhaenyra Targaryen','Character','characters.html#rhaenyra-targaryen'],['King Viserys I','Character','characters.html#king-viserys-i'],['Helaena Targaryen','Character','characters.html#helaena-targaryen'],['Sunfyre','Dragon','dragons.html#sunfyre'],['House Targaryen','House','houses.html#targaryen']],
 "hotd/characters/aemond-targaryen":[['Aegon II Targaryen','Character','characters.html#aegon-ii-targaryen'],['Alicent Hightower','Character','characters.html#alicent-hightower'],['Rhaenyra Targaryen','Character','characters.html#rhaenyra-targaryen'],['Daemon Targaryen','Character','characters.html#daemon-targaryen'],['Lucerys Velaryon','Character','characters.html#lucerys-velaryon'],['Vhagar','Dragon','dragons.html#vhagar'],['House Targaryen','House','houses.html#targaryen']],
 "hotd/characters/otto-hightower":[['Alicent Hightower','Character','characters.html#alicent-hightower'],['Rhaenyra Targaryen','Character','characters.html#rhaenyra-targaryen'],['King Viserys I','Character','characters.html#king-viserys-i'],['Aegon II Targaryen','Character','characters.html#aegon-ii-targaryen'],['Daemon Targaryen','Character','characters.html#daemon-targaryen'],['House Hightower','House','houses.html#hightower'],['Oldtown','Location','cities.html#oldtown']],
 "hotd/characters/corlys-velaryon":[['Rhaenys Targaryen','Character','characters.html#rhaenys-targaryen'],['Laena Velaryon','Character','characters.html#laena-velaryon'],['Rhaenyra Targaryen','Character','characters.html#rhaenyra-targaryen'],['Daemon Targaryen','Character','characters.html#daemon-targaryen'],['Jacaerys Velaryon','Character','characters.html#jacaerys-velaryon'],['House Velaryon','House','houses.html#velaryon'],['Driftmark','Location','cities.html#driftmark']],
 "hotd/characters/rhaenys-targaryen":[['Corlys Velaryon','Character','characters.html#corlys-velaryon'],['Rhaenyra Targaryen','Character','characters.html#rhaenyra-targaryen'],['Daemon Targaryen','Character','characters.html#daemon-targaryen'],['Laena Velaryon','Character','characters.html#laena-velaryon'],['House Velaryon','House','houses.html#velaryon'],['Meleys','Dragon','dragons.html#meleys'],['Driftmark','Location','cities.html#driftmark']],
 "hotd/characters/criston-cole":[['Alicent Hightower','Character','characters.html#alicent-hightower'],['Rhaenyra Targaryen','Character','characters.html#rhaenyra-targaryen'],['Daemon Targaryen','Character','characters.html#daemon-targaryen'],['Aegon II Targaryen','Character','characters.html#aegon-ii-targaryen'],['Otto Hightower','Character','characters.html#otto-hightower'],['House Hightower','House','houses.html#hightower'],['King’s Landing','Location','cities.html#kings-landing']]
};
const CHARACTER_RELATIONSHIP_TYPES={
 'jon snow|arya stark':'SIBLINGS','jon snow|sansa stark':'SIBLINGS','jon snow|bran stark':'SIBLINGS','jon snow|daenerys targaryen':'ALLIES • ROMANCE',
 'daenerys targaryen|jon snow':'ALLIES • ROMANCE','daenerys targaryen|tyrion lannister':'ADVISOR • ALLY','daenerys targaryen|cersei lannister':'RIVALS',
 'tyrion lannister|cersei lannister':'SIBLINGS • RIVALS','tyrion lannister|jaime lannister':'SIBLINGS','tyrion lannister|daenerys targaryen':'ADVISOR • ALLY','tyrion lannister|jon snow':'ALLIES',
 'arya stark|sansa stark':'SIBLINGS','arya stark|bran stark':'SIBLINGS','sansa stark|bran stark':'SIBLINGS','sansa stark|jon snow':'SIBLINGS',
 'cersei lannister|jaime lannister':'TWINS • LOVERS','jaime lannister|cersei lannister':'TWINS • LOVERS','jaime lannister|tyrion lannister':'SIBLINGS',
 'bran stark|jon snow':'SIBLINGS','bran stark|arya stark':'SIBLINGS',
 'rhaenyra targaryen|daemon targaryen':'SPOUSES • ALLIES','rhaenyra targaryen|king viserys i':'FATHER • DAUGHTER','rhaenyra targaryen|alicent hightower':'FORMER FRIENDS • RIVALS','rhaenyra targaryen|aegon ii targaryen':'RIVAL CLAIMANTS','rhaenyra targaryen|aemond targaryen':'FAMILY • RIVALS',
 'daemon targaryen|king viserys i':'BROTHERS','daemon targaryen|rhaenyra targaryen':'SPOUSES • ALLIES','daemon targaryen|aemond targaryen':'FAMILY • ALLIES',
 'king viserys i|rhaenyra targaryen':'FATHER • DAUGHTER','king viserys i|daemon targaryen':'BROTHERS','king viserys i|alicent hightower':'SPOUSES',
 'alicent hightower|rhaenyra targaryen':'FORMER FRIENDS • RIVALS','alicent hightower|aegon ii targaryen':'MOTHER • SON','alicent hightower|otto hightower':'FATHER • DAUGHTER',
 'aegon ii targaryen|aemond targaryen':'BROTHERS','aegon ii targaryen|otto hightower':'GRANDFATHER • GRANDSON','aemond targaryen|rhaenyra targaryen':'FAMILY • RIVALS',
 'otto hightower|aegon ii targaryen':'GRANDFATHER • GRANDSON','otto hightower|rhaenyra targaryen':'POLITICAL RIVALS','otto hightower|alicent hightower':'FATHER • DAUGHTER',
 'corlys velaryon|rhaenys targaryen':'SPOUSES','corlys velaryon|rhaenyra targaryen':'ALLIES','rhaenys targaryen|rhaenyra targaryen':'FAMILY • ALLIES',
 'criston cole|alicent hightower':'ALLIES','criston cole|rhaenyra targaryen':'FORMER LOVERS • RIVALS','criston cole|daemon targaryen':'RIVALS','criston cole|aegon ii targaryen':'ALLIES'
};
const relationshipType=(from,to)=>{
 const a=normalize(from),b=normalize(to);
 return CHARACTER_RELATIONSHIP_TYPES[`${a}|${b}`] || CHARACTER_RELATIONSHIP_TYPES[`${b}|${a}`] || 'CONNECTED';
};
const characterRelationshipsHTML=(key,currentEra)=>{
 const eraPrefix=currentEra==='hotd'?'hotd':'got';
 const items=(CHARACTER_RELATIONS[key]||[]).filter(([name,type])=>type==='Character' && !!CHARACTER_PROFILES[`${eraPrefix}/characters/${normalize(name)}`]);
 if(!items.length)return '';
 const slug=s=>normalize(s);
 const file='characters.html';
 return `<section class="detail-section character-relationships-section"><div class="character-relationships-head"><div><span class="detail-section-label">Character Network</span><h3>Character Relationships</h3></div><span class="character-relationships-count">${items.length} CONNECTION${items.length===1?'':'S'}</span></div><p class="character-relationships-intro">Key personal, family, political, and rival connections for ${escapeHTML(key.split('/').pop().replace(/-/g,' '))}.</p><div class="character-relationships-grid">${items.map(([name])=>{const target=`character-${slug(name)}`;const href=`${file}?open=${encodeURIComponent(target)}`;return `<a class="character-relationship-card" href="${escapeHTML(href)}"><span class="character-relationship-type">${escapeHTML(relationshipType(key.split('/').pop(),name))}</span><b>${escapeHTML(name)}</b><em>VIEW CHARACTER →</em></a>`;}).join('')}</div></section>`;
};
const relatedHTML=(key,currentEra)=>{
 const allItems=CHARACTER_RELATIONS[key]||[];
 if(!allItems.length)return '';
 const slug=s=>normalize(s);
 const relationshipNames=new Set(allItems.filter(([,type])=>type==='Character').map(([name])=>slug(name)));
 const items=allItems.filter(([name,type])=>type!=='Character' || !relationshipNames.has(slug(name)));
 if(!items.length)return '';
 const localUrl=(name,type)=>{
   const era=currentEra==='hotd'?'hotd':'got';
   const file=type==='Character'?'characters.html':type==='House'?'houses.html':type==='Dragon'?'dragons.html':type==='Location'?'cities.html':'';
   if(!file)return '#';
   const targetId=type==='House'
     ? `house-house-${slug(String(name).replace(/^house\s+/i,''))}`
     : `${type==='Character'?'character-':type==='Dragon'?'dragon-':'city-'}${slug(name)}`;
   return `${file}?open=${encodeURIComponent(targetId)}`;
 };
 const validItems=items.filter(([name,type])=>{
   if(type!=='Character') return true;
   return !!CHARACTER_PROFILES[`${currentEra==='hotd'?'hotd':'got'}/characters/${slug(name)}`];
 });
 if(!validItems.length)return '';
 return `<section class="detail-section related-content-section"><h3>Related Content</h3><p class="related-content-intro">Explore houses, dragons, places, and other archive connections to ${escapeHTML(key.split('/').pop().replace(/-/g,' '))}. Character-to-character connections are shown separately above.</p><div class="related-content-grid">${validItems.map(([name,type])=>`<a class="related-content-card" href="${escapeHTML(localUrl(name,type))}"><span>${escapeHTML(type)}</span><b>${escapeHTML(name)}</b><em>EXPLORE →</em></a>`).join('')}</div></section>`;
};
const makeCharacterModal=(profile,detail,title,clone,img,section,era)=>{
  const role=profile?.role || clone.querySelector('.char-title')?.textContent?.trim() || 'Character';
  const house=profile?.house || 'Westeros';
  const faction=profile?.faction || '';
  const description=profile?.profile || detail?.description || '';
  const traits=profile?.traits || 'Leadership • Loyalty • Strategy • Survival';
  const importance=profile?.importance || description;
  const imageHTML=img ? `<div class="detail-image-wrap"><img src="${escapeHTML(img.getAttribute('src'))}" alt="${escapeHTML(img.getAttribute('alt')||title)}" loading="lazy" decoding="async"></div>` : '';
  return `<div class="detail-layout character-detail-layout"><div class="detail-media-column character-detail-media">${imageHTML}<div class="detail-media-caption"><span>${escapeHTML(house)}</span><b>CHARACTER ARCHIVE</b></div></div><div class="detail-info character-detail-info"><div class="character-detail-scroll"><div class="character-profile-head"><span class="detail-kicker">${escapeHTML(section)}${faction?` · ${escapeHTML(faction)}`:''}</span><h2>${escapeHTML(title)}</h2><p class="character-role">${escapeHTML(role)}</p><div class="detail-divider"></div><div class="character-meta"><div><b>HOUSE</b><span>${escapeHTML(house)}</span></div><div><b>KNOWN AS</b><span>${escapeHTML(profile?.known||title)}</span></div><div><b>ROLE</b><span>${escapeHTML(role)}</span></div>${faction?`<div><b>FACTION</b><span>${escapeHTML(faction)}</span></div>`:''}</div></div><div class="character-detail-sections"><section class="detail-section"><h3>Biography</h3><p>${escapeHTML(description)}</p></section><section class="detail-section"><h3>Key Characteristics</h3><p>${escapeHTML(traits)}</p></section><section class="detail-section"><h3>Story Importance</h3><p>${escapeHTML(importance)}</p></section>${characterRelationshipsHTML(`${era}/characters/${normalize(title)}`,era)}${relatedHTML(`${era}/characters/${normalize(title)}`,era)}</div></div></div></div>`;
};
const makeSections=(detail,page,title,clone)=>{
   const raw=detail?.description || clone.querySelector('p,.lore,.city-card-content')?.innerText?.trim() || clone.innerText.trim();
   const parts=raw.split(/(?<=[.!?])\s+/).filter(Boolean);
   let story=parts.slice(0, Math.max(2, Math.ceil(parts.length*.55))).join(' ');
   let impact=parts.slice(Math.max(2, Math.ceil(parts.length*.55))).join(' ') || raw;
   let labels=['The Story','Why It Matters'];
   if(page==='chronicle'){labels=['What Happened','Historical Impact'];}
   if(detail?.why){impact=detail.why;}
   const extra=detail?.takeaway || '';
   return `<section class="detail-section"><h3>${labels[0]}</h3><p>${escapeHTML(story)}</p></section><section class="detail-section"><h3>${labels[1]}</h3><p>${escapeHTML(impact)}</p></section>${extra?`<section class="detail-section detail-takeaway"><h3>Remember This</h3><p>${escapeHTML(extra)}</p></section>`:''}`;
 };
 const openCard=card=>{
   detailTrigger=card;
   const {era,page}=pageInfo();
   const title=cardTitle(card);
   const detail=DETAILS[`${era}/${page}/${normalize(title)}`];
   const clone=card.cloneNode(true);
   clone.removeAttribute('data-search-item');
   clone.classList.remove('tilt-card','flip-card','flipped','unified-card');
   clone.querySelectorAll('[data-profile],.profile-trigger,.flip-hint,.card-detail-hint').forEach(x=>x.remove());
   clone.querySelectorAll('.tilt-card-inner').forEach(x=>x.style.transform='none');
   const img=clone.querySelector('img');
   const finalTitle=detail ? title : (clone.querySelector('h1,h2,h3,h4')?.textContent?.trim() || title);
   const section=detail?.section || (page==='chronicle'?'Chronicle':'Westeros Archive');
   const image=img ? `<div class="detail-image-wrap"><img src="${escapeHTML(img.getAttribute('src'))}" alt="${escapeHTML(img.getAttribute('alt')||finalTitle)}" loading="lazy" decoding="async"></div>` : '';
   const characterProfile=page==='characters' ? CHARACTER_PROFILES[`${era}/${page}/${normalize(title)}`] : null;
   content.innerHTML=characterProfile ? makeCharacterModal(characterProfile,detail,finalTitle,clone,img,section,era) : `<div class="detail-layout"><div class="detail-media-column">${image}<div class="detail-media-caption"><span>${escapeHTML(section)}</span><b>ARCHIVE ENTRY</b></div></div><div class="detail-info"><span class="detail-kicker">${escapeHTML(section)}</span><h2 id="detailModalTitle">${escapeHTML(finalTitle)}</h2><div class="detail-divider"></div><div class="detail-copy">${makeSections(detail,page,finalTitle,clone)}</div></div></div>`;
   const heading=content.querySelector('h2,h1,h3'); if(heading){heading.id='detailModalTitle';modal.querySelector('.detail-dialog')?.setAttribute('aria-labelledby','detailModalTitle');}
   // Reset every relevant scroll container so each archive entry opens from the top.
   content.scrollTop=0;
   modal.scrollTop=0;
   const dialog=modal.querySelector('.detail-dialog');
   if(dialog) dialog.scrollTop=0;
   const shareId=card.id || normalize(finalTitle);
   if(shareId){ const url=new URL(location.href); url.searchParams.delete('open'); url.hash=shareId; history.replaceState(null,'',url.pathname+(url.search?url.search:'')+url.hash); }
   updateShareButton();
   modal.hidden=false; modal.setAttribute('aria-hidden','false');
   document.body.classList.add('detail-open');
   requestAnimationFrame(()=>{ content.scrollTop=0; modal.scrollTop=0; if(dialog) dialog.scrollTop=0; modal.classList.add('open'); modal.querySelector('.detail-close')?.focus(); });
 };
 window.__westerosOpenCityCard=openCard;
 cards.forEach(card=>{
   if(!card.hasAttribute('tabindex'))card.setAttribute('tabindex','0');
   if(!card.hasAttribute('role'))card.setAttribute('role','button');
   if(!card.getAttribute('aria-label'))card.setAttribute('aria-label',`Open ${cardTitle(card)}`);
   card.addEventListener('click',e=>{
     if(e.target.closest('a,button'))return;
     e.preventDefault(); e.stopPropagation(); openCard(card);
   });
   card.addEventListener('keydown',e=>{
     if(e.target.closest('a,button'))return;
     if(e.key==='Enter'||e.key===' '){e.preventDefault();e.stopPropagation();openCard(card);}
   });
 });
 modal.querySelector('.detail-close')?.addEventListener('click',close);
 shareButton?.addEventListener('click',async()=>{
   const id=detailTrigger?.id; if(!id)return;
   const url=new URL(location.href); url.searchParams.delete('open'); url.hash=id;
   try{ await navigator.clipboard.writeText(url.href); shareButton.textContent='LINK COPIED'; setTimeout(updateShareButton,1400); }
   catch(err){ window.prompt('Copy this link:',url.href); }
 });
 modal.querySelector('.detail-backdrop')?.addEventListener('click',close);
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))close();trapDetailFocus(e);});
 const openTargetById=id=>{
   if(!id)return false;
   const clean=decodeURIComponent(String(id).replace(/^#/,'')).toLowerCase();
   const target=document.getElementById(clean);
   if(target && cards.includes(target)){openCard(target);return true;}
   const wanted=clean.replace(/^[^-]+-/,'');
   const fallback=cards.find(c=>normalize(c.id||'')===clean || normalize(cardTitle(c))===wanted);
   if(fallback){openCard(fallback);return true;}
   return false;
 };
 const hash=decodeURIComponent(location.hash.replace(/^#/,'')).toLowerCase();
 const openHashTarget=()=>{
   const raw=decodeURIComponent(location.hash.replace(/^#/,'')).toLowerCase();
   if(!raw)return false;
   const targetId=raw;
   const byId=document.getElementById(targetId);
   if(byId && cards.includes(byId)){
     openCard(byId);
     return true;
   }
   const wanted=raw.replace(/^[^-]+-/,'');
   const target=cards.find(c=>normalize(cardTitle(c))===wanted || normalize(c.innerText).includes(wanted));
   if(target){openCard(target);return true;}
   return false;
 };
 if(location.hash)setTimeout(openHashTarget,120);
 window.addEventListener('hashchange',()=>setTimeout(openHashTarget,40));
 document.addEventListener('click',e=>{
   const link=e.target.closest('.related-content-card');
   if(!link)return;
   const href=link.getAttribute('href');
   if(!href || href==='#')return;
   const url=new URL(href,location.href);
   const id=decodeURIComponent(url.hash.replace(/^#/,'')).toLowerCase();
   if(!id)return;
   e.preventDefault();
   e.stopPropagation();
   if(url.pathname===location.pathname){
     const target=document.getElementById(id);
     if(target && cards.includes(target)){
       history.pushState(null,'',url.hash);
       openCard(target);
     }
     return;
   }
   url.searchParams.set('open',id);
   window.location.assign(url.href);
 });

 // Restore a cross-page Related Content click after navigation. Works for
 // Character, House, Dragon and Location cards.
 const openPendingRelatedTarget=()=>{
   let pending=null;
   try{pending=JSON.parse(sessionStorage.getItem('westerosRelatedTarget')||'null');}catch(err){}
   if(!pending || !pending.path || !pending.hash)return;
   const samePath=pending.path===location.pathname || pending.path.replace(/\/$/,'')===location.pathname.replace(/\/$/,'');
   if(!samePath)return;
   try{sessionStorage.removeItem('westerosRelatedTarget');}catch(err){}
   const id=decodeURIComponent(pending.hash.replace(/^#/,'')).toLowerCase();
   const target=document.getElementById(id);
   if(target && cards.includes(target)){
     setTimeout(()=>openCard(target),60);
     return;
   }
   // Fallback for file:// paths or minor ID differences.
   const wanted=id.replace(/^[^-]+-/,'');
   const fallback=cards.find(c=>normalize(c.id||'')===id || normalize(cardTitle(c))===wanted);
   if(fallback)setTimeout(()=>openCard(fallback),60);
 };
 setTimeout(()=>{
   const openParam=new URLSearchParams(location.search).get('open');
   if(openParam && openTargetById(openParam)){
     const clean=new URL(location.href); clean.searchParams.delete('open');
     history.replaceState(null,'',clean.pathname+clean.hash);
   }
   openPendingRelatedTarget();
 },120);
}


/* Main-home section chooser: every section first asks which era to open. */
document.addEventListener('DOMContentLoaded', function(){
  const chooser=document.getElementById('eraChooser');
  if(!chooser) return;
  const got=document.getElementById('chooseGot');
  const hotd=document.getElementById('chooseHotd');
  const close=()=>{chooser.hidden=true;chooser.setAttribute('aria-hidden','true');document.body.classList.remove('chooser-open');};
  document.querySelectorAll('[data-era-section]').forEach(link=>{
    link.addEventListener('click',function(e){
      e.preventDefault();
      const section=this.dataset.eraSection;
      got.href='got/'+section+'.html';
      hotd.href='hotd/'+section+'.html';
      chooser.hidden=false;chooser.setAttribute('aria-hidden','false');document.body.classList.add('chooser-open');
    });
  });
  chooser.querySelectorAll('[data-close-era-chooser]').forEach(el=>el.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!chooser.hidden) close();});
});


/* Interactive Westeros & Essos Map */
function initWesterosMap(){
 const root=document.querySelector('[data-westeros-map]');
 if(!root)return;
 const mapArt=root.querySelector('[data-map-art]');
 const info=root.querySelector('[data-map-info]');
 const nameEl=root.querySelector('[data-map-name]');
 const regionEl=root.querySelector('[data-map-region]');
 const descEl=root.querySelector('[data-map-description]');
 const realmLabel=root.querySelector('[data-map-realm-label]');
 const regionLabel=root.querySelector('[data-map-region-label]');
 const link=root.querySelector('[data-map-link]');
 const imageWrap=root.querySelector('[data-map-image-wrap]');
 const imageEl=root.querySelector('[data-map-image]');
 const archiveStatus=root.querySelector('[data-map-archive-status]');
 const buttons=[...root.querySelectorAll('[data-map-realm]')];
 let activeRealm='westeros';
 let selected=null;
 const locations={
  westeros:[
   {id:'castle-black',name:'Castle Black',region:'The Wall',x:48,y:10,dx:5,dy:-3,description:'A principal fortress of the Night’s Watch beneath the Wall, guarding the northern frontier.'},
   {id:'last-hearth',name:'Last Hearth',region:'The North',x:57,y:14,dx:5,dy:-3,description:'The northern seat of House Umber, near the edge of the lands beneath the Wall.'},
   {id:'karhold',name:'Karhold',region:'The North',x:58,y:20,dx:5,dy:5,description:'The ancient castle of House Karstark in the northern interior.'},
   {id:'winterfell',name:'Winterfell',region:'The North',x:44,y:24,dx:6,dy:-3,description:'The ancient Stark seat and political heart of the North.',card:'#city-winterfell'},
   {id:'bear-island',name:'Bear Island',region:'The North',x:28,y:25,dx:5,dy:-3,description:'The rugged island home of House Mormont in the Sunset Sea.'},
   {id:'the-dreadfort',name:'The Dreadfort',region:'The North',x:64,y:26,dx:5,dy:-3,description:'The grim Bolton stronghold in the northern interior.'},
   {id:'deepwood-motte',name:'Deepwood Motte',region:'The North',x:32,y:29,dx:5,dy:5,description:'A wooded stronghold on the western coast of the North.'},
   {id:'barrowton',name:'Barrowton',region:'The North',x:48,y:31,dx:5,dy:5,description:'One of the North’s largest settlements, surrounded by the ancient barrows.'},
   {id:'torrhens-square',name:"Torrhen's Square",region:'The North',x:39,y:33,dx:5,dy:-3,description:'A fortified northern settlement on the shores of a great lake.'},
   {id:'white-harbor',name:'White Harbor',region:'The North',x:59,y:39,dx:5,dy:5,description:'The North’s great port and seat of House Manderly.'},
   {id:'moat-cailin',name:'Moat Cailin',region:'The Neck',x:49,y:37,dx:-8,dy:-3,description:'A ruined fortress controlling the key causeway between the North and the south.'},
   {id:'pyke',name:'Pyke',region:'The Iron Islands',x:16,y:51,dx:4,dy:-3,description:'The Greyjoy seat on the storm-lashed Iron Islands.'},
   {id:'lordsport',name:'Lordsport',region:'The Iron Islands',x:18,y:48,dx:5,dy:5,description:'The principal harbor settlement of Pyke and the Greyjoy domain.'},
   {id:'old-wyk',name:'Old Wyk',region:'The Iron Islands',x:11,y:46,dx:5,dy:-3,description:'The sacred heart of the ironborn and site of ancient kingsmoots.'},
   {id:'harlaw',name:'Harlaw',region:'The Iron Islands',x:21,y:46,dx:5,dy:-3,description:'A major island of the Iron Islands and seat of powerful House Harlaw.'},
   {id:'seagard',name:'Seagard',region:'The Riverlands',x:37,y:45,dx:5,dy:-3,description:'A fortified port on the western coast of the Riverlands.'},
   {id:'riverrun',name:'Riverrun',region:'The Riverlands',x:49,y:49,dx:5,dy:-3,description:'The Tully seat at the meeting of the Tumblestone and Red Fork.',card:'#city-riverrun'},
   {id:'harrenhal',name:'Harrenhal',region:'The Riverlands',x:56,y:51,dx:5,dy:6,description:'A vast ruined castle whose position makes it one of the Riverlands’ great prizes.',card:'#city-harrenhal'},
   {id:'darry',name:'Darry',region:'The Riverlands',x:59,y:57,dx:5,dy:-3,description:'The ancient seat of House Darry on the kingsroad.'},
   {id:'saltpans',name:'Saltpans',region:'The Riverlands',x:64,y:46,dx:5,dy:-3,description:'A small but strategically placed river port on the coast.'},
   {id:'maidenpool',name:'Maidenpool',region:'The Crownlands',x:67,y:51,dx:5,dy:-3,description:'A fortified harbor on the Bay of Crabs and an important Crownlands port.'},
   {id:'stoney-sept',name:'Stoney Sept',region:'The Riverlands',x:48,y:62,dx:5,dy:5,description:'A market town and sept at an important crossroads in the Riverlands.'},
   {id:'the-eyrie',name:'The Eyrie',region:'The Vale',x:73,y:49,dx:6,dy:-3,description:'The Arryn seat high in the Mountains of the Moon.',card:'#city-the-eyrie'},
   {id:'gulltown',name:'Gulltown',region:'The Vale',x:81,y:43,dx:6,dy:-3,description:'The Vale’s great harbor and a major eastern trading port.'},
   {id:'runestone',name:'Runestone',region:'The Vale',x:83,y:52,dx:5,dy:5,description:'The ancient Royce stronghold on the eastern coast of the Vale.'},
   {id:'casterly-rock',name:'Casterly Rock',region:'The Westerlands',x:20,y:66,dx:4,dy:-3,description:'The colossal Lannister stronghold overlooking the Sunset Sea.'},
   {id:'lannisport',name:'Lannisport',region:'The Westerlands',x:23,y:70,dx:5,dy:5,description:'A wealthy western port city at the foot of Casterly Rock.'},
   {id:'golden-tooth',name:'The Golden Tooth',region:'The Westerlands',x:31,y:61,dx:5,dy:-3,description:'A heavily fortified mountain pass controlling the eastern approach to the Westerlands.'},
   {id:'kayce',name:'Kayce',region:'The Westerlands',x:11,y:73,dx:5,dy:-3,description:'A western coastal stronghold in the Westerlands.'},
   {id:'crakehall',name:'Crakehall',region:'The Westerlands',x:25,y:78,dx:5,dy:5,description:'The ancestral seat of House Crakehall in the western Reachlands.'},
   {id:'kings-landing',name:"King's Landing",region:'The Crownlands',x:65,y:69,dx:6,dy:5,description:'The capital of the Seven Kingdoms and seat of the Iron Throne.',card:'#city-king-s-landing'},
   {id:'rosby',name:'Rosby',region:'The Crownlands',x:67,y:60,dx:5,dy:-3,description:'A Crownlands castle and settlement close to the capital.'},
   {id:'stokeworth',name:'Stokeworth',region:'The Crownlands',x:70,y:64,dx:5,dy:5,description:'The seat of House Stokeworth on the roads north of King’s Landing.'},
   {id:'duskendale',name:'Duskendale',region:'The Crownlands',x:72,y:59,dx:5,dy:-3,description:'An old walled port city on the eastern coast of the Crownlands.'},
   {id:'dragonstone',name:'Dragonstone',region:'Blackwater Bay',x:79,y:70,dx:6,dy:5,description:'The volcanic Targaryen stronghold at the mouth of Blackwater Bay.',card:'#city-dragonstone'},
   {id:'driftmark',name:'Driftmark',region:'Blackwater Bay',x:84,y:73,dx:6,dy:5,description:'The island seat of House Velaryon and center of its maritime power.',card:'#city-driftmark'},
   {id:'highgarden',name:'Highgarden',region:'The Reach',x:34,y:77,dx:5,dy:5,description:'The fertile Tyrell seat at the heart of the Reach.',card:'#city-highgarden'},
   {id:'bitterbridge',name:'Bitterbridge',region:'The Reach',x:45,y:72,dx:5,dy:-3,description:'A strategically important crossing over the Mander.'},
   {id:'ashford',name:'Ashford',region:'The Reach',x:41,y:80,dx:5,dy:5,description:'A market town and castle on the roads of the southern Reach.'},
   {id:'horn-hill',name:'Horn Hill',region:'The Reach',x:39,y:85,dx:5,dy:-3,description:'The seat of House Tarly in the southern Reach.'},
   {id:'tumbleton',name:'Tumbleton',region:'The Reach',x:56,y:75,dx:5,dy:5,description:'A river town on the Mander and a key crossing between the Reach and Crownlands.'},
   {id:'oldtown',name:'Oldtown',region:'The Reach',x:30,y:88,dx:5,dy:5,description:'One of Westeros’s oldest cities, home to the Citadel and Hightower.',card:'#city-oldtown'},
   {id:'the-arbor',name:'The Arbor',region:'The Reach',x:22,y:94,dx:5,dy:-3,description:'The wealthy island domain of House Redwyne, famed for its vineyards and fleet.'},
   {id:'storm-s-end',name:"Storm's End",region:'The Stormlands',x:61,y:82,dx:6,dy:5,description:'The ancient Baratheon fortress on the stormy eastern coast.',card:'#city-storm-s-end'},
   {id:'rain-house',name:'Rain House',region:'The Stormlands',x:69,y:87,dx:5,dy:5,description:'The coastal seat of House Wylde on Shipbreaker Bay.'},
   {id:'nightsong',name:'Nightsong',region:'The Stormlands',x:49,y:85,dx:5,dy:-3,description:'A fortified marcher castle guarding the roads toward Dorne.'},
   {id:'tarth',name:'Tarth',region:'The Stormlands',x:79,y:85,dx:5,dy:5,description:'The Sapphire Isle, home of House Tarth.'},
   {id:'sunspear',name:'Sunspear',region:'Dorne',x:69,y:94,dx:6,dy:-3,description:'The Martell seat and capital of Dorne.',card:'#city-sunspear'},
   {id:'plankytown',name:'Planky Town',region:'Dorne',x:76,y:96,dx:-10,dy:-3,description:'A floating river port at the mouth of the Greenblood.'},
   {id:'yronwood',name:'Yronwood',region:'Dorne',x:53,y:93,dx:-5,dy:-3,description:'A powerful Dornish stronghold guarding the Boneway.'},
   {id:'starfall',name:'Starfall',region:'Dorne',x:39,y:94,dx:5,dy:5,description:'The ancestral seat of House Dayne in western Dorne.'},
   {id:'hellholt',name:'Hellholt',region:'Dorne',x:58,y:96,dx:5,dy:5,description:'A desert stronghold in eastern Dorne.'}
  ],



  essos:[
   {id:'braavos',name:'Braavos',region:'Free Cities',x:10,y:13,dx:5,dy:-3,description:'The great lagoon city of canals, merchants, the Iron Bank and the Titan.',card:'#city-braavos'},
   {id:'pentos',name:'Pentos',region:'Free Cities',x:8,y:25,dx:5,dy:-3,description:'A wealthy Free City on the western coast of Essos.'},
   {id:'lorath',name:'Lorath',region:'Free Cities',x:13,y:33,dx:5,dy:5,description:'An island-bound Free City east of Braavos.'},
   {id:'norvos',name:'Norvos',region:'Free Cities',x:25,y:22,dx:5,dy:-3,description:'A powerful Free City known for its bells and priesthood.'},
   {id:'qohor',name:'Qohor',region:'Free Cities',x:28,y:29,dx:5,dy:5,description:'The forest city famous for its blacksmiths and Unsullied defense.'},
   {id:'myr',name:'Myr',region:'Free Cities',x:16,y:49,dx:5,dy:-3,description:'A major Free City renowned for lace, lenses and craftsmanship.'},
   {id:'tyrosh',name:'Tyrosh',region:'Free Cities',x:8,y:55,dx:5,dy:5,description:'An island Free City famous for dyed hair, trade and sellswords.'},
   {id:'lys',name:'Lys',region:'Free Cities',x:15,y:68,dx:5,dy:-3,description:'A wealthy island city famed for pleasure houses and perfumes.'},
   {id:'volantis',name:'Volantis',region:'Free Cities',x:28,y:69,dx:5,dy:5,description:'The ancient Rhoynar-influenced city at the mouth of the Rhoyne.'},
   {id:'vaes-dothrak',name:'Vaes Dothrak',region:'Dothraki Sea',x:38,y:31,dx:5,dy:-3,description:'The sacred city of the Dothraki, set beside the Mother of Mountains.'},
   {id:'mantarys',name:'Mantarys',region:'Slaver’s Bay',x:43,y:60,dx:5,dy:-3,description:'A ruined and feared city west of the ruins of Old Ghis.'},
   {id:'old-ghis',name:'Old Ghis',region:'Slaver’s Bay',x:48,y:62,dx:5,dy:5,description:'The ancient Ghiscari heartland, remembered through ruins and imperial history.'},
   {id:'meereen',name:'Meereen',region:'Slaver’s Bay',x:56,y:61,dx:5,dy:-3,description:'The largest of the great slave cities, built around the Great Pyramid.',card:'#city-meereen'},
   {id:'yunkai',name:'Yunkai',region:'Slaver’s Bay',x:62,y:64,dx:5,dy:-3,description:'The Yellow City of Slaver’s Bay, famed for its wealth and slave markets.'},
   {id:'astapor',name:'Astapor',region:'Slaver’s Bay',x:69,y:66,dx:5,dy:5,description:'The Red City, known for its Unsullied and brick-built pyramids.'},
   {id:'qarth',name:'Qarth',region:'Jade Sea',x:78,y:72,dx:5,dy:5,description:'A wealthy gateway city between the Red Waste and the Jade Sea.'},
   {id:'vaes-tolorro',name:'Vaes Tolorro',region:'Red Waste',x:64,y:54,dx:5,dy:-3,description:'A ruined city encountered on the long road through the Red Waste.'},
   {id:'valyria',name:'Valyria',region:'Smoking Sea',x:66,y:82,dx:5,dy:5,description:'The shattered heart of the old Valyrian Freehold, surrounded by the Smoking Sea.'},
   {id:'hesh',name:'Hesh',region:'Yi Ti',x:72,y:17,dx:5,dy:-3,description:'A major city in the distant lands east of the Bone Mountains.'},
   {id:'yi-ti',name:'Yi Ti',region:'Far East',x:84,y:12,dx:5,dy:-3,description:'The vast and ancient civilization of the far eastern world.'},
   {id:'leng',name:'Leng',region:'Jade Sea',x:90,y:20,dx:5,dy:5,description:'A large island kingdom in the eastern Jade Sea.'},
   {id:'ibben',name:'Ibben',region:'Shivering Sea',x:49,y:7,dx:5,dy:-3,description:'A cold northern island realm known for its seafarers and whalers.'}
  ]
 };
 function imageFor(realm){const base=(document.body.classList.contains('westeros-home')?'assets/':'../assets/');return realm==='essos'?base+'essos-map-realistic.webp':base+'westeros-map-realistic.webp';}
 function labelFor(realm){return realm==='essos'?'ESSOS':'WESTEROS';}
 function markerMarkup(data,realm){
   const aria=realm==='essos'?'Interactive location markers on a realistic map of Essos':'Interactive location markers on a realistic map of Westeros';
   return `<svg class="map-marker-layer" viewBox="0 0 100 100" aria-label="${aria}"><defs><filter id="markerGlow"><feGaussianBlur stdDeviation=".7" result="b"></feGaussianBlur><feMerge><feMergeNode in="b"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs>${data.map(loc=>`<g class="map-marker ${loc.kind||'location'}" data-map-id="${escapeHTML(loc.id)}" tabindex="0" role="button" aria-label="${escapeHTML(loc.name)}, ${escapeHTML(loc.region)}" transform="translate(${loc.x} ${loc.y})"><circle class="map-marker-pulse" r="1.8"></circle><circle class="map-marker-ring" r="2.3"></circle><path class="map-marker-crown" d="M-1.4-.9L-.7-.1 0-1.2.7-.1 1.4-.9 1.05 1.15H-1.05Z"></path><circle class="map-marker-core" r=".72"></circle><text class="map-marker-label" x="${loc.dx}" y="${loc.dy}">${escapeHTML(loc.name)}</text></g>`).join('')}</svg>`;
 }
 function render(realm){
   activeRealm=realm;
   buttons.forEach(b=>b.classList.toggle('active',b.dataset.mapRealm===realm));
   const data=locations[realm];
   const src=imageFor(realm);
   const existingBase=mapArt.querySelector('.map-realistic-base');
   const existingImg=existingBase?.querySelector('img');
   const swapImage=()=>{
     const oldImg=mapArt.querySelector('.map-realistic-base img');
     if(oldImg){oldImg.classList.add('is-switching');}
     const img=new Image();
     img.decoding='async';
     img.onload=()=>{
       const base=mapArt.querySelector('.map-realistic-base') || (()=>{const el=document.createElement('div');el.className='map-realistic-base';mapArt.prepend(el);return el;})();
       const next=document.createElement('img');
       next.src=src;
       next.alt=`Detailed realistic terrain map of ${labelFor(realm)}`;
       next.draggable=false;
       next.decoding='async';
       base.replaceChildren(next);
     };
     img.onerror=()=>{
       if(existingImg) existingImg.classList.remove('is-switching');
     };
     img.src=src;
   };
   if(existingBase && existingImg && existingImg.getAttribute('src')===src){
     existingImg.alt=`Detailed realistic terrain map of ${labelFor(realm)}`;
   }else{
     swapImage();
   }
   mapArt.querySelector('.map-marker-layer')?.remove();
   mapArt.querySelector('[data-map-tooltip]')?.remove();
   mapArt.insertAdjacentHTML('beforeend',`${markerMarkup(data,realm)}<div class="map-tooltip" data-map-tooltip></div>`);
   mapArt.dataset.realm=realm;
   mapArt.querySelectorAll('.map-marker').forEach(marker=>{
     const loc=data.find(x=>x.id===marker.dataset.mapId); if(!loc)return;
     marker.addEventListener('mouseenter',()=>showTooltip(marker,loc));
     marker.addEventListener('mouseleave',hideTooltip);
     marker.addEventListener('focus',()=>showTooltip(marker,loc));
     marker.addEventListener('blur',hideTooltip);
     marker.addEventListener('click',()=>select(loc,marker));
     marker.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();select(loc,marker);}});
   });
   const same=selected&&data.find(x=>x.id===selected.id);
   if(same){const marker=mapArt.querySelector(`[data-map-id="${CSS.escape(same.id)}"]`); if(marker)select(same,marker,false); else resetInfo();}
   else resetInfo();
 }
 function showTooltip(marker,loc){
   const tip=mapArt.querySelector('[data-map-tooltip]'); if(!tip)return;
   tip.innerHTML=`<strong>${escapeHTML(loc.name)}</strong><span>${escapeHTML(loc.region)}</span>`;
   tip.classList.add('show');
   const box=mapArt.getBoundingClientRect(), mr=marker.getBoundingClientRect();
   tip.style.left=`${Math.min(Math.max(mr.left-box.left+14,8),Math.max(8,mapArt.clientWidth-240))}px`;
   tip.style.top=`${Math.max(8,mr.top-box.top-12)}px`;
 }
 function hideTooltip(){mapArt.querySelector('[data-map-tooltip]')?.classList.remove('show');}
 function findCard(loc){
   return loc.card ? document.querySelector(loc.card) : document.querySelector(`[data-city="${CSS.escape(loc.id)}"]`);
 }
 function focusAndOpenCard(loc){
   const card=findCard(loc);
   if(!card) return false;
   document.querySelectorAll('.map-card-target').forEach(c=>c.classList.remove('map-card-target'));
   card.classList.add('map-card-target');
   card.setAttribute('tabindex','-1');
   card.setAttribute('data-map-selected','true');
   card.scrollIntoView({behavior:'smooth',block:'center',inline:'nearest'});
   setTimeout(()=>{
     try{card.focus({preventScroll:true});}catch(e){card.focus();}
     if(typeof window.__westerosOpenCityCard==='function'){
       window.__westerosOpenCityCard(card);
     } else {
       card.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,view:window}));
     }
   },260);
   setTimeout(()=>{card.classList.remove('map-card-target');card.removeAttribute('data-map-selected');},5200);
   return true;
 }
 function resetInfo(){
   selected=null;
   mapArt.querySelectorAll('.map-marker.selected').forEach(m=>m.classList.remove('selected'));
   if(nameEl) nameEl.textContent=activeRealm==='essos'?'Essos':'Westeros';
   if(regionEl) regionEl.textContent=activeRealm==='essos'?'Explore the Free Cities, Slaver’s Bay and the far eastern lands.':'Explore the Seven Kingdoms, from the Wall to Dorne.';
   if(descEl) descEl.textContent='Select a marker to reveal its location story, regional context and direct connection to the city archive.';
   if(realmLabel) realmLabel.textContent=labelFor(activeRealm);
   if(regionLabel) regionLabel.textContent='—';
   if(link) link.hidden=true;
   if(imageWrap) imageWrap.hidden=true;
   if(archiveStatus) archiveStatus.textContent='Choose a marked location to explore its archive entry.';
 }
 function select(loc,marker,scroll=true){
   selected=loc;
   mapArt.querySelectorAll('.map-marker.selected').forEach(m=>m.classList.remove('selected'));
   marker.classList.add('selected'); hideTooltip();
   if(nameEl) nameEl.textContent=loc.name; if(regionEl) regionEl.textContent=loc.region; if(descEl) descEl.textContent=loc.description;
   if(realmLabel) realmLabel.textContent=labelFor(activeRealm); if(regionLabel) regionLabel.textContent=loc.region;
   const card=findCard(loc);
   const cardImg=card?.querySelector('.city-photo img');
   if(cardImg && imageWrap && imageEl){
     imageEl.src=cardImg.currentSrc || cardImg.src;
     imageEl.alt=cardImg.alt || loc.name;
     imageWrap.hidden=false;
   }else if(imageWrap) imageWrap.hidden=true;
   if(card){
     if(link){ link.hidden=false; link.href=loc.card || `#${card.id}`; link.textContent='OPEN CITY ENTRY ';
     const span=document.createElement('span'); span.textContent='↗'; link.appendChild(span); }
     if(archiveStatus) archiveStatus.textContent='City archive found — selecting this location will focus the matching card and open its full detail view.';
     link.onclick=e=>{e.preventDefault();focusAndOpenCard(loc);};
   } else {
     if(link) link.hidden=true;
     if(archiveStatus) archiveStatus.textContent='Map reference only — this location does not yet have a dedicated city card in this archive.';
   }
   if(scroll) {
     if(card) setTimeout(()=>focusAndOpenCard(loc),120);
     else if(window.matchMedia('(max-width:980px)').matches) info.scrollIntoView({behavior:'smooth',block:'nearest'});
   }
 }
 root.querySelector('[data-map-reset]')?.addEventListener('click',()=>{resetInfo();mapArt.querySelector('.map-marker')?.focus();});
 buttons.forEach(b=>b.addEventListener('click',()=>{const realm=b.dataset.mapRealm;if(realm!==activeRealm)render(realm);}));
 render('westeros');
}
