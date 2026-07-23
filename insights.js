// ============================================================
// 旅游看板洞察投影 — 请勿手改权威副本
// 权威：data_source/canonical/travel-insights.json
// 重新生成：node scripts/generate_insights_js.js
// ============================================================

const INSIGHTS = {
  "meta": {
    "basedOnTravelJsonUpdatedAt": "2026-07-23",
    "confirmedAt": {
      "weekly": "2026-07-23",
      "monthly": "2026-07-23",
      "quarterly": "2026-07-23"
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
        "tag": "risk",
        "title": "酒店 RevPAR 连续走弱",
        "body": "最新有数周（7/5-7/11）酒店 RevPAR 同比 <span class=\"num-highlight\">-6.5%</span>，入住率 <span class=\"num-highlight\">-4.8%</span>、ADR <span class=\"num-highlight\">-1.8%</span>；前一周（6/28-7/4）RevPAR 也是 <span class=\"num-highlight\">-5.3%</span>。入住率与 ADR 同步为负，RevPAR 走弱并非只由单一分项造成。",
        "refs": [
          "weekly.hotelRevPAR@7/5-7/11",
          "weekly.hotelOccupancy@7/5-7/11",
          "weekly.hotelADR@7/5-7/11",
          "weekly.hotelRevPAR@6/28-7/4"
        ]
      },
      {
        "tag": "risk",
        "title": "机票票价与航班量双弱",
        "body": "7/5-7/11 机票票价同比 <span class=\"num-highlight\">-8.0%</span>，客运航班量 <span class=\"num-highlight\">-4.0%</span>；自 6/21-6/27 起票价已连续三周为负，客运量则回升至约 <span class=\"num-highlight\">-1.0%</span>。近周呈现「客运量降幅收窄、票价与航班量仍偏弱」的组合。",
        "refs": [
          "weekly.aviationTicket@7/5-7/11",
          "weekly.aviationFlight@7/5-7/11",
          "weekly.aviationPax@7/5-7/11",
          "weekly.aviationTicket@6/21-6/27"
        ]
      },
      {
        "tag": "outlook",
        "title": "客运量降幅收窄，暑期仍待确认",
        "body": "客运量同比从 5/31-6/06 的约 <span class=\"num-highlight\">-10%</span> 收窄到近周 <span class=\"num-highlight\">-1%</span>。降幅已明显收窄，但能否在 7 月中下旬稳住，仍需后续周度数据确认。",
        "refs": [
          "weekly.aviationPax@5/31-6/06",
          "weekly.aviationPax@7/5-7/11"
        ]
      }
    ],
    "en": [
      {
        "tag": "risk",
        "title": "Hotel RevPAR keeps softening",
        "body": "Latest week with data (7/5–7/11): hotel RevPAR <span class=\"num-highlight\">-6.5%</span> YoY, occupancy <span class=\"num-highlight\">-4.8%</span>, ADR <span class=\"num-highlight\">-1.8%</span>; prior week (6/28–7/4) RevPAR was also <span class=\"num-highlight\">-5.3%</span>. Both occupancy and ADR were negative, so the RevPAR decline was not driven by a single component alone.",
        "refs": [
          "weekly.hotelRevPAR@7/5-7/11",
          "weekly.hotelOccupancy@7/5-7/11",
          "weekly.hotelADR@7/5-7/11",
          "weekly.hotelRevPAR@6/28-7/4"
        ]
      },
      {
        "tag": "risk",
        "title": "Airfares and flights both weak",
        "body": "7/5–7/11 airfares <span class=\"num-highlight\">-8.0%</span> YoY and passenger flights <span class=\"num-highlight\">-4.0%</span>; fares have been negative for three weeks since 6/21–6/27, while pax improved to about <span class=\"num-highlight\">-1.0%</span>. Recent weeks show narrower pax declines alongside still-soft fares and flight volume.",
        "refs": [
          "weekly.aviationTicket@7/5-7/11",
          "weekly.aviationFlight@7/5-7/11",
          "weekly.aviationPax@7/5-7/11",
          "weekly.aviationTicket@6/21-6/27"
        ]
      },
      {
        "tag": "outlook",
        "title": "Pax decline narrows; summer still TBD",
        "body": "Pax YoY improved from about <span class=\"num-highlight\">-10%</span> (5/31–6/06) to <span class=\"num-highlight\">-1%</span> in the latest week. The narrowing is clear, but whether mid/late-July weekly prints can hold still needs confirmation.",
        "refs": [
          "weekly.aviationPax@5/31-6/06",
          "weekly.aviationPax@7/5-7/11"
        ]
      }
    ]
  },
  "monthly": {
    "zh": [
      {
        "tag": "highlight",
        "title": "铁路客运仍为正，但增速放缓",
        "body": "1–6 月铁路客运量同比持续为正；5 月 <span class=\"num-highlight\">+1.9%</span>，6 月回落到 <span class=\"num-highlight\">+0.4%</span>。正增长仍在，但 5 到 6 月增速已明显放慢。",
        "refs": [
          "monthly.railway@5月",
          "monthly.railway@6月"
        ]
      },
      {
        "tag": "risk",
        "title": "国内航空 5–6 月持续承压",
        "body": "民航局口径国内客运量 5 月同比 <span class=\"num-highlight\">-7.8%</span>，6 月仍为 <span class=\"num-highlight\">-7.1%</span>；三大航 6 月约 <span class=\"num-highlight\">-7.8%</span>（5 月约 -9.3%）。两口径连续两月深度为负，6 月相对 5 月未见明显收窄。",
        "refs": [
          "monthly.domAviationCAAC@5月",
          "monthly.domAviationCAAC@6月",
          "monthly.domAviationBig3@6月"
        ]
      },
      {
        "tag": "risk",
        "title": "国际客运 6 月由正转弱",
        "body": "国际航线客运量（出入境）6 月民航局口径同比 <span class=\"num-highlight\">-2.0%</span>，三大航约 <span class=\"num-highlight\">-0.2%</span>；5 月尚接近持平或小幅为正。国际航班运力（vs 2019）最新仍停在 5 月 <span class=\"num-highlight\">-15.0%</span>，6 月运力读数尚未披露。",
        "refs": [
          "monthly.intlAviationCAAC@6月",
          "monthly.intlAviationBig3@6月",
          "monthly.intlCapacity@5月"
        ]
      },
      {
        "tag": "outlook",
        "title": "酒店 6 月与暑期月度仍是关键观察点",
        "body": "酒店 RevPAR 最新月度仍停在 5 月 <span class=\"num-highlight\">+0.8%</span>；国内航已连续两月深负，国际客运 6 月转弱。酒店 6 月读数尚未公布，是下一步需要优先核对的空缺。",
        "refs": [
          "monthly.hotelRevPAR@5月",
          "monthly.domAviationCAAC@6月",
          "monthly.intlAviationCAAC@6月"
        ]
      }
    ],
    "en": [
      {
        "tag": "highlight",
        "title": "Rail pax still positive, slowing",
        "body": "Railway pax YoY stayed positive through Jan–Jun; May <span class=\"num-highlight\">+1.9%</span>, June <span class=\"num-highlight\">+0.4%</span>. Growth remains positive, but the pace slowed noticeably from May to June.",
        "refs": [
          "monthly.railway@5月",
          "monthly.railway@6月"
        ]
      },
      {
        "tag": "risk",
        "title": "Domestic air pressured in May–Jun",
        "body": "CAAC domestic pax was <span class=\"num-highlight\">-7.8%</span> YoY in May and <span class=\"num-highlight\">-7.1%</span> in June; Big3 June about <span class=\"num-highlight\">-7.8%</span> (May about -9.3%). Both sources were deeply negative for two straight months, with no clear narrowing in June.",
        "refs": [
          "monthly.domAviationCAAC@5月",
          "monthly.domAviationCAAC@6月",
          "monthly.domAviationBig3@6月"
        ]
      },
      {
        "tag": "risk",
        "title": "Intl pax turned weaker in June",
        "body": "Intl route pax (cross-border) was <span class=\"num-highlight\">-2.0%</span> YoY (CAAC) and about <span class=\"num-highlight\">-0.2%</span> (Big3) in June, after near-flat/slightly positive May prints. Intl capacity (vs 2019) is still latest at May <span class=\"num-highlight\">-15.0%</span>; June capacity is not yet disclosed.",
        "refs": [
          "monthly.intlAviationCAAC@6月",
          "monthly.intlAviationBig3@6月",
          "monthly.intlCapacity@5月"
        ]
      },
      {
        "tag": "outlook",
        "title": "Hotel June and summer months are key gaps",
        "body": "Hotel RevPAR is still latest at May <span class=\"num-highlight\">+0.8%</span>; domestic air has been deeply negative for two months and intl pax weakened in June. June hotel RevPAR is not yet published and is the next priority gap to check.",
        "refs": [
          "monthly.hotelRevPAR@5月",
          "monthly.domAviationCAAC@6月",
          "monthly.intlAviationCAAC@6月"
        ]
      }
    ]
  },
  "quarterly": {
    "zh": [
      {
        "tag": "highlight",
        "title": "国际航线 Q1 表现偏强",
        "body": "Q1 国际航空客运量同比约 <span class=\"num-highlight\">+10.3%～+12.8%</span>（民航局 / 三大航）；国际航班运力相对 2019 仍约 <span class=\"num-highlight\">-9.6%</span>。客运同比已转正，运力相对 2019 仍有缺口，两侧恢复进度并不一致。",
        "refs": [
          "quarterly.q1.intlAviationCAAC",
          "quarterly.q1.intlAviationBig3",
          "quarterly.q1.intlCapacity"
        ]
      },
      {
        "tag": "highlight",
        "title": "铁路与酒店 Q1 整体为正",
        "body": "Q1 铁路客运同比约 <span class=\"num-highlight\">+5.7%</span>；酒店 RevPAR 约 <span class=\"num-highlight\">+4.8%</span>（ADR 约 +3.8%）。两端均录得正增长，其中酒店 RevPAR 更多由 ADR 拉动。",
        "refs": [
          "quarterly.q1.railway",
          "quarterly.q1.hotelRevPAR",
          "quarterly.q1.hotelADR"
        ]
      },
      {
        "tag": "risk",
        "title": "Q2 部分指标明显弱于 Q1",
        "body": "Q2 部分均值（4–5 月）国内航空民航局口径约 <span class=\"num-highlight\">-4.0%</span>，低于 Q1 的约 <span class=\"num-highlight\">+5.5%</span>；酒店 RevPAR 部分均值约 <span class=\"num-highlight\">+3.2%</span>，较 Q1 的约 <span class=\"num-highlight\">+4.8%</span> 有所回落。国内航由正转负，是 Q1→Q2 变化里幅度较大的一项。",
        "refs": [
          "quarterly.q2partial.domAviationCAAC",
          "quarterly.q1.domAviationCAAC",
          "quarterly.q2partial.hotelRevPAR",
          "quarterly.q1.hotelRevPAR"
        ]
      },
      {
        "tag": "outlook",
        "title": "暑期旺季能否扭转 Q2 偏弱开局",
        "body": "按已有的 Q2 部分均值，国内航已转负、酒店动能低于 Q1。7–8 月旺季数据出来前，还不宜对下半年节奏下强结论。",
        "refs": [
          "quarterly.q2partial.domAviationCAAC",
          "quarterly.q2partial.hotelRevPAR"
        ]
      }
    ],
    "en": [
      {
        "tag": "highlight",
        "title": "Intl routes strong in Q1",
        "body": "Q1 intl air pax about <span class=\"num-highlight\">+10.3%–+12.8%</span> YoY (CAAC / Big3); capacity vs 2019 still about <span class=\"num-highlight\">-9.6%</span>. Pax turned positive YoY while capacity vs 2019 remained below 2019 — recovery timing differed across the two sides.",
        "refs": [
          "quarterly.q1.intlAviationCAAC",
          "quarterly.q1.intlAviationBig3",
          "quarterly.q1.intlCapacity"
        ]
      },
      {
        "tag": "highlight",
        "title": "Rail and hotels positive in Q1",
        "body": "Q1 railway pax about <span class=\"num-highlight\">+5.7%</span>; hotel RevPAR about <span class=\"num-highlight\">+4.8%</span> (ADR about +3.8%). Both were positive, with hotel RevPAR more ADR-led.",
        "refs": [
          "quarterly.q1.railway",
          "quarterly.q1.hotelRevPAR",
          "quarterly.q1.hotelADR"
        ]
      },
      {
        "tag": "risk",
        "title": "Q2 partial metrics clearly softer than Q1",
        "body": "Q2 partial (Apr–May avg) domestic air (CAAC) about <span class=\"num-highlight\">-4.0%</span>, below Q1 about <span class=\"num-highlight\">+5.5%</span>; hotel RevPAR partial about <span class=\"num-highlight\">+3.2%</span>, down from Q1 about <span class=\"num-highlight\">+4.8%</span>. Domestic air’s swing from positive to negative was one of the larger Q1→Q2 moves.",
        "refs": [
          "quarterly.q2partial.domAviationCAAC",
          "quarterly.q1.domAviationCAAC",
          "quarterly.q2partial.hotelRevPAR",
          "quarterly.q1.hotelRevPAR"
        ]
      },
      {
        "tag": "outlook",
        "title": "Can summer reverse a soft Q2 start",
        "body": "On available Q2 partial averages, domestic air is negative and hotel momentum is below Q1. Before July–August peak-season data arrive, it is still too early to draw firm conclusions on H2 pacing.",
        "refs": [
          "quarterly.q2partial.domAviationCAAC",
          "quarterly.q2partial.hotelRevPAR"
        ]
      }
    ]
  }
};
