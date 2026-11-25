(function () {
  "use strict";

  var ASSET_VERSION = "7";

  function asset(path) {
    return path + "?v=" + ASSET_VERSION;
  }

  var ICONS = {
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2.5" width="6" height="10" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0"/><path d="M12 18v3"/><path d="M8.5 21h7"/><path d="M12 5.5v3"/></svg>',
    champagne: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2.5h6l-.9 6.2a2.1 2.1 0 0 1-4.2 0z"/><path d="M12 11v10"/><path d="M9 21h6"/><path d="M6.5 5h1.2M16.3 6.2h1.2M7.8 9.2h1.2"/></svg>',
    stamp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.2 3h5.6v3.2a2.8 2.8 0 0 1-5.6 0z"/><rect x="5" y="11.5" width="14" height="3.2" rx="1"/><path d="M6.5 14.7V19h11v-4.3"/><path d="M9 19v2h6v-2"/></svg>',
    road: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 21 9.5 3"/><path d="M19.5 21 14.5 3"/><path d="M12 6.5v2.2M12 12v2.2M12 17.5V20"/></svg>',
    polaroid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1.5"/><rect x="7" y="6" width="10" height="8.5" rx="1"/><path d="M8.5 17.5h7"/></svg>',
    poster: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4.5" y="3" width="15" height="18" rx="1.5"/><circle cx="12" cy="8.5" r="2.2"/><path d="M12 4.6v1.1M12 11.3v1.1M8.1 8.5h1.1M14.8 8.5h1.1"/><path d="M8 17.5c1.2-1.8 2.6-2.7 4-2.7s2.8.9 4 2.7"/></svg>',
    portrait: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="8.5" r="3"/><path d="M4.5 20c1.2-3.6 3.6-5.4 6.5-5.4s5.3 1.8 6.5 5.4"/><path d="M18.2 4.2l.7-1.6.7 1.6 1.6.7-1.6.7-.7 1.6-.7-1.6-1.6-.7z"/></svg>',
    mat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="4" ry="2.4"/><path d="M8 6v11.5c0 1.4 1.8 2.5 4 2.5s4-1.1 4-2.5V6"/></svg>',
    egg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c3.2 4.2 5 7.2 5 10a5 5 0 0 1-10 0c0-2.8 1.8-5.8 5-10z"/><path d="M9.6 11.5 11 13l-1.4 1.5L11 16"/></svg>',
    diploma: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="11" rx="1.5"/><path d="M3 8.5h18"/><path d="M7 12.5h5"/><circle cx="12" cy="16" r="2"/><path d="M10.5 17.7 10 21l2-.8 2 .8-.5-3.3"/></svg>',
    yarn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="10.5" cy="13.5" r="6"/><path d="M6.5 9.5c4.2 1 6.4 4.2 6.2 8.4M8.6 7.6c3.6 1.4 5.2 4.6 4.9 8.6"/><path d="M15.5 8.5 20 3"/><circle cx="15.5" cy="8.5" r=".9"/></svg>',
    clipper: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8.5" width="16" height="4.5" rx="1.2"/><path d="M6.5 8.5V5.5h11v3"/><path d="M6.5 13v2.2M9.2 13v2.2M11.9 13v2.2M14.6 13v2.2M17.3 13v2.2"/></svg>',
    speaker: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="12" height="16" rx="3"/><circle cx="12" cy="14" r="3.2"/><circle cx="12" cy="8" r="1"/></svg>',
    planner: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3.5" width="14" height="17" rx="2"/><path d="M9 3.5v17"/><path d="M12 8h4M12 11h4M12 14h3"/></svg>',
    selfie: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="7.5" y="2.5" width="9" height="6.5" rx="1.5"/><circle cx="12" cy="5.7" r="1"/><path d="M12 9v8"/><path d="M10.5 20h3"/></svg>',
    candle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="9" width="10" height="11" rx="2"/><path d="M12 9V6"/><path d="M12 6c1.2 0 1.8-.9 1.7-2C13.6 3 12.9 2.2 12 2c-.9.2-1.6 1-1.7 2-.1 1.1.5 2 1.7 2z"/></svg>',
    thermos: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="6" width="8" height="15" rx="2"/><path d="M8 10h8"/><rect x="9.5" y="2.5" width="5" height="3.5" rx="1"/><path d="M10 13.5h4"/></svg>',
    dogtoy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="6.2"/><path d="M6.2 9.4h11.6M6.2 14.6h11.6M12 5.8v12.4"/></svg>',
    plaid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="6" width="16" height="11" rx="2"/><path d="M12 6v11M4 12h16"/><path d="M5.5 17v2M8.5 17v2M11.5 17v2M14.5 17v2M17.5 17v2"/></svg>',
    spa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 9.5h19"/><path d="M6.5 13h6M6.5 16h4"/><circle cx="17.5" cy="14.5" r="2.2"/><path d="M16.4 12.8c.5-.8 1.8-.9 2.3 0"/></svg>',
    bake: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 20h17"/><path d="M5 20v-6.5A3.5 3.5 0 0 1 8.5 10h7a3.5 3.5 0 0 1 3.5 3.5V20"/><path d="M5 14.2c1.4 0 1.6 1.1 3 1.1s1.6-1.1 3-1.1 1.6 1.1 3 1.1 1.6-1.1 3-1.1 1.6 1.1 3 1.1"/><path d="M12 9.5V6.5"/><path d="M12 6.5c1.2 0 1.8-.8 1.8-1.8 0-.7-.6-1.2-1.8-1.2s-1.8.5-1.8 1.2c0 1 .6 1.8 1.8 1.8Z"/></svg>'
  };

  var GUESTS = [
    {
      id: "dima",
      name: "Дима",
      role: "душа компании",
      intro: "Да мне вообще ничего не надо, главное — компания. Я в этом году, кстати, почти не пью.",
      hint: "Он весь вечер держит бутылку как микрофон и мычит в неё «Владимирский централ».",
      correct: {
        title: "Караоке-микрофон",
        caption: "беспроводной, с дымом и подсветкой",
        icon: ICONS.mic
      },
      wrong: {
        title: "Безалкогольное шампанское",
        caption: "0,0%. Вкус — как у воспоминаний",
        icon: ICONS.champagne
      },
      joy: "Микрофон! С дымом! Всё, вечер официально удался. Кто со мной «Владимирский централ»?",
      sad: "Безалкогольное. Спасибо. Я так понимаю, ты намекаешь. Понял. Намекну в ответ.",
      extra: {
        title: "Портативная колонка",
        caption: "20 Вт, подсветка, ремешок",
        icon: ICONS.speaker
      },
      sad2: "Колонка. Хорошая. Но я же не могу в неё петь. То есть могу, но это уже не то."
    },
    {
      id: "kostya",
      name: "Костя",
      role: "человек-регламент",
      intro: "Мне бы что-нибудь простое. Без пафоса. И, желательно, по регламенту.",
      hint: "Он уже дважды поправил ведущего и один раз — тост. Без печати «согласовано» вечер не закрыть.",
      correct: {
        title: "Печать «СОГЛАСОВАНО»",
        caption: "именная, с фиолетовой подушечкой, плюс торт-папка",
        icon: ICONS.stamp
      },
      wrong: {
        title: "Поездка «куда глаза глядят»",
        caption: "без маршрута, без брони, без плана",
        icon: ICONS.road
      },
      joy: "Печать. И торт в виде папки. Это… это лучшее, что я видел за год. Где тут поставить подпись?",
      sad: "Поездка без плана. Без плана. Ты понимаешь, что ты сейчас сделал с человеком?",
      extra: {
        title: "Ежедневник на год",
        caption: "с планами, таблицами и закладкой",
        icon: ICONS.planner
      },
      sad2: "Ежедневник. Полезно. У меня таких четыре. Пятый будет пятым."
    },
    {
      id: "varvara",
      name: "Варвара",
      role: "ирония во плоти",
      intro: "Мне? Да что угодно. Я сегодня прелесть какая гадость, мне всё к лицу.",
      hint: "Она весь вечер снимает всех на телефон и повторяет, что «плёнка бы это передала лучше».",
      correct: {
        title: "Моментальная камера",
        caption: "с плёнкой и десятью кадрами на вечер",
        icon: ICONS.polaroid
      },
      wrong: {
        title: "Постер «Поверь в себя»",
        caption: "А3, ламинация, мотивация",
        icon: ICONS.poster
      },
      joy: "Полароид. Плёнка. Всё, теперь я официально фотограф этого вечера. Не улыбайтесь — будет хуже.",
      sad: "Постер «Поверь в себя». Спасибо. Повешу в туалете, там ему самое место.",
      extra: {
        title: "Селфи-палка",
        caption: "с кольцевой подсветкой и Bluetooth",
        icon: ICONS.selfie
      },
      sad2: "Селфи-палка. Ирония в том, что она у меня в сумке. Второй год. Не пригодилась."
    },
    {
      id: "lena",
      name: "Лена",
      role: "светская гостья",
      intro: "Я не против подарков. Я против подарков, которые портят свет.",
      hint: "Она уже спросила, есть ли в квартире «нормальный свет», и трижды переставила бокал.",
      correct: {
        title: "Фотосессия со стилистом",
        caption: "шампанское, свет, три образа",
        icon: ICONS.portrait
      },
      wrong: {
        title: "Фитнес-коврик",
        caption: "нескользящий, скручивается в рулон",
        icon: ICONS.mat
      },
      joy: "Фотосессия. С шампанским. И со стилистом. Ты понимаешь, что это не подарок, а спасение?",
      sad: "Коврик для фитнеса. Как тонко. Я обязательно… постелю его. Куда-нибудь.",
      extra: {
        title: "Ароматическая свеча",
        caption: "сандал, дым и немного пафоса",
        icon: ICONS.candle
      },
      sad2: "Свеча. Красивая. Теперь ванная будет пахнуть чужим вкусом."
    },
    {
      id: "sergey",
      name: "Сергей",
      role: "фермер и оптимист",
      intro: "Мне бы по хозяйству что-нибудь. Только не про блог, ради всего святого.",
      hint: "Он весь вечер рассказывает про яйца и одиннадцать кур. Одиннадцать. Двенадцатого не хватает.",
      correct: {
        title: "Инкубатор на 12 яиц",
        caption: "с термостатом и автоповоротом",
        icon: ICONS.egg
      },
      wrong: {
        title: "Курс «Личный бренд фермера»",
        caption: "12 вебинаров и чат поддержки",
        icon: ICONS.diploma
      },
      joy: "Инкубатор! На двенадцать! Всё, весной у меня будет двенадцать. Спасибо, друг.",
      sad: "Курс «Личный бренд фермера». Ты серьёзно? Я тебе про кур, а ты мне про бренд.",
      extra: {
        title: "Термос на 1,5 литра",
        caption: "держит тепло двенадцать часов",
        icon: ICONS.thermos
      },
      sad2: "Термос. Хороший. Но в инкубатор его не поставишь."
    },
    {
      id: "tanya",
      name: "Таня",
      role: "хозяйка шпица Тедди",
      intro: "Только не спрашивайте, сколько у меня пряжи. Ответ вас расстроит.",
      hint: "Она весь вечер вяжет под столом и одевает шпица в свитер, который «ещё не закончен».",
      correct: {
        title: "Набор для вязания",
        caption: "меринос, спицы и свитер для шпица",
        icon: ICONS.yarn
      },
      wrong: {
        title: "Машинка для стрижки собак",
        caption: "тихая, с четырьмя насадками",
        icon: ICONS.clipper
      },
      joy: "Набор! И свитер для Тедди! Он будет в восторге. Тедди, смотри, это тебе.",
      sad: "Машинка для стрижки. Ты хочешь, чтобы я сама? Тедди? Он же не переживёт.",
      extra: {
        title: "Игрушки для собак",
        caption: "набор из шести, с пищалками",
        icon: ICONS.dogtoy
      },
      sad2: "Игрушки. Тедди будет рад. Он и от носка рад. А я… я вяжу, если что."
    },
    {
      id: "tatyana",
      name: "Татьяна",
      role: "хозяйка квартиры",
      intro: "Да мне вообще ничего не надо, честно. Я не устала.",
      hint: "Она весь вечер держит телефон в руке и повторяет: «хоть бы второго января — ни одного звонка».",
      correct: {
        title: "Сертификат в спа",
        caption: "2 января, 11:00, телефон можно сдать в шкафчик",
        icon: ICONS.spa
      },
      wrong: {
        title: "Набор для выпечки",
        caption: "форма, скалка и 12 рецептов на праздники",
        icon: ICONS.bake
      },
      joy: "Спа-а… Второе января, одиннадцать утра. Ты меня понял. Ты единственный, кто меня понял.",
      sad: "Ой. Набор для выпечки. Спасибо. Я как раз мечтала встать в шесть утра и что-нибудь испечь.",
      extra: {
        title: "Плед с подогревом",
        caption: "мягкий, с тремя режимами",
        icon: ICONS.plaid
      },
      sad2: "Плед. Тёплый. Я в нём и засну, и вечер закончится без меня."
    }
  ];

  var MAX_MOOD = 155;

  var state = {
    started: false,
    busy: false,
    index: 0,
    mood: 30,
    mistakes: 0,
    missed: false,
    firstTry: 0,
    penalized: {},
    selected: null,
    solved: false,
    choice: null,
    advancing: false
  };

  var el = {
    snow: document.getElementById("snow"),
    garland: document.getElementById("garland"),
    stage: document.getElementById("stage"),
    vidA: document.getElementById("vidA"),
    vidB: document.getElementById("vidB"),
    frameVeil: document.getElementById("frameVeil"),
    bubble: document.getElementById("bubble"),
    bubbleText: document.getElementById("bubbleText"),
    gifts: document.getElementById("gifts"),
    bagCount: document.getElementById("bagCount"),
    bagHint: document.getElementById("bagHint"),
    hint: document.getElementById("hint"),
    guestName: document.getElementById("guestName"),
    guestRole: document.getElementById("guestRole"),
    guestLabel: document.getElementById("guestLabel"),
    guestDots: document.getElementById("guestDots"),
    guestNote: document.getElementById("guestNote"),
    moodFill: document.getElementById("moodFill"),
    moodValue: document.getElementById("moodValue"),
    moodBar: document.getElementById("moodBar"),
    startOverlay: document.getElementById("startOverlay"),
    startBtn: document.getElementById("startBtn"),
    finalOverlay: document.getElementById("finalOverlay"),
    finalKicker: document.getElementById("finalKicker"),
    finalTitle: document.getElementById("finalTitle"),
    finalText: document.getElementById("finalText"),
    finalMood: document.getElementById("finalMood"),
    cardCanvas: document.getElementById("cardCanvas"),
    shareBtn: document.getElementById("shareBtn"),
    restartBtn: document.getElementById("restartBtn"),
    yuliaOverlay: document.getElementById("yuliaOverlay"),
    yuliaKicker: document.getElementById("yuliaKicker"),
    yuliaTitle: document.getElementById("yuliaTitle"),
    yuliaLead: document.getElementById("yuliaLead"),
    yuliaChoice: document.getElementById("yuliaChoice"),
    yuliaCall: document.getElementById("yuliaCall"),
    yuliaVideo: document.getElementById("yuliaVideo"),
    answerBtn: document.getElementById("answerBtn"),
    yuliaPlayer: document.getElementById("yuliaPlayer"),
    callLine: document.getElementById("callLine"),
    callAvatar: document.getElementById("callAvatar"),
    callLineText: document.getElementById("callLineText")
  };

  /* ---------- decorations ---------- */

  function buildSnow() {
    var count = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 26;
    for (var i = 0; i < count; i++) {
      var dot = document.createElement("span");
      var size = 2 + Math.random() * 3.5;
      dot.style.left = (Math.random() * 100).toFixed(2) + "%";
      dot.style.width = size.toFixed(1) + "px";
      dot.style.height = size.toFixed(1) + "px";
      dot.style.opacity = (0.3 + Math.random() * 0.55).toFixed(2);
      dot.style.animationDuration = (9 + Math.random() * 12).toFixed(1) + "s";
      dot.style.animationDelay = (-Math.random() * 18).toFixed(1) + "s";
      el.snow.appendChild(dot);
    }
  }

  function buildGarland() {
    for (var i = 0; i < 15; i++) {
      var bulb = document.createElement("span");
      bulb.className = "bulb";
      bulb.style.animationDelay = (i * 0.19).toFixed(2) + "s";
      el.garland.appendChild(bulb);
    }
  }

  function buildDots() {
    el.guestDots.innerHTML = "";
    for (var i = 0; i < GUESTS.length; i++) {
      var dot = document.createElement("span");
      dot.className = "guest-dot";
      el.guestDots.appendChild(dot);
    }
  }

  function updateDots() {
    var dots = el.guestDots.children;
    for (var i = 0; i < dots.length; i++) {
      dots[i].classList.toggle("is-done", i < state.index);
      dots[i].classList.toggle("is-current", i === state.index && !state.solved);
    }
    el.guestLabel.textContent = "Гость " + (state.index + 1) + " из " + GUESTS.length;
  }

  /* ---------- video layers ---------- */

  var layers = [el.vidA, el.vidB];
  var active = 0;
  var watchdog = null;
  var clipToken = 0;

  function playClip(guestId, stateName, options) {
    options = options || {};
    var next = layers[1 - active];
    var prev = layers[active];
    var token = ++clipToken;

    clearTimeout(watchdog);
    next.onended = null;
    next.onerror = null;
    next.loop = !!options.loop;
    next.muted = !options.sound;
    next.poster = asset("assets/" + guestId + "-neutral.jpg");
    next.src = asset("assets/" + guestId + "-" + stateName + ".mp4");

    next.onended = function () {
      if (token !== clipToken) return;
      if (options.onEnded) options.onEnded();
    };
    next.onerror = function () {
      if (token !== clipToken) return;
      if (options.onEnded) options.onEnded();
    };

    var started = next.play();
    if (started && typeof started.catch === "function") {
      started.catch(function () {
        if (token !== clipToken) return;
        if (options.onEnded) setTimeout(options.onEnded, 1500);
      });
    }

    next.classList.add("is-active");
    prev.classList.remove("is-active");
    prev.pause();
    active = 1 - active;

    if (!options.loop) {
      watchdog = setTimeout(function () {
        if (token !== clipToken) return;
        if (options.onEnded) options.onEnded();
      }, 9000);
    }
  }

  /* ---------- ui ---------- */

  function setBubble(text) {
    el.bubbleText.textContent = text;
    el.bubble.classList.remove("is-pop");
    void el.bubble.offsetWidth;
    el.bubble.classList.add("is-pop");
  }

  function updateMood() {
    el.moodFill.style.width = (state.mood / MAX_MOOD * 100).toFixed(1) + "%";
    el.moodValue.textContent = state.mood;
    el.moodBar.setAttribute("aria-valuenow", String(state.mood));
  }

  function showScoreFloat(delta, fromEl) {
    if (!delta) return;

    var plate = document.createElement("div");
    plate.className = "score-float " + (delta > 0 ? "is-plus" : "is-minus");
    plate.textContent = (delta > 0 ? "+" : "−") + Math.abs(delta);

    var mood = el.moodBar.getBoundingClientRect();
    var startX;
    var startY;

    if (fromEl) {
      var from = fromEl.getBoundingClientRect();
      startX = from.left + from.width / 2;
      startY = from.top + from.height / 2;
    } else {
      var stage = el.stage.getBoundingClientRect();
      startX = stage.left + stage.width / 2;
      startY = stage.top + stage.height * 0.7;
    }

    var dx = (mood.left + mood.width / 2) - startX;
    var dy = (mood.top + mood.height / 2) - startY;

    plate.style.left = startX + "px";
    plate.style.top = startY + "px";
    document.body.appendChild(plate);

    var anim = plate.animate([
      { transform: "translate(-50%, -50%) scale(.75)", opacity: 0 },
      { transform: "translate(-50%, -50%) scale(1.06)", opacity: 1, offset: 0.16 },
      { transform: "translate(calc(-50% + " + dx + "px), calc(-50% + " + dy + "px)) scale(.65)", opacity: 0 }
    ], { duration: 5000, easing: "cubic-bezier(.2, .7, .3, 1)", fill: "forwards" });

    anim.onfinish = function () { plate.remove(); };
  }

  function showHint(text) {
    el.hint.textContent = text;
    el.hint.classList.add("is-open");
  }

  function hideHint() {
    el.hint.classList.remove("is-open");
    el.hint.textContent = "";
  }

  function plural(n, forms) {
    var mod10 = n % 10;
    var mod100 = n % 100;
    if (mod10 === 1 && mod100 !== 11) return forms[0];
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return forms[1];
    return forms[2];
  }

  function updateBagCount() {
    var left = el.gifts.querySelectorAll(".gift:not(.is-used):not(.is-tried)").length;
    el.bagCount.textContent = left + " " + plural(left, ["подарок", "подарка", "подарков"]);
  }

  function renderGifts() {
    var guest = GUESTS[state.index];
    var items = [
      { gift: guest.correct, kind: "correct" },
      { gift: guest.wrong, kind: "wrong" },
      { gift: guest.extra, kind: "extra" }
    ];
    for (var i = items.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = items[i];
      items[i] = items[j];
      items[j] = tmp;
    }

    el.gifts.innerHTML = "";
    items.forEach(function (item) {
      var gift = item.gift;
      var card = document.createElement("button");
      card.type = "button";
      card.className = "gift";
      card.dataset.id = item.kind;
      card.setAttribute("aria-label", gift.title + ". " + gift.caption);
      card.innerHTML =
        '<span class="gift-icon" aria-hidden="true">' + gift.icon + "</span>" +
        '<span class="gift-text">' +
        '<span class="gift-title">' + gift.title + "</span>" +
        '<span class="gift-caption">' + gift.caption + "</span>" +
        "</span>";
      card.addEventListener("pointerdown", function (e) {
        startPress(e, card, item);
      });
      card.addEventListener("click", function (e) {
        if (e.detail === 0) toggleSelect(item, card);
      });
      el.gifts.appendChild(card);
    });

    updateBagCount();
  }

  function cardFor(item) {
    return el.gifts.querySelector('[data-id="' + item.kind + '"]');
  }

  /* ---------- selection ---------- */

  function clearSelection() {
    state.selected = null;
    Array.prototype.forEach.call(el.gifts.querySelectorAll(".gift"), function (c) {
      c.classList.remove("is-selected");
      c.setAttribute("aria-pressed", "false");
    });
  }

  function toggleSelect(item, card) {
    if (state.busy || state.solved) return;
    if (state.selected === item) {
      clearSelection();
      el.bagHint.textContent = "Подарок вернулся в мешок.";
      return;
    }
    clearSelection();
    state.selected = item;
    card.classList.add("is-selected");
    card.setAttribute("aria-pressed", "true");
    el.bagHint.textContent = "Теперь нажми на гостя — или перетащи карточку прямо на него.";
  }

  /* ---------- drag ---------- */

  var press = null;

  function startPress(e, card, item) {
    if (!state.started || state.busy || state.solved) return;
    if (card.disabled) return;
    if (e.button !== undefined && e.button !== 0) return;

    press = {
      card: card,
      item: item,
      x: e.clientX,
      y: e.clientY,
      moved: false,
      ghost: null,
      width: 0,
      height: 0
    };

    if (card.setPointerCapture) {
      try { card.setPointerCapture(e.pointerId); } catch (err) { /* noop */ }
    }

    card.addEventListener("pointermove", onPressMove);
    card.addEventListener("pointerup", onPressEnd);
    card.addEventListener("pointercancel", onPressEnd);
  }

  function onPressMove(e) {
    if (!press) return;
    var dx = e.clientX - press.x;
    var dy = e.clientY - press.y;

    if (!press.moved && Math.sqrt(dx * dx + dy * dy) > 8) {
      press.moved = true;
      var rect = press.card.getBoundingClientRect();
      press.width = rect.width;
      press.height = rect.height;

      var ghost = press.card.cloneNode(true);
      ghost.className = "gift gift-ghost";
      ghost.removeAttribute("data-id");
      ghost.style.width = rect.width + "px";
      ghost.style.height = rect.height + "px";
      document.body.appendChild(ghost);
      press.ghost = ghost;
      press.card.classList.add("is-dragging");
      clearSelection();
    }

    if (press.moved && press.ghost) {
      press.ghost.style.left = (e.clientX - press.width / 2) + "px";
      press.ghost.style.top = (e.clientY - press.height / 2) + "px";
      var over = isOverStage(e.clientX, e.clientY);
      el.stage.classList.toggle("is-target", over);
    }
  }

  function onPressEnd(e) {
    if (!press) return;
    var card = press.card;
    var item = press.item;
    var moved = press.moved;
    var ghost = press.ghost;

    card.removeEventListener("pointermove", onPressMove);
    card.removeEventListener("pointerup", onPressEnd);
    card.removeEventListener("pointercancel", onPressEnd);
    card.classList.remove("is-dragging");
    el.stage.classList.remove("is-target");

    if (ghost) ghost.remove();
    press = null;

    if (moved) {
      if (isOverStage(e.clientX, e.clientY)) giveGift(item);
      return;
    }

    toggleSelect(item, card);
  }

  function isOverStage(x, y) {
    var r = el.stage.getBoundingClientRect();
    return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
  }

  /* ---------- game ---------- */

  var amb = { neutral: null, joy: null, sad: null };

  function initAmbience() {
    if (amb.neutral) return;

    amb.neutral = new Audio(asset("assets/amb-neutral.mp3"));
    amb.neutral.loop = true;
    amb.neutral.volume = 0.16;
    amb.neutral.preload = "auto";

    amb.joy = new Audio(asset("assets/amb-joy.mp3"));
    amb.joy.volume = 0.3;
    amb.joy.preload = "auto";

    amb.sad = new Audio(asset("assets/amb-sad.mp3"));
    amb.sad.volume = 0.26;
    amb.sad.preload = "auto";
  }

  function playSound(audio) {
    if (!audio) return;
    try { audio.currentTime = 0; } catch (err) { /* ещё не загрузился */ }
    var started = audio.play();
    if (started && typeof started.catch === "function") {
      started.catch(function () { /* звук может быть заблокирован */ });
    }
  }

  function startAmbient() {
    initAmbience();
    if (amb.joy && !amb.joy.paused) return;
    if (amb.sad && !amb.sad.paused) return;
    if (amb.neutral.paused) playSound(amb.neutral);
  }

  function scheduleAmbient() {
    var sad = amb.sad;
    if (!sad || sad.paused) {
      startAmbient();
      return;
    }
    var remain = Math.max(0, (sad.duration - sad.currentTime) * 1000) + 150;
    setTimeout(startAmbient, remain);
  }

  function stopAmbient() {
    if (amb.neutral && !amb.neutral.paused) amb.neutral.pause();
  }

  function stopReactions() {
    [amb.joy, amb.sad].forEach(function (audio) {
      if (audio && !audio.paused) {
        audio.pause();
        try { audio.currentTime = 0; } catch (err) { /* ещё не загрузился */ }
      }
    });
  }

  function stopAllSound() {
    stopAmbient();
    stopReactions();
  }

  function renderRound() {
    var guest = GUESTS[state.index];
    state.solved = false;
    state.missed = false;
    state.penalized = {};
    state.selected = null;

    el.guestName.textContent = guest.name;
    el.guestRole.textContent = guest.role;
    el.stage.setAttribute("aria-label", "Вручить выбранный подарок: " + guest.name);
    el.guestNote.textContent = GUESTS.map(function (g) { return g.name; }).join(" · ");
    setBubble(guest.intro);
    hideHint();
    clearSelection();
    renderGifts();
    updateDots();
    el.bagHint.textContent = "Перетащи подарок на гостя — или выбери карточку и нажми на неё.";
  }

  function giveGift(item) {
    if (!state.started || state.busy || state.solved) return;
    var card = cardFor(item);
    if (!card || card.disabled || card.classList.contains("is-used") || card.classList.contains("is-tried")) return;

    var guest = GUESTS[state.index];
    state.busy = true;
    var moodBefore = state.mood;
    clearSelection();
    hideHint();

    el.stage.classList.add("is-receiving");
    setTimeout(function () {
      el.stage.classList.remove("is-receiving");
    }, 600);

    if (item.kind === "correct") {
      var gain = state.missed ? 10 : 15;
      if (!state.missed) state.firstTry += 1;
      state.mood = Math.min(MAX_MOOD, state.mood + gain);
      state.solved = true;
      showScoreFloat(state.mood - moodBefore);
      updateMood();
      updateDots();
      card.classList.add("is-used");
      updateBagCount();
      el.bagHint.textContent = "Подарок вручён.";
      setBubble(guest.joy);
      stopAmbient();
      playSound(amb.joy);
      playClip(guest.id, "joy", {
        sound: true,
        onEnded: function () {
          setTimeout(nextGuest, 900);
        }
      });
    } else {
      state.missed = true;
      if (!state.penalized[item.kind]) {
        state.penalized[item.kind] = true;
        state.mistakes += 1;
        state.mood = Math.max(0, state.mood - 10);
        showScoreFloat(state.mood - moodBefore);
        updateMood();
      }
      card.classList.add("is-rejected");
      setTimeout(function () {
        card.classList.remove("is-rejected");
        card.classList.add("is-tried");
        card.disabled = true;
        card.setAttribute("aria-disabled", "true");
        card.setAttribute("aria-label", item.gift.title + ". Уже не подошёл");
        updateBagCount();
      }, 620);
      setBubble(item.kind === "wrong" ? guest.sad : guest.sad2);
      stopAmbient();
      playSound(amb.sad);
      playClip(guest.id, "sad", {
        sound: true,
        onEnded: function () {
          playClip(guest.id, "neutral", { loop: true });
          showHint(guest.hint);
          el.bagHint.textContent = "Не то. Этот подарок больше не подойдёт — возьми другой из мешка.";
          scheduleAmbient();
          state.busy = false;
        }
      });
    }
  }

  function nextGuest() {
    if (state.advancing) return;
    state.advancing = true;
    clearTimeout(watchdog);
    clipToken += 1;
    stopReactions();

    if (state.index >= GUESTS.length - 1) {
      state.busy = true;
      el.stage.classList.add("is-switching");
      setTimeout(finish, 420);
      return;
    }

    state.busy = true;
    el.stage.classList.add("is-switching");

    setTimeout(function () {
      state.index += 1;
      renderRound();
      var guest = GUESTS[state.index];
      playClip(guest.id, "neutral", { loop: true });
      startAmbient();

      setTimeout(function () {
        el.stage.classList.remove("is-switching");
        state.busy = false;
        state.advancing = false;
      }, 160);
    }, 360);
  }

  function finish() {
    state.busy = true;
    clearTimeout(watchdog);
    clipToken += 1;
    stopAllSound();
    var n = state.mistakes;

    el.yuliaKicker.textContent = "00:12 · все подарки разобраны" + (n ? " · неловких пауз: " + n : "");
    el.yuliaTitle.textContent = "Восьмой подарок";
    el.yuliaLead.textContent = "На столе — коробка со шнурком и биркой «Юле». И телефон, который уже звонит.";
    el.yuliaChoice.hidden = true;
    el.yuliaCall.hidden = false;
    el.yuliaVideo.hidden = true;
    el.callLine.hidden = true;
    clearTimeout(callWatchdog);
    el.yuliaPlayer.pause();
    el.yuliaOverlay.hidden = false;
    requestAnimationFrame(function () {
      el.yuliaOverlay.classList.add("is-open");
    });
    startRing();
  }

  /* ---------- yulia ---------- */

  var ringCtx = null;
  var ringTimer = null;

  function startRing() {
    stopRing();
    try {
      ringCtx = ringCtx || new (window.AudioContext || window.webkitAudioContext)();
      if (ringCtx.state === "suspended") ringCtx.resume();
    } catch (err) {
      return;
    }

    var beep = function () {
      var t = ringCtx.currentTime;
      [440, 480].forEach(function (freq, i) {
        var osc = ringCtx.createOscillator();
        var gain = ringCtx.createGain();
        var at = t + i * 0.32;
        osc.type = "sine";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.0001, at);
        gain.gain.exponentialRampToValueAtTime(0.07, at + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, at + 0.28);
        osc.connect(gain);
        gain.connect(ringCtx.destination);
        osc.start(at);
        osc.stop(at + 0.3);
      });
    };

    beep();
    ringTimer = setInterval(beep, 1800);
  }

  function stopRing() {
    if (ringTimer) {
      clearInterval(ringTimer);
      ringTimer = null;
    }
  }

  function chooseYulia(choice, sourceEl) {
    if (state.choice) return;
    state.choice = choice;

    var delta = choice === "cupboard" ? -10 : (choice === "trip" ? 20 : 10);
    state.mood = Math.max(0, Math.min(MAX_MOOD, state.mood + delta));
    updateMood();
    showScoreFloat(delta, sourceEl);

    el.yuliaChoice.hidden = true;
    showFinal();
  }

  var CALL = {
    firstEnd: 5.18,
    firstPauseEnd: 7.38,
    secondEnd: 12.56,
    secondPauseEnd: 16.96,
    total: 22.15
  };

  var callWatchdog = null;

  var callVoices = {};
  var callSpeaker = "";

  function warmVoices() {
    ["dima", "tanya"].forEach(function (key) {
      if (!callVoices[key]) {
        var voice = new Audio(asset("assets/voice-" + key + ".mp3"));
        voice.preload = "auto";
        callVoices[key] = voice;
      }
    });
  }

  function stopVoices() {
    Object.keys(callVoices).forEach(function (key) {
      var voice = callVoices[key];
      voice.pause();
      try { voice.currentTime = 0; } catch (err) { /* ещё не загрузился */ }
    });
  }

  function playVoice(speaker) {
    var voice = callVoices[speaker];
    if (!voice) return;
    try { voice.currentTime = 0; } catch (err) { /* ещё не загрузился */ }
    var started = voice.play();
    if (started && typeof started.catch === "function") {
      started.catch(function () { /* звук может быть заблокирован */ });
    }
  }

  function updateCallLine() {
    var t = el.yuliaPlayer.currentTime;
    var speaker = "";
    var text = "";

    if (t >= CALL.firstEnd && t < CALL.firstPauseEnd) {
      speaker = "dima";
      text = "Абсолютно.";
    } else if (t >= CALL.secondEnd && t < CALL.secondPauseEnd) {
      speaker = "tanya";
      text = "Ты каждый год в списке. Просто ты об этом не знаешь.";
    }

    if (!speaker) {
      if (!el.callLine.hidden) {
        el.callLine.hidden = true;
        stopVoices();
        callSpeaker = "";
      }
      return;
    }

    if (callSpeaker !== speaker) {
      callSpeaker = speaker;
      el.callLine.dataset.speaker = speaker;
      el.callAvatar.src = asset("assets/avatar-" + speaker + ".jpg");
      el.callAvatar.alt = speaker === "dima" ? "Дима" : "Таня";
      el.callLineText.textContent = text;
      el.callLine.hidden = false;
      playVoice(speaker);
    }
  }

  function answerCall() {
    stopRing();
    warmVoices();
    el.yuliaCall.hidden = true;
    el.yuliaVideo.hidden = false;
    el.callLine.hidden = true;
    el.callLineText.textContent = "";
    delete el.callLine.dataset.speaker;
    callSpeaker = "";

    var finished = false;
    var finishCall = function (delay) {
      if (finished) return;
      finished = true;
      clearTimeout(callWatchdog);
      el.yuliaPlayer.onended = null;
      setTimeout(showChoice, delay);
    };

    el.yuliaPlayer.onended = function () { finishCall(1600); };
    el.yuliaPlayer.onerror = function () { finishCall(1200); };

    el.yuliaPlayer.src = asset("assets/yulia-call.mp4");
    el.yuliaPlayer.currentTime = 0;
    el.yuliaPlayer.muted = false;

    var started = el.yuliaPlayer.play();
    if (started && typeof started.catch === "function") {
      started.catch(function () { /* звук может быть заблокирован — кадр всё равно покажем */ });
    }

    callWatchdog = setTimeout(function () { finishCall(0); }, 26000);
  }

  function showChoice() {
    stopRing();
    el.yuliaCall.hidden = true;
    el.yuliaVideo.hidden = true;
    el.callLine.hidden = true;
    el.yuliaKicker.textContent = "00:19 · звонок закончился";
    el.yuliaTitle.textContent = "Что с коробкой?";
    el.yuliaLead.textContent = "Юля видела её по камере. Дальше решаешь ты.";
    el.yuliaChoice.hidden = false;
  }

  /* ---------- share card ---------- */

  var CARD = {
    size: 1080,
    cream: "#f9f2e5",
    panel: "#fffdf6",
    soft: "#7a6a58",
    line: "#c9b394",
    wine: "#6b2338",
    wineDeep: "#4a1f2e",
    gold: "#b9863c",
    green: "#2f6b46",
    red: "#8d2a40",
    tree: "#2f5b45"
  };

  function letterSpace(ctx, px) {
    try {
      ctx.letterSpacing = px + "px";
    } catch (err) {
      /* старые браузеры просто игнорируют */
    }
  }

  function quadCoord(a, b, c, t) {
    var k = 1 - t;
    return k * k * a + 2 * k * t * b + t * t * c;
  }

  function cardPath(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.arcTo(x + w, y, x + w, y + r, r);
    ctx.lineTo(x + w, y + h - r);
    ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
    ctx.lineTo(x + r, y + h);
    ctx.arcTo(x, y + h, x, y + h - r, r);
    ctx.lineTo(x, y + r);
    ctx.arcTo(x, y, x + r, y, r);
    ctx.closePath();
  }

  function starPath(ctx, cx, cy, r) {
    ctx.beginPath();
    for (var i = 0; i < 10; i++) {
      var angle = -Math.PI / 2 + i * Math.PI / 5;
      var radius = i % 2 === 0 ? r : r * 0.42;
      var px = cx + Math.cos(angle) * radius;
      var py = cy + Math.sin(angle) * radius;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
  }

  function choiceValue() {
    if (state.choice === "trip") return 20;
    if (state.choice === "courier") return 10;
    if (state.choice === "cupboard") return -10;
    return 0;
  }

  function cardBadge(ctx, cx, cy, text, color) {
    ctx.font = "700 28px 'Golos Text', system-ui, sans-serif";
    var bw = Math.max(62, ctx.measureText(text).width + 38);
    var bh = 44;

    cardPath(ctx, cx - bw / 2, cy - bh / 2, bw, bh, bh / 2);
    ctx.fillStyle = CARD.panel;
    ctx.fill();
    ctx.strokeStyle = "rgba(43, 33, 25, .18)";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, cx, cy + 1);
    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";
  }

  function drawCardHeader(ctx) {
    ctx.save();

    ctx.fillStyle = CARD.wine;
    starPath(ctx, 106, 96, 21);
    ctx.fill();

    ctx.fillStyle = CARD.wine;
    ctx.font = "600 46px Georgia, 'Times New Roman', serif";
    ctx.textAlign = "left";
    ctx.fillText("Подарок с подвохом", 142, 112);

    ctx.fillStyle = CARD.soft;
    ctx.font = "500 14px 'Golos Text', system-ui, sans-serif";
    letterSpace(ctx, 3);
    ctx.fillText("НОВОГОДНЯЯ ИСТОРИЯ НА НАБЛЮДАТЕЛЬНОСТЬ", 142, 146);
    letterSpace(ctx, 0);

    ctx.textAlign = "right";
    ctx.fillStyle = CARD.soft;
    ctx.font = "500 14px 'Golos Text', system-ui, sans-serif";
    letterSpace(ctx, 2);
    ctx.fillText("31 ДЕКАБРЯ", 996, 94);
    letterSpace(ctx, 0);
    ctx.font = "500 17px 'Golos Text', system-ui, sans-serif";
    ctx.fillText("00:20", 996, 122);

    ctx.restore();
  }

  function drawCardStats(ctx) {
    var x = 88;
    var w = 440;
    var choice = choiceValue();
    var rows = [
      {
        label: "Душевность вечера",
        max: "из " + MAX_MOOD,
        pct: state.mood / MAX_MOOD,
        text: String(state.mood),
        tall: true,
        gradient: true
      },
      {
        label: "С первого раза",
        max: "из " + GUESTS.length,
        pct: state.firstTry / GUESTS.length,
        text: String(state.firstTry),
        color: CARD.green
      },
      {
        label: "Коробка для Юли",
        max: "из 20",
        pct: (choice + 10) / 30,
        zero: 1 / 3,
        text: (choice < 0 ? "−" : "+") + Math.abs(choice),
        color: choice < 0 ? CARD.red : CARD.green
      },
      {
        label: "Неловкие паузы",
        max: "каждая ошибка",
        pct: Math.min(1, state.mistakes / 14),
        text: String(state.mistakes),
        color: CARD.red
      }
    ];

    rows.forEach(function (row, i) {
      var labelY = 372 + i * 88;
      var barY = labelY + 16;
      var barH = row.tall ? 24 : 18;

      ctx.fillStyle = CARD.soft;
      ctx.font = "500 15px 'Golos Text', system-ui, sans-serif";
      letterSpace(ctx, 2.6);
      ctx.textAlign = "left";
      ctx.fillText(row.label.toUpperCase(), x, labelY);

      letterSpace(ctx, 0);
      ctx.font = "400 14px 'Golos Text', system-ui, sans-serif";
      ctx.textAlign = "right";
      ctx.fillText(row.max, x + w, labelY);

      cardPath(ctx, x, barY, w, barH, barH / 2);
      ctx.fillStyle = "rgba(43, 33, 25, .09)";
      ctx.fill();

      ctx.save();
      cardPath(ctx, x, barY, w, barH, barH / 2);
      ctx.clip();

      if (row.gradient) {
        var grad = ctx.createLinearGradient(x, 0, x + w, 0);
        grad.addColorStop(0, CARD.gold);
        grad.addColorStop(1, CARD.wine);
        ctx.fillStyle = grad;
      } else {
        ctx.fillStyle = row.color;
      }

      var from = row.zero ? Math.min(row.pct, row.zero) : 0;
      var to = row.zero ? Math.max(row.pct, row.zero) : row.pct;
      ctx.fillRect(x + w * from, barY, w * (to - from), barH);
      ctx.restore();

      if (row.zero) {
        ctx.fillStyle = "rgba(43, 33, 25, .26)";
        ctx.fillRect(x + w * row.zero - 1, barY - 5, 2, barH + 10);
      }

      var badgeX = Math.min(x + w - 34, Math.max(x + 34, x + w * row.pct));
      cardBadge(ctx, badgeX, barY + barH / 2, row.text, row.gradient ? CARD.wine : row.color);
    });
  }

  function drawCardScene(ctx, x, y, w, h) {
    var r1 = 216;
    var r2 = 44;

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x, y + h - r2);
    ctx.lineTo(x, y + r1);
    ctx.arcTo(x, y, x + r1, y, r1);
    ctx.lineTo(x + w - r1, y);
    ctx.arcTo(x + w, y, x + w, y + r1, r1);
    ctx.lineTo(x + w, y + h - r2);
    ctx.arcTo(x + w, y + h, x + w - r2, y + h, r2);
    ctx.lineTo(x + r2, y + h);
    ctx.arcTo(x, y + h, x, y + h - r2, r2);
    ctx.closePath();
    ctx.fillStyle = CARD.panel;
    ctx.fill();
    ctx.strokeStyle = "rgba(185, 134, 60, .35)";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.clip();

    var base = y + h - 52;

    ctx.beginPath();
    ctx.ellipse(x + w * 0.52, base + 12, w * 0.4, 11, 0, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(43, 33, 25, .07)";
    ctx.fill();

    var gx0 = x + 46;
    var gx1 = x + w - 46;
    var gy = y + 64;
    var ctrlX = (gx0 + gx1) / 2;
    var ctrlY = gy + 78;

    ctx.strokeStyle = "#ddcdae";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(gx0, gy);
    ctx.quadraticCurveTo(ctrlX, ctrlY, gx1, gy);
    ctx.stroke();

    for (var i = 0; i <= 12; i++) {
      var t = i / 12;
      var bx2 = quadCoord(gx0, ctrlX, gx1, t);
      var by2 = quadCoord(gy, ctrlY, gy, t);
      ctx.beginPath();
      ctx.arc(bx2, by2 + 6, 5.5, 0, Math.PI * 2);
      ctx.fillStyle = "#c9a86a";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(bx2, by2 + 6, 2, 0, Math.PI * 2);
      ctx.fillStyle = "#a8834a";
      ctx.fill();
    }

    var cx = x + w - 118;

    ctx.fillStyle = "#7a5a34";
    ctx.fillRect(cx - 17, base - 10, 34, 20);

    function treeLayer(apexY, half, height) {
      ctx.beginPath();
      ctx.moveTo(cx, apexY);
      ctx.lineTo(cx + half, apexY + height);
      ctx.lineTo(cx - half, apexY + height);
      ctx.closePath();
      ctx.fill();
    }

    ctx.fillStyle = CARD.tree;
    treeLayer(base - 268, 148, 268);
    treeLayer(base - 222, 118, 222);
    treeLayer(base - 176, 88, 176);

    var tier = state.mood >= 110 ? 3 : (state.mood >= 65 ? 2 : 1);

    var bulbs = [
      [-100, -30], [-52, -46], [-4, -34], [56, -48], [96, -30],
      [-72, -92], [-24, -84], [36, -98], [78, -86],
      [-48, -146], [10, -136], [54, -152],
      [-20, -196], [22, -206],
      [0, -244]
    ];

    var picked;
    if (tier === 3) {
      picked = bulbs;
    } else if (tier === 2) {
      picked = bulbs.filter(function (o, i) { return i % 2 === 0; });
    } else {
      picked = [bulbs[2], bulbs[8], bulbs[12]];
    }

    var bulbSize = tier === 3 ? 7 : (tier === 2 ? 6 : 5);

    picked.forEach(function (o, idx) {
      ctx.beginPath();
      ctx.arc(cx + o[0], base + o[1], bulbSize, 0, Math.PI * 2);
      ctx.fillStyle = idx % 3 === 0 ? "#c9a25a" : (idx % 3 === 1 ? "#8d2a40" : "#e8d9b4");
      ctx.fill();
    });

    if (tier === 3) {
      [
        [-60, 104, 10],
        [-130, 66, 8],
        [-190, 34, 6]
      ].forEach(function (row) {
        var rowY = base + row[0];
        var half = row[1];
        var steps = row[2];
        for (var i = 0; i <= steps; i++) {
          var t = i / steps;
          ctx.beginPath();
          ctx.arc(cx - half + 2 * half * t, rowY + Math.sin(t * Math.PI) * 5, 2.4, 0, Math.PI * 2);
          ctx.fillStyle = "#e3c795";
          ctx.fill();
        }
      });
    }

    var starR = tier === 3 ? 26 : (tier === 2 ? 22 : 18);

    if (tier === 3) {
      var glow = ctx.createRadialGradient(cx, base - 300, 4, cx, base - 300, 48);
      glow.addColorStop(0, "rgba(201, 162, 90, .5)");
      glow.addColorStop(1, "rgba(201, 162, 90, 0)");
      ctx.beginPath();
      ctx.arc(cx, base - 300, 48, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();
    }

    starPath(ctx, cx, base - 300, starR);
    ctx.fillStyle = "#c9a25a";
    ctx.fill();

    var boxW = 132;
    var boxH = 84;
    var bx = cx - 200;
    var by = base - boxH;

    cardPath(ctx, bx - 8, by - 26, boxW + 16, 28, 6);
    ctx.fillStyle = "#f6ebcd";
    ctx.fill();
    ctx.strokeStyle = "#cbb78f";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    cardPath(ctx, bx, by, boxW, boxH, 6);
    ctx.fillStyle = "#efe0bd";
    ctx.fill();
    ctx.strokeStyle = "#cbb78f";
    ctx.stroke();

    ctx.fillStyle = "#8d2a40";
    ctx.fillRect(bx + boxW / 2 - 9, by - 26, 18, boxH + 26);

    ctx.strokeStyle = "#8d2a40";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(bx + boxW / 2 - 9, by - 30, 10, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(bx + boxW / 2 + 9, by - 30, 10, 0, Math.PI * 2);
    ctx.stroke();

    cardPath(ctx, bx + boxW + 4, by + 16, 74, 26, 4);
    ctx.fillStyle = CARD.panel;
    ctx.fill();
    ctx.strokeStyle = "#cbb78f";
    ctx.lineWidth = 1.2;
    ctx.stroke();
    ctx.fillStyle = "#7a6a58";
    ctx.font = "italic 500 15px Georgia, 'Times New Roman', serif";
    ctx.textAlign = "center";
    ctx.fillText("Юле", bx + boxW + 41, by + 34);
    ctx.textAlign = "left";

    var chairX = x + 30;
    var chairTop = base - 158;

    ctx.strokeStyle = "#b08a5c";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.rect(chairX, chairTop, 64, 128);
    ctx.stroke();

    for (var c = 1; c <= 4; c++) {
      var sx = chairX + (64 / 5) * c;
      ctx.beginPath();
      ctx.moveTo(sx, chairTop + 6);
      ctx.lineTo(sx, chairTop + 122);
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.moveTo(chairX - 10, chairTop + 128);
    ctx.lineTo(chairX + 74, chairTop + 128);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(chairX - 4, chairTop + 128);
    ctx.lineTo(chairX - 6, base);
    ctx.moveTo(chairX + 68, chairTop + 128);
    ctx.lineTo(chairX + 70, base);
    ctx.stroke();

    ctx.restore();
  }

  function drawCardFooter(ctx) {
    var title =
      state.choice === "trip" ? "Едем к Юле" :
      state.choice === "courier" ? "Подарок доставят через месяц" :
      "Подарок через год";

    ctx.fillStyle = CARD.wineDeep;
    ctx.textAlign = "left";

    var size = 74;
    ctx.font = "600 " + size + "px Georgia, 'Times New Roman', serif";
    while (size > 50 && ctx.measureText(title).width > 920) {
      size -= 2;
      ctx.font = "600 " + size + "px Georgia, 'Times New Roman', serif";
    }
    ctx.fillText(title, 80, 946);

    ctx.fillStyle = CARD.soft;
    ctx.font = "400 22px 'Golos Text', system-ui, sans-serif";
    ctx.fillText(GUESTS.map(function (g) { return g.name; }).join(" · "), 80, 984);
  }

  function drawCard() {
    if (!el.cardCanvas) return;
    var ctx = el.cardCanvas.getContext("2d");
    var size = CARD.size;

    ctx.clearRect(0, 0, size, size);
    ctx.fillStyle = CARD.cream;
    ctx.fillRect(0, 0, size, size);

    ctx.fillStyle = "rgba(201, 179, 148, .5)";
    [
      [182, 252], [302, 524], [252, 902], [556, 118],
      [642, 942], [1012, 520], [978, 900], [118, 700]
    ].forEach(function (p) {
      ctx.beginPath();
      ctx.arc(p[0], p[1], 3, 0, Math.PI * 2);
      ctx.fill();
    });

    cardPath(ctx, 32, 32, size - 64, size - 64, 26);
    ctx.strokeStyle = CARD.line;
    ctx.lineWidth = 2;
    ctx.stroke();

    drawCardHeader(ctx);
    drawCardStats(ctx);
    drawCardScene(ctx, 568, 180, 432, 640);
    drawCardFooter(ctx);
  }

  function downloadCard(blob, name) {
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 5000);
  }

  function cardFileName() {
    return "podarok-s-podvohom-" + state.mood + ".png";
  }

  function isCoarsePointer() {
    return !!(window.matchMedia && window.matchMedia("(pointer: coarse)").matches);
  }

  function buildCardData() {
    if (!el.cardCanvas) return null;

    try {
      drawCard();
      var dataUrl = el.cardCanvas.toDataURL("image/png");
      var binary = atob(dataUrl.slice(dataUrl.indexOf(",") + 1));
      var bytes = new Uint8Array(binary.length);
      for (var i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);

      var blob = new Blob([bytes], { type: "image/png" });
      var file = null;
      try {
        file = new File([blob], cardFileName(), { type: "image/png" });
      } catch (err) {
        file = null;
      }

      return { blob: blob, file: file };
    } catch (err) {
      return null;
    }
  }

  function openCardImage(blob) {
    var url = URL.createObjectURL(blob);
    var opened = window.open(url, "_blank");
    if (!opened) downloadCard(blob, cardFileName());
    setTimeout(function () { URL.revokeObjectURL(url); }, 60000);
  }

  function fallbackCard(blob, name) {
    if (!blob) return;
    if (isCoarsePointer()) {
      openCardImage(blob);
      return;
    }
    downloadCard(blob, name);
  }

  function shareOnlyLink(blob, name) {
    navigator.share({
      text: "Мой новогодний вечер: " + state.mood + " из " + MAX_MOOD,
      url: location.href
    }).catch(function (err) {
      if (err && err.name === "AbortError") return;
      fallbackCard(blob, name);
    });
  }

  function shareWith(data) {
    var name = cardFileName();

    if (typeof navigator.share !== "function") {
      fallbackCard(data.blob, name);
      return;
    }

    var canFiles = false;
    if (data.file && typeof navigator.canShare === "function") {
      try {
        canFiles = navigator.canShare({ files: [data.file] });
      } catch (err) {
        canFiles = false;
      }
    }

    if (canFiles) {
      navigator.share({ files: [data.file] }).catch(function (err) {
        if (err && err.name === "AbortError") return;
        fallbackCard(data.blob, name);
      });
      return;
    }

    shareOnlyLink(data.blob, name);
  }

  function shareCard() {
    var data = buildCardData();
    if (!data) return;
    shareWith(data);
  }

  function showFinal() {
    stopVoices();
    stopAllSound();
    callSpeaker = "";
    var choice = state.choice;
    var title;
    var line;

    if (choice === "trip") {
      title = "Едем к Юле";
      line = "По лесам, по полям мы с подарком едем к Вам! Ничего на свете лучше нету, чем бродить друзьям по белу свету! Подарок доедет — в этот раз вместе с вами.";
    } else if (choice === "courier") {
      title = "Подарок доставят через месяц";
      line = "Курьерская служба не работает в новогодние праздники. Подарок Юля получит только через месяц. Зато вечер удался — и это оказалось важнее.";
    } else {
      title = "Подарок через год";
      line = "Коробку убрали в шкаф — до следующего года. Юля видела её по камере и сказала, что заберёт на следующий Новый год. Кажется, не шутила. Подарок остался здесь. Зато вечер удался — и это оказалось важнее.";
    }

    el.finalKicker.textContent = "00:20 · конец вечера";
    el.finalTitle.textContent = title;
    el.finalText.textContent = line;
    el.finalMood.textContent = state.mood;
    drawCard();

    el.yuliaOverlay.classList.remove("is-open");
    setTimeout(function () {
      el.yuliaOverlay.hidden = true;
    }, 300);

    el.finalOverlay.hidden = false;
    el.finalOverlay.classList.add("is-open");
  }

  function reset() {
    state.started = true;
    state.busy = false;
    state.index = 0;
    state.mood = 30;
    state.mistakes = 0;
    state.missed = false;
    state.firstTry = 0;
    state.penalized = {};
    state.selected = null;
    state.solved = false;
    state.choice = null;
    state.advancing = false;
    clearTimeout(watchdog);

    stopRing();
    stopVoices();
    callSpeaker = "";
    clearTimeout(callWatchdog);
    el.yuliaPlayer.pause();
    el.yuliaPlayer.removeAttribute("src");
    el.yuliaPlayer.load();
    el.callLine.hidden = true;
    el.callLineText.textContent = "";
    delete el.callLine.dataset.speaker;
    el.yuliaChoice.hidden = false;
    el.yuliaCall.hidden = true;
    el.yuliaVideo.hidden = true;
    el.yuliaOverlay.classList.remove("is-open");
    el.yuliaOverlay.hidden = true;

    el.finalOverlay.classList.remove("is-open");
    el.finalOverlay.hidden = true;
    el.stage.classList.remove("is-switching");

    updateMood();
    renderRound();
    playClip(GUESTS[0].id, "neutral", { loop: true });

    stopAllSound();
    startAmbient();
  }

  function start() {
    el.startOverlay.classList.remove("is-open");
    el.startOverlay.hidden = true;
    reset();
  }

  el.startBtn.addEventListener("click", start);
  el.restartBtn.addEventListener("click", reset);
  if (el.shareBtn) el.shareBtn.addEventListener("click", shareCard);

  el.stage.addEventListener("click", function () {
    if (state.selected) {
      giveGift(state.selected);
    } else if (state.started && !state.solved) {
      el.bagHint.textContent = "Сначала возьми подарок из мешка.";
    }
  });

  el.stage.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    e.preventDefault();
    if (state.selected) giveGift(state.selected);
    else el.bagHint.textContent = "Сначала возьми подарок из мешка.";
  });

  el.yuliaChoice.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest(".choice") : null;
    if (!btn) return;
    chooseYulia(btn.dataset.choice, btn);
  });

  el.answerBtn.addEventListener("click", answerCall);
  el.yuliaPlayer.addEventListener("timeupdate", updateCallLine);

  buildSnow();
  buildGarland();
  buildDots();
  updateMood();
})();
