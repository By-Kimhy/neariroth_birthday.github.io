// ============================================================
//  CUSTOMIZE YOUR GIFT HERE
//
//  name        Lin's name, used in the headings
//  shortName   The short form used in "Make a Wish, Lin"
//  sender      Your name, shown at the end
//
//  You can also write {name}, {short}, or {sender} inside
//  the letter and they will be filled in for you.
//
//  Photos: replace the files in the images folder
//          (keep the same names), or change the paths below.
//  Music:  replace audio/birthday-music.mp3 with your own song.
//          The file included now is only a soft placeholder.
// ============================================================

const birthdayConfig = {
  name: "Lin Neariroth",
  shortName: "Lin",
  sender: "by kimhy",

  music: "audio/birthday-music.mp3",
  musicVolume: 0.55,

  personalMessage: `Happy Birthday, {short}! 🎉

I hope this special day brings you lots of happiness, beautiful memories, and moments that make you smile.

May this new chapter of your life be filled with exciting opportunities, wonderful experiences, and dreams slowly becoming reality.

Thank you for being such a wonderful friend.

I hope you enjoy every moment of your special day. ❤️`,

  photos: [
    { src: "images/gallery/memory-03.jpg", alt: "A graduation walk with friends" },
    { src: "images/gallery/memory-04.jpg", alt: "Smiles on graduation day" },
    { src: "images/gallery/memory-05.jpg", alt: "Friends in gowns on the steps" },
    { src: "images/gallery/memory-06.jpg", alt: "The whole group, celebrating" },
    { src: "images/gallery/memory-07.jpg", alt: "A green stole and a proud day" },
    { src: "images/gallery/memory-08.jpg", alt: "Walking out together" },
    { src: "images/gallery/memory-09.jpg", alt: "Graduation, side by side" },
    { src: "images/gallery/memory-10.jpg", alt: "A graduation portrait" },
    { src: "images/gallery/memory-13.jpg", alt: "A bright smile on graduation day" },
    { src: "images/gallery/memory-14.jpg", alt: "Holding the day close" },
    { src: "images/gallery/memory-16.jpg", alt: "The group, all together" },
    { src: "images/gallery/memory-17.jpg", alt: "In front of the little tower" },
    { src: "images/gallery/memory-18.jpg", alt: "Friends lined up for a photo" },
    { src: "images/gallery/memory-19.jpg", alt: "A sunny graduation smile" },
    { src: "images/gallery/memory-20.jpg", alt: "A day out with the mountains behind" },
    { src: "images/gallery/memory-21.jpg", alt: "A quiet moment at the counter" },
    { src: "images/gallery/memory-22.jpg", alt: "Dinner, and a little celebration" },
    { src: "images/gallery/memory-23.jpg", alt: "A night out with friends" },
    { src: "images/gallery/memory-24.jpg", alt: "Laughing around the table" },
    { src: "images/gallery/memory-25.jpg", alt: "The table full, the night just starting" },
    { src: "images/gallery/memory-26.jpg", alt: "A cake, and everyone close" },
    { src: "images/gallery/memory-27.jpg", alt: "Sharing the night" },
    { src: "images/gallery/memory-28.jpg", alt: "Friends crowded in for the photo" },
    { src: "images/gallery/memory-29.jpg", alt: "Dinner for two, mid-bite" },
    { src: "images/gallery/memory-30.jpg", alt: "Cooking together" },
    { src: "images/gallery/memory-31.jpg", alt: "A selfie over noodles" },
    { src: "images/gallery/memory-32.jpg", alt: "A peace sign and a smile" },
    { src: "images/gallery/memory-33.jpg", alt: "A close portrait" },
    { src: "images/gallery/memory-34.jpg", alt: "A little peace sign" },
    { src: "images/gallery/memory-35.jpg", alt: "Outside, with a friend" },
    { src: "images/gallery/memory-36.jpg", alt: "Studying side by side" },
    { src: "images/gallery/memory-37.jpg", alt: "A soft evening together" },
    { src: "images/gallery/memory-38.jpg", alt: "Jumping by the sea" },
    { src: "images/gallery/memory-39.jpg", alt: "A beach selfie with friends" },
    { src: "images/gallery/memory-40.jpg", alt: "A heart held up to the sky" },
    { src: "images/gallery/memory-41.jpg", alt: "A mirror full of friends" },
    { src: "images/gallery/memory-42.jpg", alt: "Gathered on the floor" },
    { src: "images/gallery/memory-43.jpg", alt: "A close selfie" },
    { src: "images/gallery/memory-44.jpg", alt: "A green path and a sunny day" },
    { src: "images/gallery/memory-45.jpg", alt: "Friends by the water" },
    { src: "images/gallery/memory-46.jpg", alt: "A peace sign by the sea" },
    { src: "images/gallery/memory-47.jpg", alt: "Two smiles, close together" },
    { src: "images/gallery/memory-48.jpg", alt: "Sunset at the beach" },
    { src: "images/gallery/memory-49.jpg", alt: "A night photo with the group" },
    { src: "images/gallery/memory-50.jpg", alt: "By the water, together" },
    { src: "images/gallery/memory-51.jpg", alt: "Food in hand, friends beside" },
    { src: "images/gallery/memory-52.jpg", alt: "One last photo of the night" }
  ],

  timeline: [
    {
      title: "The Beginning 🌸",
      text: "Every friendship has a beginning, and I'm glad ours became a part of my story."
    },
    {
      title: "Beautiful Moments 📸",
      text: "Some moments may seem small, but they become memories we remember for a long time."
    },
    {
      title: "Today 🎂",
      text: "And today, we get to celebrate you."
    }
  ],

  wishes: [
    {
      emoji: "💖",
      title: "Happiness",
      text: "May you always have countless reasons to smile."
    },
    {
      emoji: "🌟",
      title: "Dreams",
      text: "May your dreams become closer and closer to reality."
    },
    {
      emoji: "🌸",
      title: "Beautiful Memories",
      text: "May this year give you many moments worth remembering."
    },
    {
      emoji: "✨",
      title: "New Adventures",
      text: "May there be many exciting adventures waiting for you."
    }
  ]
};

