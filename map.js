const buildingData = {
  b321: {
    title: "مبنى 321",
    name: "مبنى التحضيري",
    image: "building-321.jpg",
    desc: "مبنى مخصص للبرامج التحضيرية والخدمات التعليمية الأساسية.",
    services: [
      "مقهى نافذة القهوة - الدور صفر",
      "مصرف الراجحي - الدور صفر",
      "آلة بيع منتجات صيدلية - الدور صفر"
    ]
  },

  b322: {
    title: "مبنى 322",
    name: "كلية الاقتصاد واللغة العربية",
    image: "building-322.jpg",
    desc: "يضم مرافق كلية الاقتصاد واللغة العربية والقاعات الدراسية والخدمات الأكاديمية.",
    services: [
      "مقهى نافذة القهوة - الدور صفر",
      "مطعم انتي آنز - الدور صفر",
      "آلة بيع منتجات صيدلية - الدور صفر"
    ]
  },

  b323: {
    title: "مبنى 323",
    name: "كلية الشريعة والعلوم",
    image: "building-323.jpg",
    desc: "يضم مرافق كلية الشريعة والعلوم والخدمات التعليمية المرتبطة بها.",
    services: [
      "مقهى مون - الدور صفر",
      "مطعم انتي آنز - الدور صفر",
      "مصرف الراجحي - الدور صفر",
      "آلة بيع منتجات صيدلية - الدور صفر"
    ]
  },

  b324: {
    title: "مبنى 324",
    name: "كلية الحاسب وأصول الدين",
    image: "building-324.jpg",
    desc: "يضم كلية الحاسب وأصول الدين والقاعات والمعامل التعليمية.",
    services: [
      "مقهى مون - الدور صفر",
      "مطعم انتي آنز - الدور صفر",
      "آلة بيع منتجات صيدلية - الدور صفر"
    ]
  },

  b325: {
    title: "مبنى 325",
    name: "كلية الإعلام والعلوم الاجتماعية",
    image: "building-325.jpg",
    desc: "مبنى مخصص لكلية الإعلام والعلوم الاجتماعية ومرافقها التعليمية.",
    services: [
      "مقهى مون - الدور صفر",
      "كافتيريا - الدور صفر",
      "آلة بيع منتجات صيدلية - الدور صفر"
    ]
  },

  b326: {
    title: "مبنى 326",
    name: "كلية الطب واللغات والترجمة",
    image: "building-326.jpg",
    desc: "يضم مرافق كلية الطب واللغات والترجمة والخدمات الأكاديمية.",
    services: [
      "مقهى نافذة للقهوة - الدور صفر",
      "مطعم انتي آنز - الدور صفر",
      "مصرف الراجحي - الدور صفر",
      "آلة بيع منتجات صيدلية - الدور صفر"
    ]
  },

  main: {
    title: "المبنى الرئيسي",
    name: "المبنى الرئيسي",
    image: "main-building.jpg",
    desc: "المبنى المركزي الرئيسي الذي يربط مرافق الجامعة والخدمات الأساسية.",
    services: [
      "مكتبة مدينة الملك عبد الله للطالبات",
      "مبنى العمادة",
      "المبنى الإداري"
    ]
  }
};

