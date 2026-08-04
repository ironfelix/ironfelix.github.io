const payerModels = [
  {
    number: "I",
    name: "Родители",
    pays: "Пакет посещения: полный день, короткая неделя или часы.",
    risk: "Спрос, скидки, возвраты и удержание остаются у сада.",
    cash: "Предоплата помогает оборотному капиталу, но не гарантирует retention.",
    color: "terracotta",
  },
  {
    number: "II",
    name: "Субсидия",
    pays: "Допустимые расходы на подтверждённый контингент.",
    risk: "Ставка, право на выплату, отчётность, DSO и clawback.",
    cash: "Признанная субсидия не равна поступившим деньгам.",
    color: "sage",
  },
  {
    number: "III",
    name: "Работодатель",
    pays: "Компенсация семье, блок мест, объект или management fee.",
    risk: "Передача риска зависит от minimum payment и условий расторжения.",
    cash: "Один спонсор снижает retail-риск, но создаёт концентрацию.",
    color: "amber",
  },
  {
    number: "IV",
    name: "Cost-plus",
    pays: "Допустимый дефицит центра плюс договорное вознаграждение.",
    risk: "Непринятые расходы, cap, кредит спонсора и termination.",
    cash: "Прибыль определяет договор, а не детский CM2.",
    color: "navy",
  },
];

const occupancyInput = document.querySelector('input[aria-label="Загрузка сада"]');
const arpuInput = document.querySelector('input[aria-label="Собранная выручка на ребёнка"]');
const controls = document.querySelectorAll(".control");
const outputs = document.querySelectorAll(".model-output strong");
const resultCard = document.querySelector(".result-card");
const resultStatus = document.querySelector(".result-label span:last-child");
const resultValue = document.querySelector(".result-card > strong");
const resultMargin = document.querySelector(".result-margin b");
const waterfall = document.querySelectorAll(".result-waterfall i");

function rub(value) {
  const formatted = new Intl.NumberFormat("ru-RU", {
    maximumFractionDigits: 0,
  }).format(Math.abs(value));
  return `${value < 0 ? "−" : ""}${formatted} ₽`;
}

function percent(value) {
  return `${value >= 0 ? "+" : "−"}${Math.abs(value)
    .toFixed(1)
    .replace(".", ",")}%`;
}

function updateModel() {
  const occupancy = Number(occupancyInput.value);
  const arpu = Number(arpuInput.value);
  const children = Math.round((60 * occupancy) / 100);
  const revenue = children * arpu;
  const variable = children * 8000;
  const payroll = occupancy >= 85 ? 1200000 : 1020000;
  const fixed = 1050000;
  const ebitda = revenue - variable - payroll - fixed;
  const margin = revenue ? (ebitda / revenue) * 100 : 0;

  controls[0].querySelector("strong").textContent = `${occupancy}%`;
  controls[0].querySelector("i").style.width = `${(occupancy - 50) * 2}%`;
  controls[1].querySelector("strong").textContent = rub(arpu);
  controls[1].querySelector("i").style.width = `${((arpu - 54000) / 12000) * 100}%`;

  outputs[0].textContent = children;
  outputs[1].textContent = rub(revenue);
  outputs[2].textContent = rub(payroll);
  resultValue.textContent = rub(ebitda);
  resultStatus.textContent = ebitda >= 0 ? "выше нуля" : "ниже нуля";
  resultMargin.textContent = percent(margin);
  resultCard.classList.toggle("negative", ebitda < 0);

  [100, (variable / revenue) * 100, (payroll / revenue) * 100, (fixed / revenue) * 100]
    .map((value) => Math.min(value, 100))
    .forEach((value, index) => {
      waterfall[index].style.width = `${value}%`;
    });
}

occupancyInput.addEventListener("input", updateModel);
arpuInput.addEventListener("input", updateModel);

const payerButtons = document.querySelectorAll(".payer-tabs button");
const payerDetail = document.querySelector(".payer-detail");

payerButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const payer = payerModels[index];
    payerButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");

    payerDetail.className = `payer-detail ${payer.color}`;
    payerDetail.querySelector(".payer-number").textContent = payer.number;
    payerDetail.querySelector("h3").textContent = payer.name;
    const values = payerDetail.querySelectorAll("dd");
    values[0].textContent = payer.pays;
    values[1].textContent = payer.risk;
    values[2].textContent = payer.cash;
  });
});

updateModel();
