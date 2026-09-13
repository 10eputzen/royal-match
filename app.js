/* Royal Match — Tinder für Adlige. Reines Vanilla-JS, keine Dependencies. */

const PROFILES = [
  {
    id: 'zeppelin',
    name: 'Ferdinand-Ottokar',
    house: 'Graf von Zeppelin-Pumpernickel',
    age: 34,
    photo: 'assets/adel-04-gentleman.jpg',
    focus: 'center 18%',
    bio: 'Erbte einen Luftschiffhangar, aber kein Luftschiff. Suche Copilotin mit eigenem Wappen und Höhentauglichkeit.',
    stats: [['3', 'Hangars'], ['0', 'Luftschiffe'], ['9', 'Generationen']],
    tags: ['Ballonfahrt', 'Erbstreitigkeiten', 'Whist'],
    ancestry: 'Ahnentafel geprüft: neun Generationen, ein Bäckermeister von 1804 wurde diskret übermalt.',
    reject: 'Ferdinand-Ottokar lässt ausrichten, er sei zur Zeit auf Landpartie. Sein Kammerdiener prüft deine Ahnentafel.'
  },
  {
    id: 'beatrix',
    name: 'Beatrix-Wilhelmine',
    house: 'Prinzessin von Sachsen-Kleckersdorf-Süd',
    age: 29,
    photo: 'assets/adel-03-flora.jpg',
    focus: 'center 26%',
    bio: 'Mein Fürstentum hat vier Einwohner, davon drei Ziegen. Die Thronfolge ist geregelt. Du müsstest zur Ziege nett sein.',
    stats: [['4', 'Untertanen'], ['1', 'Schloss'], ['3', 'Ziegen']],
    tags: ['Regentschaft', 'Ziegenkäse', 'Harfe'],
    ancestry: 'Ahnentafel geprüft: souverän seit 1631, Staatsgebiet seither auf 0,8 Hektar geschrumpft.',
    reject: 'Ihre Durchlaucht bedauert. Das Fürstentum ist derzeit nicht aufnahmefähig — die Ziegen sind in der Mauser.'
  },
  {
    id: 'aloysius',
    name: 'Aloysius-Ferdinand',
    house: 'Erbprinz von Habsbach-Lippe',
    age: 38,
    photo: 'assets/adel-01-habsburg.jpg',
    focus: 'center 30%',
    bio: 'Vierzehn Generationen ohne einen einzigen Bürgerlichen. Mein Stammbaum ist streng genommen ein Stammpfahl. Bitte keine Ausnahmen.',
    stats: [['14', 'Generationen'], ['2', 'Kronen'], ['0', 'Abzweigungen']],
    tags: ['Etikette', 'Porzellan', 'Genealogie'],
    ancestry: 'Ahnentafel geprüft: lückenlos. Erstaunlich lückenlos. Der Herold bittet um ein ärztliches Attest.',
    reject: 'Der Erbprinz kann nicht antworten. Die Familie berät noch, ob Antworten standesgemäß ist.'
  },
  {
    id: 'konstanze',
    name: 'Konstanze Adelheid',
    house: 'Freifrau von Klöterhagen zu Nebelmoor',
    age: 36,
    photo: 'assets/adel-07-diana.jpg',
    focus: 'center 14%',
    bio: 'Suche jemanden, der weiß, welche Gabel zum Fasan gehört. Meine elf Jagdhunde entscheiden mit. Sie sind streng.',
    stats: [['11', 'Jagdhunde'], ['2', 'Reviere'], ['1', 'Falke']],
    tags: ['Falknerei', 'Treibjagd', 'Sherry'],
    ancestry: 'Ahnentafel geprüft: der Moorbesitz ist älter als das Land, auf dem er liegt. Juristisch ungeklärt.',
    reject: 'Die Freifrau ist zur Jagd. Die Hunde haben dein Profil beschnuppert und den Kopf geschüttelt.'
  },
  {
    id: 'ruediger',
    name: 'Rüdiger',
    house: 'Baron von Habicht-Falkenstein',
    age: 45,
    photo: 'assets/adel-02-cavalier.jpg',
    focus: 'center 12%',
    bio: 'Der Baron erwartet Pünktlichkeit. Der Baron spricht von sich in der dritten Person. Der Baron bereut nichts.',
    stats: [['1', 'Baron'], ['7', 'Porträts'], ['0', 'Reue']],
    tags: ['Fechten', 'Selbstporträts', 'Monologe'],
    ancestry: 'Ahnentafel geprüft: der Baron hat sie selbst aufgeschrieben. Der Herold hat Fragen.',
    reject: 'Der Baron dankt für dein Interesse. Der Baron interessiert sich derzeit hauptsächlich für den Baron.'
  },
  {
    id: 'persephone',
    name: 'Persephone',
    house: 'Lady Ashcroft-Wimbleton',
    age: 37,
    photo: 'assets/adel-06-fortescue.jpg',
    focus: 'center 16%',
    bio: 'Britischer Landadel. 47 Zimmer, 3 Gespenster, 1 funktionierende Heizung. Bring deinen eigenen Pullover mit.',
    stats: [['47', 'Zimmer'], ['3', 'Gespenster'], ['1', 'Heizung']],
    tags: ['Tee um 16 Uhr', 'Kaminfeuer', 'Melancholie'],
    ancestry: 'Ahnentafel geprüft: adelig seit 1420, beheizt seit 1978, davon 40 Jahre nur der Ostflügel.',
    reject: 'Lady Ashcroft-Wimbleton lässt bestellen, es sei zu kalt für neue Bekanntschaften. Vielleicht im Frühling.'
  },
  {
    id: 'maximiliane',
    name: 'Maximiliane',
    house: 'Herzogin von Trüffelberg',
    age: 33,
    photo: 'assets/adel-05-duchesse.jpg',
    focus: 'center 20%',
    bio: 'Besitze das größte private Trüffelvorkommen Niederbayerns. Mein Ex sagt, ich rieche danach. Er hat recht. Es war ihm zu viel.',
    stats: [['12', 'Hektar'], ['4', 'Trüffelschweine'], ['1', 'Weinberg']],
    tags: ['Trüffel', 'Weinlese', 'Landwirtschaft'],
    ancestry: 'Ahnentafel geprüft: einwandfrei. Der Herold möchte allerdings wissen, ob Trüffel mitgeliefert werden.',
    reject: 'Die Herzogin ist in der Ernte. Ihre Schweine haben Vorrang. Das ist keine Metapher.'
  },
  {
    id: 'cj',
    name: 'CJ',
    house: 'Lady of the Waves · Baywatch Bay',
    age: 27,
    photo: 'assets/cj-beach.jpg',
    focus: 'center 40%',
    verified: true,
    bio: 'Adelstitel hab ich mir selbst verliehen, nachdem ich 214 Leute aus dem Pazifik gefischt habe. Foto zeigt mein Büro. Mein Gesicht siehst du Mittwoch.',
    stats: [['214', 'Rettungen'], ['1', 'Strand'], ['∞', 'Zeitlupen']],
    tags: ['Rettungsschwimmen', 'Sonnenuntergänge', 'Rot'],
    ancestry: 'Ahnentafel geprüft: keine gefunden. Das Heroldsamt erklärt sie ersatzweise für "adelig durch Verdienst".',
    isTarget: true
  }
];

