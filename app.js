/* Royal Match — Tinder für Adlige. Reines Vanilla-JS, keine Dependencies. */

const PROFILES = [
  {
    id: 'ludwig',
    gender: 'm',
    name: 'Ludwig II.',
    house: 'König von Bayern',
    age: 40,
    photo: 'assets/promi-ludwig.jpg',
    focus: 'center 20%',
    bio: 'Baue drei Schlösser gleichzeitig, Finanzierung ungeklärt. Schlafe tagsüber, lebe nachts, meide Menschen. Davon abgesehen bin ich sehr gesellig.',
    stats: [['3', 'Schlösser'], ['14 Mio.', 'Schulden'], ['0', 'Termine']],
    tags: ['Wagner-Opern', 'Nachtschlittenfahrten', 'Alleinsein'],
    ancestry: 'Ahnentafel geprüft: Wittelsbacher seit 1180. Der Herold rät, das Thema Bauvorhaben beim ersten Date auszusparen.',
    reject: 'Seine Majestät empfängt niemanden. Das Essen wird per Tischlift ins Zimmer gefahren, damit er auch dabei allein ist.'
  },
  {
    id: 'sisi',
    gender: 'f',
    name: 'Elisabeth „Sisi"',
    house: 'Kaiserin von Österreich',
    age: 30,
    photo: 'assets/promi-sisi.jpg',
    focus: 'center 16%',
    bio: 'Turne drei Stunden täglich, wiege mich zweimal, lebe von Veilchensorbet. Bin selten zu Hause. Aktuelle Fotos gibt es keine — ich lasse mich seit 1867 nicht mehr ablichten.',
    stats: [['51 cm', 'Taille'], ['3 h', 'Frisur'], ['12', 'Tage in Wien']],
    tags: ['Reiten', 'Reisen', 'Hofstaat meiden'],
    ancestry: 'Ahnentafel geprüft: Wittelsbacherin, in Bayern geboren, in Wien unglücklich. Beides bestens dokumentiert.',
    reject: 'Ihre Majestät ist auf Korfu. Oder Madeira. Oder in Ungarn. Jedenfalls nicht dort, wo sie sein sollte.'
  },
  {
    id: 'wilhelm',
    gender: 'm',
    name: 'Wilhelm II.',
    house: 'Deutscher Kaiser',
    age: 44,
    photo: 'assets/promi-wilhelm.jpg',
    focus: 'center 32%',
    bio: 'Habe eine Flotte. Halte gern Reden, frei und lang. Mein Berater sagt, ich solle weniger telegrafieren. Mein Berater ist entlassen.',
    stats: [['1', 'Flotte'], ['47', 'Uniformen'], ['0', 'Ratschläge']],
    tags: ['Seefahrt', 'Telegramme', 'Recht behalten'],
    ancestry: 'Ahnentafel geprüft: Hohenzollern, Enkel von Queen Victoria. Er erwähnt das im Gespräch etwa alle vier Minuten.',
    reject: 'Der Kaiser hat geantwortet. Es sind elf Seiten. Es geht überwiegend um den Kaiser.'
  },
  {
    id: 'bismarck',
    gender: 'm',
    name: 'Otto von Bismarck',
    house: 'Fürst · Reichskanzler a. D.',
    age: 70,
    photo: 'assets/promi-bismarck.jpg',
    focus: 'center 24%',
    bio: 'Realpolitik gilt auch privat: Ich verspreche wenig und halte noch weniger, am Ende funktioniert trotzdem alles. Zum Frühstück Rollmops.',
    stats: [['3', 'Kriege'], ['1', 'Reich'], ['0', 'Kompromisse']],
    tags: ['Bündnispolitik', 'Jagd', 'Rollmops'],
    ancestry: 'Ahnentafel geprüft: altmärkischer Landadel, Fürstentitel selbst erarbeitet. Das gilt hier als leicht anrüchig.',
    reject: 'Der Fürst lässt mitteilen, ein Bündnis mit dir liege derzeit nicht im Interesse des Reiches.'
  },
  {
    id: 'franzjoseph',
    gender: 'm',
    name: 'Franz Joseph I.',
    house: 'Kaiser von Österreich',
    age: 62,
    photo: 'assets/promi-franzjo.jpg',
    focus: 'center 22%',
    bio: 'Stehe um vier Uhr auf und arbeite bis abends. Schlafe im Feldbett. Der Backenbart ist nicht verhandelbar. Meine Frau ist nie da.',
    stats: [['04:00', 'Tagesbeginn'], ['68', 'Amtsjahre'], ['1', 'Feldbett']],
    tags: ['Akten', 'Pflichtgefühl', 'Pünktlichkeit'],
    ancestry: 'Ahnentafel geprüft: Habsburger. Die Prüfung dauerte drei Tage und ist noch nicht abgeschlossen.',
    reject: 'Rückmeldung Seiner Majestät: „Es war sehr schön, es hat mich sehr gefreut." Mehr kommt erfahrungsgemäß nicht.'
  },
  {
    id: 'victoria',
    gender: 'f',
    name: 'Victoria',
    house: 'Königin des Vereinigten Königreichs',
    age: 63,
    photo: 'assets/promi-victoria.jpg',
    focus: 'center 28%',
    bio: 'Neun Kinder, halb Europa ist mit mir verwandt — statistisch gesehen also auch du. Trage Schwarz. Seit 1861. Durchgehend.',
    stats: [['9', 'Kinder'], ['63', 'Regierungsjahre'], ['1', 'Farbe']],
    tags: ['Trauerflor', 'Schottland', 'Empire'],
    ancestry: 'Ahnentafel geprüft: Sie ist die Ahnentafel. Halb Europa steht als Fußnote darunter.',
    reject: 'We are not amused.'
  },
  {
    id: 'napoleon',
    gender: 'm',
    name: 'Napoleon III.',
    house: 'Kaiser der Franzosen',
    age: 61,
    photo: 'assets/promi-napoleon.jpg',
    focus: 'center 26%',
    bio: 'Ja, DER Napoleon — genauer gesagt sein Neffe. Ich habe dafür Paris umgebaut, das zählt auch. Vergleiche bitte erst ab dem dritten Date.',
    stats: [['1', 'berühmter Onkel'], ['2', 'Putschversuche'], ['1', 'neues Paris']],
    tags: ['Boulevards', 'Weltausstellungen', 'Der Nachname'],
    ancestry: 'Ahnentafel geprüft: Bonaparte, zweite Reihe. Der Herold notiert „bekannter Name, andere Person".',
    reject: 'Der Kaiser bedauert. Er wird ohnehin ständig mit jemand anderem verwechselt, da kommt es auf dich nicht mehr an.'
  },
  {
    id: 'cj',
    gender: 'f',
    name: 'CJ',
    house: 'Lady of the Waves · Baywatch Bay',
    age: 27,
    photo: 'assets/cj-beach.jpg',
    focus: 'center 40%',
    verified: true,
    bio: 'Adelstitel hab ich mir selbst verliehen, nachdem ich 214 Leute aus dem Pazifik gefischt habe. Foto zeigt mein Büro. Mein Gesicht siehst du Mittwoch.',
    stats: [['214', 'Rettungen'], ['1', 'Strand'], ['∞', 'Zeitlupen']],
    tags: ['Rettungsschwimmen', 'Sonnenuntergänge', 'Rot'],
    ancestry: 'Ahnentafel geprüft: keine gefunden. Das Heroldsamt erklärt sie ersatzweise für „adelig durch Verdienst".',
    isTarget: true
  },
  {
    id: 'mitch',
    gender: 'm',
    name: 'Mitch',
    house: 'Graf von Baywatch',
    age: 41,
    photo: 'assets/mitch-tower.jpg',
    focus: 'center 45%',
    verified: true,
    bio: 'Den Grafentitel trage ich seit einem Sommer, in dem niemand nachgefragt hat. Bin da, wenn es brenzlig wird, und danach auch noch. Foto zeigt meinen Arbeitsplatz.',
    stats: [['312', 'Rettungen'], ['1', 'Turm'], ['0', 'Nachfragen']],
    tags: ['Rettungsschwimmen', 'Rotes Board', 'Zur Stelle sein'],
    ancestry: 'Ahnentafel geprüft: keine gefunden. Das Heroldsamt erklärt ihn ersatzweise für „adelig durch Verdienst".',
    isTarget: true
  }
];