const servicePlaces = {
  window321: {
    name: "مقهى نافذة القهوة",
    type: "مقهى",
    place: "مبنى 321",
    floor: "الدور صفر",
    desc: "يقع داخل مبنى 321 ويخدم طالبات المبنى التحضيري."
  },

  window322: {
    name: "مقهى نافذة القهوة",
    type: "مقهى",
    place: "مبنى 322",
    floor: "الدور صفر",
    desc: "يقع داخل مبنى 322 بالقرب من القاعات والخدمات الأساسية."
  },

  window326: {
    name: "مقهى نافذة للقهوة",
    type: "مقهى",
    place: "مبنى 326",
    floor: "الدور صفر",
    desc: "يقع داخل مبنى 326 لخدمة طالبات كلية الطب واللغات والترجمة."
  },

  moon323: {
    name: "مقهى مون",
    type: "مقهى",
    place: "مبنى 323",
    floor: "الدور صفر",
    desc: "يقع داخل مبنى 323 ويخدم كلية الشريعة والعلوم."
  },

  moon324: {
    name: "مقهى مون",
    type: "مقهى",
    place: "مبنى 324",
    floor: "الدور صفر",
    desc: "يقع داخل مبنى 324 بالقرب من مرافق كلية الحاسب وأصول الدين."
  },

  moon325: {
    name: "مقهى مون",
    type: "مقهى",
    place: "مبنى 325",
    floor: "الدور صفر",
    desc: "يقع داخل مبنى 325 ويخدم كلية الإعلام والعلوم الاجتماعية."
  },

  foam: {
    name: "مقهى فووم",
    type: "مقهى",
    place: "الساحة اليسرى",
    floor: "الدور صفر",
    desc: "يقع ضمن منطقة الخدمات في الجهة اليسرى من الخريطة."
  },

  aray: {
    name: "مقهى أراي",
    type: "مقهى",
    place: "الساحة اليسرى",
    floor: "الدور صفر",
    desc: "يقع ضمن منطقة الخدمات في الجهة اليسرى بجانب الخدمات الأخرى."
  },

  artista: {
    name: "مقهى ارتيستا",
    type: "مقهى",
    place: "الساحة اليسرى",
    floor: "الدور صفر",
    desc: "يقع في منطقة الخدمات اليسرى داخل الحرم الجامعي."
  },

  blackStamp: {
    name: "بلاك ستامب",
    type: "مقهى",
    place: "الساحة اليمنى",
    floor: "الدور صفر",
    desc: "يقع ضمن منطقة الخدمات في الجهة اليمنى من الخريطة."
  },

  persik: {
    name: "مقهى برسِك",
    type: "مقهى",
    place: "الساحة اليمنى",
    floor: "الدور صفر",
    desc: "يقع في منطقة الخدمات اليمنى بجانب عدد من المطاعم والمحال."
  },

  floted: {
    name: "فلوتيد",
    type: "مقهى",
    place: "الساحة اليمنى",
    floor: "الدور صفر",
    desc: "يقع في منطقة الخدمات اليمنى داخل الحرم الجامعي."
  },

  auntie322: {
    name: "مطعم انتي آنز",
    type: "كافيهات ومطاعم",
    place: "مبنى 322",
    floor: "الدور صفر",
    desc: "يقع داخل مبنى 322 ويقدم خدمات الوجبات الخفيفة."
  },

  auntie323: {
    name: "مطعم انتي آنز",
    type: "كافيهات ومطاعم",
    place: "مبنى 323",
    floor: "الدور صفر",
    desc: "يقع داخل مبنى 323 بالقرب من مرافق كلية الشريعة والعلوم."
  },

  auntie324: {
    name: "مطعم انتي آنز",
    type: "كافيهات ومطاعم",
    place: "مبنى 324",
    floor: "الدور صفر",
    desc: "يقع داخل مبنى 324 لخدمة طالبات كلية الحاسب وأصول الدين."
  },

  auntie326: {
    name: "مطعم انتي آنز",
    type: "كافيهات ومطاعم",
    place: "مبنى 326",
    floor: "الدور صفر",
    desc: "يقع داخل مبنى 326 في الدور صفر."
  },

  mntfsha: {
    name: "مطعم منتفشه",
    type: "كافيهات ومطاعم",
    place: "الساحة اليسرى",
    floor: "الدور صفر",
    desc: "يقع ضمن منطقة الخدمات في الجهة اليسرى."
  },

  ajina: {
    name: "مطعم عجينة بوشيه",
    type: "كافيهات ومطاعم",
    place: "الساحة اليمنى",
    floor: "الدور صفر",
    desc: "يقع ضمن منطقة الخدمات في الجهة اليمنى."
  },

  mosaga: {
    name: "مطعم مصقع وسلطة",
    type: "كافيهات ومطاعم",
    place: "الساحة اليمنى",
    floor: "الدور صفر",
    desc: "يقع ضمن منطقة الخدمات اليمنى بجانب المقاهي والمحال."
  },

  rajhi321: {
    name: "مصرف الراجحي",
    type: "مصرف",
    place: "مبنى 321",
    floor: "الدور صفر",
    desc: "يقع داخل مبنى 321 لتسهيل الخدمات البنكية."
  },

  rajhi323: {
    name: "مصرف الراجحي",
    type: "مصرف",
    place: "مبنى 323",
    floor: "الدور صفر",
    desc: "يقع داخل مبنى 323 بالقرب من مرافق كلية الشريعة والعلوم."
  },

  rajhi326: {
    name: "مصرف الراجحي",
    type: "مصرف",
    place: "مبنى 326",
    floor: "الدور صفر",
    desc: "يقع داخل مبنى 326 لخدمة طالبات الكلية."
  },

  atlas: {
    name: "مكتبة ادلاس",
    type: "مكتبة وطباعة",
    place: "قدام مبنى 321",
    floor: "الدور صفر",
    desc: "تقع مكتبة ادلاس قدام مبنى 321 بجانب بقالة، وتوفر خدمات الطباعة والقرطاسية."
  },

  kingLibrary: {
    name: "مكتبة مدينة الملك عبد الله للطالبات",
    type: "مكتبة",
    place: "المبنى الرئيسي",
    floor: "الدور صفر",
    desc: "مكتبة مركزية داخل المبنى الرئيسي تخدم الطالبات والباحثات."
  }
};