const CHAT = [
  { who: 'them', text: 'Warte mal … Mitch?? 😳' },
  { who: 'me',   text: 'Der Eine und Einzige.' },
  { who: 'them', text: 'Ich dachte, du bist bei der Küstenwache. Seit wann bist du adelig?' },
  { who: 'me',   text: 'Graf von Baywatch. Steht so im Ausweis. Hat nie jemand nachgeprüft.' },
  { who: 'them', text: 'Mittwoch, 20 Uhr? Ich bring die Zeitlupe mit. 🌅' }
];

const $ = (sel) => document.querySelector(sel);
const deckEl = $('#deck');
const toastEl = $('#toast');
const SWIPE_THRESHOLD = 110;

let queue = [];
let busy = false;
let toastTimer = null;

/* ---------- Screens ---------- */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach((s) => s.classList.toggle('is-active', s.id === id));
}

/* ---------- Karten ---------- */
function buildCard(profile) {
  const card = document.createElement('article');
  card.className = 'card';
  card.dataset.id = profile.id;

  const stats = profile.stats
    .map(([value, label]) => `<div class="card__stat"><b>${value}</b><span>${label}</span></div>`)
    .join('');
  const tags = profile.tags.map((t) => `<span class="tag">${t}</span>`).join('');

  card.innerHTML = `
    <img class="card__photo" src="${profile.photo}" alt="Porträt von ${profile.name}"
         style="object-position:${profile.focus}" draggable="false" />
    <div class="card__shade"></div>
    <div class="stamp stamp--like">Standesgemäß</div>
    <div class="stamp stamp--nope">Bürgerlich</div>
    <div class="card__body">
      <div class="card__title">
        <span class="card__name">${profile.name}</span>
        <span class="card__age">${profile.age}</span>
        ${profile.verified ? '<span class="card__verified">⚜ verifiziert</span>' : ''}
      </div>
      <div class="card__rank">${profile.house}</div>
      <p class="card__bio">${profile.bio}</p>
      <div class="card__stats">${stats}</div>
      <div class="card__tags">${tags}</div>
    </div>
  `;
  attachDrag(card, profile);
  return card;
}