let reduceMotion = false;
let musicOn = true;
let musicReady = false;
let cakeBlown = false;
let currentPhoto = 0;
let photoToken = 0;
let lastFocus = null;
let revealObserver = null;
let finalePlayed = false;
let finaleTimer = 0;
let bodyLocked = false;
let wishTimers = [];
let swipeStartX = 0;
let galleryPhotos = [];

function init() {
  reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  applyNames();
  renderMessage();
  renderGallery();
  renderTimeline();
  renderWishes();
  createAmbient();
  setupMusic();
  setupEvents();
  resetCake();
  updateProgress();
}

function getShortName() {
  if (birthdayConfig.shortName && birthdayConfig.shortName.trim()) {
    return birthdayConfig.shortName.trim();
  }
  const first = birthdayConfig.name.trim().split(/\s+/)[0];
  return first || birthdayConfig.name;
}

function fillTemplate(text) {
  return String(text)
    .replaceAll("{name}", birthdayConfig.name)
    .replaceAll("{short}", getShortName())
    .replaceAll("{sender}", birthdayConfig.sender);
}

function applyNames() {
  const shortName = getShortName();
  document.querySelectorAll("[data-name]").forEach(function (el) {
    el.textContent = birthdayConfig.name;
  });
  document.querySelectorAll("[data-short-name]").forEach(function (el) {
    el.textContent = shortName;
  });
  document.querySelectorAll("[data-sender]").forEach(function (el) {
    el.textContent = birthdayConfig.sender;
  });
  document.title = "Happy Birthday, " + birthdayConfig.name;
}

function renderMessage() {
  const container = document.getElementById("personal-message");
  const paragraphs = fillTemplate(birthdayConfig.personalMessage)
    .trim()
    .split(/\n\s*\n/)
    .map(function (part) { return part.trim(); })
    .filter(Boolean);

  container.replaceChildren();
  paragraphs.forEach(function (text, index) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    paragraph.style.setProperty("--delay", (0.12 + index * 0.18) + "s");
    container.appendChild(paragraph);
  });
}

function shufflePhotos(list) {
  const next = list.slice();
  for (let index = next.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    const current = next[index];
    next[index] = next[swap];
    next[swap] = current;
  }
  return next;
}

function thumbSrc(src) {
  return src.replace("images/gallery/", "images/gallery/thumbs/");
}

