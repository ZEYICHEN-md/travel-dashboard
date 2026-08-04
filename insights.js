// ============================================================
// 旅游看板洞察投影 — 请勿手改权威副本
// 权威：data_source/canonical/travel-insights.json
// 重新生成：node scripts/generate_insights_js.js
// ============================================================

const INSIGHTS = {
  "meta": {
    "basedOnTravelJsonUpdatedAt": "2026-07-28",
    "confirmedAt": {
      "weekly": "2026-08-04",
      "monthly": "2026-08-04",
      "quarterly": "2026-08-04"
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
        "title": "客运量连续两周同比转正",
        "body": "7/12-7/25 国内航空客运量同比均约 <span class=\"num-highlight\">+6.0%</span>，客运航班量约 <span class=\"num-highlight\">+3.0%</span>。暑期开学偏晚，客流在 7 月中下旬集中释放；能否延续到 8 月，仍待后续周度验证。",
        "refs": [
          "weekly.aviationPax@7/12-7/18",
          "weekly.aviationPax@7/19-7/25",
          "weekly.aviationFlight@7/19-7/25"
        ]
      },
      {
        "tag": "risk",
        "title": "客运回暖、票价仍承压",
        "body": "同两周机票票价同比约 <span class=\"num-highlight\">-7.0%</span>、<span class=\"num-highlight\">-6.0%</span>，与客运量形成鲜明反差。客流起来后定价依旧偏弱，收益修复尚不清晰。",
        "refs": [
          "weekly.aviationTicket@7/12-7/18",
          "weekly.aviationTicket@7/19-7/25",
          "weekly.aviationPax@7/19-7/25"
        ]
      },
      {
        "tag": "risk",
        "title": "酒店 RevPAR 仍负但收窄",
        "body": "7/19-7/25 RevPAR 同比 <span class=\"num-highlight\">-2.0%</span>，较前一周 <span class=\"num-highlight\">-5.4%</span> 明显收窄（入住率 <span class=\"num-highlight\">-1.2%</span>、ADR <span class=\"num-highlight\">-0.7%</span>）。同比仍为负，关注后续能否延续收窄。",
        "refs": [
          "weekly.hotelRevPAR@7/12-7/18",
          "weekly.hotelRevPAR@7/19-7/25",
          "weekly.hotelOccupancy@7/19-7/25",
          "weekly.hotelADR@7/19-7/25"
        ]
      },
      {
        "tag": "outlook",
        "title": "票价与酒店能否跟上客流",
        "body": "后续关键是客运走强后，票价能否同步修复、酒店降幅能否继续收窄；量强价弱格局尚未打破。",
        "refs": [
          "weekly.aviationPax@7/19-7/25",
          "weekly.aviationTicket@7/19-7/25",
          "weekly.hotelRevPAR@7/19-7/25"
        ]
      }
    ],
    "en": [
      {
        "tag": "highlight",
        "title": "Pax positive two straight weeks",
        "body": "7/12–7/25 domestic air pax was about <span class=\"num-highlight\">+6.0%</span> YoY both weeks, with flights about <span class=\"num-highlight\">+3.0%</span>. The late school break pushed peak traffic into mid/late July; whether it holds into August still needs weekly checks.",
        "refs": [
          "weekly.aviationPax@7/12-7/18",
          "weekly.aviationPax@7/19-7/25",
          "weekly.aviationFlight@7/19-7/25"
        ]
      },
      {
        "tag": "risk",
        "title": "Traffic up, fares still soft",
        "body": "Airfares were about <span class=\"num-highlight\">-7.0%</span> and <span class=\"num-highlight\">-6.0%</span> YoY over the same window — a sharp contrast to positive pax. Pricing stays weak even as volume recovers; revenue repair is still unclear.",
        "refs": [
          "weekly.aviationTicket@7/12-7/18",
          "weekly.aviationTicket@7/19-7/25",
          "weekly.aviationPax@7/19-7/25"
        ]
      },
      {
        "tag": "risk",
        "title": "Hotel RevPAR still negative but narrowing",
        "body": "7/19–7/25 RevPAR was <span class=\"num-highlight\">-2.0%</span> YoY, clearly better than <span class=\"num-highlight\">-5.4%</span> the prior week (occupancy <span class=\"num-highlight\">-1.2%</span>, ADR <span class=\"num-highlight\">-0.7%</span>). Still negative YoY — watch whether the narrowing continues.",
        "refs": [
          "weekly.hotelRevPAR@7/12-7/18",
          "weekly.hotelRevPAR@7/19-7/25",
          "weekly.hotelOccupancy@7/19-7/25",
          "weekly.hotelADR@7/19-7/25"
        ]
      },
      {
        "tag": "outlook",
        "title": "Can fares and hotels follow traffic",
        "body": "The key is whether stronger pax pulls fares and hotel revenue along; the volume-up, price-down mix has not broken yet.",
        "refs": [
          "weekly.aviationPax@7/19-7/25",
          "weekly.aviationTicket@7/19-7/25",
          "weekly.hotelRevPAR@7/19-7/25"
        ]
      }
    ]
  },
  "monthly": {
    "zh": [
      {
        "tag": "risk",
        "title": "国内航空 5–6 月连续走弱",
        "body": "民航局口径 5 月 <span class=\"num-highlight\">-7.8%</span>、6 月 <span class=\"num-highlight\">-7.1%</span>；三大航 6 月约 <span class=\"num-highlight\">-7.8%</span>。Q2 高油价叠加快季末淡季，航司收缩运力是主因；7 月油价回落后能否好转，是下一观察点。",
        "refs": [
          "monthly.domAviationCAAC@5月",
          "monthly.domAviationCAAC@6月",
          "monthly.domAviationBig3@6月"
        ]
      },
      {
        "tag": "risk",
        "title": "国际运力相对 2019 缺口仍深",
        "body": "运力（vs 2019）5 月 <span class=\"num-highlight\">-15.0%</span>、6 月 <span class=\"num-highlight\">-16.3%</span>；国际客运量 6 月约 <span class=\"num-highlight\">-2.0%</span>。缺口持续存在，恢复偏慢；关注国际增班与入境需求转化。",
        "refs": [
          "monthly.intlCapacity@5月",
          "monthly.intlCapacity@6月",
          "monthly.intlAviationCAAC@6月"
        ]
      },
      {
        "tag": "outlook",
        "title": "7 月月度验证暑期走势",
        "body": "酒店 6 月 RevPAR 约 <span class=\"num-highlight\">-0.4%</span>，近乎持平；国内航 5–6 月仍深度走弱。7 月月度数据将检验暑期入住与房价是否在月度层面同步承压。",
        "refs": [
          "monthly.hotelRevPAR@6月",
          "monthly.domAviationCAAC@6月"
        ]
      }
    ],
    "en": [
      {
        "tag": "risk",
        "title": "Domestic air weak in May–Jun",
        "body": "CAAC domestic pax was <span class=\"num-highlight\">-7.8%</span> in May and <span class=\"num-highlight\">-7.1%</span> in June; Big3 June about <span class=\"num-highlight\">-7.8%</span>. Q2 high fuel plus late-season softness led carriers to cut capacity; whether July fuel relief helps is the next watch.",
        "refs": [
          "monthly.domAviationCAAC@5月",
          "monthly.domAviationCAAC@6月",
          "monthly.domAviationBig3@6月"
        ]
      },
      {
        "tag": "risk",
        "title": "Intl capacity gap vs 2019 remains wide",
        "body": "Capacity vs 2019 was <span class=\"num-highlight\">-15.0%</span> in May and <span class=\"num-highlight\">-16.3%</span> in June; intl pax in June about <span class=\"num-highlight\">-2.0%</span>. The shortfall persists; watch intl add-backs and inbound demand conversion.",
        "refs": [
          "monthly.intlCapacity@5月",
          "monthly.intlCapacity@6月",
          "monthly.intlAviationCAAC@6月"
        ]
      },
      {
        "tag": "outlook",
        "title": "July monthly tests summer trend",
        "body": "June hotel RevPAR was about <span class=\"num-highlight\">-0.4%</span> — nearly flat; domestic air stayed deeply negative in May–Jun. July monthly prints will show whether summer occupancy and rates are under pressure at the month level.",
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
        "title": "Q1 国际航线表现偏强",
        "body": "Q1 国际客运量同比约 <span class=\"num-highlight\">+10.3%～+12.8%</span>，运力相对 2019 仍约 <span class=\"num-highlight\">-9.6%</span>。需求修复快于供给补齐，是后续季度的偏强对照。",
        "refs": [
          "quarterly.q1.intlAviationCAAC",
          "quarterly.q1.intlAviationBig3",
          "quarterly.q1.intlCapacity"
        ]
      },
      {
        "tag": "risk",
        "title": "Q2 国内航由正转负",
        "body": "Q2 国内航约 <span class=\"num-highlight\">-5.2%</span>，较 Q1 <span class=\"num-highlight\">+5.5%</span> 回落逾 10 个百分点；三大航 Q2 约 <span class=\"num-highlight\">-6.0%</span>。淡季需求偏弱叠加 5–6 月高油价控运力；铁路 Q2 仍 <span class=\"num-highlight\">+4.6%</span>，难对冲航空转负。",
        "refs": [
          "quarterly.q2.domAviationCAAC",
          "quarterly.q1.domAviationCAAC",
          "quarterly.q2.domAviationBig3",
          "quarterly.q2.railway"
        ]
      },
      {
        "tag": "outlook",
        "title": "Q3 看暑运量价能否同步改善",
        "body": "Q2 国内航已转负，国际运力 vs 2019 约 <span class=\"num-highlight\">-14.0%</span>。Q3 修复与否，取决于 7–8 月量价能否同时改善，不宜由单周回暖外推全季。",
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
        "title": "Q1 intl routes stood out",
        "body": "Q1 intl pax about <span class=\"num-highlight\">+10.3%–+12.8%</span> YoY while capacity vs 2019 still about <span class=\"num-highlight\">-9.6%</span>. Demand recovered faster than supply — a strong benchmark for later quarters.",
        "refs": [
          "quarterly.q1.intlAviationCAAC",
          "quarterly.q1.intlAviationBig3",
          "quarterly.q1.intlCapacity"
        ]
      },
      {
        "tag": "risk",
        "title": "Q2 domestic air turned negative",
        "body": "Q2 domestic air about <span class=\"num-highlight\">-5.2%</span>, down more than 10pp from Q1 <span class=\"num-highlight\">+5.5%</span>; Big3 Q2 about <span class=\"num-highlight\">-6.0%</span>. Soft off-season demand plus May–Jun capacity cuts under high fuel; railway Q2 still <span class=\"num-highlight\">+4.6%</span> did not offset the air swing.",
        "refs": [
          "quarterly.q2.domAviationCAAC",
          "quarterly.q1.domAviationCAAC",
          "quarterly.q2.domAviationBig3",
          "quarterly.q2.railway"
        ]
      },
      {
        "tag": "outlook",
        "title": "Q3 needs volume and price together",
        "body": "Q2 left domestic air negative and intl capacity vs 2019 about <span class=\"num-highlight\">-14.0%</span>. Q3 repair depends on July–August volume and pricing improving together — don’t extrapolate a few warm weeks into a full-quarter recovery.",
        "refs": [
          "quarterly.q2.domAviationCAAC",
          "quarterly.q2.intlCapacity",
          "quarterly.q2.hotelRevPAR"
        ]
      }
    ]
  }
};