const VISIBLE_CARDS = 3; // nur der sichtbare Teil des Stapels wird gerendert

function renderDeck() {
  deckEl.innerHTML = '';
  const shown = queue.slice(0, VISIBLE_CARDS);
  // letzte im DOM liegt oben -> Reihenfolge umdrehen
  [...shown].reverse().forEach((profile, i) => {
    const card = buildCard(profile);
    const depth = shown.length - 1 - i; // 0 = oberste
    card.style.transform = `translateY(${depth * 7}px) scale(${1 - depth * 0.028})`;
    card.style.zIndex = String(i + 1);
    if (depth > 0) card.style.pointerEvents = 'none';
    deckEl.appendChild(card);
  });
  $('#deck-empty').hidden = queue.length > 0;
  const noCards = queue.length === 0;
  $('#btn-nope').disabled = noCards;
  $('#btn-like').disabled = noCards;
  $('#btn-info').disabled = noCards;
}

function topCard() {
  return deckEl.lastElementChild;
}

/* ---------- Drag & Swipe ---------- */
function attachDrag(card, profile) {
  let startX = 0, startY = 0, dx = 0, dy = 0, dragging = false;

  const onDown = (e) => {
    if (busy || card !== topCard()) return;
    dragging = true;
    startX = e.clientX;
    startY = e.clientY;
    card.setPointerCapture(e.pointerId);
    card.classList.remove('is-animating');
  };

  const onMove = (e) => {
    if (!dragging) return;
    dx = e.clientX - startX;
    dy = e.clientY - startY;
    card.style.transform = `translate(${dx}px, ${dy}px) rotate(${dx / 22}deg)`;
    const ratio = Math.min(Math.abs(dx) / SWIPE_THRESHOLD, 1);
    card.querySelector('.stamp--like').style.opacity = dx > 0 ? ratio : 0;
    card.querySelector('.stamp--nope').style.opacity = dx < 0 ? ratio : 0;
  };

  const onUp = () => {
    if (!dragging) return;
    dragging = false;
    if (Math.abs(dx) > SWIPE_THRESHOLD) {
      decide(dx > 0 ? 'like' : 'nope', profile);
    } else {
      card.classList.add('is-animating');
      card.style.transform = 'translate(0,0) rotate(0deg)';
      card.querySelector('.stamp--like').style.opacity = 0;
      card.querySelector('.stamp--nope').style.opacity = 0;
    }
    dx = dy = 0;
  };

  card.addEventListener('pointerdown', onDown);
  card.addEventListener('pointermove', onMove);
  card.addEventListener('pointerup', onUp);
  card.addEventListener('pointercancel', onUp);
}