function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  galleryPhotos = shufflePhotos(birthdayConfig.photos);
  grid.replaceChildren();

  galleryPhotos.forEach(function (photo, index) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "photo reveal";
    button.dataset.photoIndex = String(index);
    button.style.transitionDelay = Math.min(index % 4, 3) * 0.04 + "s";
    button.setAttribute("aria-label", "Open photo: " + photo.alt);

    const image = document.createElement("img");
    image.src = thumbSrc(photo.src);
    image.alt = photo.alt;
    image.width = 640;
    image.height = 800;
    image.loading = index < 4 ? "eager" : "lazy";
    image.decoding = "async";
    if (index < 4) image.fetchPriority = "high";
    image.addEventListener("error", function () {
      button.remove();
    });

    button.appendChild(image);
    grid.appendChild(button);
  });
}

function renderTimeline() {
  const list = document.getElementById("timeline");
  list.replaceChildren();

  birthdayConfig.timeline.forEach(function (item, index) {
    const entry = document.createElement("li");
    entry.className = "timeline-item reveal";
    entry.style.transitionDelay = Math.min(index * 0.08, 0.24) + "s";

    const card = document.createElement("article");
    card.className = "timeline-card";

    const title = document.createElement("h3");
    title.textContent = item.title;

    const text = document.createElement("p");
    text.textContent = item.text;

    card.append(title, text);
    entry.appendChild(card);
    list.appendChild(entry);
  });
}

function renderWishes() {
  const grid = document.getElementById("wishes-grid");
  grid.replaceChildren();

  birthdayConfig.wishes.forEach(function (wish, index) {
    const card = document.createElement("article");
    card.className = "wish-card reveal";
    card.style.transitionDelay = (index * 0.1) + "s";

    const emoji = document.createElement("div");
    emoji.className = "wish-emoji";
    emoji.textContent = wish.emoji;
    emoji.setAttribute("aria-hidden", "true");

    const title = document.createElement("h3");
    title.textContent = wish.title;

    const text = document.createElement("p");
    text.textContent = wish.text;

    card.append(emoji, title, text);
    grid.appendChild(card);
  });
}

function createAmbient() {
  const layer = document.getElementById("ambient");
  const small = window.innerWidth < 760;
  const starCount = small ? 16 : 30;

  for (let index = 0; index < starCount; index += 1) {
    const star = document.createElement("span");
    star.className = "star";
    star.style.left = (Math.random() * 100) + "%";
    star.style.top = (Math.random() * 100) + "%";
    const size = 2 + Math.random() * 3.2;
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.animationDuration = (2.2 + Math.random() * 3.4) + "s";
    star.style.animationDelay = (Math.random() * 3) + "s";
    layer.appendChild(star);
  }

  if (reduceMotion) return;

  const heartColors = ["#f3b4c8", "#e7c6ef", "#f0d3a4", "#f7c3d4", "#dec6f6"];
  const heartCount = small ? 8 : 13;

  for (let index = 0; index < heartCount; index += 1) {
    const floater = document.createElement("span");
    floater.className = "floater";
    const onLeft = Math.random() > 0.5;
    floater.style.left = (onLeft ? 3 + Math.random() * 20 : 76 + Math.random() * 20) + "%";
    floater.style.fontSize = (11 + Math.random() * 14) + "px";
    floater.style.color = heartColors[index % heartColors.length];
    floater.style.animationDuration = (12 + Math.random() * 14) + "s";
    floater.style.animationDelay = (-Math.random() * 18) + "s";
    floater.style.setProperty("--sway", (Math.random() * 36 - 18) + "px");

    const heart = document.createElement("span");
    heart.className = "heart";
    floater.appendChild(heart);
    layer.appendChild(floater);
  }

  const sparkleCount = small ? 8 : 14;
  for (let index = 0; index < sparkleCount; index += 1) {
    const sparkle = document.createElement("span");
    sparkle.className = "sparkle";
    sparkle.style.left = (Math.random() * 100) + "%";
    sparkle.style.top = (Math.random() * 100) + "%";
    sparkle.style.animationDuration = (2 + Math.random() * 3) + "s";
    sparkle.style.animationDelay = (Math.random() * 4) + "s";
    layer.appendChild(sparkle);
  }
}

function setupMusic() {
  const audio = document.getElementById("bg-music");
  audio.src = birthdayConfig.music;
  audio.loop = true;
  audio.preload = "auto";
  audio.volume = typeof birthdayConfig.musicVolume === "number" ? birthdayConfig.musicVolume : 0.55;
  setMusicUI(true);
  startMusic();
}

