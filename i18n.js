// Bilingual UI strings for travel dashboard
const I18N = {
  zh: {
    pageTitle: '2026年旅游行业数据看板',
    title: '2026年旅游行业数据看板',
    subtitle: '数据口径：同比2025年变化率 | 来源：STR、民航局、三大航、国铁、航班管家、飞常准',
    downloadAll: '下载全部图表',
    downloadImg: '下载图片',
    tabWeekly: '周度趋势',
    tabMonthly: '月度趋势',
    tabQuarterly: '季度总览',
    weekYoY: '周同比',
    kpiOcc: '酒店入住率（最新周）',
    kpiAdr: '酒店 ADR（最新周）',
    kpiRevpar: '酒店 RevPAR（最新周）',
    kpiPax: '机票客运量（最新周）',
    kpiTicket: '机票票价（最新周）',
    chartWeeklyHotel: '酒店周度指标（入住率 / ADR / RevPAR 同比）',
    chartWeeklyAviation: '航空周度指标（客运量 / 票价 / 航班量 同比）',
    chartMonthlyHotel: '酒店月度指标（入住率 / ADR / RevPAR 同比）',
    chartMonthlyDomAv: '国内航空客运量月度同比（民航局 vs 三大航）',
    chartMonthlyRailway: '铁路客运量月度同比',
    chartMonthlyIntl: '国际航空客运量 & 运力月度同比',
    chartQOverview: 'Q1 各板块同比表现总览',
    chartQTrend: 'Q1 → Q2 月度趋势变化（核心指标同比）',
    chartQCompare: 'Q1 vs Q2 对比（Q2 为 4-5 月均值）',
    sectorHotel: '酒店',
    sectorDomestic: '国内',
    sectorIntl: '国际',
    strSource: 'STR',
    seriesOcc: '入住率',
    seriesAdr: 'ADR',
    seriesRevpar: 'RevPAR',
    seriesPax: '机票客运量',
    seriesTicket: '票价',
    seriesFlight: '客运航班量',
    seriesCaac: '民航局',
    seriesBig3: '三大航',
    seriesRailway: '铁路客运量',
    seriesIntlCaac: '国际客运量（民航局）',
    seriesIntlBig3: '国际客运量（三大航）',
    seriesCapacity: '国际航班运力(vs2019)',
    seriesHotelRev: '酒店 RevPAR',
    seriesDomAv: '国内航空客运量',
    yoyGrowth: '同比增速',
    legendToggleHint: '显示 / 隐藏该指标',
    insightsTitle: '数据洞察与结论',
    footer: '数据来源：STR、民航局、三大航、国铁、航班管家、飞常准',
    prevMonth: '前月',
    vs2019: '航班管家数据',
    crossBorder: '出入境同比',
    railSource: '国铁数据',
    tagHighlight: '亮点',
    tagWatch: '关注',
    tagRisk: '风险',
    tagTrend: '趋势',
    tagOutlook: '展望',
    langBtn: 'EN',
    months: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    insights: [
      { tag: 'highlight', title: '国际航线强劲复苏', body: 'Q1 国际航空客运量同比增速达 <span class="num-highlight">10.3% ~ 12.8%</span>（民航局 / 三大航口径），出入境需求持续释放。但需注意国际航班运力同比 2019 年仍下降 <span class="num-highlight">9.6%</span>，供需缺口仍在，运力恢复滞后于需求。' },
      { tag: 'highlight', title: '铁路客运韧性突出', body: '1-6 月铁路客运量保持正增长，Q1 整体同比 <span class="num-highlight">+5.67%</span>，在航空票价波动背景下，铁路作为性价比出行方式持续吸引客流。' },
      { tag: 'watch', title: '酒店市场量价分化', body: 'Q1 酒店 RevPAR 同比 <span class="num-highlight">+4.8%</span>（ADR 驱动 +3.8%），但周度数据显示 4 月中旬后入住率持续低于去年同期，6 月后 ADR 也开始转负。RevPAR 从 5 月初高点 <span class="num-highlight">+15.2%</span> 回落至 7 月初 <span class="num-highlight">-6.5%</span>，下行趋势明显。' },
      { tag: 'risk', title: '国内航空量价承压', body: '4-5 月国内航空客运量增速转负（民航局口径 5 月 <span class="num-highlight">-7.8%</span>），票价涨幅持续收窄甚至在 6 月下旬转负（<span class="num-highlight">-9%</span>），存在"以价换量"隐忧。' },
      { tag: 'trend', title: 'Q2 开局弱于 Q1', body: '4-5 月多项指标增速放缓甚至转负。五一假期（5/3-5/9 周）酒店 RevPAR 冲高至 <span class="num-highlight">+15.2%</span> 但不可持续，节后迅速回落。铁路增速从 Q1 的 <span class="num-highlight">5.67%</span> 降至 5 月 <span class="num-highlight">1.9%</span>。' },
      { tag: 'outlook', title: '暑期旺季值得期待', body: '6 月铁路客运量企稳（+0.37%），航空客运量降幅收窄。随着 7-8 月暑期旺季到来，旅游出行需求有望迎来季节性反弹，但需关注去年同期高基数效应。' },
    ],
  },
  en: {
    pageTitle: '2026 Travel Industry Dashboard',
    title: '2026 Travel Industry Dashboard',
    subtitle: 'YoY vs 2025 | Sources: STR, CAAC, Big3 airlines, China Railway, VariFlight, VeryZhun',
    downloadAll: 'Download all charts',
    downloadImg: 'Download',
    tabWeekly: 'Weekly',
    tabMonthly: 'Monthly',
    tabQuarterly: 'Quarterly',
    weekYoY: 'WoW YoY',
    kpiOcc: 'Hotel occupancy (latest week)',
    kpiAdr: 'Hotel ADR (latest week)',
    kpiRevpar: 'Hotel RevPAR (latest week)',
    kpiPax: 'Air passengers (latest week)',
    kpiTicket: 'Airfares (latest week)',
    chartWeeklyHotel: 'Weekly hotel metrics (Occupancy / ADR / RevPAR YoY)',
    chartWeeklyAviation: 'Weekly aviation metrics (Pax / Fare / Flights YoY)',
    chartMonthlyHotel: 'Monthly hotel metrics (Occupancy / ADR / RevPAR YoY)',
    chartMonthlyDomAv: 'Domestic air pax monthly YoY (CAAC vs Big3)',
    chartMonthlyRailway: 'Railway pax monthly YoY',
    chartMonthlyIntl: 'International air pax & capacity monthly YoY',
    chartQOverview: 'Q1 sector YoY overview',
    chartQTrend: 'Q1 → Q2 monthly trend (core metrics YoY)',
    chartQCompare: 'Q1 vs Q2 (Q2 = Apr–May average)',
    sectorHotel: 'Hotel',
    sectorDomestic: 'Domestic',
    sectorIntl: 'International',
    strSource: 'STR',
    seriesOcc: 'Occupancy',
    seriesAdr: 'ADR',
    seriesRevpar: 'RevPAR',
    seriesPax: 'Air passengers',
    seriesTicket: 'Airfare',
    seriesFlight: 'Passenger flights',
    seriesCaac: 'CAAC',
    seriesBig3: 'Big3',
    seriesRailway: 'Railway pax',
    seriesIntlCaac: 'Intl pax (CAAC)',
    seriesIntlBig3: 'Intl pax (Big3)',
    seriesCapacity: 'Intl capacity (vs 2019)',
    seriesHotelRev: 'Hotel RevPAR',
    seriesDomAv: 'Domestic air pax',
    yoyGrowth: 'YoY growth',
    legendToggleHint: 'Show / hide this series',
    insightsTitle: 'Insights',
    footer: 'Sources: STR, CAAC, Big3, China Railway, VariFlight, VeryZhun',
    prevMonth: 'Prev',
    vs2019: 'VariFlight',
    crossBorder: 'Cross-border YoY',
    railSource: 'China Railway',
    tagHighlight: 'Highlight',
    tagWatch: 'Watch',
    tagRisk: 'Risk',
    tagTrend: 'Trend',
    tagOutlook: 'Outlook',
    langBtn: '中文',
    months: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    insights: [
      { tag: 'highlight', title: 'International routes rebound strongly', body: 'Q1 international air pax grew <span class="num-highlight">10.3%–12.8%</span> YoY (CAAC / Big3). Capacity vs 2019 is still down <span class="num-highlight">9.6%</span>, so supply recovery lags demand.' },
      { tag: 'highlight', title: 'Rail passenger resilience', body: 'Railway pax stayed positive through Jan–Jun; Q1 overall <span class="num-highlight">+5.67%</span> YoY, attracting value-seeking travelers amid airfare volatility.' },
      { tag: 'watch', title: 'Hotel volume–price divergence', body: 'Q1 hotel RevPAR <span class="num-highlight">+4.8%</span> YoY (ADR-led +3.8%), but weekly data show occupancy below last year after mid-April, with ADR turning negative after June. RevPAR fell from early-May peak <span class="num-highlight">+15.2%</span> to early-July <span class="num-highlight">-6.5%</span>.' },
      { tag: 'risk', title: 'Domestic aviation under pressure', body: 'Apr–May domestic air pax turned negative (CAAC May <span class="num-highlight">-7.8%</span>); fare gains narrowed and turned negative in late June (<span class="num-highlight">-9%</span>), raising “price for volume” concerns.' },
      { tag: 'trend', title: 'Q2 start weaker than Q1', body: 'Apr–May saw slower or negative growth. Labor Day week (5/3–5/9) hotel RevPAR spiked to <span class="num-highlight">+15.2%</span> then faded. Rail growth eased from Q1 <span class="num-highlight">5.67%</span> to May <span class="num-highlight">1.9%</span>.' },
      { tag: 'outlook', title: 'Summer season still promising', body: 'June rail stabilized (+0.37%) and air pax declines narrowed. July–August seasonal demand may rebound, but watch last year’s high base.' },
    ],
  },
};