/* ---------- Entscheidung ---------- */
function decide(direction, profile) {
  if (busy) return;
  const card = topCard();
  if (!card || card.dataset.id !== profile.id) return;

  // CJ lässt sich nicht abweisen — der Hof legt Widerspruch ein.
  if (profile.isTarget && direction === 'nope') {
    busy = true;
    card.classList.add('is-animating');
    card.style.transform = 'translate(-140%, 30px) rotate(-22deg)';
    showToast('Das Heroldsamt legt Widerspruch ein: <em>„Diese Partie ist zu gut für einen Irrtum."</em> Die Karte kommt zurück.');
    setTimeout(() => {
      card.style.transform = 'translate(0,0) rotate(0deg)';
      card.querySelector('.stamp--nope').style.opacity = 0;
      busy = false;
    }, 900);
    return;
  }

  busy = true;
  card.classList.add('is-animating');
  const fly = direction === 'like' ? '140%' : '-140%';
  const tilt = direction === 'like' ? 22 : -22;
  card.style.transform = `translate(${fly}, 40px) rotate(${tilt}deg)`;
  card.style.opacity = '0';

  setTimeout(() => {
    queue = queue.filter((p) => p.id !== profile.id);
    renderDeck();
    busy = false;

    if (profile.isTarget && direction === 'like') {
      startMatch();
    } else if (direction === 'like') {
      showToast(profile.reject);
    } else {
      showToast(`<em>${profile.name}</em> wurde höflich aus der engeren Auswahl gestrichen.`);
    }
  }, 420);
}

/* ---------- Toast ---------- */
function showToast(html) {
  clearTimeout(toastTimer);
  toastEl.innerHTML = html;
  toastEl.classList.add('is-visible');
  toastTimer = setTimeout(() => toastEl.classList.remove('is-visible'), 4200);
}

/* ---------- Match ---------- */
function startMatch() {
  showScreen('screen-match');
  rainHearts();
  const chatEl = $('#chat');
  chatEl.innerHTML = '';
  $('#btn-date').hidden = true;

  let delay = 700;
  CHAT.forEach((line, i) => {
    setTimeout(() => {
      const typing = document.createElement('div');
      typing.className = 'bubble bubble--them bubble--typing';
      typing.innerHTML = '<i></i><i></i><i></i>';
      if (line.who === 'them') chatEl.appendChild(typing);

      setTimeout(() => {
        typing.remove();
        const bubble = document.createElement('div');
        bubble.className = `bubble bubble--${line.who === 'me' ? 'me' : 'them'}`;
        bubble.textContent = line.text;
        chatEl.appendChild(bubble);
        if (i === CHAT.length - 1) {
          setTimeout(() => { $('#btn-date').hidden = false; }, 500);
        }
      }, line.who === 'them' ? 900 : 0);
    }, delay);
    delay += line.who === 'them' ? 1900 : 1100;
  });
}

function rainHearts() {
  const box = $('#hearts');
  box.innerHTML = '';
  const glyphs = ['♥', '👑', '♥', '⚜', '♥'];
  for (let i = 0; i < 26; i++) {
    const h = document.createElement('span');
    h.textContent = glyphs[i % glyphs.length];
    h.style.left = Math.random() * 100 + '%';
    h.style.animationDuration = 3.5 + Math.random() * 3 + 's';
    h.style.animationDelay = Math.random() * 2.5 + 's';
    h.style.fontSize = 14 + Math.random() * 22 + 'px';
    h.style.setProperty('--spin', Math.round(Math.random() * 180 - 90) + 'deg');
    box.appendChild(h);
  }
}

/* ---------- Steuerung ---------- */
function currentProfile() {
  const card = topCard();
  return card ? PROFILES.find((p) => p.id === card.dataset.id) : null;
}

function reset() {
  queue = [...PROFILES];
  renderDeck();
  toastEl.classList.remove('is-visible');
}

$('#btn-start').addEventListener('click', () => {
  reset();
  showScreen('screen-deck');
});

$('#btn-nope').addEventListener('click', () => {
  const p = currentProfile();
  if (p) decide('nope', p);
});

$('#btn-like').addEventListener('click', () => {
  const p = currentProfile();
  if (p) decide('like', p);
});

$('#btn-info').addEventListener('click', () => {
  const p = currentProfile();
  if (p) showToast(`⚜ <strong>${p.name}</strong> — ${p.ancestry}`);
});

$('#btn-date').addEventListener('click', () => showScreen('screen-end'));

$('#btn-restart').addEventListener('click', () => {
  reset();
  showScreen('screen-deck');
});

document.addEventListener('keydown', (e) => {
  if (!$('#screen-deck').classList.contains('is-active')) return;
  const p = currentProfile();
  if (!p) return;
  if (e.key === 'ArrowLeft') decide('nope', p);
  if (e.key === 'ArrowRight') decide('like', p);
});

showScreen('screen-intro');