const serviceCategories = {
  cafes: {
    title: "المقاهي",
    desc: "قائمة المقاهي المتوفرة داخل المباني والساحات، وغالبًا تقع في الدور صفر.",
    items: [
      "window321",
      "window322",
      "window326",
      "moon323",
      "moon324",
      "moon325",
      "foam",
      "aray",
      "artista",
      "blackStamp",
      "persik",
      "floted"
    ]
  },

  restaurants: {
    title: "الكافيهات والمطاعم",
    desc: "أماكن المطاعم والكافيهات داخل الجامعة مع توضيح المبنى والدور.",
    items: [
      "auntie322",
      "auntie323",
      "auntie324",
      "auntie326",
      "mntfsha",
      "ajina",
      "mosaga"
    ]
  },

  bank: {
    title: "المصارف",
    desc: "أماكن توفر الخدمات البنكية داخل مباني الجامعة.",
    items: [
      "rajhi321",
      "rajhi323",
      "rajhi326"
    ]
  },

  printing: {
    title: "الطباعة والقرطاسية",
    desc: "أماكن الطباعة والخدمات المكتبية داخل الجامعة.",
    items: [
      "atlas",
    ]
  },

  library: {
    title: "المكتبات",
    desc: "المكتبات ونقاط الخدمات التعليمية داخل الحرم الجامعي.",
    items: [
      "kingLibrary"
    ]
  }
};

function selectMapBuilding(id) {
  const data = buildingData[id];
  const panel = document.getElementById("mapInfoPanel");

  if (!data || !panel) return;

  clearActiveCategory();

  const servicesHtml = data.services
    .map(service => `<li>${service}</li>`)
    .join("");

  panel.innerHTML = `
    <div class="panel-box">
      <h2>${data.title}</h2>
      <h3>${data.name}</h3>

      <div class="building-image-placeholder">
        <img 
          src="${data.image}" 
          alt="${data.name}" 
          onerror="this.style.display='none'; this.parentElement.classList.add('image-missing'); this.parentElement.innerHTML='أضيفي صورة باسم: ${data.image}';"
        >
      </div>

      <p>${data.desc}</p>

      <div class="building-services">
        <h4>الخدمات:</h4>
        <ul>
          ${servicesHtml}
        </ul>
      </div>

      <div class="info-actions">
        <button class="primary" onclick="location.href='index.html#suggestions'">إضافة اقتراح</button>
        <button class="secondary" onclick="location.href='index.html#reports'">إبلاغ عن مشكلة</button>
      </div>
    </div>

    <div class="panel-box">
      <h2>الفعاليات واللقاءات</h2>
      <div class="event-table">
        <div class="event-row">
          <strong>لقاء تعريفي قريب</strong>
          <span>${data.title} · هذا الأسبوع</span>
        </div>

        <div class="event-row">
          <strong>ورشة تطوير مهارات</strong>
          <span>${data.name} · 12:30 م</span>
        </div>
      </div>
    </div>
  `;
}