/* Wer sich anmeldet, bestimmt das Deck: gezeigt wird ausschließlich das andere Geschlecht. */
const PLAYERS = {
  mitch: {
    id: 'mitch',
    gender: 'm',
    name: 'Mitch',
    house: 'Graf von Baywatch',
    photo: 'assets/mitch-tower.jpg',
    chat: [
      { who: 'them', text: 'Warte mal … Mitch?? 😳' },
      { who: 'me',   text: 'Der Eine und Einzige.' },
      { who: 'them', text: 'Ich dachte, du bist bei der Küstenwache. Seit wann bist du adelig?' },
      { who: 'me',   text: 'Graf von Baywatch. Steht so im Ausweis. Hat nie jemand nachgeprüft.' },
      { who: 'them', text: 'Mittwoch, 20 Uhr? Ich bring die Zeitlupe mit. 🌅' }
    ]
  },
  cj: {
    id: 'cj',
    gender: 'f',
    name: 'CJ',
    house: 'Lady of the Waves',
    photo: 'assets/cj-beach.jpg',
    chat: [
      { who: 'them', text: 'Moment mal … CJ?? 😳' },
      { who: 'me',   text: 'Die Eine und Einzige.' },
      { who: 'them', text: 'Ich dachte, du fischst Leute aus dem Pazifik. Seit wann bist du adelig?' },
      { who: 'me',   text: 'Lady of the Waves. Hab ich mir selbst verliehen. Hat nie jemand nachgeprüft.' },
      { who: 'them', text: 'Mittwoch, 20 Uhr? Ich bring das rote Board mit. 🌅' }
    ]
  }
};