const LANG_KEY = 'travel_dashboard_lang';
let currentLang = localStorage.getItem(LANG_KEY) || 'zh';

function t(key) {
  const pack = I18N[currentLang] || I18N.zh;
  return pack[key] != null ? pack[key] : (I18N.zh[key] != null ? I18N.zh[key] : key);
}

function monthLabel(raw) {
  const m = String(raw).match(/^(\d{1,2})月$/);
  if (!m) return raw;
  const idx = parseInt(m[1], 10) - 1;
  const months = t('months');
  return months[idx] || raw;
}

function localizeMonths(arr) {
  return arr.map(monthLabel);
}

function fmtPct(v) {
  if (v == null || Number.isNaN(v)) return '—';
  const sign = v >= 0 ? '+' : '';
  return sign + (v * 100).toFixed(1) + '%';
}

function setLang(lang) {
  currentLang = lang === 'en' ? 'en' : 'zh';
  localStorage.setItem(LANG_KEY, currentLang);
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
  applyStaticI18n();
  if (typeof initAll === 'function') initAll();
}

function toggleLang() {
  setLang(currentLang === 'zh' ? 'en' : 'zh');
}

function tagTone(tag) {
  if (tag === 'highlight') return 'positive';
  if (tag === 'risk') return 'negative';
  if (tag === 'outlook') return 'neutral';
  return 'default';
}