function showCategory(categoryId) {
  const category = serviceCategories[categoryId];
  const panel = document.getElementById("mapInfoPanel");

  if (!category || !panel) return;

  document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));

  const activeButton = document.querySelector(`.filter-btn[data-category="${categoryId}"]`);
  if (activeButton) activeButton.classList.add("active");

  const cards = category.items.map(key => {
    const item = servicePlaces[key];

    return `
      <div class="service-result-card">
        <span>${item.type}</span>
        <h4>${item.name}</h4>
        <p>${item.place} · ${item.floor}</p>
        <button class="service-details-btn" onclick="showPlaceDetails('${key}')">عرض التفاصيل</button>
      </div>
    `;
  }).join("");

  panel.innerHTML = `
    <div class="panel-box">
      <h2>${category.title}</h2>
      <p>${category.desc}</p>

      <div class="service-result-list">
        ${cards}
      </div>
    </div>
  `;
}

function showPlaceDetails(key) {
  const item = servicePlaces[key];
  const panel = document.getElementById("mapInfoPanel");

  if (!item || !panel) return;

  panel.innerHTML = `
    <div class="panel-box">
      <h2>${item.name}</h2>
      <h3>${item.type}</h3>

      <div class="place-detail-meta">
        <div><strong>الموقع:</strong> ${item.place}</div>
        <div><strong>الدور:</strong> ${item.floor}</div>
      </div>

      <p>${item.desc}</p>

      <div class="info-actions">
        <button class="primary" onclick="location.href='index.html#suggestions'">اقتراح تحسين</button>
        <button class="secondary" onclick="location.href='index.html#reports'">إبلاغ عن مشكلة</button>
      </div>
    </div>
  `;
}

function showSimpleName(name) {
  if (name === "مكتبة ادلاس") {
    showPlaceDetails("atlas");
    return;
  }

  const panel = document.getElementById("mapInfoPanel");

  if (!panel) return;

  panel.innerHTML = `
    <div class="panel-box">
      <h2>${name}</h2>
      <p>هذه نقطة خدمة داخل الخريطة.</p>
    </div>
  `;
}

function clearActiveCategory() {
  document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
}

function highlightService(type) {
  const marker = document.getElementById("serviceMarker");
  if (!marker) return;

  marker.classList.remove("hidden");

  const positions = {
    restaurants: { top: "49%", right: "48%" },
    parking: { top: "19%", right: "6%" }
  };

  if (!positions[type]) return;

  marker.style.top = positions[type].top;
  marker.style.right = positions[type].right;
}

document.addEventListener("DOMContentLoaded", () => {
  const tooltip = document.getElementById("mapTooltip");
  const mapWrapper = document.querySelector(".svg-map-wrapper");

  if (!tooltip || !mapWrapper) return;

  const interactiveItems = document.querySelectorAll(".svg-building, .food-area, .parking-area");

  interactiveItems.forEach(item => {
    item.addEventListener("mousemove", (e) => {
      const name = item.dataset.name || "موقع";

      tooltip.textContent = name;
      tooltip.style.opacity = "1";

      const mapRect = mapWrapper.getBoundingClientRect();

      tooltip.style.left = `${e.clientX - mapRect.left}px`;
      tooltip.style.top = `${e.clientY - mapRect.top}px`;
    });

    item.addEventListener("mouseleave", () => {
      tooltip.style.opacity = "0";
    });
  });
});