const $ = (sel) => document.querySelector(sel);
const deckEl = $('#deck');
const toastEl = $('#toast');
const SWIPE_THRESHOLD = 110;

let queue = [];
let player = null;
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
      startMatch(profile);
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
function startMatch(target) {
  showScreen('screen-match');
  setFaces(target);
  rainHearts();
  const chatEl = $('#chat');
  chatEl.innerHTML = '';
  $('#btn-date').hidden = true;

  let delay = 700;
  player.chat.forEach((line, i) => {
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

function applyPlayer(key) {
  player = PLAYERS[key];
  $('#me-name').textContent = player.name;
  $('#me-house').textContent = '· ' + player.house;
  const avatar = $('#me-avatar');
  avatar.src = player.photo;
  avatar.alt = 'Profilbild von ' + player.name;
}

function setFaces(target) {
  $('#face-me-img').src = player.photo;
  $('#face-me-img').alt = player.name;
  $('#face-me-cap').textContent = player.name;
  $('#face-them-img').src = target.photo;
  $('#face-them-img').alt = target.name;
  $('#face-them-cap').textContent = target.name;
}

function reset() {
  // Gezeigt wird nur, wer nicht das eigene Geschlecht hat — das eigene Profil fällt damit automatisch raus.
  queue = PROFILES.filter((p) => p.gender !== player.gender);
  renderDeck();
  toastEl.classList.remove('is-visible');
}

document.querySelectorAll('[data-login]').forEach((btn) => {
  btn.addEventListener('click', () => {
    applyPlayer(btn.dataset.login);
    reset();
    showScreen('screen-deck');
  });
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

$('#btn-restart').addEventListener('click', () => showScreen('screen-intro'));

document.addEventListener('keydown', (e) => {
  if (!$('#screen-deck').classList.contains('is-active')) return;
  const p = currentProfile();
  if (!p) return;
  if (e.key === 'ArrowLeft') decide('nope', p);
  if (e.key === 'ArrowRight') decide('like', p);
});

showScreen('screen-intro');