function startMusic() {
  if (!musicOn) return;
  const audio = document.getElementById("bg-music");
  const playPromise = audio.play();
  if (playPromise && typeof playPromise.then === "function") {
    playPromise.then(function () {
      if (!musicOn) audio.pause();
    }).catch(function () {
      waitForMusicGesture();
    });
  }
}

function waitForMusicGesture() {
  if (musicReady) return;
  musicReady = true;

  const resume = function (event) {
    if (event.target && event.target.closest && event.target.closest("#music-toggle")) return;
    document.removeEventListener("pointerdown", resume, true);
    if (!musicOn) return;
    document.getElementById("bg-music").play().catch(function () {
      setMusicUI(false);
    });
  };

  document.addEventListener("pointerdown", resume, true);
}

function setupEvents() {
  document.getElementById("open-surprise").addEventListener("click", openSurprise);
  document.getElementById("music-toggle").addEventListener("click", toggleMusic);
  document.getElementById("blow-candles").addEventListener("click", blowCandles);
  document.getElementById("start-again").addEventListener("click", resetExperience);
  document.getElementById("lightbox-close").addEventListener("click", function () { closeLightbox(); });
  document.getElementById("lightbox-prev").addEventListener("click", previousPhoto);
  document.getElementById("lightbox-next").addEventListener("click", nextPhoto);

  document.getElementById("gallery-grid").addEventListener("click", function (event) {
    const button = event.target.closest("[data-photo-index]");
    if (!button) return;
    openLightbox(Number(button.dataset.photoIndex));
  });

  document.getElementById("lightbox").addEventListener("click", function (event) {
    if (event.target.dataset.close === "true") closeLightbox();
  });

  const lightboxImage = document.getElementById("lightbox-image");
  lightboxImage.addEventListener("error", function () {
    lightboxImage.closest(".lightbox-frame").classList.add("is-missing");
  });
  lightboxImage.addEventListener("load", function () {
    lightboxImage.closest(".lightbox-frame").classList.remove("is-missing");
  });

  const lightbox = document.getElementById("lightbox");
  lightbox.addEventListener("touchstart", function (event) {
    swipeStartX = event.changedTouches[0].clientX;
  }, { passive: true });
  lightbox.addEventListener("touchend", function (event) {
    const delta = event.changedTouches[0].clientX - swipeStartX;
    if (Math.abs(delta) < 48) return;
    if (delta > 0) previousPhoto();
    else nextPhoto();
  }, { passive: true });

  document.addEventListener("keydown", onKeydown);
  window.addEventListener("scroll", function () {
    window.requestAnimationFrame(updateProgress);
  }, { passive: true });
}

function openSurprise() {
  if (document.body.classList.contains("is-open")) return;

  document.body.classList.add("is-open");
  document.body.classList.remove("is-intro");
  document.getElementById("story").inert = false;
  setupScrollReveal();
  revealInView();

  window.setTimeout(function () {
    startConfetti(window.innerWidth < 760 ? 24 : 40);
  }, reduceMotion ? 0 : 420);

  const title = document.getElementById("celebration-title");
  title.setAttribute("tabindex", "-1");
  window.setTimeout(function () {
    title.focus({ preventScroll: true });
  }, reduceMotion ? 0 : 700);
}

function setupScrollReveal() {
  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      if (entry.target.id === "finale") {
        revealFinale();
        return;
      }
      entry.target.classList.add("is-visible");
    });
  }, { threshold: 0.18, rootMargin: "0px 0px -6% 0px" });

  document.querySelectorAll(".reveal").forEach(function (el) {
    revealObserver.observe(el);
  });
  revealObserver.observe(document.getElementById("finale"));
}

function revealInView() {
  document.querySelectorAll(".reveal").forEach(function (el) {
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
    if (inView) el.classList.add("is-visible");
  });
}

function revealFinale() {
  if (finalePlayed) return;
  finalePlayed = true;
  document.getElementById("finale").classList.add("show-intro");
  window.clearTimeout(finaleTimer);
  finaleTimer = window.setTimeout(function () {
    document.getElementById("finale").classList.add("show-rest");
    document.getElementById("start-again").tabIndex = 0;
  }, reduceMotion ? 200 : 1600);
}

