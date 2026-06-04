const buildingData = {
  b321: {
    title: "مبنى 321",
    name: "مبنى التحضيري",
    image: "building-321.jpg",
    desc: "مبنى مخصص للبرامج التحضيرية والخدمات التعليمية الأساسية.",
    services: [
      "مقهى نافذة القهوة",
      "مقهى نافذة القهوة",
      "مصرف الراجحي",
      "آلة بيع منتجات صيدلية"
    ]
  },

  b322: {
    title: "مبنى 322",
    name: "كلية الاقتصاد واللغة العربية",
    image: "building-322.jpg",
    desc: "يضم مرافق كلية الاقتصاد واللغة العربية والقاعات الدراسية والخدمات الأكاديمية.",
    services: [
      "مقهى نافذة القهوة",
      "مطعم انتي آنز",
      "آلة بيع منتجات صيدلية"
    ]
  },

  b323: {
    title: "مبنى 323",
    name: "كلية الشريعة والعلوم",
    image: "building-323.jpg",
    desc: "يضم مرافق كلية الشريعة والعلوم والخدمات التعليمية المرتبطة بها.",
    services: [
      "مقهى مون",
      "مطعم انتي آنز",
      "مصرف الراجحي",
      "آلة بيع منتجات صيدلية"
    ]
  },

  b324: {
    title: "مبنى 324",
    name: "كلية الحاسب وأصول الدين",
    image: "building-324.jpg",
    desc: "يضم كلية الحاسب وأصول الدين والقاعات والمعامل التعليمية.",
    services: [
      "مقهى مون",
      "مطعم انتي آنز",
      "آلة بيع منتجات صيدلية"
    ]
  },

  b325: {
    title: "مبنى 325",
    name: "كلية الإعلام والعلوم الاجتماعية",
    image: "building-325.jpg",
    desc: "مبنى مخصص لكلية الإعلام والعلوم الاجتماعية ومرافقها التعليمية.",
    services: [
      "مقهى مون",
      "كافتيريا",
      "آلة بيع منتجات صيدلية"
    ]
  },

  b326: {
    title: "مبنى 326",
    name: "كلية الطب واللغات والترجمة",
    image: "building-326.jpg",
    desc: "يضم مرافق كلية الطب واللغات والترجمة والخدمات الأكاديمية.",
    services: [
      "مقهى نافذة للقهوة",
      "مطعم انتي آنز",
      "مصرف الراجحي",
      "آلة بيع منتجات صيدلية"
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

function selectMapBuilding(id) {
  const data = buildingData[id];
  const panel = document.getElementById("mapInfoPanel");

  if (!data || !panel) return;

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

function showSimpleName(name) {
  const panel = document.getElementById("mapInfoPanel");

  if (!panel) return;

  panel.innerHTML = `
    <div class="panel-box">
      <h2>${name}</h2>
      <p>هذه نقطة خدمة داخل الخريطة.</p>
    </div>

    <div class="panel-box">
      <h2>الفعاليات واللقاءات</h2>
      <div class="event-table">
        <div class="event-row">
          <strong>فعالية قريبة</strong>
          <span>سيتم عرض التفاصيل لاحقًا</span>
        </div>
      </div>
    </div>
  `;
}

function highlightService(type) {
  const marker = document.getElementById("serviceMarker");
  if (!marker) return;

  marker.classList.remove("hidden");

  const positions = {
    restaurants: { top: "49%", right: "48%" },
    parking: { top: "19%", right: "6%" }
  };

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