function tagText(tag) {
  const map = {
    highlight: 'tagHighlight',
    watch: 'tagWatch',
    risk: 'tagRisk',
    trend: 'tagTrend',
    outlook: 'tagOutlook',
  };
  return t(map[tag] || 'tagWatch');
}

function renderInsights() {
  const root = document.getElementById('insights-body');
  if (!root) return;
  const items = t('insights');
  const order = ['highlight', 'watch', 'risk', 'trend', 'outlook'];
  const groups = {};
  items.forEach(it => {
    if (!groups[it.tag]) groups[it.tag] = [];
    groups[it.tag].push(it);
  });
  root.innerHTML = order.filter(tag => groups[tag] && groups[tag].length).map(tag => {
    const tone = tagTone(tag);
    const points = groups[tag].map(it => `
      <div class="insight-point">
        <div class="insight-point-title">${it.title}</div>
        <div class="insight-point-body">${it.body}</div>
      </div>`).join('');
    return `<div class="insight-group insight-group--${tone}">
      <div class="insight-group-label">${tagText(tag)}</div>
      <div class="insight-points">${points}</div>
    </div>`;
  }).join('');
}

function applyStaticI18n() {
  document.title = t('pageTitle');
  const map = {
    'i18n-title': 'title',
    'i18n-subtitle': 'subtitle',
    'i18n-download-all': 'downloadAll',
    'i18n-tab-weekly': 'tabWeekly',
    'i18n-tab-monthly': 'tabMonthly',
    'i18n-tab-quarterly': 'tabQuarterly',
    'i18n-kpi-occ': 'kpiOcc',
    'i18n-kpi-adr': 'kpiAdr',
    'i18n-kpi-revpar': 'kpiRevpar',
    'i18n-kpi-pax': 'kpiPax',
    'i18n-kpi-ticket': 'kpiTicket',
    'i18n-chart-weekly-hotel': 'chartWeeklyHotel',
    'i18n-chart-weekly-aviation': 'chartWeeklyAviation',
    'i18n-chart-monthly-hotel': 'chartMonthlyHotel',
    'i18n-chart-monthly-dom-av': 'chartMonthlyDomAv',
    'i18n-chart-monthly-railway': 'chartMonthlyRailway',
    'i18n-chart-monthly-intl': 'chartMonthlyIntl',
    'i18n-chart-q-overview': 'chartQOverview',
    'i18n-chart-q-trend': 'chartQTrend',
    'i18n-chart-q-compare': 'chartQCompare',
    'i18n-sector-hotel': 'sectorHotel',
    'i18n-sector-domestic': 'sectorDomestic',
    'i18n-sector-intl': 'sectorIntl',
    'i18n-insights-title': 'insightsTitle',
  };
  Object.keys(map).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = t(map[id]);
  });
  document.querySelectorAll('[data-i18n-download]').forEach(el => {
    el.lastChild && el.childNodes.length
      ? (el.querySelector('.dl-text') || el).textContent && null
      : null;
  });
  document.querySelectorAll('.dl-text').forEach(el => { el.textContent = t('downloadImg'); });
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) langBtn.textContent = t('langBtn');
  const footer = document.getElementById('i18n-footer');
  if (footer && DATA && DATA.meta) {
    footer.textContent = `${t('footer')}  |  ${DATA.meta.dataUpdate || ''}  |  ${DATA.meta.compareBase || ''}`;
  }
  renderInsights();
}