function startConfetti(count) {
  if (reduceMotion) return;

  const layer = document.getElementById("confetti-layer");
  const total = count || (window.innerWidth < 760 ? 46 : 80);
  const colors = ["#f4b4c8", "#e7c98a", "#d7c6f3", "#fff6ee", "#f7d7c4", "#c9a4de", "#ffffff", "#f2c1d4"];

  for (let index = 0; index < total; index += 1) {
    const piece = document.createElement("span");
    const wide = Math.random() > 0.75;
    piece.className = "confetti";
    piece.style.left = (Math.random() * 100) + "%";
    piece.style.background = colors[index % colors.length];
    piece.style.animationDelay = (Math.random() * 0.35) + "s";
    piece.style.animationDuration = (3.1 + Math.random() * 2.1) + "s";
    piece.style.setProperty("--drift", (Math.random() * 140 - 70) + "px");
    piece.style.setProperty("--spin", (Math.random() * 540 - 270) + "deg");
    piece.style.width = (wide ? 8 + Math.random() * 6 : 6 + Math.random() * 5) + "px";
    piece.style.height = (wide ? 6 : 9 + Math.random() * 8) + "px";
    piece.style.borderRadius = Math.random() > 0.7 ? "50%" : "2px";
    piece.addEventListener("animationend", function () {
      piece.remove();
    });
    layer.appendChild(piece);
  }
}

function clearConfetti() {
  document.getElementById("confetti-layer").replaceChildren();
}

function toggleMusic() {
  const audio = document.getElementById("bg-music");

  if (musicOn) {
    audio.pause();
    setMusicUI(false);
    return;
  }

  setMusicUI(true);
  const playPromise = audio.play();
  if (playPromise && typeof playPromise.then === "function") {
    playPromise.then(function () {
      if (!musicOn) audio.pause();
    }).catch(function () {
      setMusicUI(false);
    });
  }
}

function setMusicUI(isOn) {
  musicOn = isOn;
  const button = document.getElementById("music-toggle");
  button.setAttribute("aria-pressed", isOn ? "true" : "false");
  button.setAttribute("aria-label", isOn ? "Pause music" : "Play music");
}

function paintLightboxImage(image, photo, token) {
  image.alt = photo.alt;
  image.src = thumbSrc(photo.src);

  const full = new Image();
  full.decoding = "async";
  full.onload = function () {
    if (token !== photoToken) return;
    image.src = photo.src;
  };
  full.src = photo.src;
}

function openLightbox(index) {
  const photos = galleryPhotos;
  if (!photos.length) return;

  currentPhoto = index;
  lastFocus = document.activeElement;
  photoToken += 1;

  const photo = photos[currentPhoto];
  const image = document.getElementById("lightbox-image");
  image.classList.remove("is-changing");
  paintLightboxImage(image, photo, photoToken);
  document.getElementById("lightbox-caption").textContent = photo.alt;
  document.getElementById("lightbox-count").textContent = (currentPhoto + 1) + " / " + photos.length;

  document.getElementById("lightbox").hidden = false;
  document.body.classList.add("lightbox-open");
  lockBody();
  document.getElementById("lightbox-close").focus();
}

function closeLightbox(options) {
  const settings = options || {};
  const lightbox = document.getElementById("lightbox");
  if (lightbox.hidden) return;

  lightbox.hidden = true;
  document.body.classList.remove("lightbox-open");
  if (!settings.skipRestore) unlockBody();

  if (lastFocus && typeof lastFocus.focus === "function") {
    lastFocus.focus({ preventScroll: true });
  }
}

function updateLightboxPhoto() {
  const photos = galleryPhotos;
  if (!photos.length) return;

  currentPhoto = (currentPhoto + photos.length) % photos.length;
  const photo = photos[currentPhoto];
  const image = document.getElementById("lightbox-image");
  const token = ++photoToken;
  const delay = reduceMotion ? 0 : 160;

  image.classList.add("is-changing");
  window.setTimeout(function () {
    if (token !== photoToken) return;
    paintLightboxImage(image, photo, token);
    document.getElementById("lightbox-caption").textContent = photo.alt;
    document.getElementById("lightbox-count").textContent = (currentPhoto + 1) + " / " + photos.length;
    image.classList.remove("is-changing");
  }, delay);
}

function nextPhoto() {
  if (document.getElementById("lightbox").hidden) return;
  currentPhoto += 1;
  updateLightboxPhoto();
}

