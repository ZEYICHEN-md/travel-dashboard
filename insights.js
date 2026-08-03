// ============================================================
// 旅游看板洞察投影 — 请勿手改权威副本
// 权威：data_source/canonical/travel-insights.json
// 重新生成：node scripts/generate_insights_js.js
// ============================================================

const INSIGHTS = {
  "meta": {
    "basedOnTravelJsonUpdatedAt": "2026-07-28",
    "confirmedAt": {
      "weekly": "2026-08-03",
      "monthly": "2026-08-03",
      "quarterly": "2026-08-03"
    },
    "stale": {
      "weekly": false,
      "monthly": false,
      "quarterly": false
    }
  },
  "weekly": {
    "zh": [
      {
        "tag": "highlight",
        "title": "客运量连续两周同比转正并走强",
        "body": "7/12-7/18、7/19-7/25 国内航空客运量同比均约 <span class=\"num-highlight\">+6.0%</span>，客运航班量约 <span class=\"num-highlight\">+3.0%</span>。券商监测称受中小学放假偏晚影响，暑运客流约在 7 月第二周才同比转正并随后走强，与本表自 7/12 起连续两周转正的节奏一致；另有外部窗口 7/15-7/21（与上述两周部分重叠）旅客运输量同比约 +7.5%。这更像旺季启动偏晚后的阶段性放量，能否延续到 8 月仍需后续周度确认。",
        "refs": [
          "weekly.aviationPax@7/12-7/18",
          "weekly.aviationPax@7/19-7/25",
          "weekly.aviationFlight@7/19-7/25"
        ]
      },
      {
        "tag": "risk",
        "title": "票价仍深负，量增价弱未解",
        "body": "同两周机票票价同比约 <span class=\"num-highlight\">-7.0%</span>、<span class=\"num-highlight\">-6.0%</span>，与客运量转正形成鲜明反差。客流转正之后，券商仍估算国内含油票价同比降近一成，指向量起来后定价依旧承压；行业报道亦称暑运上半段客流改善后票价仍弱于往年同期。收益侧弱于客运量，是否只是旺季前半段的价格竞争，要看后续周度票价能否随客流回升。",
        "refs": [
          "weekly.aviationTicket@7/12-7/18",
          "weekly.aviationTicket@7/19-7/25",
          "weekly.aviationPax@7/19-7/25"
        ]
      },
      {
        "tag": "risk",
        "title": "酒店 RevPAR 仍负，但最新一周收窄",
        "body": "7/12-7/18 国内酒店 RevPAR 同比 <span class=\"num-highlight\">-5.4%</span>（入住率 <span class=\"num-highlight\">-4.2%</span>、ADR <span class=\"num-highlight\">-1.3%</span>）；补数后 7/19-7/25 收窄至 <span class=\"num-highlight\">-2.0%</span>（入住率 <span class=\"num-highlight\">-1.2%</span>、ADR <span class=\"num-highlight\">-0.7%</span>）。两周同比仍为负，但最新一周降幅明显小于前一周。公开监测缺少与 7/19-7/25 完全对齐的外部读数，故不做单周事件归因；后续看收窄能否延续。",
        "refs": [
          "weekly.hotelRevPAR@7/12-7/18",
          "weekly.hotelOccupancy@7/12-7/18",
          "weekly.hotelADR@7/12-7/18",
          "weekly.hotelRevPAR@7/19-7/25",
          "weekly.hotelOccupancy@7/19-7/25",
          "weekly.hotelADR@7/19-7/25"
        ]
      },
      {
        "tag": "outlook",
        "title": "看客流走强后票价与酒店能否跟上",
        "body": "近两周客运量已站上约 <span class=\"num-highlight\">+6%</span>，但同窗口票价仍约 <span class=\"num-highlight\">-6%～-7%</span>；酒店侧 7/19-7/25 RevPAR 虽仍为负（约 <span class=\"num-highlight\">-2.0%</span>），但较 7/12-7/18 的 <span class=\"num-highlight\">-5.4%</span> 已收窄。后续关键是客运量走强能否带动票价同步修复，以及酒店降幅能否继续收窄。",
        "refs": [
          "weekly.aviationPax@7/19-7/25",
          "weekly.aviationTicket@7/19-7/25",
          "weekly.hotelRevPAR@7/19-7/25",
          "weekly.hotelRevPAR@7/12-7/18"
        ]
      }
    ],
    "en": [
      {
        "tag": "highlight",
        "title": "Pax positive two straight weeks and firming",
        "body": "7/12–7/18 and 7/19–7/25 domestic air pax were both about <span class=\"num-highlight\">+6.0%</span> YoY, with passenger flights about <span class=\"num-highlight\">+3.0%</span>. Broker monitoring links the late school break to pax turning YoY positive around the second week of July and then strengthening — consistent with this table’s two positive weeks from 7/12; a partially overlapping external window (7/15–7/21) shows pax about +7.5% YoY. This looks more like a delayed peak-season ramp than a full trend shift; whether it holds into August still needs weekly confirmation.",
        "refs": [
          "weekly.aviationPax@7/12-7/18",
          "weekly.aviationPax@7/19-7/25",
          "weekly.aviationFlight@7/19-7/25"
        ]
      },
      {
        "tag": "risk",
        "title": "Fares still deeply negative; volume–price gap persists",
        "body": "Over the same two weeks, airfares were about <span class=\"num-highlight\">-7.0%</span> and <span class=\"num-highlight\">-6.0%</span> YoY — a sharp contrast to positive pax. After pax turned up, brokers still estimate domestic fares including fuel down nearly 10% YoY, and industry reports say fares stayed softer than last year even as summer traffic improved. Revenue is lagging volume; whether this is only early-peak price competition depends on whether weekly fares recover with traffic.",
        "refs": [
          "weekly.aviationTicket@7/12-7/18",
          "weekly.aviationTicket@7/19-7/25",
          "weekly.aviationPax@7/19-7/25"
        ]
      },
      {
        "tag": "risk",
        "title": "Hotel RevPAR still negative, but latest week narrowed",
        "body": "7/12–7/18 domestic hotel RevPAR was <span class=\"num-highlight\">-5.4%</span> YoY (occupancy <span class=\"num-highlight\">-4.2%</span>, ADR <span class=\"num-highlight\">-1.3%</span>); after the fill, 7/19–7/25 narrowed to <span class=\"num-highlight\">-2.0%</span> (occupancy <span class=\"num-highlight\">-1.2%</span>, ADR <span class=\"num-highlight\">-0.7%</span>). Both weeks are still negative YoY, but the latest week is clearly less weak than the prior one. We lack public monitoring fully aligned to 7/19–7/25 for single-week attribution; watch whether the narrowing continues.",
        "refs": [
          "weekly.hotelRevPAR@7/12-7/18",
          "weekly.hotelOccupancy@7/12-7/18",
          "weekly.hotelADR@7/12-7/18",
          "weekly.hotelRevPAR@7/19-7/25",
          "weekly.hotelOccupancy@7/19-7/25",
          "weekly.hotelADR@7/19-7/25"
        ]
      },
      {
        "tag": "outlook",
        "title": "Whether stronger pax lifts fares and hotels",
        "body": "Recent weeks show pax about <span class=\"num-highlight\">+6%</span>, but fares still about <span class=\"num-highlight\">-6% to -7%</span> in the same window; hotel RevPAR for 7/19–7/25 is still negative (about <span class=\"num-highlight\">-2.0%</span>) but improved from <span class=\"num-highlight\">-5.4%</span> on 7/12–7/18. The key is whether stronger traffic pulls fares and hotel revenue along, and whether hotel declines keep narrowing.",
        "refs": [
          "weekly.aviationPax@7/19-7/25",
          "weekly.aviationTicket@7/19-7/25",
          "weekly.hotelRevPAR@7/19-7/25",
          "weekly.hotelRevPAR@7/12-7/18"
        ]
      }
    ]
  },
  "monthly": {
    "zh": [
      {
        "tag": "risk",
        "title": "国内航空 5–6 月连续深负",
        "body": "民航局口径国内客运量 5 月同比 <span class=\"num-highlight\">-7.8%</span>、6 月 <span class=\"num-highlight\">-7.1%</span>；三大航 6 月约 <span class=\"num-highlight\">-7.8%</span>。对应时段的行业监测显示：5 月上市航司国内运力投放约同比 -6%，主因是 Q2 高油价下主动收缩低效航班，淡季需求亦偏弱。该成本冲击锚定在 5–6 月；7 月及以后的油价回落属于后续月份，不能用来解释本条的 5–6 月读数，只能作为下一观察点。",
        "refs": [
          "monthly.domAviationCAAC@5月",
          "monthly.domAviationCAAC@6月",
          "monthly.domAviationBig3@6月"
        ]
      },
      {
        "tag": "risk",
        "title": "国际运力相对 2019 缺口仍深",
        "body": "国际航班运力（vs 2019）5 月 <span class=\"num-highlight\">-15.0%</span>、6 月进一步至 <span class=\"num-highlight\">-16.3%</span>；国际客运量 6 月民航局口径约 <span class=\"num-highlight\">-2.0%</span>。相对 2019 的运力缺口在 5–6 月持续存在，更宜视为结构性恢复不足，而非某一周事件冲击；后续仍看国际增班与入境需求的月度转化。",
        "refs": [
          "monthly.intlCapacity@5月",
          "monthly.intlCapacity@6月",
          "monthly.intlAviationCAAC@6月"
        ]
      },
      {
        "tag": "outlook",
        "title": "酒店 6 月近乎持平，7 月月度是验证点",
        "body": "国内酒店 RevPAR 6 月同比约 <span class=\"num-highlight\">-0.4%</span>，由正转微负；国内航 5–6 月仍深负。6 月月度酒店读数本身接近持平，不能直接等同于 7 月周度酒店走弱；7 月月度公布后，才能核对暑期月度层面的入住与房价是否同步承压。",
        "refs": [
          "monthly.hotelRevPAR@6月",
          "monthly.domAviationCAAC@6月"
        ]
      }
    ],
    "en": [
      {
        "tag": "risk",
        "title": "Domestic air deeply negative in May–Jun",
        "body": "CAAC domestic pax was <span class=\"num-highlight\">-7.8%</span> YoY in May and <span class=\"num-highlight\">-7.1%</span> in June; Big3 June about <span class=\"num-highlight\">-7.8%</span>. Period-aligned monitoring shows listed carriers cut domestic capacity about -6% YoY in May amid Q2 high fuel prices and soft off-season demand. That cost shock is anchored in May–Jun; July fuel relief is a later-month watchpoint, not an explanation for these prints.",
        "refs": [
          "monthly.domAviationCAAC@5月",
          "monthly.domAviationCAAC@6月",
          "monthly.domAviationBig3@6月"
        ]
      },
      {
        "tag": "risk",
        "title": "Intl capacity gap vs 2019 remains wide",
        "body": "Intl capacity (vs 2019) was <span class=\"num-highlight\">-15.0%</span> in May and <span class=\"num-highlight\">-16.3%</span> in June; CAAC intl pax in June about <span class=\"num-highlight\">-2.0%</span>. The vs-2019 capacity shortfall persisted through May–Jun — more structural under-recovery than a one-week shock. Next watch: intl add-backs and inbound demand conversion on monthly data.",
        "refs": [
          "monthly.intlCapacity@5月",
          "monthly.intlCapacity@6月",
          "monthly.intlAviationCAAC@6月"
        ]
      },
      {
        "tag": "outlook",
        "title": "June hotels nearly flat; July monthly is the test",
        "body": "Domestic hotel RevPAR in June was about <span class=\"num-highlight\">-0.4%</span> YoY — barely negative after turning from positive; domestic air stayed deeply negative in May–Jun. June monthly hotels are not the same as July weekly softness; July monthly prints will show whether summer occupancy and rates are under pressure at the month level.",
        "refs": [
          "monthly.hotelRevPAR@6月",
          "monthly.domAviationCAAC@6月"
        ]
      }
    ]
  },
  "quarterly": {
    "zh": [
      {
        "tag": "highlight",
        "title": "Q1 国际航线仍是偏强对照基",
        "body": "Q1 国际航空客运量同比约 <span class=\"num-highlight\">+10.3%～+12.8%</span>（民航局 / 三大航），而国际运力相对 2019 仍约 <span class=\"num-highlight\">-9.6%</span>。上述对比均落在 Q1 数据本身：客运同比已转正、运力相对 2019 仍有缺口，说明该季需求修复快于供给补齐。",
        "refs": [
          "quarterly.q1.intlAviationCAAC",
          "quarterly.q1.intlAviationBig3",
          "quarterly.q1.intlCapacity"
        ]
      },
      {
        "tag": "risk",
        "title": "Q2 国内航由正转负，摆动逾 10 个百分点",
        "body": "Q2 国内航空民航局口径约 <span class=\"num-highlight\">-5.2%</span>，相对 Q1 约 <span class=\"num-highlight\">+5.5%</span> 回落逾 10 个百分点；三大航 Q2 约 <span class=\"num-highlight\">-6.0%</span>。与 Q2 月份对齐的监测指向淡季需求偏弱，以及高油价下航司在 5–6 月收缩运力，属于本季内的成本与需求共振。铁路 Q2 约 <span class=\"num-highlight\">+4.6%</span> 仍为正，但难对冲国内航转负。",
        "refs": [
          "quarterly.q2.domAviationCAAC",
          "quarterly.q1.domAviationCAAC",
          "quarterly.q2.domAviationBig3",
          "quarterly.q2.railway"
        ]
      },
      {
        "tag": "outlook",
        "title": "Q3 关键看暑运量价能否同时改善",
        "body": "就 Q2 已落地数据而言：国内航转负、国际运力相对 2019 约 <span class=\"num-highlight\">-14.0%</span>、酒店 RevPAR 约 <span class=\"num-highlight\">+2.0%</span>。Q3 能否修复取决于 7–8 月量价是否同时改善；在季度均值尚未公布前，不宜用个别周度回暖直接外推为 Q3 全面修复。",
        "refs": [
          "quarterly.q2.domAviationCAAC",
          "quarterly.q2.intlCapacity",
          "quarterly.q2.hotelRevPAR"
        ]
      }
    ],
    "en": [
      {
        "tag": "highlight",
        "title": "Q1 intl routes remain the strong comparison base",
        "body": "Q1 intl air pax about <span class=\"num-highlight\">+10.3%–+12.8%</span> YoY (CAAC / Big3), while intl capacity vs 2019 still about <span class=\"num-highlight\">-9.6%</span>. All within Q1 itself: pax clearly positive YoY while capacity vs 2019 still lags — demand recovered faster than supply caught up that quarter.",
        "refs": [
          "quarterly.q1.intlAviationCAAC",
          "quarterly.q1.intlAviationBig3",
          "quarterly.q1.intlCapacity"
        ]
      },
      {
        "tag": "risk",
        "title": "Q2 domestic air swung negative by >10pp",
        "body": "Q2 domestic air (CAAC) about <span class=\"num-highlight\">-5.2%</span>, down more than 10pp from Q1 about <span class=\"num-highlight\">+5.5%</span>; Big3 Q2 about <span class=\"num-highlight\">-6.0%</span>. Q2-aligned monitoring points to soft off-season demand plus capacity cuts under high fuel in May–Jun — a within-quarter cost and demand mix, not noise. Railway Q2 about <span class=\"num-highlight\">+4.6%</span> stayed positive but did not offset domestic air’s swing.",
        "refs": [
          "quarterly.q2.domAviationCAAC",
          "quarterly.q1.domAviationCAAC",
          "quarterly.q2.domAviationBig3",
          "quarterly.q2.railway"
        ]
      },
      {
        "tag": "outlook",
        "title": "Q3 hinges on summer volume and price together",
        "body": "On Q2 prints already in hand: domestic air negative, intl capacity vs 2019 about <span class=\"num-highlight\">-14.0%</span>, hotel RevPAR about <span class=\"num-highlight\">+2.0%</span>. Whether Q3 repairs depends on July–August volume and pricing improving together; before quarterly averages are out, don’t extrapolate a few warm weekly prints into a full Q3 recovery.",
        "refs": [
          "quarterly.q2.domAviationCAAC",
          "quarterly.q2.intlCapacity",
          "quarterly.q2.hotelRevPAR"
        ]
      }
    ]
  }
};