function previousPhoto() {
  if (document.getElementById("lightbox").hidden) return;
  currentPhoto -= 1;
  updateLightboxPhoto();
}

function clearWishTimers() {
  wishTimers.forEach(function (id) { window.clearTimeout(id); });
  wishTimers = [];
}

function showWishLine(id) {
  document.getElementById(id).classList.add("is-visible");
}

function blowCandles() {
  if (cakeBlown) return;
  cakeBlown = true;

  const cake = document.getElementById("birthday-cake");
  const stage = document.getElementById("cake-stage");
  const button = document.getElementById("blow-candles");

  cake.classList.add("candles-out");
  stage.classList.add("is-celebrating");
  cake.setAttribute("aria-label", "A birthday cake with the candles blown out");
  button.disabled = true;
  button.textContent = "Candles blown ✨";

  startConfetti(window.innerWidth < 760 ? 54 : 90);

  wishTimers.push(window.setTimeout(function () {
    showWishLine("wish-result");
  }, reduceMotion ? 120 : 680));

  wishTimers.push(window.setTimeout(function () {
    showWishLine("wish-again");
  }, reduceMotion ? 280 : 1550));
}

function resetCake() {
  cakeBlown = false;
  clearWishTimers();

  const cake = document.getElementById("birthday-cake");
  const stage = document.getElementById("cake-stage");
  const button = document.getElementById("blow-candles");

  cake.classList.remove("candles-out");
  stage.classList.remove("is-celebrating");
  cake.setAttribute("aria-label", "A birthday cake with candles");
  button.disabled = false;
  button.textContent = "Blow Out the Candles ✨";

  document.querySelectorAll(".wish-messages p").forEach(function (line) {
    line.classList.remove("is-visible");
  });
}

function clearBodyLock() {
  bodyLocked = false;
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  document.body.style.paddingRight = "";
  delete document.body.dataset.scrollY;
}

function lockBody() {
  if (bodyLocked) return;
  bodyLocked = true;
  const scrollY = window.scrollY;
  const gap = window.innerWidth - document.documentElement.clientWidth;
  document.body.dataset.scrollY = String(scrollY);
  document.body.style.position = "fixed";
  document.body.style.top = "-" + scrollY + "px";
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
  if (gap > 0) document.body.style.paddingRight = gap + "px";
}

function unlockBody() {
  if (!bodyLocked) return;
  const scrollY = Number(document.body.dataset.scrollY || "0");
  clearBodyLock();
  window.scrollTo(0, scrollY);
}

function resetExperience() {
  closeLightbox({ skipRestore: true });
  clearBodyLock();
  resetCake();
  clearConfetti();
  renderGallery();
  window.clearTimeout(finaleTimer);
  finalePlayed = false;

  document.getElementById("finale").classList.remove("show-intro", "show-rest");
  document.getElementById("start-again").tabIndex = -1;
  document.querySelectorAll(".reveal").forEach(function (el) {
    el.classList.remove("is-visible");
  });

  if (revealObserver) {
    revealObserver.disconnect();
    revealObserver = null;
  }

  window.scrollTo({ top: 0, behavior: "auto" });
  updateProgress();
  document.body.classList.remove("is-open");
  document.body.classList.add("is-intro");
  document.getElementById("story").inert = true;

  window.setTimeout(function () {
    document.getElementById("open-surprise").focus();
  }, reduceMotion ? 0 : 350);
}

function updateProgress() {
  const bar = document.getElementById("progress");
  let scrollTop = window.scrollY;
  if (document.body.classList.contains("lightbox-open")) {
    scrollTop = Number(document.body.dataset.scrollY || "0");
  }
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const amount = max > 0 ? (scrollTop / max) * 100 : 0;
  bar.style.width = Math.min(100, Math.max(0, amount)) + "%";
}

function trapLightboxFocus(event) {
  const dialog = document.querySelector(".lightbox-dialog");
  const focusable = dialog.querySelectorAll("button");
  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function onKeydown(event) {
  const lightbox = document.getElementById("lightbox");
  if (lightbox.hidden) return;

  if (event.key === "Escape") {
    closeLightbox();
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    nextPhoto();
  } else if (event.key === "ArrowLeft") {
    event.preventDefault();
    previousPhoto();
  } else if (event.key === "Tab") {
    trapLightboxFocus(event);
  }
}

init();
